const express = require('express');
//importamos el fichero con los datos que necesita nuestro Router
import {todos} from '../data/index';
const { addDateMiddleware, validateTodo } = require('../Middleware/index');
/*
Un Router de express es como un switch case de Javascript. Simplemente redirige las peticiones hacia la ruta correcta, si esta existe.

En una aplicacion de express podemos tener tantos Routers como queramos/sean necesarios. Lo habitual cuando se implementa una API REST
es tener un Router por cada "recurso" de la api. Si imaginamos una aplicacion que tiene 3 recursos (User, Todo, Category), deberiamos
tener 3 routers diferentes: userRouter, todoRouter y categoryRouter.
*/
const todoRouter = express.Router();
//extraer(get) toda la info
todoRouter.get('/todo', addDateMiddleware, (req, res) => {
  res.send({requestTime: req.requestInstant, infoTodo: todos});

});
todoRouter.post('/todopost',validateTodo, (req, res) => {
  //crear un nuevo objeto con estructura {id, text, fecha, done} con los datos que vienen en el BODY de la Request y meterlos dentro de el array.
  //el nuevo objeto debe tener como id un numero mas que el numero actual de elementos guardados en el array.
  const newTodos = req.body;
  newTodos.id = todos[todos.length - 1].id + 1;
  todos.push(newTodos);
  res.status(201).send({requestTime: req.requestInstant, infoTodo: "New post:", newTodos});
});
/*
En este endpoint, el path contiene una variable llamada id. La syntaxis que utiliza express para estos casos es el simbolo :

Una variable en un path, significa que express recoge el valor que va justo después de /todo/ y lo guarda en una variable dentro del objeto "req"
con el mismo nombre que hemos utilizado en el path.

Ejemplo:

Si con Insomnia o Postman hicisemos una peticion GET a la ruta /todo/12, está será dirigida directamente hasta este endpoint.
*/





todoRouter.get('/todo/:id', addDateMiddleware, (req, res) => {

  //recogemos el valor de la variable del path llamada "id" y lo transformarlo a un numero (todos nuestros ids son numericos).
  //cualquier valor que recogemos de req.params será siempre un String. Por eso lo debemos convertir a numero.

  //buscar dentro del array "todos" aquel elemento que coincide con el id recibido por parametro de la ruta en la request.
  //si existe, devolverlo como formato JSON y codigo de status 200.

  //Si no hemos econtrado un TODO o no nos han pasado un id en la ruta, devolvemos un 404.

  const id = parseInt(req.params.id);
  const user = todos.find(element => element.id === id);

  if (user) {
    res.status(200).send({requestTime: req.requestInstant, user});
  } else {
    res.status(404).send("Not found");
  }
});

// MISSING '/todo/:id' PATCH

todoRouter.patch('/todo/:id', addDateMiddleware, (req, res) => {
  //recogemos el valor de la variable del path llamada "id" y lo transformarlo a un numero (todos nuestros ids son numericos).
  //cualquier valor que recogemos de req.params será siempre un String. Por eso lo debemos convertir a numero.
  
  //buscar dentro del array "todos" aquel elemento que coincide con el id recibido por parametro de la ruta en la request.
  //si existe, lo ACTUALIZAMOS con los datos del BODY de la Request y lo devolvemos como formato JSON y codigo de status 200.
  
  //Si no hemos econtrado un TODO o no nos han pasado un id en la ruta, devolvemos un 404.
  const id = parseInt(req.params.id);
  const user = todos.find(user => user.id === id);
  if (!user) {
    return res.status(404).send("Not found");
  }else{

  

  const index = todos.findIndex(user => user.id === id);
  todos[index] = {
    ...todos[index], // "Ponme dentro lo que ya había...
    ...req.body, // ...y luego sobreescríbelo con lo que viene en la petición"
}
  return res.status(200).send({requestTime: req.requestInstant, message : "userchanged"})
}
});


// MISSING '/todo/:id' DELETE


todoRouter.delete('/todo/:id', addDateMiddleware, (req, res) => {
  //recogemos el valor de la variable del path llamada "id" y lo transformarlo a un numero (todos nuestros ids son numericos).
  //cualquier valor que recogemos de req.params será siempre un String. Por eso lo debemos convertir a numero.
  
  //buscar dentro del array "todos" aquel elemento que coincide con el id recibido por parametro de la ruta en la request.
  //si existe, lo BORRAMOS y devolvemos un codigo de status 204.
  
  //Si no hemos econtrado un TODO o no nos han pasado un id en la ruta, devolvemos un 404.
  const id = parseInt(req.params.id);
  const user = todos.find(user => user.id === id);
  if (!user) {
    return res.status(404).send("Not found");
  }
  const index = todos.findIndex(user => user.id === id);
  todos.splice(index, 1);
  res.status(200).send({requestTime: req.requestInstant, message : "Deleted"});
  
});
//exportamos el router para poder 'usarlo' en nuestra app.
module.exports = todoRouter;
