import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { IsNullable } from 'src/shared/pipe/IsNullable';

export class CreateInfluencerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  niche: string[];

  @IsInt()
  @Min(0)
  followerNumber: number;

  @IsInt()
  @Min(0)
  followingNumber: number;

  @IsNotEmpty()
  @IsString()
  instagram: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  cep: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 2)
  uf: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  place: string;

  @IsNotEmpty()
  @IsString()
  district: string;

  @IsNullable()
  @IsString()
  complement: string | null;
}
