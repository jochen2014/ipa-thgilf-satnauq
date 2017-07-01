import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import flightRoute from './routes/flightRoute';


const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(flightRoute);


app.use((err, req, res, next) => {
    // detect bad json error, see: https://github.com/expressjs/body-parser/issues/122
    if (err instanceof SyntaxError && err.status === 400) {
        res.status(400);
        res.json({
            error: "Error parsing JSON",
        });
    }
});


app.listen(port);
console.log(`server is listening on http://localhost:${port}`);
