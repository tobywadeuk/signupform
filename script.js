let error = document.getElementById("error")
let passwordone = document.getElementById("password1")
let passwordtwo = document.getElementById("password2")

let form = document.querySelector(".form")

form.addEventListener("submit", function(e){
    if (passwordone.value !== passwordtwo.value){
        console.log(passwordone.value, passwordtwo.value)
        e.preventDefault()
        error.textContent = "Note: Passwords Do Not Match";
} else {
    let username = document.getElementById("firstname")
    alert("Thanks for joining us " + username.value + ". We look forward to living the beach life with you.")
}


}

)