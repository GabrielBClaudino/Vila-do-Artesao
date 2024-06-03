function card_art(){

        let divart = document.getElementById("card_art");
        let divart_apresentar = document.getElementById("apresent_art");

        fetch("../JSON/artesao.json").then((response) =>{
            response.json().then((dados)=>{
                dados.artesoes.map((artesoes) => {
                    
                    divart.innerHTML += ` <div class="col-lg-4 mb-4 col-12">
                    <div class="team-thumb d-flex align-items-center">
                        <img src="${artesoes.foto_perfil}" id="foto_art"class="img-fluid custom-circle-image team-image me-4" alt="">
                
                        <div class="team-info">
                            <h5 class="mb-0" id="nome_art">${artesoes.nome}</h5>
                            <strong class="text-muted" id="categoria_art">${artesoes.categoria}</strong>
                
                            <!-- Botão para ir ate a pagina do artesão -->
                            <button type="button" class="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#OIDE${artesoes.id}">
                            <i class="bi-plus-circle-fill"></i>
                            </button>
                
                        </div>
                    </div>
                    </div>`
                })
                dados.artesoes.map((artesoes) => {
                    divart_apresentar.innerHTML += `<div class="modal fade" id="OIDE${artesoes.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content border-0">
                            <div class="modal-header flex-column">
                                <img src="${artesoes.foto_perfil}" class="img-fluid custom-circle-image team-image me-4" alt="">
                                <h3 class="modal-title" id="exampleModalLabel">${artesoes.nome}</h3>
        
                                <h6 class="text-muted">${artesoes.categoria}</h6>
        
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
        
                            <div class="modal-body">
                                <h5 class="mb-4">${artesoes.titulo_biografia}</h5>
        
                                <div class="row mb-4">
                                    <div class="">
                                        <p>${artesoes.biografia}</p>
                                    </div>
                                </div>
        
                                <ul class="social-icon text-center">
                                    
        
                                    <li><a href="${artesoes.facebook}" id="style-social" class="social-icon-link bi-facebook"></a></li>
        
                                    <li><a href="${artesoes.telefone}" id="style-social"  class="social-icon-link bi-whatsapp"></a></li>
        
                                    <li><a href="${artesoes.instagram}" id="style-social"  class="social-icon-link bi-instagram"></a></li>
        
                                    <li class="me-3 btn custom-btn" id="alinhamentobutton"><a href="artesaopage.html#${artesoes.id}"><strong>VER SEUS PRODUTOS</strong></a></li>
                                </ul>
                            </div>
                        </div>
        
                    </div>
                </div>`
                })
            })
        })

        

}


function artesaopage(){
    let nome = document.getElementById("nome");
    let bio = document.getElementById("bio");
   


    let id_page = window.location.hash;

    id_page = id_page.replace("#", "");

    id_page = parseInt(id_page)

    console.log(id_page)


        fetch("../JSON/artesao.json").then((response) =>{
            response.json().then((dados)=>{
                dados.artesoes.map((artesoes) => {
                    if(id_page == artesoes.id){
                        console.log(artesoes.nome)

                        nome.innerHTML = artesoes.nome;
                        bio.innerHTML = artesoes.biografia;

                        document.getElementById("foto_perfil").src=artesoes.foto_perfil;


                        document.getElementById("facebook").href=artesoes.facebook;
                        document.getElementById("whatsapp").href=artesoes.telefone;
                        document.getElementById("instagram").href=artesoes.instagram;
                        

                        fetch("../JSON/produto.json").then((response) =>{
                            response.json().then((dados)=>{
                                dados.produtos.map((produtos) => {
                                    if (id_page == produtos.id_artesao){
                                    div_produto.innerHTML += ` 
                                    <div class="col-lg-4 col-12 mb-3">
                                    <div class="product-thumb">
                                        <a href="product-detail.html#id_pro=${produtos.id}%id_art=${produtos.id_artesao}">
                                            <img src="${produtos.imagem_produto}" class="img-fluid product-image" alt="">
                                        </a>
                    
                                        <div class="product-top d-flex">
                                        </div>
                    
                                        <div class="product-info d-flex">
                                            <div>
                                                <h5 class="product-title mb-0">
                                                    <a href="product-detail.html#id_pro=${produtos.id}%id_art=${produtos.id_artesao}" class="product-title-link">${produtos.nome}</a>
                                                </h5>
                    
                                                <p class="product-p">${produtos.descricao}</p>
                                            </div>
                    
                                        </div>
                                    </div>
                                    </div>`
                                    }
                                    })
                                })
                                
                            })
                    
                        
                    }
                    
                })

            })
        })

    }






