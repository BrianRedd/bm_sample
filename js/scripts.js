/*--------------------------------------------------------
* Filename: scripts.js
* Description: General scripts for Responsive Vertical Placement Sample

* Author: R. Brian Redd 
--------------------------------------------------------*/

$(document).ready(function() {
    //jQuery Variables
    var $ul = $("header ul"); //ul element within header
    var $con = $(".container"); //container element
    var $con3 = $con.find("#content_3"); //content_3 element

    //Tab Navigation
    $ul.find("li").click(function() {
        //each tab item, when clicked, will become "selected", making appropriate content area visible; all others are non-selected/non-visible
        var target = $(this).attr("id").substr(4);
        $ul.find(".selected").removeClass("selected");
        $ul.find("#tab_" + target).addClass("selected");
        $con.find(".visible").removeClass("visible");
        $con.find("#content_" + target).addClass("visible");
        if (target === "3") { //when opening 3rd Tab (the jQuery one), fire checkSize()
            checkSize();
        }
    })

    //Check Window Size if in 3rd Tab
    function checkSize() {
        if ($(document).width() > 768 && $con3.find(":first-child").hasClass("area_2")) {
            //if doc width is greater than 768 and the first child of content_3 is area_2, move it
            var temp = $con3.find(".area_2");
            $con3.find(".area_2").remove();
            $con3.append(temp);
        } else if ($(document).width() < 769 && $con3.find(":first-child").hasClass("area_1")) {
            //if doc width is less than 769 and the first child of content_3 is area_1, move it
            var temp = $con3.find(".area_1");
            $con3.find(".area_1").remove();
            $con3.append(temp);
        }
    }

    //checkSize() if window resizes, but only if content_3 is visible
    $(window).resize(function() {
        if ($con3.hasClass("visible")) {
            checkSize();
        }
    });

});