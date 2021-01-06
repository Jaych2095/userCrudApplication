import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DisplayRecordComponent } from './display-record/display-record.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './shared/post.service';

const appRoutes: Routes=[
  {path:'recordList', component:DisplayRecordComponent},
  {path:'recordList/:id', component:AddRecordComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayRecordComponent,
    AddRecordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
    ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
