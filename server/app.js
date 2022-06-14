const express = require('express');
const route= require('./routes')


module.exports = function () {
    let serverApp =  express(), create, start;

    create = () => {
        // serverApp.set('hostname', "localhost");
        serverApp.set('port', process.env.PORT || 3000);
        route.init(serverApp)

    };


    start = () => {
        create();
        let hostname = serverApp.get("hostname"),
            port = serverApp.get("port");


        serverApp.listen(port, () => {
            console.log(
                "Express Server is listening on - https://" + hostname + ":" + port
            );
        });
    };


    return {
        create,start
    };

};
