import { Table, Column, Model } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'user_notes',
  timestamps: false
})
export class Note extends Model {
  @Column(
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    }
  )
  id: number;

  @Column({
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
  })
  title: string;

  @Column({
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
  })
  content: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Random Thought'
  })
  category: string;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  active: boolean;

  @Column({
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  })
  created: string;
}