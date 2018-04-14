$(document).ready(function(){


    // Stocked horizontal bar

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
            offset: 200
        }
    });


});