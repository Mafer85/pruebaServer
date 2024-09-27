import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Rol } from '../entities/Rol';
import { Proyecto } from '../entities/Proyecto';
import { Tarea } from '../entities/Tarea';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'proyectodb.cf6osuma612a.us-east-1.rds.amazonaws.com',
  port: 3306,
  username: 'root',
  password: 'Sept.305',  // Cambia esta contraseña por la correcta
  database: 'ProyectoDB',
  synchronize: false,  // Para desarrollo, en producción debe ser false
  logging: true,
  entities: [User, Rol, Proyecto, Tarea],  // Importa las entidades
  migrations: [],
  subscribers: [],
});
