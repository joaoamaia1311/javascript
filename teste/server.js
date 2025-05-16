const app = require('express')();

app.listen(3002, () => console.log('Server is running on port 3001a'));

app.get('/skills', (req, res) => {
    res.send('Java script and Node, meu cu');
});