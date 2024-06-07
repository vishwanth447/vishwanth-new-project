import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BecomeAMemberComponent } from './components/become-a-member/become-a-member.component';
import { LibraryCatalougeComponent } from './components/library-catalouge/library-catalouge.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SharedModule } from './shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BecomeAMemberComponent,
    LibraryCatalougeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    SharedModule,
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
