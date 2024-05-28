function adicionar(){
    console.log("RODANDO A FUNCAO")
    let nome = String(document.getElementById('nome').value);
    let categoria = String(document.getElementById('categoria').value);
    let tituloBiografia = String(document.getElementById('titulo_biografia').value);
    let biografia = String(document.getElementById('descricao').value);
    let imagem = String(document.getElementById('imagem').value);
    let telefone = String(document.getElementById('telefone').value);
    let facebook = String(document.getElementById('facebook').value);
    let instagram = String(document.getElementById('instagram').value);

    if(nome == null || nome == "" || categoria == null || categoria == "" || telefone == null || telefone == "" || imagem == null || imagem == ""){
        window.alert("Verifique as entradas com '*' pois algumas podem estar vazias");
    }else{
        if(tituloBiografia == null || tituloBiografia == ""){
            tituloBiografia = `Oi sou ${nome} e trabalho com ${categoria} gosto muito do que faço!`;
        }
        if (biografia == null || biografia == ""){
            biografia = "";
        }
        if (facebook == null || facebook == ""){
            facebook = "https://www.facebook.com/viladoartesaocg/";
        }
        if (instagram == null || instagram == ""){
            instagram = "https://www.instagram.com/viladoartesaocg/";
        }
        createArtesao({
            nome: 'Novo Artesão',
            telefone: '+55 11 91234-5678',
            facebook: 'facebook.com/novo.artesao',
            instagram: 'instagram.com/novo_artesao',
            biografia: 'Nova biografia',
            titulo_biografia: 'Novo Título',
            categoria: 'Nova Categoria',
            foto_perfil: 'images/people/novo_artesao.jpeg',
          }).then(window.alert(console.log)).catch(console.error);
    }

}



