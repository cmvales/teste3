function respostas() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem").value;
    let motivo = document.getElementById("motivo").value;

    if (nome && email && telefone && mensagem && motivo) {

        document.getElementById("resultado").innerHTML = `
            <h2>Dados Enviados:</h2>
            <p>Nome: ${nome}</p>
            <p>Email:${email}</p>
            <p>Telefone:${telefone}</p>
            <p>Mensagem:${mensagem}</p>
            <p>Motivo de Contato:${motivo}</p>
        `;
    } else {

        alert("Por favor, preencha todos os campos.");
    }
}

document.getElementById('contatoForm').addEventListener('reset', function() {
    document.getElementById('resultado').innerHTML = '';
});
