
exports.apply = (data, callback) => {
    console.log('[*] Submiting your application')
    console.log(data)
    console.log('[-] Application submitted')

    if (error) {
        return callback(error)
    }

    return callback('Application Submitted')
}