function generatePassword(length=10, charset='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123459!@#$%^&*()_+~`|}{[]\:;?><,./-=') {
    let password = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    return password;
}

exports.default = {
  generatePassword
}
