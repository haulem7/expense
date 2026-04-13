const User = require("../models/User");
const Income = require("../models/Income");

// Add income source
exports.addIncome = async(req, res) => {
    const userId = req.user.id;

    try{
        const { icon, source, amount, date} = req.body;

        // validation: check for missing fields
        if(!source || !amount || !date){
            return res.status(400).json({ message: "All fields are required"});
        }

        const newIncome = new Income ({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });
    }
}

// get all Income source
exports.getAllIncome = async(req, res) => {

};

// delete income source
exports.deleteIncome = async(req, res) => {

};

// download income source
exports.downloadIncomeExcel = async(req, res) => {

}