import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '.';
import Reply from './replies';
interface CommentAttributes {
  id: string;
  user: number;
  content: string;
  product: string;
  userName: string
}

interface CommentCreationAttributes
  extends Optional<CommentAttributes, 'id'> {}

interface CommentInstance
  extends Model<CommentAttributes, CommentCreationAttributes>,
    CommentAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }

const Comment = sequelize.define<CommentInstance>(
  'Comment',
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
      type: DataTypes.INTEGER
    },
    userName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    product: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }
);


Comment.hasMany(Reply, {
  sourceKey: 'id',
  foreignKey: 'commentId',
  as: 'comments_links'
});


Reply.belongsTo(Comment, {
  foreignKey: 'commentId',
  as: 'reply'
});


export default Comment;