const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'codigo')));

// Caminho para os arquivos JSON onde os dados dos usuários serão armazenados
const usersFilePath = path.join(__dirname, 'codigo', 'Assets', 'Scripts', 'users.json');

// Função para ler os dados dos usuários do arquivo JSON
function readUsersFile() {
    try {
        const data = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

// Função para escrever os dados dos usuários no arquivo JSON
function writeUsersFile(data) {
    fs.writeFileSync(usersFilePath, JSON.stringify(data, null, 2));
}

// Endpoint para registrar usuários
app.post('/register', (req, res) => {
    const newUser = req.body;
    const users = readUsersFile();

    // Verifica se o usuário já existe
    if (users.find(user => user.razaoSocial === newUser.razaoSocial)) {
        return res.status(400).json({ success: false, message: 'Usuário já existe' });
    }

    users.push(newUser);
    writeUsersFile(users);
    res.json({ success: true, message: 'Usuário registrado com sucesso' });
});

// Endpoint para login
app.post('/login', (req, res) => {
    const { razaoSocial, senha } = req.body;
    const users = readUsersFile();

    const user = users.find(user => user.razaoSocial === razaoSocial && user.senha === senha);
    if (user) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Login ou senha incorretos' });
    }
});

// Serve arquivos HTML específicos
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'codigo', 'pages', 'telaCadastro.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'codigo', 'pages', 'telaLogin.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
