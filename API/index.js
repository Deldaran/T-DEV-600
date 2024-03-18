const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 80;

app.use(cors());
const router = require('./Routes/routes');
app.use('/api', router);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
module.exports = router;