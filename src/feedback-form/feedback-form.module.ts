import {Module} from '@nestjs/common';
import {FeedbackFormService} from './feedback-form.service';
import {FeedbackFormController} from './feedback-form.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {FeedbackEntities} from '../entities/feedback.enteties';

@Module({
    imports: [TypeOrmModule.forFeature([FeedbackEntities])],
    providers: [FeedbackFormService],
    controllers: [FeedbackFormController]
})

export class FeedbackFormModule {

}