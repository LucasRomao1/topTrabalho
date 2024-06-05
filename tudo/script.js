body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 20px;
}

h1 {
    color: #333;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}

#mensagem {
    color: #007BFF;
    font-weight: bold;
}

#textoAlterado {
    color: #555;
    font-style: italic;
}

a {
    color: #007BFF;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}



document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = "Você clicou no botão!";
    this.style.backgroundColor = '#28a745'; // Muda a cor do botão para verde
});

document.getElementById('entradaTexto').addEventListener('input', function() {
    var texto = this.value;
    document.getElementById('textoAlterado').innerText = texto;
});

document.getElementById('meuLink').addEventListener('click', function(event) {
    event.preventDefault(); // Previne a navegação padrão
    document.getElementById('linkMensagem').innerText = "Você clicou no link!";
});

document.getElementById('adicionarLink').addEventListener('click', function() {
    var novoLink = document.createElement('a');
    novoLink.href = "#";
    novoLink.innerText = "Novo link criado dinamicamente";
    novoLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Novo link foi clicado!');
    });

    var novosLinksDiv = document.getElementById('novosLinks');
    novosLinksDiv.appendChild(novoLink);

    // Adiciona uma quebra de linha após o novo link
    novosLinksDiv.appendChild(document.createElement('br'));
});
