import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot([], { initialNavigation: 'enabled' })],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
