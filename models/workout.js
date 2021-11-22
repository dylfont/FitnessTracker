const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
exercises: [
{
  type: {
    type: String,
    trim: true,
    required: "Exercise type is required",
  },
  name: {
    type: String,
    trim: true,

  },
  distance: {
    type: Number,
     
  },
  weight: {
    type: Number,
     
  },
  sets: {
    type: Number,
     
  },
  reps: {
    type: Number,
     
  },
  duration: {
    type: Number,
    required: true, 
  }
}
]


});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;