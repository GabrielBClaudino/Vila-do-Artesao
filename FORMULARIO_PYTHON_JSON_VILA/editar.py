import json
import os

JSON_FILE = 'artesoes.json'
PRODUTOS_JSON_FILE = 'produto.json'

def json_read(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

def json_write(file_path, data):
    with open(file_path, 'w') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
    return "Foi criado com Sucesso!"

def ensure_json_file():
    if not os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'w') as file:
            json.dump({"artesoes": []}, file, ensure_ascii=False, indent=2)
    if not os.path.exists(PRODUTOS_JSON_FILE):
        with open(PRODUTOS_JSON_FILE, 'w') as file:
            json.dump({"produtos": []}, file, ensure_ascii=False, indent=2)

def update_json_file(data):
    ensure_json_file()
    json_write(JSON_FILE, data)

def Pupdate_json_file(data):
    ensure_json_file()
    json_write(PRODUTOS_JSON_FILE, data)


def editar_nome_artesao(id_artesao, novo_nome):
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        for artesao in data.get('artesoes', []):
            if artesao.get('id') == id_artesao:
                artesao['nome'] = novo_nome
                update_json_file(data)
                return "Nome do artesão atualizado com sucesso!"
        return "Artesão não encontrado."
    except Exception as e:
        return f"Erro ao editar nome do artesão: {e}"

def editar_categoria_artesao(id_artesao, nova_categoria):
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        for artesao in data.get('artesoes', []):
            if artesao.get('id') == id_artesao:
                artesao['categoria'] = nova_categoria
                update_json_file(data)
                return "Categoria do artesão atualizada com sucesso!"
        return "Artesão não encontrado."
    except Exception as e:
        return f"Erro ao editar categoria do artesão: {e}"

def editar_foto_perfil_artesao(id_artesao, nova_foto_perfil):
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        for artesao in data.get('artesoes', []):
            if artesao.get('id') == id_artesao:
                artesao['foto_perfil'] = nova_foto_perfil
                update_json_file(data)
                return "Foto do perfil do artesão atualizada com sucesso!"
        return "Artesão não encontrado."
    except Exception as e:
        return f"Erro ao editar foto do perfil do artesão: {e}"

def editar_telefone_artesao(id_artesao, novo_telefone):
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        for artesao in data.get('artesoes', []):
            if artesao.get('id') == id_artesao:
                artesao['telefone'] = novo_telefone
                update_json_file(data)
                return "Telefone do artesão atualizado com sucesso!"
        return "Artesão não encontrado."
    except Exception as e:
        return f"Erro ao editar telefone do artesão: {e}"

def editar_facebook_artesao(id_artesao, novo_facebook):
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        for artesao in data.get('artesoes', []):
            if artesao.get('id') == id_artesao:
                artesao['facebook'] = novo_facebook
                update_json_file(data)
                return "Facebook do artesão atualizado com sucesso!"
        return "Artesão não encontrado."
    except Exception as e:
        return f"Erro ao editar Facebook do artesão: {e}"

def editar_instagram_artesao(id_artesao, novo_instagram):
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        for artesao in data.get('artesoes', []):
            if artesao.get('id') == id_artesao:
                artesao['instagram'] = novo_instagram
                update_json_file(data)
                return "Instagram do artesão atualizado com sucesso!"
        return "Artesão não encontrado."
    except Exception as e:
        return f"Erro ao editar Instagram do artesão: {e}"

def editar_titulo_biografia_artesao(id_artesao, novo_titulo):
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        for artesao in data.get('artesoes', []):
            if artesao.get('id') == id_artesao:
                artesao['titulo_biografia'] = novo_titulo
                update_json_file(data)
                return "Título da biografia do artesão atualizado com sucesso!"
        return "Artesão não encontrado."
    except Exception as e:
        return f"Erro ao editar título da biografia do artesão: {e}"

def editar_biografia_artesao(id_artesao, nova_bio):
    try:
        ensure_json_file()
        data = json_read(JSON_FILE)
        for artesao in data.get('artesoes', []):
            if artesao.get('id') == id_artesao:
                artesao['biografia'] = nova_bio
                update_json_file(data)
                return "Biografia do artesão atualizada com sucesso!"
        return "Artesão não encontrado."
    except Exception as e:
        return f"Erro ao editar biografia do artesão: {e}"

def editar_nome_produto(id_produto, novo_nome):
    try:
        ensure_json_file()
        data = json_read(PRODUTOS_JSON_FILE)
        for produto in data.get('produtos', []):
            if produto.get('id') == id_produto:
                produto['nome'] = novo_nome
                Pupdate_json_file(data)
                return "Nome do produto atualizado com sucesso!"
        return "Produto não encontrado."
    except Exception as e:
        return f"Erro ao editar nome do produto: {e}"

def editar_descricao_produto(id_produto, nova_descricao):
    try:
        ensure_json_file()
        data = json_read(PRODUTOS_JSON_FILE)
        for produto in data.get('produtos', []):
            if produto.get('id') == id_produto:
                produto['descricao'] = nova_descricao
                Pupdate_json_file(data)
                return "Descrição do produto atualizada com sucesso!"
        return "Produto não encontrado."
    except Exception as e:
        return f"Erro ao editar descrição do produto: {e}"

def editar_preco_produto(id_produto, novo_preco):
    try:
        ensure_json_file()
        data = json_read(PRODUTOS_JSON_FILE)
        for produto in data.get('produtos', []):
            if produto.get('id') == id_produto:
                produto['preco'] = novo_preco
                Pupdate_json_file(data)
                return "Preço do produto atualizado com sucesso!"
        return "Produto não encontrado."
    except Exception as e:
        return f"Erro ao editar preço do produto: {e}"

def editar_imagem_produto(id_produto, nova_imagem):
    try:
        ensure_json_file()
        data = json_read(PRODUTOS_JSON_FILE)
        for produto in data.get('produtos', []):
            if produto.get('id') == id_produto:
                produto['imagem_produto'] = nova_imagem
                Pupdate_json_file(data)
                return "Imagem do produto atualizada com sucesso!"
        return "Produto não encontrado."
    except Exception as e:
        return f"Erro ao editar imagem do produto: {e}"

def editar_id_artesao_produto(id_produto, novo_id_artesao):
    try:
        ensure_json_file()
        data = json_read(PRODUTOS_JSON_FILE)
        for produto in data.get('produtos', []):
            if produto.get('id') == id_produto:
                produto['id_artesao'] = novo_id_artesao
                Pupdate_json_file(data)
                return "ID do artesão do produto atualizado com sucesso!"
        return "Produto não encontrado."
    except Exception as e:
        return f"Erro ao editar ID do artesão do produto: {e}"
