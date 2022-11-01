interface WordTranslation {
    [k: string]: {
      [l: string]: string;
    }
}

const translateWord: WordTranslation = {
    'en': {
      'welcome': 'Hello there!'
    }
}

interface numbertranslation {
    [m: string]: {
        [n:number]: string;
    }
}
  
const translateNumber: numbertranslation = {
    'en' : {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five'
    }
}
  
const translateMessage = (language: string, input: string | number): string => {
    if(typeof input == 'string'){
        return translateWord[language][input]
    } else if (typeof input == 'number') {
        const purchases_left = (5 - input);
        return `Thank You for your purchase, only ${translateNumber[language][purchases_left]} more until your free cup of cofee!`
    } else {
      return 'Incorect input type detected'
    }
  }

console.log(translateMessage('en', 3))
console.log(translateMessage('en', 'welcome'))