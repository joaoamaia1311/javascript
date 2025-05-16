const app = require('express')();

app.listen(3000, () => console.log('Server is running on port 3000'));

app.get('/skills', (req, res) => {
    res.send('Skills: JavaScript, Node.js, Express');
})