# Attr and Val

## attr

[attr Documentation](https://api.jquery.com/attr/)

> Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

#### Examples

`$("img").attr("src")`

Grabs the source URL from an img tag.

`$("img").attr("src", "https://www.google.com/search?q=bunny&client=ubuntu&hs=Zes&channel=fs&sxsrf=ALeKk00jjmSRCIZZHlC1XNRjzFUWmEGjlg:1587223338932&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiN_a7ao_LoAhV_knIEHc0XCxIQ_AUoAXoECBgQAw&biw=1024&bih=999#imgrc=mZjupDsKHZRQoM")`

Changes the source URL to the one provided.

`$("input").attr("type", "color")`

Changes the type of an input to color.

This also applies to selections that have multiple values without having to write a for loop.

## Val

[val Documentation](https://api.jquery.com/val/)

> Get the current value of the first element in the set of matched elements or set the value of every matched element.

`$("input").val()`

Returns the value inside of an input.

`$("input"),val("Testing")`

Replaces any value in the input with the given value.

This applies to all given elements.