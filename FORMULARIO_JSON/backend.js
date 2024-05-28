
const fs = require('fs');

const JSONWrite = (filePath, data, encoding = 'utf-8')=>{
    const promiseCallback = (resolve, reject) =>{
        fs.writeFile(filePath, JSON.stringify(data, null, 2), encoding, (error) =>{
            if(error){
                reject(error);
                return;
            } 
            resolve("Foi criado com Sucesso!");
        })
    };
    return new Promise(promiseCallback);
}

const JSONRead = (filePath, encoding = 'utf-8')=>{
    const promiseCallback = (resolve, reject) =>{
        fs.readFile(filePath, encoding, (error, data) =>{
            if(error){
                reject(error);
                return;
            } 

            try {
                const object = JSON.parse(data);
                resolve(object);
            } catch (e) {
                reject(e);
            }
           
        })
    };
    return new Promise(promiseCallback);
}

const JSONUpdate = (filePath, newData, encoding = 'utf-8')=>{
    const promiseCallback = async (resolve, reject) =>{
        try{
        const data = await JSONRead(filePath, encoding);
        const result = {...data, ...newData}
        await JSONWrite(filePath, result, encoding);
        resolve(result);
        }catch(e){
            reject(e);
        }
    }
    return new Promise(promiseCallback);
}

const JSONDelete = (filePath) =>{
    const promiseCallback = (resolve,reject)=>{
        fs.unlink(filePath,(error)=>{
            if(error){
                reject(error);
                return;
            }
            resolve(true);
        });
    }
}

const createArtesao = (newArtesao) => {
    const filePath = 'test.json';
    return JSONRead(filePath)
      .then((data) => {
        const newId = data.artesoes.length + 1;
        newArtesao.id = newId;
        data.artesoes.push(newArtesao);
        return JSONWrite(filePath, data);
      })
      .then(() => `Artesão criado com sucesso!`)
      .catch((error) => `Erro ao criar artesão: ${error}`);
  };

  const readArtesoes = () => {
    const filePath = 'test.json';
    return JSONRead(filePath)
      .then((data) => data.artesoes)
      .catch((error) => `Erro ao ler artesões: ${error}`);
  };

  const updateArtesao = (id, updatedArtesao) => {
    const filePath = 'test.json';
    return JSONRead(filePath)
      .then((data) => {
        const index = data.artesoes.findIndex((artesao) => artesao.id === id);
        if (index === -1) {
          throw new Error(`Artesão não encontrado`);
        }
        data.artesoes[index] = { ...data.artesoes[index], ...updatedArtesao };
        return JSONWrite(filePath, data);
      })
      .then(() => `Artesão atualizado com sucesso!`)
      .catch((error) => `Erro ao atualizar artesão: ${error}`);
  };

  const deleteArtesao = (id) => {
    const filePath = 'test.json';
    return JSONRead(filePath)
      .then((data) => {
        const index = data.artesoes.findIndex((artesao) => artesao.id === id);
        if (index === -1) {
          throw new Error(`Artesão não encontrado`);
        }
        data.artesoes.splice(index, 1);
        return JSONWrite(filePath, data);
      })
      .then(() => `Artesão deletado com sucesso!`)
      .catch((error) => `Erro ao deletar artesão: ${error}`);
  };


// Create
/*
createArtesao({
    nome: 'Novo Artesão',
    telefone: '+55 11 91234-5678',
    facebook: 'facebook.com/novo.artesao',
    instagram: 'instagram.com/novo_artesao',
    biografia: 'Nova biografia',
    titulo_biografia: 'Novo Título',
    categoria: 'Nova Categoria',
    foto_perfil: 'images/people/novo_artesao.jpeg',
  }).then(console.log).catch(console.error);*/
  
  // Read
  //readArtesoes().then((artesoes) => console.log(artesoes)).catch(console.error);
  
  // Update
  updateArtesao(1, {
    nome: 'Artesão Atualizado',
    biografia: 'Nova biografia atualizada',
  }).then(console.log).catch(console.error);
  
  // Delete
  //deleteArtesao(1).then(console.log).catch(console.error);