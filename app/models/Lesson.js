import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

const Lesson = sequelize.define('Lesson', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  //   allowNull: false,
  // },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  title: DataTypes.STRING(100),
  status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
  },
//   status: {
//     type: DataTypes.ENUM,
//     values: ['0', '1'],
//     defaultValue: '0'
// }
});

export default Lesson
