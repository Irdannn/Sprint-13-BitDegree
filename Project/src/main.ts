const librarybook : mediatype[] = []

enum Status {
    out,
    in
}

type mediatype = {
    title : string;
    status : Status;
    type: string
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

const addMedia = (media : mediatype) => {
    librarybook.push(media)
}

const changeMediaStatus = (media: mediatype) => {
    if(media.status == Status.in){
      media.status = Status.out
    } else {
      media.status = Status.in
    }
  }

const printTitlesIn = (library: mediatype[]): string[] => {
    return library.filter((media)=> {
        if (media.status== Status.in) {
            return media
        }
    }).map((media) => {
        return media.title
    })
}

const harrypotter : book = {
    date_published: new Date(),
    author: 'JK Rowling',
    genre: 'fiction',
    title: 'Harry Potter',
    status: Status.out,
    type: 'Book' 
}

const vogue: magazine = {
    issue_no: 1,
    subject: 'fashion',
    title: 'Vogue',
    status: Status.in,
    type: 'magazine'  
  }

addMedia(harrypotter);
addMedia(vogue);

console.log(printTitlesIn(librarybook))
changeMediaStatus(harrypotter)
console.log(printTitlesIn(librarybook))