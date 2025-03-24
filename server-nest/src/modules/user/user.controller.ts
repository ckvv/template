import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth, User } from '#decorators';
import { ROLES } from '#constants';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Auth(ROLES.ADMIN)
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

  @Get()
  @Auth(ROLES.ALL)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @Auth(ROLES.ALL)
  findOne(@Param('id', ParseIntPipe) id: string, @User() user) {
    console.log(`user:${JSON.stringify(user)}`);
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @Auth(ROLES.ADMIN)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @Auth(ROLES.ADMIN)
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
