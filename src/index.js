const app = require('./server');
const db = require('./database');

const {config} = require('./config/config');

// connect db
db(config.dbUrl)

app.listen(app.get('port'), () => {
    console.log('Server running at port', app.get('port'));
})