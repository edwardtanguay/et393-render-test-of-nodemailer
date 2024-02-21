/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Router } from "express";
import * as employeeHandlers from "../handlers/employeeHanders";
import { createTransport } from "nodemailer";

export const employeeRouter = Router();

employeeRouter.get("/", async (_req, res: express.Response) => {
	const employees = await employeeHandlers.getAllEmployees();
	res.json(employees);
});

employeeRouter.post(
	"/sendmail/:id",
	async (req: express.Request, res: express.Response) => {
		const { id } = req.params;
		const { pin } = req.body;

		console.log('PIN', pin);
		console.log('PIN in env', process.env.PIN);

		if (pin !== process.env.PIN) {
			res.status(401).send("not authorized");
		} else {
			const employees: any = await employeeHandlers.getAllEmployees();
			const employee = employees.find((m: any) => (m.id = id));
			const sendTo = "edwardtanguay@gmail.com";

			const mailOptions = {
				from: `Language Community Site <${process.env.GOOGLE_MAIL_ACCOUNT_USER}@gmail.com>`,
				to: sendTo,
				subject: `Information on employee #${employee.id}`,
				html: `
Employee #${employee.id}: ${employee.firstName} ${employee.lastName} - ${employee.title}
`,
			};

			const transporter = createTransport({
				service: "gmail",
				auth: {
					user: process.env.GOOGLE_MAIL_ACCOUNT_USER,
					pass: process.env.GOOGLE_MAIL_NODEMAILER_PASSWORD,
				},
			});

			transporter.sendMail(mailOptions, (error: any, info: any) => {
				if (error) {
					res.send(`ERROR: ${error.message}`);
				} else {
					res.send("Email sent: " + info.response);
				}
			});
		}
	}
);
