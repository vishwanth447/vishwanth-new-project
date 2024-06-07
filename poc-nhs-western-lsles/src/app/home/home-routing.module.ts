import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { BecomeAMemberComponent } from '../components/become-a-member/become-a-member.component';
import { LibraryCatalougeComponent } from '../components/library-catalouge/library-catalouge.component';
WelcomeComponent
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'become-a-member',
    component: BecomeAMemberComponent
  },
  {
    path: 'library-catalogue',
    component: LibraryCatalougeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
