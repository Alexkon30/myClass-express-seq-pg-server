import express from 'express';
import {sequelize} from './app/config/db.config.js'
import corsMiddleware from './app/middleware/cors.middleware.js';
import mainRouter from './app/routes/mainRouter.js'

import Lesson from './app/models/Lesson.js';
import Teacher from './app/models/Teacher.js';
import Student from './app/models/Student.js';
import Lesson_Students from './app/models/Lesson_students.js';
import Lesson_Teachers from './app/models/Lesson_teachers.js';

const app = express();

app
  .use(corsMiddleware)
  .use(express.json())
  .use('/', mainRouter)

  
const PORT = process.env.PORT || 8080

Lesson.belongsToMany(Teacher, {through: Lesson_Teachers})
Teacher.belongsToMany(Lesson, {through: Lesson_Teachers})

Lesson.belongsToMany(Student, {through: Lesson_Students})
Student.belongsToMany(Lesson, {through: Lesson_Students})



sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, function(){
      console.log(`Successful connection, listening port ${PORT}`);
    });
  }).catch(err=>console.log(err));


