import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { MembershipComponent } from './membership/membership.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { ResourcesComponent } from './resources/resources.component';
import { BursariesComponent } from './bursaries/bursaries.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: EducationComponent },
    { path: 'membership', component: MembershipComponent },
    { path: 'events', component: EventsComponent },
    { path: 'news', component: NewsComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'bursaries', component: BursariesComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
