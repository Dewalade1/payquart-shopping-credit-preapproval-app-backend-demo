const shoppingCreditsService = require('../services/shoppingCredits.service')

exports.apply = ( req, res, next ) => {

    const data = {
        employmentStatus: req.body.employmentStatus,
        salary: req.body.salary,
        nextSalaryDate: req.body.nextSalaryDate,
        existingLoans: req.body.existingLoans,
        plan: req.body.plan,
        totalCartValue: req.body.totalCartValue,
        shoppingCredit: req.body.shoppingCredit,
        downPayment: req.body.downPayment,
        monthlyInstallment: req.body.monthlyInstallment,
        tenure: req.body.tenure
    }

    shoppingCreditsService.apply( data, (error, results ) => {

        if (data.monthlyInstallment !== results) {
             return res.status(200).send({
                success: false,
                data: {
                    status: 'Application failed',
                    repayment: results,
                    reason:'Monthly installment amount not acceptable. See expected repayment value above',
                },
            })
        }

        if (results === 'EXIST_LOANS_FOUND') {
             return res.status(200).send({
                success: true,
                data: {
                    status: 'Application failed',
                    repayment: 0,
                    reason:'found existing loans',
                },
            })
        } else if (results === 'DOWNPAYMENT_TOO_LOW') {
            return res.status(200).send({
                success: true,
                data: {
                    status: 'Application failed',
                    repayment: 0,
                    reason:'Down Payment is too low',
                },
            })
        } else if (results === 'SHOP_CREDIT_LESS_THAN_REQ_VAL') {
            return res.status(200).send({
                success: true,
                data: {
                    status: 'Application failed',
                    repayment: 0,
                    reason:'Shopping Credit less than required value',
                },
            })
        }

        return res.status(200).send({
            success: true,
            data: {
                status: 'Application Submitted successfully',
                repayment: results,
                reason: 'Application meets requirements'
            },
        })
    })
}