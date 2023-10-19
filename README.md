Aplicación de transferencias entre usuarios de banco ficticio "Banco Solar". Bootcamp Fullstack Javascript Talento Digital SENCE Chile. 

Funcionalidades

Agregar usuarios, transferencias entre usuarios, muestra la table de usuarios y sus respectivos balances, muestra el historial de transferencias entre usuarios. 

Tecnologías

Javascript, MySQL, Node express, joi, bcrypt, mysql2, dotenv

Se uso el Modelo Vista Controlador para el desarrollo del programa.

1. npm install para instalar las dependencias
2. npm run dev inicia el servidor
3. en tu navegador ve a http://localhost:3000

Rutas

POST /usuario (crear usuario)
GET /usuarios (obtener todos los usuarios)
PUT /usuario/:id (actualizar usuario usando el id como argumento en la url)
DELETE /usuario/:id (eliminar un usuario usando el id como argumento en la url)
POST /transferencia (hacer una nueva trasnferencia)
GET /transferencias (obtener el historial de transferencias)