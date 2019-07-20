import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'myapp-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  public contactInfo: FormGroup = null;

  constructor(
    private readonly _contactService: ContactService,
    private readonly formBuilder: FormBuilder,
    private readonly router: ActivatedRoute
  ) {
  }

  async ngOnInit() {
    const contactId = this.router.snapshot.params.id;
    const contactDetails = (await this._contactService.get(contactId)) as ContactModel;

    this.contactInfo = this.formBuilder.group({
      name: [contactDetails.name, Validators.compose([Validators.required])],
      dateOfBirth: [new Date(contactDetails.dateOfBirth).toDateString(), Validators.compose([Validators.required])],
      budget: [contactDetails.budget, Validators.compose([Validators.required])],
      gender: [contactDetails.gender, Validators.compose([Validators.required])],
      email: [contactDetails.email, Validators.compose([Validators.required])]
    });
  }
}
