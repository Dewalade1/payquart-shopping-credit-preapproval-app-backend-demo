
exports.apply = (data, callback) => {

    const minDownPayment = 0.30 * data.totalCartValue
    const shoppingCredit = data.totalCartValue - data.downPayment

    const monthlyInterest = 0.04 * shoppingCredit
    const totalInterest = data.tenure * monthlyInterest
    const monthlyRepayment = (shoppingCredit + totalInterest)/data.tenure

    if (data.existingLoans === 'yes') {
        return callback(null,'EXIST_LOANS_FOUND')
    }

    if (data.downPayment < minDownPayment) {
        return callback(null,'DOWNPAYMENT_TOO_LOW')
    }

    if (data.shoppingCredit < shoppingCredit) {
        return callback(null,'SHOP_CREDIT_LESS_THAN_REQ_VAL')
    }

    return callback(null, monthlyRepayment)
}