import * as config from './config.js';
import { app } from './server.js';

app.listen(config.getPort(), () => {
	console.log(`API running at: http://localhost:${config.getPort()}`);
})