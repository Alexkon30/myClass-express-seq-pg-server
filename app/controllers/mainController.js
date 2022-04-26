import Lesson from '../models/Lesson.js';
import Teacher from '../models/Teacher.js';
import Student from '../models/Student.js';
import Lesson_Students from '../models/Lesson_students.js';
import Lesson_Teachers from '../models/Lesson_teachers.js';

class mainController {
  async getLessons(req, res) {
    res.json({ message: 'get lessons method' });
  }

  async createLessons(req, res) {
    const { teacherIds, title, days, firstDate, lessonsCount, lastDate } =
      req.body;
    console.log(teacherIds, title, days, firstDate, lessonsCount, lastDate);

    if (lessonsCount && lastDate) {
        res.status(400).json({message: 'wrong data'})
    }

    res.json({message: 'create lessons method'})
  }

  async createTest(req, res) {
    //создаем инстанс Lesson
    const lesson1 = await Lesson.create({ date: '2022-04-30' });
    // const lesson2 = await Lesson.create()

    //вместо создания учителей д.б. поиск по id/имени
    const teacher1 = await Teacher.create({ name: 'Phill' });
    const teacher2 = await Teacher.create({ name: 'Tom' });

    await lesson1.addTeachers([teacher1, teacher2]);

    //вместо создания студентов д.б. поиск по id/имени
    // const student1 = await Student.create({name: 'student1'})
    // const student2 = await Student.create({name: 'student2'})

    // lesson1.addStudents([student1, student2])

    res.json({ message: 'test lesson created' });
  }

  async getAll(_, res) {
    let teachers = await Teacher.findAll();
    let lessons = await Lesson.findAll();
    let students = await Student.findAll();
    let l_teach = await Lesson_Teachers.findAll();
    let l_stud = await Lesson_Students.findAll();
    res.json({ teachers, lessons, students, l_teach, l_stud });
  }
}

export default new mainController();
