import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ContactModel } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'myapp-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  contacts: Observable<ContactModel[]>;

  constructor(private readonly _contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts = (from(this._contactService.getContacts())
      .pipe(pluck('data')) as undefined) as Observable<ContactModel[]>;
  }
}
