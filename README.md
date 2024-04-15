# Servidor Node.js para Gerenciamento de Usuários

Este é um servidor Node.js simples que permite criar, listar e deletar usuários. Ele utiliza um banco de dados JSON para armazenar os dados dos usuários.

## Requisitos

Certifique-se de ter o Node.js instalado no seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone este repositório para o seu computador:

git clone https://github.com/seu-usuario/01-fundamentos-node.git

Navegue até o diretório do projeto:

    cd 01-fundamentos-node

Instale as dependências:
npm install

## Uso

## 1 - Inicie o servidor:

npm run dev

## 2- Use o Insomnia para interagir com as rotas do servidor:

Criar um usuário:

Método: POST
URL: http://localhost:3333/users
Corpo: JSON com os detalhes do usuário (por exemplo: { "name": "John Doe", "email": "john@example.com" })

Listar usuários:

Método: GET
URL: http://localhost:3333/users

Deletar um usuário:

Método: DELETE
URL: http://localhost:3333/users/:id (Substitua :id pelo ID do usuário que deseja deletar)

## Contribuição

Sinta-se à vontade para enviar sugestões, relatar problemas ou contribuir com o projeto!

## Este README fornece instruções claras sobre como instalar e usar o servidor Node.js, juntamente com o Insomnia, para interagir com as rotas do servidor. Certifique-se de personalizar os detalhes, como URLs e comandos específicos, de acordo com a implementação real do seu servidor.

## Se precisar de mais alguma coisa ou tiver outras dúvidas, estou à disposição para ajudar!
