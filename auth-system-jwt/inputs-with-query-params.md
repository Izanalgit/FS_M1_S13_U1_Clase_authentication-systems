## request-inputs

Formas de pasar datos en un request HTTP

## Usos comunes

1. **Query Parameters**:
   ![](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL/mdn-url-all.png) - **Filtrado y Búsqueda**: - **Paginación**: `/products?page=2&pageSize=10`. - **Filtros y Opciones de Orden**: `/users?role=admin&order=username` - **Parámetros de Consulta en Formularios**: input text google `https://www.google.com/search?q=manzanas`

```javascript
// GET /products?category=electrónica.
app.get("/products", (req, res) => {
  console.log(req.query); // { category: "electrónica"}
  console.log(req.query.category); // "electrónica"
});
```

2. **Path Parameters:**:

   - **Identificación de Recursos**: Por ejemplo, en una aplicación de blogs, la URL `/posts/123` podría referirse al artículo con el ID 123.
   - **Enrutamiento Dinámico**: Los path parameters son comunes para crear rutas dinámicas. Puedes definir rutas como `/users/:id` donde `:id` es un path parameter que puede variar.

```javascript
// GET /note/4
app.get("/note/:noteId", (req, res) => {
  console.log(req.params); // { noteId: 4}
  console.log(req.params.noteId); // 4
});

// GET /note/platanos
app.get("/note/:title/", (req, res) => {
  console.log(req.params.title); // platanos
});
```

3. **Body (Cuerpo de la Solicitud)**:

   - **Envío de Datos Complejos**: Se utiliza para enviar datos más complejos en una solicitud, como JSON. Esto es común en las solicitudes POST, PUT. Por ejemplo, al crear un nuevo usuario, se pueden enviar datos como nombre, correo electrónico y contraseña en el cuerpo de la solicitud.
   - **Actualización de Recursos**: En las solicitudes PUT el body se utiliza para enviar datos que actualizan un recurso existente.
   - **Envío de Archivos**: En aplicaciones que manejan la carga de archivos,

**ES NECESARIO UNA CONFIGURACIÓN PARA QUE EXPRESS SE PARSEE JSON DE LOS REQUEST**

Sin este paso `req.body` devuelve `undefined`

```javascript
app.use(express.json());
```

## req.body

```javascript
/**

POST /register/admin

{
	"username": "user1",
	"password": "1234"
}

*/

app.post("/register/:role", (req, res) => {
  console.log(req.params.role); // "admin"
  console.log(req.body); // { username: "user1",password: "1234"}
  console.log(req.body.username); // "user1"
});
```
