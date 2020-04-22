// Function to strike through the list item when clicked on.
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed")
});


// Function to remove list items when the X is clicked on. 
$("ul").on("click", "span", function(i) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    i.stopPropagation()
});

// Adds items to the todo list from text entered in input. It also re-calls the strike and remove functions to update the list. 
$("input").keypress(function(i) {
    if(i.which === 13) {
        var val = $(this).val();
        $(this).val("")
        $("ul").append(`<li><span>X</span> ${val}</li>`);
    }
})