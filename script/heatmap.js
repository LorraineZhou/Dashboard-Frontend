/**
 * Created by zyj on 17/4/10.
 */
$(document).ready(function() {
    var array_data = [];
    var margin = {top: 50, right: 0, bottom: 100, left: 50},// 定义了众多变量， 定义了块儿的位置、宽高、小格子的边长等等与布局有关的变量
        width = 1200- margin.left - margin.right, // 所有格子区域的宽度，即Heatmap的宽度
        height = 650 - margin.top - margin.bottom,//定义Heatmap高度
        gridSize = Math.floor(width / 24),    // 求地板，即去掉小数部分，width分成24份
        legendElementWidth = gridSize * 2,    // 底下长条的长度，是格子边长的两倍
        buckets = 9,        // 一共9种颜色级别
        colors = ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
        tests = ["Mar1", "Mar2", "Mar3", "Mar4", "Mar5", "Mar6", "Mar7", "Mar8", "Mar9", "Mar10", "Mar11", "Mar12", "Mar13", "Mar14", "Mar15", "Mar16", "Mar17", "Mar18", "Mar19", "Mar20"];
        d3.csv("script/stu_post.csv", // 函数，读取 CSV 文件
        // 每一行的数据
        function (error, data) {
            // colorScale：颜色级别
            var colorScale = d3.scale.quantile() // 按分位数取值，可使每个区域内元素个数相等
                .domain([0, buckets - 1, d3.max(data, function (d) {
                    return d.G;
                })])  // 定义域 domain([0, n, 数据的最大值]);
                .range(colors);    // 值域：是颜色数组，函数的返回值是代表某种颜色的字符串

            // 设置chart，svg
            var svg = d3.select("#heatmap").append("svg") // 选择“chart”（就是div），加入一个svg，设置属性跟div一样大
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")    // 在svg内加入一个g（group组），并设置元素g的显示位置
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            // 编辑姓名行
            var nameLabels = svg.selectAll(".nameLabel")
                .data(data)
                .enter()    // 为data中每一项创建一个".dayLabel"
                .append("text")    // 为days中每一项创建一的".dayLabel"添加文本，下面全是设置文本的属性
                .text( function (d, i) {
                    return data[i].name;
                })
                .attr("x", 0)
                .attr("y", function (d, i) {
                    return i * gridSize;
                })
                .style("text-anchor", "end")
                .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
                .attr("class", function (d, i) {
                        return ( "nameLabel mono axis");
                    }
                );

            // 编辑日期行
            var timeLabels = svg.selectAll(".testLabel")
                .data(tests)
                .enter().append("text")
                .text(function (d) {
                    return d;
                })
                .attr("x", function (d, i) {
                    return i * gridSize;
                })
                .attr("y", 0)
                .style("text-anchor", "middle")
                .attr("transform", "translate(" + gridSize / 2 + ", -6)")
                .attr("class", function (d, i) {
                        return ((i >= 7 && i <= 16) ? "testLabel mono axis axis-worktime" : "testLabel mono axis");
                    }
                );

            // 画出格子，暂不涂色，color[0]
            for (var i = 0; i < 10; i++) {//10行学生
                array_data[i * 20] = data[i].MAR1;
                array_data[i * 20 + 1] = data[i].MAR2;
                array_data[i * 20 + 2] = data[i].MAR3;
                array_data[i * 20 + 3] = data[i].MAR4;
                array_data[i * 20 + 4] = data[i].MAR5;
                array_data[i * 20 + 5] = data[i].MAR6;
                array_data[i * 20 + 6] = data[i].MAR7;
                array_data[i * 20 + 7] = data[i].MAR8;
                array_data[i * 20 + 8] = data[i].MAR9;
                array_data[i * 20 + 9] = data[i].MAR10;
                array_data[i * 20 + 10] = data[i].MAR11;
                array_data[i * 20 + 11] = data[i].MAR12;
                array_data[i * 20 + 12] = data[i].MAR13;
                array_data[i * 20 + 13] = data[i].MAR14;
                array_data[i * 20 + 14] = data[i].MAR15;
                array_data[i * 20 + 15] = data[i].MAR16;
                array_data[i * 20 + 16] = data[i].MAR17;
                array_data[i * 20 + 17] = data[i].MAR18;
                array_data[i * 20 + 18] = data[i].MAR19;
                array_data[i * 20 + 19] = data[i].MAR20;
            }


            var heatMap = svg.selectAll(".score")
                .data(array_data)
                .enter()
                .append("rect")
                .attr("x", function (d, i) {
                    return (i % 20) * gridSize;
                })
                .attr("y", function (d, i) {
                    return parseInt(i / 20) * gridSize;
                })
                .attr("rx", 6)
                .attr("ry", 6)
                .attr("class", "hour bordered")
                .attr("width", gridSize)
                .attr("height", gridSize)
                .style("fill", "#FFFFFF");

            // duration(1000) 在1000ns也就是1s内将格子图上色
            heatMap.transition().duration(1000)
                .style("fill", function (d) {
                    return colorScale(d);
                });

            // 鼠标停留显示value
            heatMap.append("title").text(function (d) {
                return d.G;
            });

            // legend 是一个有7个组的什么东西，，，
            var legend = svg.selectAll(".legend")
                .data([0].concat(colorScale.quantiles()), function (d) {
                    return d;
                })    // 由data获得的元素个数为7
                .enter().append("g")
                .attr("class", "legend");

            legend.append("rect")
                .attr("x", function (d, i) {
                    return legendElementWidth * i;
                })
                .attr("y", height)
                .attr("width", legendElementWidth)
                .attr("height", gridSize / 2)
                .style("fill", function (d, i) {
                    return colors[i];
                });

            legend.append("text")
                .attr("class", "mono")
                .text(
                    function (d) {
                    return ">= " + Math.round(d)+"条帖子";
                })
                .attr("x", function (d, i) {
                    return legendElementWidth * i;
                })
                .attr("y", height + gridSize);
        });

});