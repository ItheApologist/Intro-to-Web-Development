# jQuery Methods

[Methods Documentation](https://api.jquery.com/)

> Note: variables were created for running examples. To run, load the HTML page in your favorite web browser, then open the console in said browser and run the variables described below.

## Text

> Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.

---

`$("h1").text()` returns all the text for all h1's. Since we only have one, this returns one.

> Run `returnText` for example.

`$("li").text()` returns all the text for all li's. Since we have three, a single string is returned, combining the text from all li's into one.

> Run `returnLi` for example.

We can change the text by inputting new text into our method.

> Try running `changeLi("testing")` for example.