const shoppingCreditsService = require('../services/shoppingCredits.service')

exports.apply = ( req, res, next ) => {
    const data = {
        employmentStatus: req.body.employmentStatus,
        salary: req.body.salary,
        nextSalaryDate: req.body.nextSalaryDate,
        existingLoans: req.body.existingLoans,
        plan: req.body.plan,
        shoppingCredit: req.body.shoppingCredit,
        downPayment: req.body.downPayment,
        monthlyInstallment: req.body.monthlyInstallment,
        tenure: req.body.tenure
    }

    shoppingCreditsService.apply( data, (error, results ) => {
        if (error) {
            console.log(error);
            return res.status(400).send({
                success: false,
                data: 'Could not submit application',
                error: error,
            })
        }

        return res.status(200).send({
            success: true,
            data: "Application submitted successfully",
            error: null,
        })
    })
}