const stats = require("smodels");

// sample data
let td = {
  endog: {
    title: "Y",
    data: [150.697, 179.323, 203.212, 226.505, 249.633, 281.422, 256.2, 231.2],
  },
  exog: [
    {
      title: "Cubed HH Size",
      data: [0, 0.04, 0.16, 0.36, 0.64, 1.0, 0.8, 0.9],
    },
    { title: "HH Size", data: [0, 0.2, 0.4, 0.6, 0.8, 1.0, 0.8, 0.9] },
  ],
};

// Ordinary Least Squares regression (OLS)
// create and fit model
let modelOls = new stats.Ols(td.endog, td.exog).fit();
console.log("modelOls", modelOls);
// Generalized Least Squares regression (GLS)
// create and fit model
let modelGls = new stats.Gls(td.endog, td.exog).fit();
console.log("modelGls", modelGls);
// Weighted Least Squares regression (WLS)
// create and fit model
let modelWls = new stats.Wls(td.endog, td.exog).fit();
console.log("modelWls", modelWls);
// Display Summary Results
// add constant to exogenous values
let exog = stats.addConstant(td.exog);

// fit the model
let Ols = new stats.Ols(td.endog, exog).fit();

// Print summary
Ols.summary();
