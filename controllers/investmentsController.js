// require the db created in the index file
const db = require('../models/index')

// get the investments model
const Investment = db.Investments

// add investment
const addInvestment = async (req, res) => {
    let input_data = {
        folioNumber: req.body.folioNumber,
        shares: req.body.shares,
        userId: req.body.userId,
        mutualFundId: req.body.mutualFundId
        }
        // using the builtin 'create' function on Investment Model
        const investment = await Investment.create(input_data)
        
        // send a 200 response with the created entry
        res.status(200).send(investment)
}

// get all investments
const getAllInvestments = async (req, res) => {

    // using the builtin 'findOne' function on Investment Model
    let investments = await Investment.findAll({})
    res.status(200).send(investments)
}

// get one investment
const getOneInvestment = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on Investment Model
    let investments = await Investment.findOne({where: {id: id}})
    res.status(200).send(investments)
}

// update investment
const updateInvestment = async (req, res) => {
    let id = req.params.id

    // using the builtin 'update' function on Investment Model
    const investment = await Investment.update(req.body, { where: {id: id}})
    res.status(200).send(investment)
}

// delete investment
const deleteInvestment = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Investment Model
    await Investment.destroy({where :{id: id}})
    res.status(200).send(`investment with id: ${id} is deleted`)
}     

// export all the controller functions
module.exports = {
    addInvestment,
    getAllInvestments,
    getOneInvestment,
    updateInvestment,
    deleteInvestment
}