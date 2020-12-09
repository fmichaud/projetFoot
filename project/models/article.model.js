/**
 * Article (Sequelize) model.
 */

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('article', {
    id: {
      type: DataTypes.STRING.BINARY,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.BLOB('long'),
    },
    description: {
      type: DataTypes.STRING,
    }
  })

  return Article
}
