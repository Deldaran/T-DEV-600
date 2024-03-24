const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(cors());
const router = require('./Routes/routes');
app.use(bodyParser.json());
app.use('/api', router);



app.listen(port, () => {
    console.log(`Server is running at http://10.73.188.131:${port}`);
});
module.exports = router;