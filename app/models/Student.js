import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

const Student = sequelize.define('Student', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  //   allowNull: false,
  // },
  name: {
    type: DataTypes.STRING(10),
    allowNull: false,
  }
});

export default Student
