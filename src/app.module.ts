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
            host: process.env.POSTGRES_HOST,
            port: parseInt(<string>process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            autoLoadEntities: true,
            synchronize: true

        }),
        FeedbackFormModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
