import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANT } from '../../core/constant';

@Pipe({name: 'language'})
export class SelectLanguage implements PipeTransform {
    transform(value: any): string {
        let temp = CONSTANT.languages[0].name;
        CONSTANT.languages.forEach(val => {
            if (parseInt(String(val.id), 10) === parseInt(value, 10)) {
                temp = val.name;
            }
        });
        return temp;
    }
}
