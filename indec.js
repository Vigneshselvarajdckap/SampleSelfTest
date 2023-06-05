let color = document.querySelector(".color")
let sel = document.querySelector('#sel')
let pass = document.querySelector(".pass")
let che =  document.querySelector(".che")
let cleb =  document.querySelector(".cleb")
let btn =  document.querySelector(".btn")
let content = document.querySelector(".content")
let main = document.querySelector(".main")
let backBtn = document.querySelector(".backBtn")

sel.addEventListener("click",()=>{
    color.style.backgroundColor = sel.value
})

che.addEventListener("click",()=>{
    ckecked()
})

function ckecked() {
    if(che.checked){
        pass.type = "text"
    }
    else{
        pass.type = "password"
    }
}

btn.addEventListener("click",()=>{
    if (cleb.value != "") {
        main.style.display = "none"
        let con = `<h1>Happy BirthDay</h1>
        <h3>${cleb.value}</h3>`
    
        content.innerHTML = con
        backBtn.style.display = "block"
    }
})

backBtn.addEventListener('click',()=>{
    if (main.style.display == "none") {
        content.style.display = "none"
        main.style.display = "block"
        backBtn.style.display = "none"
        cleb.value = ""
    }
    else{
        content.style.display = "block"
        main.style.display = "none"
        backBtn.style.display = "block"
    }
})