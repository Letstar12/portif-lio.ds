from flask import Flask, jsonify, request

app = Flask(__name__)
 
cursos = [
    {
        'id': 1,
        'titulo': 'Curso de Excel Avançado',
        'autor': 'Joaquim Pereira'
    },
    {
        'id': 2,
        'titulo': 'Curso Automação Residencial',
        'autor': 'Eduardo Paes'
    },
    {
        'id': 3,
        'titulo': 'Curso PowerBI Intermediário',
        'autor': 'Fernando Alves'
    },
    {
        'id': 4,
        'titulo': 'Curso de Inglês | Wizard by Person',
        'autor': 'Giovanna Cusinato'
    },
    {
        'id': 5,
        'titulo': 'Curso Azure 900',
        'autor': 'Isabela Santos'
    },
]

#Consultar(todos)
@app.route('/cursos',methods=['GET'])
def obter_cursos():
    return jsonify(cursos)
#Consultar(ID)
@app.route('/cursos/<int:id>', methods=['GET'])
def obter_livros_por_id(id):
    for curso in cursos:
        if curso.get('id') == id:
            return jsonify(curso)

#Editar
@app.route('/cursos/<int:id>', methods=['PUT'])
def editar_curso_por_id(id):
    curso_alterado = request.get_json()
    for indice, curso in enumerate(cursos):
        if curso.get('id') == id:
            cursos[indice].update(curso_alterado)
            return jsonify(cursos[indice])
#Criar     
@app.route('/cursos', methods=['POST'])   
def incluir_novo_curso():
    novo_curso = request.get_json()
    cursos.append(novo_curso)
    return jsonify(cursos)

#Excluir
@app.route('/cursos/<int:id>', methods=['DELETE'])
def excluir_curso(id):
    for indice, curso in enumerate(cursos):
        if curso.get('id') == id:
            del cursos[indice]

    return jsonify(cursos)

app.run(port=5000,host='localhost',debug=True)