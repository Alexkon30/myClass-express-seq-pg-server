import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

const Lesson_Students = sequelize.define('Lesson_Students', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  //   allowNull: false,
  // },
  visit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
  }
});

export default Lesson_Students

