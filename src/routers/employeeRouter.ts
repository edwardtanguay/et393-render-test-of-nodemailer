import express, { Router } from "express";
import * as employeeHandlers from "../handlers/employeeHanders";

export const employeeRouter = Router();

employeeRouter.get("/", async (_req, res: express.Response) => {
	const employees = await employeeHandlers.getAllEmployees();
	res.json(employees);
});

employeeRouter.post(
	"/sendmail/:id",
	async (req: express.Request, res: express.Response) => {
		const { id } = req.params;
		res.send(`info about employee ${id}`);
	}
);
