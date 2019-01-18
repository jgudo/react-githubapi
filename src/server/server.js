const express = require('express');
const path = require('path');
 
const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, '../../public');
const app = express();

console.log('PATH: ', publicPath);
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.send(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is running on port', port);
});