import { RouterModule } from '@angular/router';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';
import { SurveyService } from './survey.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { ResultElementComponent } from './result-element/result-element.component';
import { QcmPipe } from './qcm.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [SurveyListComponent, SurveyDetailComponent, ResultElementComponent, QcmPipe],
  providers: [SurveyService]
})
export class SurveyModule { }
