import { Schema, model, models } from "mongoose";

const portfolioSchema = new Schema({
    company: { type: String, required: true },
    year: { type: String, required: true },
    title: { type: String, required: true },
    results: { type: Array, required: true },
    url_link: { type: String, required: true },
    github_link: { type: String, required: true },
    backend_link: { type: String, required: true },
    image: { type: String, required: true },
    otherImage: { type: Array, required: true },
    tech: { type: Array, required: true },
    otherResult: { type: Array, required: true },
    description: { type: String, required: true },
},{ timestamps: true });

const Project = models.Project || model("Project", portfolioSchema);
export default Project;