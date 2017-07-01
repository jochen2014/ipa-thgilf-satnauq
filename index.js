import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import flightRoute from './routes/flightRoute';


const app = express();
const port = process.env.port || 8000;

app.use(bodyParser.json());
app.use(flightRoute);

app.listen(port);
console.log(`server is listening on http://localhost:${port}`);
