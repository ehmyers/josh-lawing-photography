/* globals: $ */
var $ = window.$,
    jQuery = window.jQuery;

// shows both the spotlight div and the clicked content
function spotlightShow(content) {
    $(".spotlight").show();
    $("#" + content).show();
}

$(document).ready(function () {
    "use strict";

    // shows the menu on the side
    $(".side_menu").show();

    // expands an image from the launchpad
    $(".launchpad li").click(function () {

        // getting the alt tag
        var content = $(this).attr("data-content"),
            sidemenu = $("#" + content).attr("data-menu");

        console.log("the content is " + content + " from main function");
        console.log("the sidemenu connected to that is " + sidemenu);

        // fades out the grid and in the image selected
        $(".launchpad").hide();
        spotlightShow(content);

        // highlights the corresponding menu item
        $(".menu").children()

    });

    // minimizes photo back to main launchpad
    $(".spotlight").click(function () {
        $(".spotlight").hide();
        $(".launchpad").show();
    });

    // changes what set of images is shown in the launchpad by menu item
    $(".side_menu").click(function () {
        // console.log("You clicked a menu item");

        // fades out content, and photo grid in
        $(".spotlight").hide();
        $(".launchpad").show();
    });

});