import { Result } from './../model/result.model';
import { environment } from './../../environments/environment';
import { Survey } from './../model/survey.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SurveyService {

    url = environment.apiUrl;

    constructor(private http: HttpClient) { }

    listSurvey(): Observable<Survey[]> {
        return this.http.get(this.url + "/list.json")
            .map(data => data)
            .catch(error => {
                return Observable.throw(error);
            });
    }

    getSurvey(code: string): Observable<Result> {
        return this.http.get(this.url + "/" + code + ".json")
            .map(data => data)
            .catch(error => {
                return Observable.throw(error);
            });
    }

}
