import { Controller, Get } from '@nestjs/common';
import { NewUserToBeRegister } from '../add-user/domain/dto/new-user-dto';
import { User } from '../add-user/domain/models/User';
import usecase from '../add-user/domain/usecase/index';

@Controller('songs')
export class UsersController {
  @Get()
  getSongs(): string {
    return 'All items';
  }
}
