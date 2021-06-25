const shoppingCreditsController = require('../controllers/shoppingCredits.controller');

const express = require('express')

const router = express.Router();

router.post('/apply', shoppingCreditsController.apply);
/**
* @swagger
* /shopping-credits/apply:
*   post:
*      description: Route for Shopping credit applications.
*      tags:
*          - shopping credits
*      parameters:
*          - in: body
*            name: applicationData
*            description: shopping Credit application data
*            schema:
*              type: object
*              required:
*                 - employmentStatus
*                 - salary
*                 - nextSalaryDate
*                 - existingLoans
*                 - totalCartValue
*                 - shoppingCredit
*                 - downPayment
*                 - monthlyInstallment
*                 - tenure
*              properties:
*                  employmentStatus:
*                      type: string
*                      minLength: 1
*                      maxLength: 100
*                      example: paid
*                  salary:
*                      type: integer
*                      example: 300000
*                  nextSalaryDate:
*                      type: string
*                      minLength: 1
*                      maxLength: 20
*                      example: july
*                  existingLoans:
*                      type: string
*                      minLength: 1
*                      maxLength: 5
*                      example: no
*                  totalCartValue:
*                      type: integer
*                      example: 80500
*                  shoppingCredit:
*                      type: integer
*                      example: 58604
*                  downPayment:
*                      type: integer
*                      example: 24150
*                  monthlyInstallment:
*                      type: integer
*                      example: 25000
*                  tenure:
*                      type: integer
*                      example: 1
*      responses:
*          '200':
 *             description: Shopping Creddit Application was successfully sent
*          '400':
*              description: Your Shopping Credit Application could not be submitted
*          '404':
*              description: The route was not found
*          '406':
*              description: Invalid data in request 
*          '500':
*              description: Internal Server Error
*/

module.exports = router;