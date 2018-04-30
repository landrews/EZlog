// require('babel-core/register');
require('ignore-styles');
require('babel-register')({
  // ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
});

const {default: app} = require('./app');
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log(`\x1b[32m App listening on port ${PORT}\x1b[0m\n`);
});

app.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
