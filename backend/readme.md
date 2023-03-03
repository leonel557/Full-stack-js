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
<p>Se necesita de un archivo <em>.env</em> en el directorio raiz para poder ejecutar el sistema correctamente. Las variables necesarias son las siguientes:</p>
<pre>
NODE_ENV='development'
BEARER_TOKEN='Bearer aSuperSecretKey'
</pre>
<h2>Comandos</h2>
<br/>

<p> Instalar dependencias:</p>

### `npm install`

<p>Correr el servidor:</p>

### `npm run dev`

### `npm start`

<p>Ejecución de test con Mocha</p>

### `npm run test`

<p>Por defecto, la API corre en el puerto 4000, aunque puede ser modificado agregando una variable PORT al archivo <em>.env<em> de la siguiente manera</p>

<pre>
PORT=5050
</pre>
