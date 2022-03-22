const express = require('express');
const app = express();
const axios = require('axios');
const webService = "http://www.raydelto.org/agenda.php"
const port = 4000;

// middleware 
app.use(express.json());

// routes
app.get('/', async (req, res) => {
    let contacts = await axios(webService);
    res.send(contacts.data);
});

app.post('/newContact', async (req, res) => {
    let add = await axios.post(webService, req.body);
    if (add.statusText !== 'OK') return;
    res.send(`Contacto enviado ${add.headers.date}`)
});

app.listen(port, () => { console.log(`running in port ${port}`) });