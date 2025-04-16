import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { StagesIngComponentComponent } from './stages-ing-component/stages-ing-component.component';
import { AddStageIngComponentComponent } from './add-stage-ing-component/add-stage-ing-component.component';

const r:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home" ,component:HomeComponent},
    {path:"stage",component:StagesIngComponentComponent},
    {path:"addstage",component:AddStageIngComponentComponent},
    {path:"**",component:NotfoundComponent},
    
  ]

  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(r),
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule { }




