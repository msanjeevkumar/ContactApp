import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { AllContactsComponent } from './components/all-contacts/all-contacts.component';
import { AppComponent } from './components/app.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [AppComponent, AllContactsComponent, AddContactsComponent, ContactDetailsComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
