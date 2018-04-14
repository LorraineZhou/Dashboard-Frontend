/**
 * Created by zyj on 17/4/5.
 */

var columChartSource;

$(document).ready(function () {

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
});