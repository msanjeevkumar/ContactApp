import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  constructor(private contactService: ContactService){
  }

  ngOnInit(): void {
    this.contactService.getContacts().then(contacts=> console.log(contacts));
  }
}
