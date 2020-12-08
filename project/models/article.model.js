/**
 * Article (Sequelize) model.
 */

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('image', {
    id: {
      type: DataTypes.BLOB(),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.BLOB('long'),
    },
    description: {
      type: DataTypes.STRING,
    }
  })

  return Image
}
