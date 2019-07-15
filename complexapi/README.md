I completed the challenge: 5
I feel good about my code: 4
This code started difficult for me because of too many ideas on where to begin. I tried multiple API's before I found two that I could match together. This is what my code does.

Starting from the top*

The event handler listens for the click then runs the following function.
The variable "proxyUrl" is declared within the scope and is assigned the CORS Anywhere URL that will a request on behalf of this application, and add CORS headers to the response.
The variable targetUrl is assigned the Fact Cat API call.
fetch () then calls both API endpoints and then information from the json gets passed into the variable data.
The variable randomIndex then gets assigned Math.random along w/ Math.floor multiple by the elements within the array.
text is then assigned the method encodeURIComponent to convert the string passed in this variable to be encoded as a Uniform Resource Identifier.
The next line then connects to the DOM by the id "catFact" and innerText renders the randomize cat fat onto the DOM.
The .catch statement allows you to define any errors.

An event handler then listens for the "#secondButton" to be click on and then the following function runs.
The variable proxyUrl is declared for the CORS header. The
translateURL is  assigned to the Spanish translator API endpoint. The parameter "text" is passed into the URL to pass in the randomize cat facts.
Fetch calls the translator API then passing in the output into the response parameter.
The final line is statement then executes the data passed into response and displays it on the DOM.
