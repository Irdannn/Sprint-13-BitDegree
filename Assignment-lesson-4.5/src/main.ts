interface wordtranslate {
    [k: string]: {
        [l: string] : string;
    }
}

const translation: wordtranslate = {
    'in' : {
        'Selamat Datang' : 'Halo yang disana!'
    }
}

const message = (language: string, word: string): string => {
    return translation[language][word]
}

console.log(message('in', 'Selamat Datang'))