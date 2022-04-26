import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

const Teacher = sequelize.define('Teacher', {
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

export default Teacher
