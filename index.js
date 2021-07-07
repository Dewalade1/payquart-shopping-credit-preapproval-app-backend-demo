const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const moesifExpress = require('moesif-express');
const swaggerUi = require('swagger-ui-express');

const shoppingCreditsRoutes = require('./routes/shoppingCredits.route');

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());

// setup moestif

const allowedOrigins = ['http://localhost:3000',
                      'http://localhost:3001',
                      'http://localhost:4000',
                      'http://localhost:8080',
                      'https://paystaq-shopping-credit-app.herokuapp.com/',
                      'https://payqart-shopping-credit-app.herokuapp.com/',
                      'https://paystaq-shopping-credit-preapproval-frontend-demo.vercel.app/',
                      'https://payqart-shopping-credit-preapproval-frontend-demo-dewa.vercel.app/',
                      'https://payqart-shopping-credit-preapproval-frontend-demo-git-main-dewa.vercel.app/'
                      ];
                      
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not ' +
                'allow access from the Origin you are using.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

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
            servers: ["http://localhost:4000/","https://paystaq-shopping-credit-app.herokuapp.com/test"]
        },
    }),
    apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/* Swagger Initialization - END */

// HOME ENDPOINT
app.get('/', ( req , res ) => {
 console.log('Congrats! You are at paystaq shopping credit preapproval home route!!')
 return res.status(200).send({
     success: true,
     error: null,
     data:'Welcome to the paystaq shopping credit preapproval homepage!',
     })
})

/**
* @swagger
* /:
*   get:
*      description: This is the home of the paystaq shopping credit preapproval app backend connection
*      tags:
*          - home
*      responses:
*          '200':
 *             description: Test Successful
*          '400':
*              description: Bad Request
*          '500':
*              description: Internal Server Error
*/

// TEST ENDPOINT
app.use('/test', (req, res) => {
    console.log("Congrats! Your test route works!!!");
    return res.status(200).send({
        success: true,
        error: null,
        data:'Test Successful. \n\nWelcome to the paystaq shopping credit preapproval backend!!'
        });
});

/**
* @swagger
* /test:
*   get:
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
    console.log('[+] Payqart app is now running...');
    console.log('[+] Listening on port ' + port + '...');
});