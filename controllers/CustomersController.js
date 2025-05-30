/**
 * The CustomersController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CustomersService');
const customersCustomer_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.customersCustomer_idDELETE);
};

const customersCustomer_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.customersCustomer_idGET);
};

const customersCustomer_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.customersCustomer_idPUT);
};

const customersGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.customersGET);
};

const customersPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.customersPOST);
};


module.exports = {
  customersCustomer_idDELETE,
  customersCustomer_idGET,
  customersCustomer_idPUT,
  customersGET,
  customersPOST,
};
