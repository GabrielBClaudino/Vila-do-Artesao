document.addEventListener('DOMContentLoaded', (event) => {

    verificarproduto();
    vocevaigostartmb();
});

function separarIDs(string) {
    // Dividir a string usando o caractere '%'
    const partes = string.split('%');
    
    // Inicializar o array para armazenar os IDs
    const ids = [];

    // Iterar sobre as partes da string
    partes.forEach(part => {
        // Verificar se a parte contém "id_pro" ou "id_art"
        if (part.includes("id_pro")) {
            ids.push(part);
        } else if (part.includes("id_art")) {
            ids.push(part);
        }
    });

    // Retornar o array com os IDs
    return ids;
}


function produtoidpage(){
   ID = separarIDs(window.location.hash)
   id_prod = ID[0] 
   id_prod = id_prod.replace("#id_pro=", "")
    console.log(id_prod);
    id_a = ID[1] 
    var id_a = id_a.replace("id_art=", "")
    console.log(id_a);

    let nome_produto = document.getElementById("nome_produto");
    let id_produto = document.getElementById("id_produto");
    let imagem_produto = document.getElementById("imagem_produto");
    let descricao_produto = document.getElementById("descricao_produto");
    let nome_artesao = document.getElementById("nome_artesao");
    let text_whats = "Olá espero que esteja tudo bem, gostaria de comprar o produto:";
    let link_whats = "";
    var telefone = "0";
    let link_art = "artesaopage.html#"+String(id_a);
        fetch("../JSON/artesao.json").then((response) =>{
            response.json().then((dados)=>{
                dados.artesoes.map((artesoes) => {
                    if(id_a == artesoes.id){
                        console.log(artesoes.nome);
                        telefone = artesoes.telefone;
                        
                        telefone = telefone.replace("-","");
                        telefone = telefone.replace(/\s/g, '');

                        nome_artesao.innerHTML = artesoes.nome;
                        document.getElementById("imagem_artesao").src=artesoes.foto_perfil;
                        document.getElementById("facebook").href=artesoes.facebook;
                        document.getElementById("whatsapp").href=artesoes.telefone;
                        document.getElementById("instagram").href=artesoes.instagram;
                        document.getElementById("imagem_artesao_link").href= link_art;
                        document.getElementById("nome_artesao").href= link_art;
                    }
                    
                })

            })
        })


        fetch("../JSON/produto.json").then((response) =>{
            response.json().then((dados)=>{
                dados.produtos.map((produtos) => {
                    if(id_prod == produtos.id){

                        text_whats = text_whats + produtos.nome;

                        link_whats = `https://wa.me/${telefone}?text=${text_whats}`;   


                        document.getElementById("imagem_produto").src=produtos.imagem_produto;
                        document.getElementById("preco_produto").innerHTML=`R$ ${produtos.preco}`;
                        document.getElementById("descricao_produto").innerHTML=produtos.descricao;  
                        document.getElementById("nome_produto").innerHTML=produtos.nome; 
                        document.getElementById("id_produto").innerHTML=`Código de produto: ${produtos.id}`; 
                        document.getElementById("Comprar_link").href=link_whats;
                    }
                    
                })

            })
        })

}
function verificarproduto(){
   ID = separarIDs(window.location.hash)
   id_prod = ID[0] 
   id_prod = id_prod.replace("#id_pro=", "")
    console.log(id_prod);
   id_a = ID[1] 
    var id_a = id_a.replace("id_art=", "")
    console.log(id_a);
    var codigoError = 0;
    var id_artjson = 0;

    fetch("../JSON/artesao.json").then((response) =>{
        response.json().then((dados)=>{
            dados.artesoes.map((artesoes) => {

                //verifica se o artesão existe no json
                if(id_a == artesoes.id){
                    codigoError = 0;
                     id_artjson = artesoes.id;
                     console.log(codigoError, "error");

                    //verifica se o produto existe no json
                     fetch("../JSON/produto.json").then((response) =>{
                        response.json().then((dados)=>{
                            dados.produtos.map((produtos) => {
                                if(id_prod == produtos.id){
                                 if (id_artjson == produtos.id_artesao) {
                                    codigoError = 0;
                                    console.log(codigoError, "error");    
                                    produtoidpage();
                                 }
                                 else{codigoError=2; console.log(codigoError, "error");}
                                }
                                else{codigoError=1; console.log(codigoError, "error");}
                                
                        })
            
                    })
                })
                }
                else{codigoError=1; console.log(codigoError);}

            })

        })
    })

        
}

function vocevaigostartmb(){
  let divcarrosel = document.getElementById("div_produto2");

        fetch("../JSON/produto.json").then((response) =>{
          response.json().then((dados)=>{
              dados.produtos.map((produtos) => {

                divcarrosel.innerHTML +=` 
                <div class="col-lg-4 col-12 mb-3 border rounded ml-2">
                <div class="product-thumb ">
                    <a href="redirecionar.html#id_pro=${produtos.id}%id_art=${produtos.id_artesao}">
                        <img src="${produtos.imagem_produto}" class="img-fluid product-image" alt="">
                    </a>

                    
                    <div class="product-info d-flex">
                        <div>
                            <h5 class="product-title mb-0">
                                <a href="redirecionar.html#id_pro=${produtos.id}%id_art=${produtos.id_artesao}" class="product-title-link">${produtos.nome}</a>
                            </h5>

                            <p class="product-p">${produtos.descricao}</p>
                        </div>

                    </div>
                </div></div>`
          })

      })
      })


}



function redirect(){
         ID = separarIDs(window.location.hash);
         ID = String(ID);
         ID = ID.replace(",","%")
         link = "product-detail.html" + ID;
        location.assign(link);
} 
