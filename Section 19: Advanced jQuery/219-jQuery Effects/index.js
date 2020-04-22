$("button").on("click", function() {
    $("div").fadeOut("slow", function(){
        $(this).remove();
    });
});

// The above adds a click listener to our button. When clicked, it calls a function to fadeout the div elements. Once those div elements fade out, another function is called that removes all the elements on a page.