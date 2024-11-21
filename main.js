const menuIcon = document.getElementById("menu-icon");// ?to retrieve an id
const navList = document.getElementById("nav-link-list")
let isShown = false;
menuIcon.addEventListener("click", (evt) => {
    if (isShown === false) {
        navList.style.display = "flex";
        isShown = !isShown;
    } else {
        navList.style.display = "none";
        isShown = !isShown;
    }

})
// media events 
const videoElements = document.getElementsByTagName("video");
console.log(videoElements);
// adding event listner for the video
for (let videoElement of videoElements) {
    videoElement.addEventListener("play", (evt) => {
        alert("Video is playing...");
    });
    videoElement.addEventListener("pause", (evt) => {
        alert("video is paused!...");
    });
    videoElement.addEventListener("ended", (ect) => {
        alert("video ended!< thanks for watcging...");
    });

}
// adding requirement to the form
const formElement = document.getElementById("contact-form");
formElement.addEventListener("submit", (evt) => {
    evt.preventDefault()// to stay on same page /stopping from going to a new webpage
    const userNameElement = evt.target["username"]
    const emailElement = evt.target["email"]
    const messageElement = evt.target["message"]
    console.log(userNameElement.value, emailElement.value, messageElement.value)
    if (userNameElement.value.length === 0) {
        alert("Username cannot be empty");
    } else if (emailElement.value.length === 0) {
        alert("Email cannot be empty");
    } else if (messageElement.value.length === 0) {
        alert("Message cannot be empty")
    } else {

        alert("Form Succesfully Submitted")
    }
});

const newsLetterForm = document.getElementById("newsletter-form")
newsLetterForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    const newsLetterEmail = evt.target["newsletter-email"]
    if (newsLetterEmail.value.length === 0) {
        alert("email cannot be empty")
    } else {
        alert("You have been successfully subscribed to our newsletter")
    }
})

// ?for image slider

const slides = document.getElementsByClassName("slide")
const dots = document.getElementsByClassName("dot")
for(let i = 0; i < slides.length; i++){

    
    const dot = dots[i]
    dot.addEventListener("click",(evt)=>{
        for(let slide of slides){
            slide.style.display = "none"
        }
        for(let activeDot of dots){
            activeDot.id = ""
        }
        dots[i].id = "active-dot"
        slides[i].style.display = "block"   
    })
}

// web api
// let paragraph = document.createElement("p")
// paragraph.innerHTML = "I AM A PARAGRAPH" 
// paragraph.style.color = "blue"
// document.body.appendChild(paragraph)          //to create html elemnts in js and append it

// const codeElements = document.querySelector("#code")
// fetch("http://127.0.0.1:5500/index.html").then(async(res)=>{
// let content = await res.text()
// codeElements.textContent = content
// })