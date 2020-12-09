const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models')

app.use(express.urlencoded({ extended: true }));
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// set up port
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

// add routes
const router = require('./routes/router.js');
app.use('/api', router);


// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
