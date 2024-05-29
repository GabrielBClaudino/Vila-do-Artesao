import eel
import json
import os
from editar import *

eel.init('web')

JSON_FILE = 'artesoes.json'
PRODUTOS_JSON_FILE = 'produto.json'

def json_read(file_path, encoding='utf-8'):
    with open(file_path, 'r', encoding=encoding) as file:
        return json.load(file)

def json_write(file_path, data, encoding='utf-8'):
    with open(file_path, 'w', encoding=encoding) as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
    return "Foi criado com Sucesso!"

def ensure_json_file():
    if not os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'w') as file:
            json.dump({"artesoes": []}, file)
    if not os.path.exists(PRODUTOS_JSON_FILE):
        with open(PRODUTOS_JSON_FILE, 'w') as file:
            json.dump({"produtos": []}, file)


def update_json_file(data):
    ensure_json_file()
    with open(JSON_FILE, 'w') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)

def Pupdate_json_file(data):
    ensure_json_file()
    with open(PRODUTOS_JSON_FILE, 'w') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)

@eel.expose
def json_update(new_data):
    try:
        data = json_read(JSON_FILE)
        data.update(new_data)
        update_json_file(data)
        return data
    except Exception as e:
        return str(e)

@eel.expose
def json_delete():
    try:
        os.remove(JSON_FILE)
        return True
    except Exception as e:
        return str(e)

@eel.expose
def read_artesoes():
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        return data.get('artesoes', [])
    except Exception as e:
        return f"Erro ao ler artesões: {e}"

@eel.expose
def read_produtos():
    try:
        ensure_json_file()
        data = json_read(PRODUTOS_JSON_FILE)
        return data.get('produtos', [])
    except Exception as e:
        return f"Erro ao ler produtos: {e}"


@eel.expose
def create_artesao(new_artesao):
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        new_id = len(data.get('artesoes', [])) + 1
        new_artesao['id'] = new_id
        data['artesoes'].append(new_artesao)
        update_json_file(data)
        return "Artesão criado com sucesso!"
    except Exception as e:
        return f"Erro ao criar artesão: {e}"

@eel.expose
def create_produto(new_produto):
    try:
        ensure_json_file()
        data = json_read(PRODUTOS_JSON_FILE)
        new_id = len(data.get('produtos', [])) + 1
        new_produto['id'] = new_id
        data['produtos'].append(new_produto)
        Pupdate_json_file(data)
        return "Produto criado com sucesso!"
    except Exception as e:
        return f"Erro ao criar produto: {e}"

@eel.expose
def editar_nome_artesao_expose(id_artesao, novo_nome):
    return editar_nome_artesao(id_artesao, novo_nome)

@eel.expose
def editar_categoria_artesao_expose(id_artesao, nova_categoria):
    return editar_categoria_artesao(id_artesao, nova_categoria)

@eel.expose
def editar_foto_perfil_artesao_expose(id_artesao, nova_foto_perfil):
    return editar_foto_perfil_artesao(id_artesao, nova_foto_perfil)

@eel.expose
def editar_telefone_artesao_expose(id_artesao, novo_telefone):
    return editar_telefone_artesao(id_artesao, novo_telefone)

@eel.expose
def editar_facebook_artesao_expose(id_artesao, novo_facebook):
    return editar_facebook_artesao(id_artesao, novo_facebook)
@eel.expose
def editar_instagram_artesao_expose(id_artesao, novo_instagram):
    return editar_instagram_artesao(id_artesao, novo_instagram)

@eel.expose
def editar_titulo_biografia_artesao_expose(id_artesao, novo_titulo):
    return editar_titulo_biografia_artesao(id_artesao, novo_titulo)

@eel.expose
def editar_biografia_artesao_expose(id_artesao, nova_bio):
    return editar_biografia_artesao(id_artesao, nova_bio)
    
@eel.expose
def editar_nome_produto_expose(id_produto, novo_nome):
    return editar_nome_produto(id_produto, novo_nome)

@eel.expose
def editar_descricao_produto_expose(id_produto, nova_descricao):
    return editar_descricao_produto(id_produto, nova_descricao)

@eel.expose
def editar_preco_produto_expose(id_produto, novo_preco):
    return editar_preco_produto(id_produto, novo_preco)

@eel.expose
def editar_imagem_produto_expose(id_produto, nova_imagem):
    return editar_imagem_produto(id_produto, nova_imagem)

@eel.expose
def editar_id_artesao_produto_expose(id_produto, novo_id_artesao):
    return editar_id_artesao_produto(id_produto, novo_id_artesao)

@eel.expose
def deletar_artesao(id_artesao):
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        artesaos = data.get('artesoes', [])
        
        # Procura o artesão com o ID fornecido e remove
        for i, artesao in enumerate(artesaos):
            if artesao.get('id') == id_artesao:
                del artesaos[i]
                update_json_file(data)
                return "Artesão deletado com sucesso!"
        
        return "Artesão não encontrado."
    except Exception as e:
        return f"Erro ao deletar artesão: {e}"

@eel.expose
def deletar_produto(id_produto):
    try:
        ensure_json_file()
        data = json_read(PRODUTOS_JSON_FILE)
        produtos = data.get('produtos', [])
        
        # Procura o produto com o ID fornecido e remove
        for i, produto in enumerate(produtos):
            if produto.get('id') == id_produto:
                del produtos[i]
                Pupdate_json_file(data)
                return "Produto deletado com sucesso!"
        
        return "Produto não encontrado."
    except Exception as e:
        return f"Erro ao deletar produto: {e}"



print("ABRA O NAVEGADOR, A INTERFACE DO PROGRAMA IRÁ APARECER LÁ")
print("para fechar o software feche esse terminal e a pagina do navegador.")
eel.start('index.html', mode='default')
