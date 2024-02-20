import express, { Router } from 'express';
import * as employeeHandlers from '../handlers/employeeHanders';

export const employeeRouter = Router();

employeeRouter.get('/', async (_req, res: express.Response) => {
	const employees = await employeeHandlers.getAllEmployees();
	res.json(employees);
});