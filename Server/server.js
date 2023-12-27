import app from './app.js';
import './db.js';

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log('Server is listening on port ' + port);
});

