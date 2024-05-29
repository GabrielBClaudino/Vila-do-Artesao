import eel
import json
import os

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



print("Abra o Seu navegador!")
print("Para Fechar a aplicação, Basta fechar essa janela e a aba do navegador.")
eel.start('index.html', mode='default')
