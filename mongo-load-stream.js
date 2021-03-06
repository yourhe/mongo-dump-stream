var d = require('./index.js');
var argv = require('yargs').argv;

var uri = argv._[0];

if (!uri) {
  console.error('Usage: mongo-load-stream mongodb://username:password@host:port/dbname\n');
  console.error('The current contents of the database will be DELETED,');
  console.error('and new contents loaded from standard input.\n');
  console.error('Standard input must be a stream generated by');
  console.error('the mongo-dump-stream utility or npm module.');
  process.exit(1);
}

return d.load(uri, function(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});

