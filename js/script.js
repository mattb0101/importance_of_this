$(document).ready(function() {
    $(".box").on("click", function() {
            // when we click on element with box class, fire this!
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if($(this).css("background-color") == "rgb(255, 0, 0)") {
            //If object is alread red, turn it black
            $("." + className).css("background-color", "#000");
        } else {
            // Turn all elements with class of box black
            // Then all elements with same class name as
            // clicked element red.
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});

// $(document).ready(function() {
//     $(".box").on("click", function() {
//         var classNames = $(this).attr("class").split(" ");
//         $("." + classNames[1]).css("background-color", "red");
//     });
// });