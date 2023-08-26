function abrirOutros() {
    const genero = document.getElementsByName("genero")
    const outros = document.getElementById("outros")

    for (let i=0 ; i< genero.length ; i++){
        if(genero[2].checked){
            outros.disabled = false
        }else {
            outros.disabled = true
        }
    }
}
function togglePass(){
    const senha1 = document.querySelector("#senha1")
    const senha2 = document.querySelector("#senha2")

    if (senha1.type == "password" || senha2.type == "password"){
        senha1.type = "text"
        senha2.type = "text"
    } else {
        senha1.type = "password"
        senha2.type = "password"
    }
    
}
function digitar(){
    document.querySelector("#rua").disabled=false
    document.querySelector("#complemento").disabled= false
}

function pesquisarCEP(){
    let cep = document.querySelector("#CEP").value
    const complemento = document.querySelector("#complemento")

    fetch("https://viacep.com.br/ws/"+cep+"/json/")
    .then(response => response.json())
    .then(response =>{
        console.log(response)
        document.querySelector("#rua").value = response.logradouro
        if(response.complemento != null && response.complemento.length>0){
            complemento = response.complemento
        }else{
            complemento.disabled = false
        }
        document.querySelector("#bairro").value = response.bairro
        document.querySelector("#cidade").value = response.localidade
        document.querySelector("#estado").value = response.uf
       
    })
}