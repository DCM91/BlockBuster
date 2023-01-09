const express = require('express');

const addDateMiddleware = (req, res, next) => {
    console.log('Request Type:', req.method);
    req.requestInstant = new Date();
    console.log(req.requestInstant = new Date()); 
    next();
};

const validateTodo = (req, res, next) => {
    console.log('Request Type:', req.method);
    req.requestInstant = new Date();
    const todo = req.body;
    
    if (todo.name === undefined || todo.name.length === 0) {
        res.status(400).send({message: 'name required'});
    }
    if (todo.year === undefined || todo.year.length === 0) {
        res.status(400).send({message: 'year required'});
    }
    if (todo.price === undefined || todo.price.length === 0){
        res.status(400).send({message: "price required"});
    }else{
        next();
    }
};


module.exports = {
    addDateMiddleware,
    validateTodo,
}