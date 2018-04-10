//
// A reusable toolkit function to capture a web page to an image file using Nightmare.
//

"use strict";

const Nightmare = require('nightmare');

//
// Capture the web page specified by URL to the specifed image file.
//
function captureWebPage (urlToCapture, captureElementSelector, outputImagePath) {
    console.log("<< " + urlToCapture);
    console.log(">> " + outputImagePath);

    const nightmare = new Nightmare(); // Create an Nightmare instance.
    return nightmare.goto(urlToCapture) // Point the browser at the requested web page.
        .wait(captureElementSelector) // Wait until the specified HTML element appears on the screen. 
        .evaluate(captureElementSelector => { // Evaluate JavaScript code within the headless browser. This function returns a promise which changes the way our code works.
            const body = document.querySelector("body"); // Find the body element of the web page.
            const captureElement = document.querySelector(captureElementSelector); // Find the HTML element to be captured in the DOM.
            const captureRect = captureElement.getBoundingClientRect(); // Get the area that we want to capture.
            return { // Return details computed in the headless browser to Node.js.
                documentArea: { // Return the scrollable area of the page, we will expand the size of the browser window to cover the entire documents (thus removing any scrollbars we might otherwise capture).
                    width: body.scrollWidth,
                    height: body.scrollHeight
                },
                captureArea: { // Return the rect of the area of the page (e.g. the chart) that we want to capture.
                    x: captureRect.left,
                    y: captureRect.top,
                    width: captureRect.right - captureRect.left,
                    height: captureRect.bottom - captureRect.top
                }
            };
        }, captureElementSelector)
        .then(pageDetails => { // Retrieve details computed in the headless browser. We can now use these value in subsequent Node.js code.
            return nightmare.viewport(pageDetails.documentArea.width, pageDetails.documentArea.height) // Set the viewport to cover the area of the chart.
                .screenshot(outputImagePath, pageDetails.captureArea) // Capture a screenshot to an image file.
                .end(); // End the Nightmare session. Any queued operations are complated and the headless browser is terminated.
        });
};

module.exports = captureWebPage; // Export the function so we can use it in other code modules.