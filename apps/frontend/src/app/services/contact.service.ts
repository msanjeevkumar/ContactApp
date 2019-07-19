import feathers, { Service } from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import { ContactDto, ContactsDto } from '@myapp/data';
import { environment } from '../../environments/environment';

export class ContactService {
  public app: any;
  public contacts: Service<any>;

  constructor() {
    this.contacts = feathers()
      .configure(rest(environment.apiBaseUrl).fetch(window.fetch))
      .service('contacts');
  }

  getContacts = async (): Promise<ContactsDto> =>
    this.contacts.find({
      query: {
        $skip: 10
      }
    });

  create = async (contact: ContactDto) => this.contacts.create(contact);

  get = async (id: number) => this.contacts.get(id);
}
