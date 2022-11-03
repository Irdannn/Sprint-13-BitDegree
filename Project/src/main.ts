const media : mediatype = []

enum mediastatus {
    out = "out",
    in = "in",
}

type mediatype = {
    title : string,
    status : string
}

interface book extends mediatype {
    date_published : Date,
    author : string,
    genre : string
}

interface magazine extends mediatype {
    issue_no : number,
    subject : string
}

const addMedia = (input : book) => {

}

const printTitlesIn = (input: book): string[] => {
    
}