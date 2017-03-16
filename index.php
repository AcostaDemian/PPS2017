<?php
    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;

    require 'vendor/autoload.php';

    $app = new \Slim\App;
    
    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write("Hola, vos quien sos?");

        return $response;
    });

    $app->get('/hola/{name}', function (Request $request, Response $response) {
        $name = $request->getAttribute('name');
        $response->getBody()->write("Hola, $name");

        return $response;
    });
    $app->run();