import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { JournalEntryComponent } from '@components/journal-entry/journal-entry.component';

const routes: Routes = [
  { 
    path: 'journals', 
    component: JournalEntryComponent 
  },
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
