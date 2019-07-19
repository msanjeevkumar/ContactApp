import { ContactDto } from './contact.dto';

export interface ContactsDto {
  total: number;
  limit: number;
  skip: number;
  data: ContactDto;
}
