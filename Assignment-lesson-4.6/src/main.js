var translateWord = {
    'en': {
        'welcome': 'Hello there!'
    }
};
var translateNumber = {
    'en': {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five'
    }
};
var translateMessage = function (language, input) {
    if (typeof input == 'string') {
        return translateWord[language][input];
    }
    else if (typeof input == 'number') {
        var purchases_left = (5 - input);
        return "Thank You for your purchase, only ".concat(translateNumber[language][purchases_left], " more until your free cup of cofee!");
    }
    else {
        return 'Incorect input type detected';
    }
};
console.log(translateMessage('en', 3));
console.log(translateMessage('en', 'welcome'));
