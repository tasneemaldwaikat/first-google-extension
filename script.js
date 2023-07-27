// Wait for the DOM content to be loaded before executing the code
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the HTML elements using their IDs
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    // API key and base URL for the currency conversion API
    const apiKey = "6qOMcz8CqwwxeML/IxdcnA==hCVbglCDG1v4moMA";
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";

    // Add a click event listener to the 'Convert Currency' button
    convert.addEventListener('click', () => {
        console.log('convert your currency');

        // Get the amount entered by the user
        const amountTotal = amount.value;
        console.log('Total = ', amountTotal);

        // Get the selected currency from the dropdown
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal;
        console.log('URL', url);

        // Fetch the currency exchange rate from the API
        fetch(url, {
            headers: {
                'X-API-KEY': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            console.log('rate = ', rate);

            // Calculate the converted amount
            const resultPrice = amountTotal * rate;
            console.log('result = ', resultPrice);

            // Display the result on the webpage
            result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
        })
        .catch(error => {
            console.error('Request failed: ', error);
            result.innerHTML = 'An error occurred. Please try again later.';
        });
    });
});
