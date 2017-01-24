'use strict';

function randomToken() {
    var token = '';
    var length = 10;
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = length; i > 0; --i) token += chars[Math.round(Math.random() * (chars.length - 1))];
    return token;
}

// randomToken();

module.exports = randomToken;
