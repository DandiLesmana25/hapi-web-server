const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async() => {
    //create HTTP server
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, h) => {
    //         return 'Hello World!';
    //     }
    // });

    server.route(routes);

    //running server (call server.start use await)
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();