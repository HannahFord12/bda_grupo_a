# Proyecto
Este es un proyecto de una API para la insercion y recuperacion de datos mediante Node.js a la base de datos MongoDb instalado localmente.

## Tecnologias utilizadas
![MongoDB](https://img.shields.io/badge/MongoDB-st?style=plastic&logo=mongodb&logoColor=green&labelColor=black&color=black)
[![Node.js](https://img.shields.io/badge/Node.js-10.x%20LTS-green?style=plastic&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue?style=plastic&logo=express&logoColor=white)](https://expressjs.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-5.10.10-yellow?style=plastic&logo=mongoose&logoColor=black)](https://mongoosejs.com/)

## Instalación del Proyecto

Para poner en marcha este proyecto, sigue los siguientes pasos de instalación:

#### 1. Instala npm:
```bash
sudo apt install npm
```
#### 2. Instala mongoose version 5.10.10:
Mongoose es la biblioteca de modelado de objetos para Node.js y MongoDB que proporciona una solución más fácil y eficiente para interactuar con bases de datos MongoDB desde una aplicación Node.js.
```bash
npm install mongoose@5.10.10
```
#### 3. Instala mongodb:
Controlador oficial de MongoDB para Node.js que permite a la aplicación Node.js conectarse a una base de datos MongoDB. Proporciona las herramientas necesarias para establecer y gestionar conexiones con la base de datos.
```bash
npm install mongodb
```
#### 4. Instala Express:
Para instalar el framework web Express.js proporcionar una estructura y una serie de herramientas para manejar rutas, vistas, y otros aspectos comunes de la Api.
```bash
npm install express
```
#### 5. Ejecucion del proyecto:
Para ejecutar el proyecto, utilizar el siguiente comando
```bash
node proyectomongo1/Back/app.js
```

## Funcionalidades de la Api
En esta Api se cuenta con las diferentes funcionalidades:
estructura de datos

### Modelo de los datos:
Los datos a insertar de la Api se componen de los siguientes datos
- name : En referencia a nombre
- description : En referencia a la descripcion

![modelo_de_datos](./img/modelo_de_datos.png)


### Get:
Esta Api cuenta con dos formas de mostrar los datos:

#### Get: para obtener todos los datos
Para obtener todos los datos:

![get_All](./img/get_All.png)

Ejemplo en Postman

![get_All](./img/get_All_Postman.png)


#### Get: para obtener datos mediante busqueda por id
Para obtener los datos de un modelo a partir de su id:

![get_by_id](./img/get_by_id.png)

Ejemplo en Postman

![get_by_id_Postman](./img/get_by_id_Postman.png)


### Post:
Para insertar datos en la base de datos:

![post_method](./img/post_method.png)

Ejemplo en Postman

![post_method_postman](./img/post_method_postman.png)


### Put:
Para modificar los datos de un modelo en base a su id:

![put_method](./img/put_method.png)

Ejemplo en Postman

![put_method_postman](./img/put_method_Postman.png)


### Delete:
Para eliminar un modelo de datos en base a su id:

![delete_method](./img/delete_method.png)

Ejemplo en Postman

![put_method_postman](./img/delete_method_postman.png)
