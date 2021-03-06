'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({Post }) {
            // define association here
            // userId
            this.belongsTo(Post, { foreignKey: 'postId', as: 'post' });
        }

        toJSON() {
            return { ...this.get() }
        }
    }
    Comment.init(
        {
            postId: {
                type: DataTypes.INTEGER,
                allowNull:false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            body: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'comments',
            modelName: 'Comment',
        }
    )
    return Comment;
}