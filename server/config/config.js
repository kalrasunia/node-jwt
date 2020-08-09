module.exports = {
  username: 'newuser',
  password: 'password',
  database: 'jwt_app',
  host: '127.0.0.1',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};