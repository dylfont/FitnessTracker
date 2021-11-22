const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { required: true, type: String },
      name: { required: true, type: String },
      duration: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ],
});

const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workouts;