<h1>Backend</h1>
<br/>
<p>Es una API tipo REST con la siguiente división de carpetas</p>
<pre>
  - axios
  - controllers
    - files
  - routes
    - files
  - test
  index.js
</pre>
<br/>
<h2>Variables de entorno</h2>
<br/>
<p>Se necesita de un archivo <pre>.env</pre> en el directorio raiz para poder ejecutar el sistema correctamente. Las variables necesarias son las siguientes:</p>
<pre>
  NODE_ENV='development'

  BEARER_TOKEN='Bearer aSuperSecretKey'
</pre>
<h2>Comandos</h2>
<br/>
<p>Utilice <strong>npm install</strong> para instalar las dependencias.</p>
<p>Para correr el servidor podemos usar el comando <strong>npm run dev</strong> para correr en modo Desarrollo con la librería Nodemon; o podemos usar <strong>npm start</strong>.</p>
<p>También podemos usar el comando <strong>npm run test</strong> para correr los tests de nuestra aplicación.</p>
<p>Por defecto, la API corre en el puerto 4000, aunque puede ser modificado agregando una variable PORT al archivo .env</p>