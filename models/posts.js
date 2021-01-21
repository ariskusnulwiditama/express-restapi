/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    static associate(models) {
      // define association here
    }
  };
  posts.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    tags: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};*/

'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    tags: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {
    timestamps: true,
    tableName: 'posts',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  posts.associate = function(models) {
    //associate can be defined here
  };
  return posts;
};
