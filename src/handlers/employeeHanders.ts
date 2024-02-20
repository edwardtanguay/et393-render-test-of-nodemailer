import axios from "axios";

export const getAllEmployees = async () => {
	return new Promise((resolve) => {
		(async () => {
		const response = await axios.get(
			"https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json"
		);
		resolve(response.data);
		})();
	});
};
