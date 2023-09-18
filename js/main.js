const btnmudar = document.getElementById("mudar");
const img = document.createElement("img");
btnmudar.addEventListener("click", (event) => {
    gerarCachorro();
});
const content =  document.getElementById("content");
gerarCachorro();

function gerarCachorro() {
    fetch("https://dog.ceo/api/breeds/image/random")
         .then(res => res.json())
         .then(res => {
             img.src = res.message
             content.appendChild(img)
         })
         .catch(err => {
             console.log(err)
         })

}    
