import { dataController } from "../controller/dataController.js";
import express from "express";

const Router = express.Router();
Router.route("/data").get(dataController);

export default Router;
