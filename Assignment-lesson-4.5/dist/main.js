"use strict";
const translation = {
    'in': {
        'Selamat Datang': 'Halo yang disana!'
    }
};
const message = (language, word) => {
    return translation[language][word];
};
console.log(message('in', 'Selamat Datang'));
