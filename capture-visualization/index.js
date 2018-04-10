"use strict";

const webServer = require('./web-server.js');
const captureWebPage = require('./toolkit/capture-web-page.js');

webServer.start()
    .then(server => {
        const urlToCapture = "http://localhost:3000";
        const outputImagePath = "./output/nyc-temperatures.png";
        return captureWebPage(urlToCapture, "svg", outputImagePath)
            .then(() => server.close()); // Stop the web server when we are done.
    })
    .then(() => {
        console.log("All done :)");
    })
    .catch(err => {
        console.error("Something went wrong :(");
        console.error(err);
    });
