// Strike-Through to-do items by clicking them
$("li").click(function() {
    $(this).toggleClass("completed")
});