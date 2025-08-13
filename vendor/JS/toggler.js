$(function () {
    function runEffect() {
        var selectedEffect = "slide";

        var options = {};

        if (selectedEffect === "slide") {
            options = { direction: "left"};
        }

     $( "#effect" ).toggle( selectedEffect, options, 500);
    };

    $("#button").on("click", function(){
        runEffect();
    });
});
