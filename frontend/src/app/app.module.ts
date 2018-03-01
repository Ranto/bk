import { SurveyModule } from './survey/survey.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToasterModule } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SurveyModule,
        ToasterModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
