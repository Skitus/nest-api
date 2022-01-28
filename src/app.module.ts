import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {FeedbackFormModule} from './feedback-form/feedback-form.module';
import {TypeOrmModule} from '@nestjs/typeorm';

require('dotenv').config();

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
            /*host: process.env.POSTGRES_HOST,
            port: parseInt(<string>process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,*/
            autoLoadEntities: true,
            synchronize: true,
            entities: ['dist/**/*.entity{.ts,.js}'],
        }),
        FeedbackFormModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
