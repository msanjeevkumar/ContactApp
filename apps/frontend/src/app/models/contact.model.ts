import { ContactDto, Gender } from '@myapp/data';

export class ContactModel implements ContactDto {
  id: number;
  name: string;
  dateOfBirth: string;
  email: string;
  gender: Gender;
  budget: number;
}
