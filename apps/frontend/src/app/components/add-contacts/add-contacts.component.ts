import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'myapp-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  public contactInfo: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly _contactService: ContactService
  ) {
  }

  ngOnInit() {
    this.contactInfo = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      dateOfBirth: ['', Validators.compose([Validators.required])],
      budget: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])]
    });
  }

  async addContact() {
    if (this.contactInfo.status === 'VALID') {
      const contact = this.contactInfo.getRawValue();
      contact.dateOfBirth = new Date(contact.dateOfBirth).toISOString();

      try {
        await this._contactService.create(contact);
        await this.router.navigate(['/']);
      } catch (e) {
        alert(e);
      }
    } else {
      this.contactInfo.markAllAsTouched();
    }
  }
}
