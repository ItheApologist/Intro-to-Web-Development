# jQuery Methods

[Methods Documentation](https://api.jquery.com/)

> Note: variables were created for running examples. To run, load the HTML page in your favorite web browser, then open the console in said browser and run the variables described below.

## Text

[Text Documentation](https://api.jquery.com/text/)

> Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.

---

`$("h1").text()` returns all the text for all h1's. Since we only have one, this returns one.

> Run `returnText` for example.

`$("li").text()` returns all the text for all li's. Since we have three, a single string is returned, combining the text from all li's into one.

> Run `returnLi` for example.

`$("li").text("testing")` will change the text by inputting new text into our li's. This is very useful because we don't have to write a for loop, jQuery does that for us. 

> Try running `changeLi("testing")` for example.

## HTML

[Text Documentation](https://api.jquery.com/html/)

> Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.

`$("ul").html()` will return all the raw HTML within the given ul. Note that it doesn't return the HTML of the given ul, just what it contains.

> Try running `returnHTML` for example.

`$("ul").html("<li>One new li</li><li>A second new li</li>)` 