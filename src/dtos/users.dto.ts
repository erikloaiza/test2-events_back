import { IsString, IsEmail, Length, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public roleId: string;

  @IsString()
  @Length(6)
  public password: string;
}

export class LoginUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @Length(6)
  public password: string;
}