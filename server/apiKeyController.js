/**
 * Generate a SHA-256 hash of a string using the crypto module based on date and time.
 * Use server side crypto library to generate a hash of the current date and time.
 */
exports.generateApiKey = function () {
    let date = new Date();
    let crypto = require('crypto');
    let hash = crypto.createHash('sha256').update(date.toString()).digest('hex');
    return hash;
}