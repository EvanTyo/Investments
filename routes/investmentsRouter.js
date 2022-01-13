// import the investment functions
const investmentController = require('../controllers/investmentsController.js')

// create a Router object from express
const router = require('express').Router()

// add a new investment to the table
router.post('/', investmentController.addInvestment)

// access all the investments in the table
router.get('/', investmentController.getAllInvestments)

// access one investment by id
router.get('/:id', investmentController.getOneInvestment)

// modify one investment by id
router.put('/:id', investmentController.updateInvestment)

// delete one investment by id
router.delete('/:id', investmentController.deleteInvestment)

module.exports = router