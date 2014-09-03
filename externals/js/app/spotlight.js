/* globals: $ */
var $ = window.$,
    jQuery = window.jQuery;

function spotlightShow(content) {
    $(".spotlight").show();
    $("#" + content).show();
}

function spotlightHide() {
    $(".spotlight").hide();
    $(".spotlight").children().hide();
}

$(document).ready(function () {
    "use strict";

    // shows the menu on the side
    $(".side_menu").show();

    // on click, change active menu
    // STILL IN TESTING OMG
    // $(".launchpad div").click(function () {
    //     var active_menu = $(this).attr("data-menuid");

    //     console.log("the active_menu is " + active_menu);
    //     active_menu.setAttribute("id", "active");

    //     // highlights proper menu item
    //     //var sidemenuLabel = side_menu.indexOf(sidemenu)
    //     //console.log("the sidemenu label is " + sidemenuLabel);   
    //     //sidemenuLabel.setAttribute("id", "active");
    // });

    // when an image in the launchpad is clicked...
    $(".launchpad li").click(function () {

        // getting the alt tag
        var content = $(this).attr("data-content"),
            sidemenu = $("#" + content).attr("data-menu");

        //console.log("the content is " + content + " from main function");
        //console.log("the sidemenu connected to that is " + sidemenu);

        // fades out the grid and in the image selected
        $(".launchpad").hide();
        spotlightShow(content);
    });

    // when a menu item is clicked...
    $(".side_menu").click(function () {
        // console.log("You clicked a menu item");

        // fades out content, and photo grid in
        spotlightHide();
        $(".launchpad").show();
    });

});