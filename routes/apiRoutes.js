const router = require("express").Router();
const { Workouts } = require("../models/index.js");

// GET route, api/workouts

router.get("/workouts", (req, res) => {
  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((exerciseData) => {
      res.json(exerciseData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT route, api/workouts/ 

router.put("/workouts/:_id", (req, res) => {
  Workouts.findByIdAndUpdate(
    req.params._id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((updatedExercise) => {
      res.json(updatedExercise);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// POST route, api/workouts/ 

router.post("/workouts", ({ body }, res) => {
  Workouts.create(body)
    .then((EmptyData) => {
      res.json(EmptyData);
    })
    .catch((err) => {
      console.error(err);
    });
});

// GET route, api/workouts/

router.get("/workouts/range", (req, res) => {
  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .sort({ day: -1 })
    .limit(7)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;