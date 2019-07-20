import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { AllContactsComponent } from './components/all-contacts/all-contacts.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

const routes: Routes = [
  { path: '', component: AllContactsComponent },
  { path: 'add', component: AddContactsComponent },
  { path: ':id', component: ContactDetailsComponent }
  // { path: '', redirectTo: 'contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
