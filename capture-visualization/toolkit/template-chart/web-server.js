"use strict";

const express = require('express');
const path = require('path');

module.exports = {
    start: (data, chartSize) => { // Start a web server, we pass the C3 data object through to the web-server via the 'start' function.
        return new Promise((resolve, reject) => {
            const app = express();

            const staticFilesPath = path.join(__dirname, "public");
            const staticFilesMiddleWare = express.static(staticFilesPath);
            app.use("/", staticFilesMiddleWare);

            app.get("/chart-data", (request, response) => { // Make the data available to the web-app via the REST API (HTTP GET).
                response.json({
                    data: data,
                    chartSize: chartSize,
                });
            });
            
            const server = app.listen(3000, err => { // Start our web server!
                if (err) {
                    reject(err);
                }
                else {
                    resolve(server);
                }
            });
        });
    }
}