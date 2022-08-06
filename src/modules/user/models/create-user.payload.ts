import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateUserPayload {
  @ApiProperty()//obrigatorio
  @IsDefined({ message: 'O nome deve ser definido' })//checa se é definido e customiza mensagem
  @IsString({ message: 'O nome deve ser uma string' })//checa se é string
  @MinLength(2, { message: 'O nome deve ser maior ou igual a 2 caracteres' })
  public name: string;//checa se tem min 2 caracter

  @ApiProperty()
  @IsDefined({ message: 'O email deve ser definido' })
  @IsString({ message: 'O email deve ser uma string' })
  @IsEmail({ message: 'O email não é válido' })//checa se é email
  public email: string;

  @ApiProperty()
  @IsDefined({ message: 'A senha deve ser definida' })
  @IsString({ message: 'A senha deve ser uma string' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  public password: string;

  @ApiPropertyOptional()
  @IsOptional()//opcional
  @IsString({ message: 'O cargo deve ser uma string' })
  public role?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: 'A URL da imagem deve ser uma string' })
  @IsUrl({}, { message: 'A URL deve ser válida' })//checa se é url
  public imageUrl?: string;
}
