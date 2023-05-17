import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '.';

interface ReplyAttributes {
  id: string;
  user: string;
  content: string;
  ReplyId: number;
}

interface ReplyCreationAttributes
  extends Optional<ReplyAttributes, 'id'> {}

interface ReplyInstance
  extends Model<ReplyAttributes, ReplyCreationAttributes>,
    ReplyAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }

const Reply = sequelize.define<ReplyInstance>(
  'Reply',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    user: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    ReplyId: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
  }
);

export default Reply;