var password = document.getElementById('password')
var generate = document.getElementById('generateBtn')
var copy = document.getElementById('copyBtn')


function genPassword() {
    var chars = '0123456789qazxswedcvfrtgbnhyujmkiolp!@#$%&*()QAZXSWEDCVFRTGBNHYUJMKILOP'
    var passwordLength = 12
    var password = ''
    for (var i = 0; i<passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    document.getElementById('password').value = password
}

function copyPassword() {
    var copyText = document.getElementById('password')
    copyText.select()
    copyText.setSelectionRange(0, 999)
    document.execCommand('copy')
}

generate.addEventListener('click' , genPassword)
copy.addEventListener('click' , copyPassword)

