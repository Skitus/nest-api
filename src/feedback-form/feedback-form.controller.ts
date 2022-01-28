/*
import {Body, Controller, Get, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {CreateMessageDto} from './dto/create-message.dto';
import {FeedbackFormService} from './feedback-form.service';

@Controller('feedback-form')
export class FeedbackFormController {

    constructor(private readonly feedbackFromService: FeedbackFormService) {
    }

    @Get()
    getAll() {
        return this.feedbackFromService.getAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createMessage(@Body() createMessageDto: CreateMessageDto) {
        return this.feedbackFromService.createMessage(createMessageDto);
    }
}
*/
