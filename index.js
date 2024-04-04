const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT environment variable if available, otherwise use port 3000

// Define your routes and middleware here

app.get('/', (req, res) => {
  res.send(`<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-y5nQpJevw4sc7eQzGxwx0iwgMewk5B1rMg&s/> <h1>Backend project hello mansi</h1>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});