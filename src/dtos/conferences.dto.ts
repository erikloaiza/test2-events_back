import { IsString, IsNumber, Length, IsBoolean, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateConferenceDto {
  @IsNotEmpty()
  public name: string;

  @IsDateString()
  public date: string;

  @IsNumber()
  public quota: number;

  @IsBoolean()
  public state: boolean;
}