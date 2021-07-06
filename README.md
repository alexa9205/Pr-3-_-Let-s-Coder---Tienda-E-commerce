# E-commerce << @LeXa Shop >>


## Descripción del proyecto

***@LeXa Shop*** consiste en un proyecto de tienda on-line de ropa, realizado dentro del bootcamp de Let´s Coder, mediante cual el usuario podrá ver todas las categorias y todos los productos disponibles en la tienda, podrá registrarse, hacer LogIn, añadir productos al carrito, comprar y verificar sus pedidos realizados. 

Para visualizar el proyecto, pulsa [aquí](https://https://alexa-shop.herokuapp.com/)

## Características de la aplicación 

- Sistema de inicio de sesión / registro
- Panel de usuario / administrador
- Carrito de compras que guarda los productos añadidos aunque el usuario no ha llegado a comprarlos.
- Dentro de su panel, el usuario podrá ver los pedidos que realizo anteriormente y los productos que contiene cada pedido
- Dentro del panel de administrador, se podran editar, borrar y actualizar las categorias y los productos, al mismo tiempo el administrador/a podrá ver todos los pedidos realizados por todos los usuarios de su tienda 

## Tecnologias empleadas 
<p align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="80" height="80"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80"/> </a><a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="80" height="80"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80"/> </a> </p></p>


## SISTEMA DE INICIO DE SESION / REGISTRO 
- Para poder registrase el usuario tendra que introducir su nombre, e-mail y contraseña.
  - Verificación de contraseña, minimo 6 caracteres;
  - Verificación del e-mail - si la dirección de correo es valida, así como si el e-mail ya esta registrado en la base de datos

- Para el LogIn 
   - El usuario tendrá que introducir sus credenciales, si no coinciden se le muestra un mensaje de error al usuario


## PANEL DE USUARIO 
- Dentro de su panel, el usuario podrá ver todos los productos y todas las categorias, su carrito, comprar y ver los pedidos realizados anteriormente que contendrá toda la informacion: productos, cantidad y precio.

![USUARIO](https://user-images.githubusercontent.com/81650755/121876071-6ce0be80-cd09-11eb-876c-6735bdb957b6.jpg)


## PANEL DE ADMINISTRADOR
- A la hora de hacer el LogIn el sistema detectará automaticamente si el usuario tiene rol de administrador de la pagina.
- Dentro de su panel el administrador podrá hacer lo siguiente : 
  - Crear, editar y borrar los productos que contendran la siguiente información :
       - nombre del producto;
       - precio;
       - descripción; 
       - imagen;
       - categoría al que pertenece;
       
  - Crear, editar y borrar categorias; 
  - Ver todos los pedidos que hicieron los usuarios de su tienda 

![ADMINISTRADOR](https://user-images.githubusercontent.com/81650755/124661289-95427f80-dea7-11eb-8fd4-da9eba6d880f.jpg)

  
  
  ### El proyecto esta realizado en dos fases :  BACKEND y FRONTEND
  
  ## FASE I: BACKEND 
  - Se encarga de todos los procesos necesarios para que la web funcione de forma correcta, asi como la conexion con la Base de Datos y el servidor.
  - Esta desarrollado en `NodeJS`
  - La base de datos esta alojada en `MongoAtlas`
  - El servidor fue creado con `Express`
  - El puerto del servidor es: 5000


 ##### MODELOS DE DATOS Y COMO INTERACCIONAN 
 
 ![ADMINISTRADOR (2)](https://user-images.githubusercontent.com/81650755/124661638-0da94080-dea8-11eb-83d3-625be93f637b.jpg)
 
 
  ## RUTAS 
  
  ### Usuario 
  
  - `.post(/user/register)` - Ruta abierta para que el usario se pueda registrar en la tienda
  - `.post(/user/login)` - Ruta abierta donde el usuario se puede loguear en su cuenta
  - `.get(/user/logout)` - Ruta abierta para hacer el logout de la cuenta
  - `.get(/user/refresh_token)` - Ruta para coger el refresh_token 
  - `.get(/user/infor)` - Ruta privada para coger información del usuario
  - `.get(/user/history)` - Ruta privada para coger el historial de pedidos 
  - `.patch(/user/addcart)` - Ruta privada para añadir productos al carrito
 
  ### Productos
  - `.get(/api/products)` - Ruta abierta donde cualquier utilizador de la pagina web, sin necesidad de estar logueado puede ver todos los productos disponibles
  - `.post(/api/products)` - Ruta privada que puede ser utilizada solo por el admin para añadir productos a la tienda
  - `.put(/api/products/:id)` - Ruta privada utilizada solo por el admin para actualizar los productos de la tienda 
  - `.delete(/api/products/:id)` - Ruta privada utilizada solo por el admin para eliminar productos de la tienda 
 

  ### Categorias 
  - `.get(/categories/category)` - Ruta abierta para cualquier utilizador de la tienda, sin necesidad de estar logueado para ver todas las categorias disponible
  - `.post(/categories/category)` - Ruta privada donde solo el usuario que tenga rol de Admin puede acceder para crear categorias 
  - `.put(/categories/category/:id)` - Ruta privada donde solo el usuario que tenga rol de Admin puede acceder para actualizar las categorias
  - `.delete(/categories/category/:id)` - Ruta privada donde solo el usuario que tenga rol de Admin puede acceder para borrar las categorias

  
  
  ### Fotos
  - `.post(/api/upload)` - Ruta privada, utilizada solo para el admin para validación y subida de fotos de los productos a cloudinary
  - `.delete(/api/destroy)` - Ruta privada, utilizada solo para el admin para eliminar las fotos de los productos subidas a cloudinary

  
  ### Payment
  - `.get(/api/payment)` - Ruta privada para el admin, cogé todos los pedidos hechos en la tienda por todos los usuarios
  - `.post(/api/payment)` - Ruta privada para el usuario, para pagar los pedidos


#### Para desarrolladores: 
#### Install dependencies for server 
##### `npm install`

#### Install dependencies for client
##### cd client ---> `npm install`

#### Connect to your mongodb and add info in .env

#### Add your paypal client id in client/src/components/mainpages/cart/PaypalButton.js

#### Run the client & server with concurrently
##### `npm run dev`

#### Run the Express server only
##### `npm run server`

#### Run the React client only
##### `npm run client`

#### Server runs on http://localhost:5000 and client on http://localhost:3000


## FASE II: FRONTEND 

Basado en componentes desarrollados con `React`.<br>
Renderizado con `React-dom`<br>
Llamadas a la base de datos con `axios`.<br>
Enrutamiento a través del browser con `react-router-dom`.<br>
Metodo de pago con `react-paypal-express-checkout`.<br>
Estilo con `CSS3`.<br>

### COMPONENTES 
- Header
- MainPages / auth / Login - Register
- MainPages / cart / Cart - PayPalButton
- Mainpages / categories / Categories
- Mainpages / createProduct / CreateProduct
- Mainpages / detailProduct / DetailProduct
- Mainpages / history / OrderDetails - OrderHistory
- Mainpages / products / Filter - LoadMore - Products
- Mainpages / utils / Loading - NotFound - ProductItem/BtnRender


### RUTAS DEL FRONTEND 

`"/"` - componente PRODUCTS

`"/detail/:id"` - componente DetailProduct

`"/login"` - componente Login 

`"/register"` - componente Register

`"/category"` - componente Categories

`"/create_product"` - componente CreateProduct

`"/edit_product/:id"` - componente CreateProduct

`"/history"` - componente OrderHistory

`"/history/:id"` - componente OrderDetails

`"/cart"` - componente Cart

`"*"` - componente NotFound


   

### Dependencias Frontend 
    
    "axios": "^0.21.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-paypal-express-checkout": "^1.0.5"
    


### TO DO 
- Perfil de usuario donde pueda cambiar la contraseña ; 
- Cambiar las alertas generadas por mensajes ;
- Añadir footer 
- Añadir un carousel de los ultimos productos añadidos 
