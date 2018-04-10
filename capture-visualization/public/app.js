"use strict";

//
// Render a chart to a particular element on the page.
//
function renderChart (bindto, data, size) {
    var chart = c3.generate({
        bindto: bindto,
        size: size,
        data: {
            json: data,
            keys: {
                x: "Year",
                value: [
                    "AvgTemp"
                ]
            }
        },
        transition: {
            duration: 0 // Disable animated transitions when we are capturing a static image.
        }
    });    
};

$(function () {

    $.get("nyc-temperature.csv")
        .then(function (response) {
            var parseOptions = {
                header: true,
                dynamicTyping: true
            };
            const  parsed = Papa.parse(response, parseOptions);
            const chartSize = {
                width: 600,
                height: 300
            };
            renderChart("#chart", parsed.data, chartSize);
        })
        .catch(function (err) {
            console.error(err);
        });

});

