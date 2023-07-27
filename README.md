# Tasneem's Cash Alchemy
#### Video Demo:  <[URL HERE](https://www.youtube.com/watch?v=GuSti9aj9f0)https://www.youtube.com/watch?v=GuSti9aj9f0>
#### Description:
A simple Google extension made with JavaScript I used html,css,json and API to create this extension. The main feature for this extension is it simple and user-freindly UI
explain codes :
manifest.json  is a manifest file for a browser extension, specifically for Google Chrome extensions that use Manifest Version 3. A manifest file is a configuration file that provides important information about the extension to the browser. Let's break down the key components of this manifest file:

manifest_version: This indicates the version of the manifest format being used. In this case, it's 3, which means the extension is using Manifest Version 3. Manifest Version 3 introduced some changes and improvements over the previous versions.

name: This is the name of the extension. In this case, the extension is named "Tasneem's Cash Alchemy."

description: This field provides a brief description of what the extension does. In this case, it describes the extension as "Convert currencies."

version: The version number of the extension. In this case, the version is set to "1.0."

action: This section defines the main action that the extension performs when triggered. In this case, it seems to be a browser action, which typically includes a clickable icon in the browser's toolbar.

default_icon: Specifies the path to the icon that represents the extension's browser action. In this case, the icon is located at "/images/money-bag.png."

default_popup: Indicates the HTML page that will be displayed in a popup when the user clicks on the extension's browser action. In this case, the popup content is loaded from the "index.html" file.

index.html 
this HTML code creates a simple currency converter interface with an input field, a dropdown menu, a button to trigger the conversion, and a container to display the result. The JavaScript and CSS files linked in the head section will handle the currency conversion functionality and styling, respectively.

main.css
This CSS code provides styles for various elements in the currency converter interface

script.js
This JavaScript code contains an event listener that waits for the DOM (Document Object Model) content to be fully loaded before executing the code inside the callback function and its  sets up an event listener to handle the currency conversion functionality when the user clicks the "Convert Currency" button. It retrieves the amount and target currency entered by the user, makes an API request to fetch the exchange rate, calculates the converted amount, and displays the result on the webpage. If there's an error during the process, it displays an appropriate error message

