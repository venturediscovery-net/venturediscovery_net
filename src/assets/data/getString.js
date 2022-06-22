

const string = {
    'title':"Have an Unsolved Problem / Unserved Need ?<br/> Be a part of the Solution",
    'whomTitle': "FOR <span style={{color:\"red\"}} > WHOM </span> IS THIS PLATFORM MEANT FOR ?",
    'whyTitle': "FOR WHOM IS THIS PLATFORM MEANT FOR ?",
    'howTitle': "FOR WHOM IS THIS PLATFORM MEANT FOR ?",
    'descTitle': "FOR WHOM IS THIS PLATFORM MEANT FOR ?",
    'userTitle1': "Coder",
    'userTitle2': "User",
    'userTitle3': "Misc",
    'whom': "FOR WHOM IS THIS PLATFORM MEANT FOR ?",
    'whom': "FOR WHOM IS THIS PLATFORM MEANT FOR ?",
    'whom': "FOR WHOM IS THIS PLATFORM MEANT FOR ?",
    'copyright': "Copyright © 2022 Venture Discovery",

}

function getString(_arg) {

  return {__html: string[_arg]};
}


export default getString;