import { ContactDto } from './contact.dto';

interface ContactsDto {
  total: number,
  limit: number,
  skip: number,
  data: ContactDto
}
