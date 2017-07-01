import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.port || 8000;

app.use(bodyParser.json());
app.use('/flights', (req, res) => {
    res.json({
        greeting: 'hello,world'
    })
});

app.listen(port);
console.log(`server is listening on http://localhost:${port}`);
