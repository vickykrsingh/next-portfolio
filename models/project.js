import mongoose, { Schema, model, models } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    redirect: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    category: {
      // type:mongoose.Schema.Types.ObjectId,
      // ref:'category'
      type: String,
      required: true,
    },
    technology: {
      type: String,
      required: true,
    },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
      signature: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const projectModel = models.projects || model("projects", projectSchema);

export default projectModel;
