export const questionSelected = (qID) => {
    let questionCard = document.querySelector(".qcard" + qID);
    
    if (questionCard != null) {
        questionCard.style.background = 'white';
        questionCard.style.boxShadow = '0px 30px 56px rgba(0, 0, 0, 0.08)';
    }
}

export const questionDeSelected = (qID) => {
    let questionCard = document.querySelector(".qcard" + qID);
    
    if (questionCard != null) {
        questionCard.style.background = 'none';
        questionCard.style.boxShadow = 'none';
    }
}

// export const mcqOptionMouseEnter = (className) => {
//     let mcqOption = document.querySelector("." + className.split(" ")[0]);

//     if (mcqOption != null) {
//         mcqOption.childNodes[1].style.border = '0.15rem solid #475467';
//         mcqOption.childNodes[1].style.background = '#F3F3F3';
//     }
// }

// export const mcqOptionMouseLeave = (className) => {
//     let mcqOption = document.querySelector("." + className.split(" ")[0]);

//     if (mcqOption != null) {
//         // mcqOption.childNodes[1].style.border = '0.1rem solid #D0D5DD';
//         // mcqOption.childNodes[1].style.background = '#F9FAFB';
//     }
// }

// export const mcqOptionClicked = (className) => {
//     let mcqOption = document.querySelector("." + className.split(" ")[0]);

//     if (mcqOption != null) {
//         if (mcqOption.childNodes[0].childNodes[0].childNodes[0].checked) {
//             console.log("Option Clicked: ", mcqOption.childNodes[1]);
//             mcqOption.childNodes[1].style.border = '0.15rem solid #475467';
//             mcqOption.childNodes[1].style.background = '#F3F3F3';
//         } else {
//             mcqOption.childNodes[1].style.border = '0.1rem solid #D0D5DD';
//             mcqOption.childNodes[1].style.background = '#F9FAFB';
//         }
//     }
// }
