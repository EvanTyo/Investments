// this file stores the "investment" model (model is table schema in sequelize lingo)

// inputs: sequelize instance and DT Class, returns: a Investment Model object
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'investment' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "investments"
    const Investment = sequelize.define('investment', {
        id: { // the id will be our primary key for accessing investment data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        folioNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        shares: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mutualFundId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Investment
}