# E-commerce << @LeXa Shop >>


## Descripción del proyecto

***@LeXa Shop*** consiste en un proyecto de tienda on-line de ropa, realizado dentro del bootcamp de Let´s Coder, mediante cual el usuario podrá ver todas las categorias y todos los productos disponibles en la tienda, podrá registrarse, hacer LogIn, añadir productos al carrito, comprar y verificar sus pedidos realizados. 

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
  


  
  ### El proyecto esta realizado en dos fases :  BACKEND y FRONTEND
  
  ## FASE I: BACKEND 
  - Se encarga de todos los procesos necesarios para que la web funcione de forma correcta, asi como la conexion con la Base de Datos y el servidor.
  - Esta desarrollado en `NodeJS`
  - La base de datos esta alojada en `MongoAtlas`
  - El servidor fue creado con `Express`
  - El puerto del servidor es: 5000
