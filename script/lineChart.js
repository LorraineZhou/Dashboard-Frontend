/**
 * Created by zyj on 17/2/24.
 */
var lineChartInterest;
var lineChartMotion;
$(document).ready(function () {

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


});

function myInfoInterest() {
    lineChartInterest.hide(['学生B', '学生C','学生D','学生E']);
}

function allInfoInterest() {
    lineChartInterest.show(['学生B', '学生C','学生D','学生E']);
}
function myInfoMotion() {
    lineChartMotion.hide(['学生B', '学生C','学生D','学生E']);
}

function allInfoMotion() {
    lineChartMotion.show(['学生B', '学生C','学生D','学生E']);
}