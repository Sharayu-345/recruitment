import mongoose, { Schema, models } from "mongoose";

const ApplicationSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    prn: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    accommodation: {
      type: String,
      required: true,
    },

    preference1: {
      type: String,
      required: true,
    },

    preference2: {
      type: String,
      required: true,
    },

    preference3: {
      type: String,
      required: true,
    },

    preference4: {
      type: String,
      required: true,
    },

    whyJoin: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Application =
  models.Application || mongoose.model("Application", ApplicationSchema);

export default Application;