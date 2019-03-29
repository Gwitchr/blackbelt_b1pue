const NODE_ENV = process.env.NODE_ENV || "dev";

const ENVS = {

	dev: {
		SECRET_KEY: "799651B27B2E5D99D17C9CF6754B5",
		db: {
			url: "mongodb+srv://uber_eats:Bfz55M1yYjkCboSrN7jYo8Q5iyJTXy3whBthrN8tOzb0ZLJQ@cluster0-nct6c.mongodb.net/test?retryWrites=true"
		}
	},

	test: {

	},

	production: {
		SECRET_KEY: process.env.SECRET_KEY,
		db: {
			url: process.env.MONGO_URL
		}

	}
};

module.exports = ENVS[NODE_ENV];