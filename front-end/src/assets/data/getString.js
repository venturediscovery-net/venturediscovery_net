
 const string = {
    'title':"Have an Unsolved Problem / Unserved Need ?<br/> Be a part of the Solution!",
    'whomTitle': "For <span style={{color:\"SkyBlue\"}} > whom?</span>",
    'whyTitle': "Benefits:",
    'howTitle': "<span style={{color:\"RosyBrown\"}} >HOW</span> DOES IT WORK?",
    'whypt': ["Test your classroom / theory learnings with real world Beta Users", 
        "Add credibility to your development / coding capability. Could help meaningfully in placements",
        "Be a part of the solution",
        "Collect feedback for your startup idea / venture - could help in raising funding",
        "Make a big difference in the development career / startup journey of a fellow student/entrepreneur",
        "You have built a web /mobile app but unable to test with real users."],
    'user2Desc': "You are not a coder but simply a user with unserved needs.",
    'user3Desc': "You are either and want to be part of startup ecosystem.",
    'copyright': "Copyright © 2022 Venture Discovery",

}  

function getString(_arg) {

  return {__html: string[_arg]};
}


export default getString;