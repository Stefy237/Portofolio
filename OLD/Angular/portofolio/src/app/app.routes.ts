import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumeListComponent } from './resume-list/resume-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'resume', component: ResumeListComponent},
    {path: 'projects', component: ProjectListComponent},
    {path: 'contact', component:  ContactPageComponent}
];
