import { Controller, Get } from '@nestjs/common';

@Controller('songs')
export class UsersController {
  @Get()
  getSongs(): string {
    return 'All items';
  }
}
