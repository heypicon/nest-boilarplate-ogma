module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'simplifiyou-development',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true
};
