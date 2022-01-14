import { createConnection } from "typeorm";

createConnection({
  type: "postgres",
  host: "localhost",
  port: 3306,
  username: "admin",
  password: "admin",
  database: "test",
  entities: [__dirname + "/src/modules/**/*.ts"],
  synchronize: true,
})
  .then((connection) => {
    // here you can start to work with your entities
  })
  .catch((error) => console.log(error));
