/**
 * Created by zyj on 17/2/24.
 */

var pieChartWork;
$(document).ready(function() {
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

});

function setGroupChartWork() {
    pieChartWork.load({
        columns: [
            ['data1', 3,2,4,4,2],
            ['data2', 8,7,5,6,7],
            ['data3', 2,8,7,5,6],
            ['data4', 4,7,5,3,3]
        ]
    });
}

function setMyChartWork() {
    pieChartWork.load({
        columns: [
            ['data1', 3],
            ['data2', 8],
            ['data3', 2],
            ['data4', 4],
        ]
    });
}