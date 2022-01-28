import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {FeedbackEntities} from '../entities/feedback.enteties';
import {InjectRepository} from '@nestjs/typeorm';
import {from, Observable} from 'rxjs';
import {IFeedback} from './feedback-form.interface';

@Injectable()
export class FeedbackFormService {
    constructor(
        @InjectRepository(FeedbackEntities)
        private readonly feedbackFormRepository: Repository<FeedbackEntities>
    ) {}


    getAll(): Observable<IFeedback[]> {
        return from(this.feedbackFormRepository.find());
    }

    createMessage(feedbackForm: IFeedback): Observable<IFeedback> {
        return from(this.feedbackFormRepository.save(feedbackForm));
    }


}
