document.addEventListener("DOMContentLoaded", ()=>{

    const helpTextList = [
        { id:"home", text: "You are already at home"},
        { id:"about", text: "Get the info about us"},
        { id:"contact", text: "Connect with us"}
    ]
    
    const helpTextElm = document.querySelector(".help-text")

    for (var i=0; i<helpTextList.length; i++){
        let btn = document.querySelector("#" + helpTextList[i].id)
        console.log(btn);

        const helpTextMaker =(j) => {
            return function() {                                     //Closure
                helpTextElm.textContent = helpTextList[j].text; 
            }
            
        }

        btn.addEventListener("mouseenter", helpTextMaker(i))
        btn.addEventListener("mouseleave", ()=>{
            helpTextElm.textContent = "";
        })
    }

})

// //                              With let keyword (without closure)

//     for (let i=0; i<helpTextList.length; i++){
//         let btn = document.querySelector("#" + helpTextList[i].id)
//         console.log(btn);

//         btn.addEventListener("mouseenter", ()=>{                                     
//             helpTextElm.textContent = helpTextList[i].text; 
//         } )
//         btn.addEventListener("mouseleave", ()=>{
//             helpTextElm.textContent = "";
//         })
//     }


//                                              WITH IIFE


// document.addEventListener("DOMContentLoaded", ()=>{

//     const helpTextList = [
//         { id:"home", text: "You are already at home"},
//         { id:"about", text: "Get the info about us"},
//         { id:"contact", text: "Connect with us"}
//     ]
    
//     const helpTextElm = document.querySelector(".help-text")

//     for (let i=0; i<helpTextList.length; i++){
//         let btn = document.querySelector("#" + helpTextList[i].id)
//         console.log(btn);

//         btn.addEventListener("mouseenter", ()=>{  
//             (function (i){                                   // IIFE
//             helpTextElm.textContent = helpTextList[i].text; 
//             } (i))
//         })
//         btn.addEventListener("mouseleave", ()=>{
//             helpTextElm.textContent = "";
//         })
//     }

// })