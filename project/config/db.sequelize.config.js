/**
 * MySQL settings used by Sequelize framework.
 */

module.exports = {
  HOST: 'foot-db',
  USER: 'root',
  PASSWORD: 'password',
  DB: 'footDb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
