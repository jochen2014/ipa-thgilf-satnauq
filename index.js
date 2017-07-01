import 'babel-polyfill';
import express from 'express';
const app = express();
const port = process.env.port || 8000;

app.use('/', (req, res) => {
    res.send('hello,world!');
})
app.listen(port);
console.log(`server is listening on http://localhost:${port}`);
