"use strict";

const charts = require('./toolkit/charts.js');

const chartSize = { // Specify the size of the chart.
    width: 600,
    height: 300
};

const myData = { // Specify the data for the chart, this is used directly as the 'data' field in the C3 chart definition.
    json: [ // Hard-coded JSON data, just to show you can that you can plug whatever data you want into this chart.
        {
          "Year": 1917,
          "AvgTemp": 10.54724518
        },
        {
          "Year": 1918,
          "AvgTemp": 11.82520548
        },
        {
          "Year": 1919,
          "AvgTemp": 12.12582418
        },
        {
          "Year": 1920,
          "AvgTemp": 11.28647541
        },
        {
          "Year": 1921,
          "AvgTemp": 12.75109589
        },
        {
          "Year": 1922,
          "AvgTemp": 12.00136986
        },
        {
          "Year": 1923,
          "AvgTemp": 11.66575342
        },
        {
          "Year": 1924,
          "AvgTemp": 11.08784153
        },
        {
          "Year": 1925,
          "AvgTemp": 11.93763736
        },
        {
          "Year": 1926,
          "AvgTemp": 10.77286501
        },
        {
          "Year": 1927,
          "AvgTemp": 11.93246575
        },
        {
          "Year": 1928,
          "AvgTemp": 11.96115702
        },
        {
          "Year": 1929,
          "AvgTemp": 12.32808219
        },
        {
          "Year": 1930,
          "AvgTemp": 12.5330137
        },
        {
          "Year": 1931,
          "AvgTemp": 13.26561644
        },
        {
          "Year": 1932,
          "AvgTemp": 12.90096154
        },
        {
          "Year": 1933,
          "AvgTemp": 12.44709945
        },
        {
          "Year": 1934,
          "AvgTemp": 11.73315068
        },
        {
          "Year": 1935,
          "AvgTemp": 11.7390411
        },
        {
          "Year": 1936,
          "AvgTemp": 11.94002732
        },
        {
          "Year": 1937,
          "AvgTemp": 12.54642857
        },
        {
          "Year": 1938,
          "AvgTemp": 12.93835616
        },
        {
          "Year": 1939,
          "AvgTemp": 12.62821918
        },
        {
          "Year": 1940,
          "AvgTemp": 11.04616438
        },
        {
          "Year": 1941,
          "AvgTemp": 12.78082192
        },
        {
          "Year": 1942,
          "AvgTemp": 12.31071429
        },
        {
          "Year": 1943,
          "AvgTemp": 12.11767123
        },
        {
          "Year": 1944,
          "AvgTemp": 12.63753425
        },
        {
          "Year": 1945,
          "AvgTemp": 12.30780822
        },
        {
          "Year": 1946,
          "AvgTemp": 13.04027397
        },
        {
          "Year": 1947,
          "AvgTemp": 12.1590411
        },
        {
          "Year": 1948,
          "AvgTemp": 12.3169863
        },
        {
          "Year": 1949,
          "AvgTemp": 13.88131868
        },
        {
          "Year": 1950,
          "AvgTemp": 12.07637363
        },
        {
          "Year": 1951,
          "AvgTemp": 12.81547945
        },
        {
          "Year": 1952,
          "AvgTemp": 13.23620219
        },
        {
          "Year": 1953,
          "AvgTemp": 13.94779614
        },
        {
          "Year": 1954,
          "AvgTemp": 12.73767123
        },
        {
          "Year": 1955,
          "AvgTemp": 12.68255495
        },
        {
          "Year": 1956,
          "AvgTemp": 11.95724044
        },
        {
          "Year": 1957,
          "AvgTemp": 13.08131868
        },
        {
          "Year": 1958,
          "AvgTemp": 11.46863014
        },
        {
          "Year": 1959,
          "AvgTemp": 13.06027397
        },
        {
          "Year": 1960,
          "AvgTemp": 12.23196721
        },
        {
          "Year": 1961,
          "AvgTemp": 12.83958904
        },
        {
          "Year": 1962,
          "AvgTemp": 11.95863014
        },
        {
          "Year": 1963,
          "AvgTemp": 12.04657534
        },
        {
          "Year": 1964,
          "AvgTemp": 12.55519126
        },
        {
          "Year": 1965,
          "AvgTemp": 12.37712329
        },
        {
          "Year": 1966,
          "AvgTemp": 12.84684932
        },
        {
          "Year": 1967,
          "AvgTemp": 11.70575342
        },
        {
          "Year": 1968,
          "AvgTemp": 12.28483607
        },
        {
          "Year": 1969,
          "AvgTemp": 12.70219178
        },
        {
          "Year": 1970,
          "AvgTemp": 12.42027397
        },
        {
          "Year": 1971,
          "AvgTemp": 12.93972603
        },
        {
          "Year": 1972,
          "AvgTemp": 12.17254098
        },
        {
          "Year": 1973,
          "AvgTemp": 13.43082192
        },
        {
          "Year": 1974,
          "AvgTemp": 12.66068493
        },
        {
          "Year": 1975,
          "AvgTemp": 12.79068493
        },
        {
          "Year": 1976,
          "AvgTemp": 11.85969945
        },
        {
          "Year": 1977,
          "AvgTemp": 12.45835616
        },
        {
          "Year": 1978,
          "AvgTemp": 11.70712329
        },
        {
          "Year": 1979,
          "AvgTemp": 13.25178082
        },
        {
          "Year": 1980,
          "AvgTemp": 12.78374317
        },
        {
          "Year": 1981,
          "AvgTemp": 12.91287671
        },
        {
          "Year": 1982,
          "AvgTemp": 12.74917808
        },
        {
          "Year": 1983,
          "AvgTemp": 13.36219178
        },
        {
          "Year": 1984,
          "AvgTemp": 13.03032787
        },
        {
          "Year": 1985,
          "AvgTemp": 13.11082192
        },
        {
          "Year": 1986,
          "AvgTemp": 12.98328767
        },
        {
          "Year": 1987,
          "AvgTemp": 12.90328767
        },
        {
          "Year": 1988,
          "AvgTemp": 12.67431694
        },
        {
          "Year": 1989,
          "AvgTemp": 12.23465753
        },
        {
          "Year": 1990,
          "AvgTemp": 14.04821918
        },
        {
          "Year": 1991,
          "AvgTemp": 14.04917808
        },
        {
          "Year": 1992,
          "AvgTemp": 12.19508197
        },
        {
          "Year": 1993,
          "AvgTemp": 13.11315068
        },
        {
          "Year": 1994,
          "AvgTemp": 12.95260274
        },
        {
          "Year": 1995,
          "AvgTemp": 13.01150685
        },
        {
          "Year": 1996,
          "AvgTemp": 12.08142077
        },
        {
          "Year": 1997,
          "AvgTemp": 12.41424658
        },
        {
          "Year": 1998,
          "AvgTemp": 14.01493151
        },
        {
          "Year": 1999,
          "AvgTemp": 13.63958904
        },
        {
          "Year": 2000,
          "AvgTemp": 12.13142077
        },
        {
          "Year": 2001,
          "AvgTemp": 13.49849315
        },
        {
          "Year": 2002,
          "AvgTemp": 13.6
        },
        {
          "Year": 2003,
          "AvgTemp": 11.95315068
        },
        {
          "Year": 2004,
          "AvgTemp": 12.51584699
        },
        {
          "Year": 2005,
          "AvgTemp": 13.21986301
        },
        {
          "Year": 2006,
          "AvgTemp": 13.84150685
        },
        {
          "Year": 2007,
          "AvgTemp": 12.87849315
        },
        {
          "Year": 2008,
          "AvgTemp": 12.99180328
        },
        {
          "Year": 2009,
          "AvgTemp": 12.2739726
        },
        {
          "Year": 2010,
          "AvgTemp": 13.78369863
        },
        {
          "Year": 2011,
          "AvgTemp": 13.62068493
        },
        {
          "Year": 2012,
          "AvgTemp": 14.09357923
        },
        {
          "Year": 2013,
          "AvgTemp": 13.03315068
        },
        {
          "Year": 2014,
          "AvgTemp": 12.51465753
        },
        {
          "Year": 2015,
          "AvgTemp": 13.80972603
        },
        {
          "Year": 2016,
          "AvgTemp": 14.01680328
        },
        {
          "Year": 2017,
          "AvgTemp": 14.78353659
        }
    ],
    keys: {
        x: "Year",
        value: [
            "AvgTemp"
        ]
    }
};

const outputImagePath = "./output/my-output-file.png";

charts.renderLineChart(myData, chartSize, outputImagePath) // Pass in the data and render the chart to the image file.
    .then(() => {
        console.log("Line chart renderered!");
    })
    .catch(err => {
        console.error("Failed to render line chart.");
        console.error(err);
    });