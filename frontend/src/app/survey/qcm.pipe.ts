import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'qcm'
})
export class QcmPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let result = [];
        for (let elem in value) {
            result.push({key: elem, resultat: value[elem]});
        }
        return result;
    }

}
