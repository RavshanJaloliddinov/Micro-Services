impor
t { Module } from '@nestjs/common';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      database: "n13",
      models: [],
      synchronize: true
    })
  ],
})
export class AppModule {}
