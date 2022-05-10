import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '@components/dashboard/dashboard.component';
// import { GoalViewerComponent } from '@components/goal-viewer/goal-viewer.component';
import { JournalEntryComponent } from '@components/journal-entry/journal-entry.component';
import { TodayviewComponent } from '@components/today-view/today-view.component';

const routes: Routes = [
  {
    path: 'today',
    component: TodayviewComponent
  },
  { 
    path: 'journals', 
    component: JournalEntryComponent 
  },
  // {
  //   path:'goals',
  //   component: GoalViewerComponent
  // },
  { 
    path: '',
    component: DashboardComponent  
  },
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
