// Include CryptoJS library (if not already included)
const SECRET_KEY = "Hello"; // Use a strong secret key

// Encrypt function
function encryptData(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

// Decrypt function
function decryptData(cipherText) {
    try {
        const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (e) {
        console.error("Decryption error:", e);
        return null;
    }
}
