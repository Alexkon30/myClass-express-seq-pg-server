import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

const Lesson_Teachers = sequelize.define('Lesson_Teachers', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  //   allowNull: false,
  // },
});

export default Lesson_Teachers

