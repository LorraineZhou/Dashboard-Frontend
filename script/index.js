/**
 * Created by zyj on 17/2/10.
 */

var currentUser;
var userRole;
var buName;
$(document).ready(function() {
    getUserName();
    checkLogin();
    $('#side-menu').metisMenu();

    var iframe = $('iframe')[0];
    iframe.setAttribute('src', "home.html");
    // if(!(window.location.port==80 || window.location.port==8080|| window.location.port=="")) {
    //     window.location.href="http://"+window.location.hostname;
    // }

});

function pageChange(data) {
    $('li').removeClass("active");
    var iframe = $('iframe')[0];
    var href = data.getAttribute('data-href');
    iframe.setAttribute('src', href);
    data.parentElement.classList.add("active");
    if (data.parentElement.parentElement.parentElement.tagName == "LI") {
        data.parentElement.parentElement.parentElement.classList.add("active");
    }
}

function checkLogin() {

    $.ajax({
        type: "GET",
        url: "/em/getCurrentEmail",
        dataType: "json",
        success: function(result) {
            if (result.successed == true) {
               if(result.resultMsg == ''){
                   window.location.href='http://sso.ele.me/sso/login?from='+'test.our.elenet.me:8080';
               }
            }

        }

    });


}


function getUserName() {

    $.ajax({
        type: "GET",
        url: "/em/getCurrentEmployee",
        dataType: "json",
        success: function(result) {
            if (result.successed == true) {
                currentUser=result.resultMsg.employeeName;
                userRole=result.resultMsg.role;
                buName=result.resultMsg.buName;
            }
            $('#currentUser').text(currentUser);
            $('#userRole').text(buName+"-"+userRole);

        }

    });


}

