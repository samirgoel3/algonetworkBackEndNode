const apiRoutes = require('./apis');


const init = (server) => {

    server.use('*', (req, res, next) => {
        console.log('Request was made to : ' + req.method + " -> " + req.originalUrl+ '\n*******************');
        next();
    });

    server.get('/', (req, res)=>{
        res.send('Welcome to Algo Network')
    })

    server.use('/api', apiRoutes);

};




module.exports = {
    init: init
};
