const JokeController = require('../controllers/jokes.controller')
// console.log(JokeController);

module.exports = (app) => {
    // app.get('/api', (req, res) => {
    //     res.json({
    //         status: 200
    //     })
    // })
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.put('/api/jokes/:id', JokeController.updateJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}