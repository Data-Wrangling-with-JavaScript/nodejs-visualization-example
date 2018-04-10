"use strict";

const express = require('express');
const path = require('path');

module.exports = {
    start: () => { // Export a start function so our main module can start the web server at its leisure.
        return new Promise((resolve, reject) => { // Wrap web server startup in a promise.
            const app = express();

            const staticFilesPath = path.join(__dirname, "public"); // Make our 'public' sub-directory accessible via HTTP.
            const staticFilesMiddleWare = express.static(staticFilesPath);
            app.use('/', staticFilesMiddleWare);
            
            const server = app.listen(3000, err => { // Start our web server!
                if (err) {
                    reject(err); // Error occurred while starting web server.
                }
                else {
                    resolve(server); // Web server started ok.
                }
            });
        });
    }
}