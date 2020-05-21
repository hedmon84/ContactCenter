const express = require('express');
const newPositions = express.Router();
const cors = require('cors');
const NewPositionModel = require('../models/NewPosition');
newPositions.use(cors());
process.env.SECRET_KEY = 'secret';

newPositions.get('/newPositions', (req, res) => {
  const newPositions = NewPositionModel.findAll();
  newPositions
    .then(positions => {
      const data = positions.map(position => position.dataValues);
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .send('There was an error when trying to get job positions');
    });


});



newPositions.post('/addPosition', (req, res) => {

  const userData = {
    name: req.body.name,
    description: req.body.description,

  };


  NewPositionModel.findOne({
    where: {
      name: req.body.name
    }
  }).then(newpositions => {
    if (!newpositions) {
      NewPositionModel.create(userData)
        .then(newpositions => {
          res.json({ status: newpositions.name + 'Registered!' });

        }).catch(err => {
          res.send('error: ' + err);
        });

    } else {
      res.json({ error: 'User already exists' });
    }

  }).catch(err => {
    res.send('error: ' + err);
  });







});








module.exports = newPositions;
