const express = require('express');
// const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

// // const express = require('express');
// const path = require('path');
// // const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(9000);



const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, 'build')));

// Define a catch-all route to serve "index.html"
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the Express server
// app.listen(9000, () => {
//   console.log('Server is running on port 9000');
// });




app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
