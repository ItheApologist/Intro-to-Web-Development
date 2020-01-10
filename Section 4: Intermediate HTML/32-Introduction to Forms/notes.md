
# 32 Introduction to Forms Notes

  

This video talk's about how to get user input via forms on an HTML page.

  

Forms depend on back-end logic to work. Since this has not yet been covered, our example today will only look like a form but not actually function.

  

A form tag is just a shell or container for all the different types of inputs. 

A form tag has two main types of attributes:
	- Action - the URL to send form data to
	- Method - the type of HTTP request

There are also two types of request:
    - Get - This retrieves some kind of data.
    - Post - This sends data to a database.

As an example, a Google request is a Get request while a Facebook sign up page is a Post request. 

The input tag creates interactive controls. The "type" attribute determines the type of input.

For example:

    <html>
        
        <input type="text">
        
        <input type="date">
        
        <input type="color">
        
        <input type="file">
        
        <input type="checkbox">
        
    </html>

