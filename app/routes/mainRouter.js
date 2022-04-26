import { Router } from "express";
import mainController from "../controllers/mainController.js";

const mainRouter = new Router()

mainRouter.get('/', mainController.getLessons)
mainRouter.post('/lessons', mainController.createLessons)
mainRouter.get('/getAll', mainController.getAll)
mainRouter.post('/createTest', mainController.createTest)

export default mainRouter