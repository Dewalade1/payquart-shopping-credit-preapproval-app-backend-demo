
exports.apply = (data, callback) => {
    console.log('[*] Submiting your application')
    console.log(data)
    console.log('[-] Application submitted')

    return callback('Application Submitted')
}