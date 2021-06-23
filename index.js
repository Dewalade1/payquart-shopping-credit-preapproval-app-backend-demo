const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const shoppingCreditsRoutes = require('./routes/shoppingCredits.route');

const app = express();

const port = 4000;

app.use(bodyParser.json());

/* Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: " Paystaq shopping credit preapproval app backend",
            description: "This the backend of the paystaq app shopping credit pre-approval application form. \nIt is built in node.Js",
            version: "1.0.0",
            contact: {
                name: "Oluwadewalade Ade-Onojobi",
            },
            servers: ["http://localhost:4000/"],
        },
    }),
    apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/* Swagger Initialization - END */

// TEST ENDPOINT
app.use('/test', (req, res) => {
    console.log("Congrats! Your test route works!!!");
    return res.status(200).send('Test Successful. \n\nWelcome to the paystaq shopping credit preapproval backend backend!!');
});

/**
* @swagger
* /test:
*   post:
*      description: Use this to test the paystaq shopping credit preapproval app backend connection
*      tags:
*          - test
*      responses:
*          '200':
 *             description: Test Successful
*          '400':
*              description: Bad Request
*          '500':
*              description: Internal Server Error
*/

// MAIN API ENDPOINTS
app.use('/shopping-credits', shoppingCreditsRoutes);

app.listen( port , () => {
    console.log('\n[*] Starting paystaq shopping credit preapproval app backend');
    console.log('[+] App is now running..');
    console.log('[+] Listening on port ' + port + '...');
});