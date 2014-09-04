//on click, change active menu
//STILL IN TESTING OMG
$(".launchpad div").click(function () {
    var new_active_menu = $(this).attr("data-menuid");

    console.log("the new active_menu is " + new_active_menu);
    new_active_menu.setAttribute("id", "active");

    //highlights proper menu item
    var sidemenuLabel = $(".side_menu").indexOf(sidemenu);
    console.log("the sidemenu label is " + sidemenuLabel);   
    sidemenuLabel.setAttribute("id", "active");
});