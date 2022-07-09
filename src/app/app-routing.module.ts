import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { SamplesComponent } from './samples/samples.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { TesimonyComponent } from './tesimony/tesimony.component';

const routes: Routes = [{path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
{path:'testimony',component:TesimonyComponent},
{path:'about',component:AboutComponent},
{path:'sample',component:SamplesComponent},
{path:'education',component:EducationComponent},
{path:'skills',component:SkillsComponent},
{path:'contact',component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
