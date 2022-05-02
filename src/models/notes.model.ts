import { Model, DataTypes } from "sequelize";
import { ExtendedNoteType } from "../types/notes.types";
import { sequelize } from "../services/connectToDatabase";

class Note extends Model<ExtendedNoteType> {}

Note.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Note must have a title',
      },
      notEmpty: {
        msg: 'Fill the title'
      }
    }
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Note must have a content',
      },
      notEmpty: {
        msg: 'Fill the content'
      }
    }
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Random Thought'
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  created: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  tableName: 'user_notes',
  timestamps: false,
  modelName: 'Note'
});

export default Note;