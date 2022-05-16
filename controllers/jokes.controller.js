//CRUD functions
const req = require('express/lib/request');
const res = require('express/lib/response');
const Joke = require('../models/jokes.model')

//READ all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => {
            // console.log(allDaJokes);
            res.json({Jokes: allDaJokes});
        })
        .catch (err => res.json({message: 'Something went wrong...', error: err}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params.id})
        .then(oneJoke => {
            // console.log(allDaJokes);
            res.json({Joke: oneJoke});
        })
        .catch (err => res.json({message: 'Something went wrong...', error: err}));
}

//CREATE joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke=> {
            // console.log(newlyCreatedJoke);
            res.json({newlyCreatedJoke: newlyCreatedJoke});
        })
        .catch (err => res.json({message: 'Something went wrong...', error: err})); 
}

//UPDATE joke
module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedJoke => res.json({Joke: updatedJoke}))
        .catch(err => res.json({message: 'Something went wrong...', error: err}))
}

//DELETE joke
module.exports.deleteJoke = (req, res) => {
    // console.log(req.params);
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: 'Something went wrong...', error: err}))
}