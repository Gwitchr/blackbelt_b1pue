const authActions  = require("./authActions");
const userActions =  require("./userActions");
const postActions = require("./postActions");
const restaurantActions = require("./restaurantActions");

module.exports = {
	...restaurantActions,
	...authActions,
	...userActions,
	...postActions
};