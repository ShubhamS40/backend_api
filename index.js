const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT environment variable if available, otherwise use port 3000

// Define your routes and middleware here

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});