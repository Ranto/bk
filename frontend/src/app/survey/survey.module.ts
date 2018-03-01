import { SurveyService } from './survey.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SurveyListComponent } from './survey-list/survey-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [SurveyListComponent],
  providers: [SurveyService]
})
export class SurveyModule { }
