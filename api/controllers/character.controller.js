// characterController.js
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// Handle index actions

const environment = require("../config/environment");
const axios = require('axios').default;

const instance = axios.create({
  baseURL: process.env.THE_ONE_API_URL,
  timeout: 1000,
  headers: { Authorization: `Bearer ${process.env.THE_ONE_API_KEY}` }
});

exports.index = function (req, res) {

  let params = new URLSearchParams();

  const filters = JSON.parse(req.query.filters);

  for (var prop in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, prop)) {
      if (filters[prop]) {
        params.append(prop, filters[prop]);
      }
    }
  }

  instance.get('/character', { params: params })
    .then(function (responseData) {
      res.json({
        status: "success",
        message: "Characters retrieved successfully",
        data: responseData.data
      });
    }).catch(function (error) {
      console.log(error);
      res.status(400).json({
        status: "error",
        error: "Failed"
      });
    });
}
