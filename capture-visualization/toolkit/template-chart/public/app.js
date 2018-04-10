"use strict";

//
// Render a chart to a particular element on the page.
//
function renderChart (bindto, data, size) {
    var chart = c3.generate({
        bindto: bindto,
        size: size,
        data: data, // The entire data object is now being passed through from Node.js.
        transition: {
            duration: 0 // Disable animated transitions when we are capturing a static image.
        }
    });    
};

$(function () {

    $.get("chart-data") // Now using a new 'chart-data' REST API that provides the entire data object for the chart.
        .then(function (response) {
            renderChart("#chart", response.data, response.chartSize);
        })
        .catch(function (err) {
            console.error(err);
        });
});

