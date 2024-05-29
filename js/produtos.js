

function produtospage(){

    let div_produto = document.getElementById("div_produto");

    fetch("../JSON/produto.json").then((response) =>{
        response.json().then((dados)=>{
            dados.produtos.map((produtos) => {
                
                div_produto.innerHTML += ` 
                <div class="col-lg-4 col-12 mb-3">
                <div class="product-thumb">
                    <a href="product-detail.html#id_pro=${produtos.id}%id_art=${produtos.id_artesao}">
                        <img src="${produtos.imagem_produto}" class="img-fluid product-image" alt="">
                    </a>

                   

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
            })
            
        })
    })
}

