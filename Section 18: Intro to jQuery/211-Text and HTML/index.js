// Returns all text in h1

var returnText = $("h1").text();

// Returns all text in li's

var returnLi = $("li").text();

// Changes all li text with inputted text.

function changeLi(i) {
    $("li").text(i)
}

// Returns all HTML for the given element.

returnHTML = $("ul").html();