import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { CONSTANT, GlobalVariable } from '../../core/constant';
import { environment } from '../../../environments/environment';
import { MessageService } from '../message/message.service';
import { Lightbox } from 'ngx-lightbox';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    title;
    breadcrumb;
    CONSTANT = CONSTANT;

    constructor(private location: Location, private message: MessageService, public lightbox: Lightbox) {
    }

    // localstorage setvalue, clear and get value start
    getToken() {
        if (!!localStorage.getItem(GlobalVariable.tokenKey)) {
            return localStorage.getItem(GlobalVariable.tokenKey);
        } else {
            return '';
        }
    }

    setToken(data) {
        localStorage.setItem(GlobalVariable.tokenKey, data);
    }

    setLocalData(key: string, data: any, json?: boolean) {
        localStorage.setItem(key, json ? JSON.stringify(data) : data);
    }

    getLocalData(key: string, json?: boolean) {
        let myData: any = null;
        try {
            myData = json
                    ? JSON.parse(localStorage.getItem(key))
                    : localStorage.getItem(key);
            return myData;
        } catch (error) {
            if (error instanceof SyntaxError) {
                this.clearLocalData(key);
            }
            return null;
        }
    }

    clearAllLocalData() {
        localStorage.clear();
    }

    clearLocalData(key: string) {
        localStorage.removeItem(key);
    }

    // localstorage setvalue, clear and get value end

    goBack() {
        this.location.back();
    }

    cal(page, limit, count) {
        if (page * limit <= count) {
            return page * limit;
        } else {
            return count;
        }
    }

    setImagePath(data) {
        if (data) {
            const isExist = data.includes('http');
            if (isExist) {
                return data;
            } else {
                return `${environment.apiBaseUrl}common/v1/resizer/${data}/300/300`;
            }
        } else {
            return null;
        }
    }

    checkBlockUnblock(data) {
        this.message.toast('success', `${data.isBlocked ? 'Unblocked' : 'Blocked'} Successfully!`);
        data.isBlocked = !data.isBlocked;
    }

    openLightBox(url) {
        if (url) {
            const album = {
                src: url,
                thumb: url
            };
            const imgArr = [album];
            this.lightbox.open(imgArr, 0);
        }
    }

    setDropDownTitle(arr) {
        arr.forEach((val) => {
            val.title = val.name[0].name;
        });
    }
    openMultiple(images) {
        const imgArr: any = [];
        images.forEach(val => {
            imgArr.push({
                src: val,
                thumb: val
            });
        });

        this.lightbox.open(imgArr, 0);
    }
}
