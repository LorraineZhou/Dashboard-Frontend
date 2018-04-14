/**
 * Created by zyj on 17/2/24.
 */
$(document).ready(function() {
    addDayTask();
    addWeekTask();
});
var storyName;
var taskName;
var taskDuration;
var beginDate;
var endDate;
var taskStatus;
var taskColor;
var taskButton;
var taskIcon;
var userName;


function getUserName() {
    var currentUser;
    var userName="";
    var i;
    var j;
    var k;

    $.ajax({
        async: false,
        type: "GET",
        url: "/pmo.api/user/getcurrentuser",
        dataType: "json",
        success: function(result) {
            currentUser=result.email;
            $('#currentUser').text(currentUser);
        }
    });


    var emailAdress=currentUser.split("");
    for(i=0;i<emailAdress.length;i++){
        if (emailAdress[i]=='@'){
            j=i;
        }
    }

    for(k=0;k<j;k++){
        userName+=emailAdress[k];
    }
    return(userName);
}

function addWeekTask() {
    var html;
    userName=getUserName();
    $.ajax({
        type: "GET",
        url: "/pjms.api/issueassignee/assignee/currentWeek/?assignee="+userName+"%40ele.me",
        dataType: "json",
        success: function(result) {
            if (result.success == true) {
                $.each(result.resultMsg, function(i, item) {
                    storyName=item.issueSummary;
                    taskName=item.subTaskSummary;
                    taskDuration=item.duration;
                    beginDate=item.beginDate;
                    endDate=item.endDate;
                    taskStatus=item.status;
                    if (taskStatus=="In Progress"){
                        taskColor='navy-bg';
                        taskButton='btn-primary';
                        taskIcon="fa-briefcase";
                    }
                    else if(taskStatus=="Opened"){
                        taskColor='blue-bg';
                        taskButton='btn-success';
                        taskIcon="fa-file-text";
                    }
                    else{
                        taskColor='lazur-bg';
                        taskButton='btn-info';
                        taskIcon="fa-tasks";
                    }
                    html="";
                    html+='<div class="vertical-timeline-block">'+
                        '<div class="vertical-timeline-icon '+taskColor+'">'+
                        '<i class="fa '+taskIcon+'"></i>'+
                        '</div>'+
                        '<div class="vertical-timeline-content">'+
                        '<h2>'+storyName+'</h2>'+
                        '<p>'+taskName+'</p>'+
                        '<a href="#" class="btn btn-sm '+taskButton+'">'+taskStatus+'</a>'+
                        '<span class="vertical-date">'+taskDuration+'天<br/>'+
                        '<small>'+beginDate+'-'+endDate+'</small>'+
                        '</span>'+
                        '</div>'+
                        '</div>';

                    $('#myWeekTask').append(html);
                });

                if( html == undefined){
                    html="";
                    html+='<h1 class="vertical-timeline-block">本周暂无任务</h1>';
                    $('#myWeekTask').replaceWith(html);
                }
            }
        }
    });


}


function addDayTask() {
    var html;
    userName=getUserName();
    $.ajax({
        type: "GET",
        url: "/pjms.api/issueassignee/assignee/currentDay/?assignee="+userName+"%40ele.me",
        dataType: "json",
        success: function(result) {
            if (result.success == true) {
                $.each(result.resultMsg, function(i, item) {
                    storyName=item.issueSummary;
                    taskName=item.subTaskSummary;
                    taskDuration=item.duration;
                    beginDate=item.beginDate;
                    endDate=item.endDate;
                    taskStatus=item.status;
                    if (taskStatus=="In Progress"){
                        taskColor='navy-bg';
                        taskButton='btn-primary';
                        taskIcon="fa-briefcase";
                    }
                    else if(taskStatus=="Opened"){
                        taskColor='blue-bg';
                        taskButton='btn-success';
                        taskIcon="fa-file-text";
                    }
                    else{
                        taskColor='lazur-bg';
                        taskButton='btn-info';
                        taskIcon="fa-tasks";
                    }
                    html="";
                    html+='<div class="vertical-timeline-block">'+
                        '<div class="vertical-timeline-icon '+taskColor+'">'+
                        '<i class="fa fa-file-text"></i>'+
                        '</div>'+
                        '<div class="vertical-timeline-content">'+
                        '<h2>'+storyName+'</h2>'+
                        '<p>'+taskName+'</p>'+
                        '<a href="#" class="btn btn-sm '+taskButton+'">'+taskStatus+'</a>'+
                        '<span class="vertical-date">'+taskDuration+'天<br/>'+
                        '<small>'+beginDate+'-'+endDate+'</small>'+
                        '</span>'+
                        '</div>'+
                        '</div>';
                    $('#myDayTask').append(html);
                });
                if( html == undefined){
                    html="";
                    html+='<h1 class="vertical-timeline-block">今日暂无任务</h1>';
                    $('#myDayTask').replaceWith(html);
                }

            }
        }
    });


}
