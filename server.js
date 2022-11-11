const express = require('express');
const app = express();
const path = require('path');


// static file-serving middleware
app.use(express.static(path.join(__dirname, ".", "public")));

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));