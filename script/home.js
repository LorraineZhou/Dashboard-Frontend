/**
 * Created by zyj on 17/2/10.
 */
$(document).ready(function(){
    <!-- Enable portlets -->
    WinMove();
    selectModule();
    // $('input:checkbox').each(function() {
    //     $(this).attr('checked', true);
    // });
    // $('#checkbox4').attr('checked', false);
    // $('#checkbox3').attr('checked', false);
    $('.widget').each(function () {
        $(this)[0].parentNode.className = "col-lg-4";
    })
    addColum();
    addBar();
    addLine();
    addRadar();
    addPie();
    addHeat();
});



function selectModule() {
    var length=$('input:checkbox').length;
    for(i=1;i<=length;i++){
        if ($('#checkbox'+i).is(':checked')){
            $("#myModule"+i).css("display","block");
        }
        else{
            $("#myModule"+i).css("display","none");
        }
    }

}
function addColum() {
    columChartSource=c3.generate({
        bindto: '#stocked',
        data: {
            columns: [
                ['data1', 0, 1, 0, 1],
                ['data2', 2, 5, 1, 3]
            ],
            names:{
                data1:'我的资源使用情况',
                data2:'本组的资源使用情况'
            },
            colors: {
                data1: '#36506C',
                data2: '#A5DEF1'
            },
            type: 'bar',
            groups: [
                ['data1', 'data2']
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: ['课本', '网络', '杂志','其他']
            }
        }
    });
}

function addBar() {
    new Chartist.Bar('#ct-chart4', {
        labels: ['什么是生态系统？', '生态系统的种类有哪些？', '生态系统的结构？', '什么是食物链？', '气候变化是由什么引起的？', '地球上有多少热带雨林？', '地球上沙漠的面积是多少？','什么是碳水化合物？'],
        series: [
            {   name:'我的目标',
                data:[0, 1, 0, 0, 1, 0, 1,1]},
            {   name:'本组的目标',
                data:[3, 2, 4, 2, 4, 3, 4,2]}
        ]
    }, {

        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 100
        }
    });

}

