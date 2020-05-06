# JSON and XML Notes

APIs use simple data formats like XML and JSON in order to quickly process data. 

XML, or Extended Markup Language, is syntax-related to HTML without the presentation. An example would be:

```<person>
        <age>21</age>
        <name>Travis</name>
        <city>Los Angeles</city>
    </person>```

JSON, or Javascript Object Notation, looks exactly as Javascript objects but everything is a string. An example would be:

```{
    "person": {
        "age": "21",
        "name": "Travis",
        "city": "Los Angeles"
    }
}```

XML is not as popular as it use to be since the web has moved to using Javascript. Therefor, you will be dealing with JSON mostly.