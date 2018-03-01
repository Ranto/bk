import { SurveyListComponent } from './survey/survey-list/survey-list.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/survey', pathMatch: 'full' },
    {
        path: '', component: MainComponent, children: [
            { path: 'survey', component: SurveyListComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
