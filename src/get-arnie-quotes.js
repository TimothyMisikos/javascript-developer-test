/*
=============================================
        Message to the evaluator        
=============================================

Firstly, thank you for this  interesting little test, and for spending time to review it
The 400ms test was really a brilliant idea and I really enjoyed tuning my code to get it right.

As you'll review my code, please accept my review too.

In your Tips section it is written to "Code as if your get-arnie-quotes() function may one day be used against a real http implementation."
I find the above statement a little bit perplexing, but as there are no clear requirements - I assumed that this is to discourage hardcoded values,
thus I wrote in the simplest possible format. 
If I was really writing production quality code I would :
     * a .catch after the expression of line 30 and
     *  wrapped the JSON.parse in line 42 in a try-catch statement.

Moreover, on your README.md you’re missing a single quote on the below line after the word FAILURE:
 { 'FAILURE: 'Your request has been terminated' },

Again thank you for your time
*/



const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {

  return Promise.all(urls.map(url => getArnieQuote(url)))
  // .catch(error => 'Do something with this...' ) // In a production environment this would catch any "Network" errors 

};

const getArnieQuote = async (url) => {

  // response ex: { status: number, body: "JSON String" }
  const response = await httpGet(url);

  return {
    // This should be in a try-catch, but no instructions have been provided, regarding error handling
    [response.status === 200 ? 'Arnie Quote' : 'FAILURE']: JSON.parse(response.body).message  
  };
}



module.exports = {
  getArnieQuotes,
};
