import { Gender } from '../enums';

export interface ContactDto {
  id: number;
  name: string;
  dateOfBirth: string;
  email: string;
  gender: Gender;
  budget: number;
}
