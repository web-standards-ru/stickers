const prince = require('prince');
 
prince()
    .inputs('index.html')
    .output('index.pdf')
    .execute()
    .then(function () {
        console.log('Done');
    }, function (error) {
        console.log('Error: ', util.inspect(error));
    });