import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { DB_NAME, DB_USER , DB_PASSWORD , DB_HOST, DB_PORT } from '../config';
                          
                        // aqui cambia el mongo
const connectionDb = new Sequelize( DB_NAME , DB_USER, DB_PASSWORD , {
  host: DB_HOST ,
  dialect: 'mysql',
  port: Number(DB_PORT) || 3306,
  define: {
    timestamps: false,
  },
});

export default connectionDb;