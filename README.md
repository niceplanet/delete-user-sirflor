<h1 align="center">Excluir Usuário sirflor</h1>

<p align="center">
  Aplicação para exclusão de usuário sem usar o APP sirflor
</p>

## 💻 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas no seu computador:

- [Node.js](https://nodejs.org) (versão 20.11.0 )

## ⚙️ Configuração

Siga as instruções abaixo para configurar e executar o projeto:

1. Clone este repositório para o seu ambiente local. Você pode fazer isso executando o seguinte comando no seu terminal:
```
git clone git@github.com:niceplanet/delete-user-sirflor.git
```
2. Navegue até o diretório do projeto:
cd excluir-user-sirflor

3. Crie o arquivo .env com base no arquivo example.env para se conectar na API que achar necessária.
```
cp example.env .env
```

## 🚀 Executando o Projeto no local

Siga as etapas abaixo para executar o projeto:

1. Instale as dependências do projeto. No diretório raiz do projeto, execute o comando:
```
npm install
```
2. Inicie a aplicação localmente. No mesmo diretório, execute o comando:
```
npm run dev -- --host
```
3. Abra o seu navegador e acesse `http://localhost:5173/` para visualizar o projeto em execução. Verifique também o seu terminal, pois ele pode exibir a porta específica em uso.

## 💼 Executando o Projeto no DOCKER

Siga as etapas abaixo para executar o projeto:

1. No diretório raiz do projeto, execute o comando:
```
sudo docker-compose up --build -d
```

2. Abra o seu navegador e acesse `http://localhost:8081/delete-user-sirflor` para visualizar o projeto em execução.

## 📦 Compilação para Produção

Se desejar compilar o projeto para produção (github pages) , execute o seguinte comando no diretório raiz do projeto, será feito o deploy para o link "https://niceplanet.github.io/delete-user-sirflor/":
```
sudo npm run deploy
```

## 🛠️ Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

- Vite
- SWC
- TypeScript
- Fortawesome
- Axios
- Eslint
- Tailwind CSS
- Docker
