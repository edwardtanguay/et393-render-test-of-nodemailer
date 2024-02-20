/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import cors from 'cors';
import { employeeRouter } from './routers/employeeRouter';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send(`
<html>
	<body>
	<h1>${process.env.APP_TITLE}</h1>
	<ul>
		<li>GET - show all employees - <a href="/employees">/employees</a></li>
		<li>POST - send mail about employee 3 <a href="/employees/sendmail/3">/employees/sendmail/3</a></li>
	</ul>
	</body>
</html>
	`);
});

app.use('/employees', employeeRouter);