function addLine() {
    lineChartInterest=c3.generate({
        bindto: '#lineChartInterest',
        data:{
            columns: [
                ['学生A', 8, 7, 10],
                ['学生B', 5, 9, 8],
                ['学生C', 3,6,6],
                ['学生D', 4, 5, 7],
                ['学生E', 6,8,5]
            ],
            // colors:{
            //     学生A: '#1ab394',
            //     学生B: '#BABABA',
            //     学生C: '#1ab399'
            // },
        },
        axis: {
            x: {
                type: 'category',
                categories: ['探索前', '探索中', '探索后']
            }
        },
        tooltip: {
            format: {
                value: function (value, ratio, id) {
                    if (value>=7.5) {return "非常感兴趣-"+value}
                    else if(value>=5){return "比较感兴趣-"+value}
                    else if(value>=2.5){return "一般-"+value}
                    else {return "不感兴趣-"+value};


                }
            }
        }
    });
    lineChartMotion=c3.generate({
        bindto: '#lineChartMotion',
        data:{
            columns: [
                ['学生A', 5, 8,7],
                ['学生B', 4, 5, 5],
                ['学生C', 7,5,3],
                ['学生D', 4, 8, 7],
                ['学生E', 5,7,6]
            ],
            // colors:{
            //     学生A: '#1ab394',
            //     学生B: '#BABABA',
            //     学生C: '#1ab399'
            // },
        },
        axis: {
            x: {
                type: 'category',
                categories: ['探索前', '探索中', '探索后']
            }
        },
        tooltip: {
            format: {
                value: function (value, ratio, id) {
                    if (value>=8) {return "十分兴奋-"+value}
                    else if(value>=6){return "心情愉悦-"+value}
                    else if(value>=4){return "比较开心-"+value}
                    else {return "情绪低落-"+value};


                }
            }
        }
    });


}
function addRadar() {

    var radarData = {
        labels: ["小组成员对于任务的目标定义/时间组织/任务分配方面有分歧", "小组成员的策略方法/学习方式/概念理解不同", "小组成员情绪消极/兴趣不足/信心不足", "探究时间不足","技术使用的障碍","小组成员的积极度/参与度/完成度有差异","小组成员交流障碍/意见冲突"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [5,8,2,3,7,4,6]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [9,2,8,4,7,3,1]
            },
            {
                label: "My third dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [8,2,9,3,2,4,2]
            },
            {
                label: "My forth dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [7,4,5,3,6,9,5]
            },
            {
                label: "My fifth dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [4,6,7,4,5,2,8]
            }
        ]
    };

    var radarOptions = {
        scaleShowLine: true,
        angleShowLineOut: true,
        scaleShowLabels: false,
        scaleBeginAtZero: true,
        angleLineColor: "rgba(0,0,0,.1)",
        angleLineWidth: 1,
        pointLabelFontFamily: "'Arial'",
        pointLabelFontStyle: "normal",
        pointLabelFontSize: 10,
        pointLabelFontColor: "#666",
        pointDot: true,
        pointDotRadius: 3,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive: true,
    }

    var ctx = document.getElementById("radarChart").getContext("2d");
    var myNewChart = new Chart(ctx);
}
function addPie() {
    pieChartWork=c3.generate({
        bindto: '#myPieChartWork',
        data:{
            columns: [
                ['data1', 3,2,4,4,2],
                ['data2', 8,7,5,6,7],
                ['data3', 2,8,7,5,6],
                ['data4', 4,7,5,3,3]
            ],
            names:{
                data1:'事实',
                data2:'问题',
                data3:'解释',
                data4:'证据'
            },
            type : 'pie'
        },
        color:{
            pattern:['#b3ddcc', '#8acdce','#46aace','#3d91be', '#24448e','#1c2b7f']
        }
    });
}
function addHeat() {
    var array_data = [];
// 一句话定义了众多变量， 定义了块儿的位置、宽高、小格子的边长等等与布局有关的变量
    var margin = {top: 50, right: 0, bottom: 100, left: 50},
        width =550- margin.left - margin.right,        // 所有格子区域的宽度，即Heatmap的宽度
        height = 300 - margin.top - margin.bottom,
        gridSize = Math.floor(width / 24),    // 求地板，即去掉小数部分，width分成24份
        legendElementWidth = gridSize * 2,    // 底下长条的长度，是格子边长的两倍
        buckets = 9,        // 一共9种颜色级别
        colors = ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
        // alternatively colorbrewer.YlGnBu[9]
        // days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        //times = ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"];
        tests = ["Mar1", "Mar2", "Mar3", "Mar4", "Mar5", "Mar6", "Mar7", "Mar8", "Mar9", "Mar10", "Mar11", "Mar12", "Mar13", "Mar14", "Mar15", "Mar16", "Mar17", "Mar18", "Mar19", "Mar20"];
// 函数，读取 CSV 文件
    d3.csv("script/stu_post.csv", //function(d) {}, function(error, data) {} );

        // 每一行的数据
        /*function(d) {
         return {
         day: +d.day,
         hour: +d.hour,
         value: +d.value
         };
         },*/

        function (error, data) {
            /*if(error){
             console.log(error);
             }
             console.log(csvdata);*/
            // colorScale：颜色级别
            var colorScale = d3.scale.quantile()        // 按分位数取值，可使每个区域内元素个数相等
                .domain([0, buckets - 1, d3.max(data, function (d) {
                    return d.G;
                })])  // 定义域
                // domain([0, n, 数据的最大值]);
                .range(colors);    // 值域：是颜色数组，函数的返回值是代表某种颜色的字符串

            // 设置chart，svg
            var svg = d3.select("#heatmap").append("svg") // 选择“chart”（就是div），加入一个svg，设置属性跟div一样大
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")    // 在svg内加入一个g（group组），并设置元素g的显示位置
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            // 编辑姓名行
            var dayLabels = svg.selectAll(".nameLabel")
                .data(data)
                .enter()    // 为data中每一项创建一个".dayLabel"
                .append("text")    // 为days中每一项创建一的".dayLabel"添加文本，下面全是设置文本的属性
                // .text('学生A','学生B','学生C','学生D','学生E','学生F','学生G','学生H','学生I','学生J')
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
                        return ((i >= 0 && i <= 4) ? "nameLabel mono axis axis-workweek" : "nameLabel mono axis");
                    }
                );

            // 编辑测试项行
            // var timeLabels = svg.selectAll(".testLabel")
            //     .data(tests)
            //     .enter().append("text")
            //     .text(function (d) {
            //         return d;
            //     })
            //     .attr("x", function (d, i) {
            //         return i * gridSize;
            //     })
            //     .attr("y", 0)
            //     .style("text-anchor", "middle")
            //     .attr("transform", "translate(" + gridSize / 2 + ", -6)")
            //     .attr("class", function (d, i) {
            //             return ((i >= 7 && i <= 16) ? "testLabel mono axis axis-worktime" : "testLabel mono axis");
            //         }
            //     );

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
                .enter()        // 为data中每一项创建一个".hour"
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


        });
}