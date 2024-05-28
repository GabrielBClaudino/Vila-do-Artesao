
const navBar_js = `<nav class="navbar navbar-expand-lg">
<div class="container">
    
    <!-- Texto da navbar Vila do Artesão-->
    <a class="navbar-brand" href="index.html">
        <strong><span>Vila do</span> Artesão</strong>
    </a>
    
    <!-- Botão de toggle para dispositivos móveis -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- Opções da navbar -->
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item">
                <a class="nav-link " id="inicio" href="index.html">INÍCIO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="eventos" href="eventos.html">EVENTOS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="artesao" href="artesao.html">ARTESÃOS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="produtos" href="products.html">PRODUTOS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contato" href="contact.html">CONTATO</a>
            </li>
        </ul>
        
        <!-- Ícones da navbar para dispositivos grandes -->
        <div class="d-none d-lg-block">
        </div>
    </div>
</div>
</nav>`;
function definirNavbar() { document.getElementById("Navbar_JS").innerHTML= navBar_js;
console.log("Nav Bar adicionada!");
activeNav();
} 
function activeNav(){
   switch (window.location.pathname){

    case "/index.html":
        var active = document.getElementById("inicio").classList.add("active");
        console.log("navbar alterada");
        break;

    case "/eventos.html":
        var active = document.getElementById("eventos").classList.add("active");
        console.log("navbar alterada");
        break;

    case "/artesao.html":
        var active = document.getElementById("artesao").classList.add("active");
        console.log("navbar alterada");
        break;

    case "/products.html":
            var active = document.getElementById("produtos").classList.add("active");
            console.log("navbar alterada");
            break;

    case "/contact.html":
        var active = document.getElementById("contato").classList.add("active");
        console.log("navbar alterada");
        break;
          
    }
}


