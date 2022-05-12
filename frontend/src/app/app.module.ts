import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { GoalViewerComponent } from '@components/goal-viewer/goal-viewer.component';
import { JournalEntryComponent } from '@components/journal-entry/journal-entry.component';
import { JournalViewerComponent } from '@components/journal-viewer/journal-viewer.component';

import { HttpRequestInterceptor } from '@services/HttpRequestInterceptor';
import { GoalCreatorComponent } from '@components/goal-creator/goal-creator.component';
import { CategoryChooserComponent } from './components/journal-entry/category-chooser/category-chooser.component';
import { TodayviewComponent } from '@components/today-view/today-view.component';
import { SuccessListComponent } from '@components/success-list/success-list.component';
import { TodoListItemComponent } from '@components/todo-list-item/todo-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JournalEntryComponent,
    JournalViewerComponent,
    GoalCreatorComponent,
    GoalViewerComponent,
    CategoryChooserComponent,
    TodayviewComponent,
    SuccessListComponent,
    TodoListItemComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpRequestInterceptor, 
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
