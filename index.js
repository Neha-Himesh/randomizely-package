const crypto = require('crypto');

function generateRandomString(length){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;
    // Generate random bytes
    const randomBytes = crypto.randomBytes(length);
    // Map bytes to characters from the allowed set
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = randomBytes[i] % charsLength;
        result += chars[randomIndex];
    }
    return result;
}

function generateRandomHex(length){
    const randomString = crypto.randomBytes(Math.ceil(length/2));
    const resultInHexadecimal = randomString.toString('hex').slice(0, length);
    return resultInHexadecimal;
}

function generateCustomString(length, characters){
    const charsLength = characters.length;
    const randomString = crypto.randomBytes(length);
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = randomString[i] % charsLength;
        result += chars[randomIndex];
    }
    return result;    
}

MediaSourceHandle.exports = {generateRandomString, generateRandomHex, generateCustomString};
