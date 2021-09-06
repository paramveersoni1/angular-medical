import { Injectable } from '@angular/core';
import swal, { SweetAlertResult, SweetAlertType } from 'sweetalert2';
import { SuccessErrorConst } from '../../core/successErrorConst';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    message = SuccessErrorConst;

    constructor() {
    }

    /******************* toast messages ********************/
    toast(type: SweetAlertType, title: string) {
        const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            showCloseButton: true,
            timer: 6000,
            animation: false,
            customClass: 'uk-animation-slide-right-small'
        });
        toast.fire({
            type,
            title
        });
    }

    /******************* confirmation dialog box (returns a promise) ********************/
    async confirm(title: string, text?: string): Promise<SweetAlertResult> {
        return await swal.fire({
            title: `Are you sure you want to ${title}?`,
            text,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            animation: false,
            allowOutsideClick: false,
            customClass: 'uk-animation-slide-top-small'
        });
    }

    /******************* alert dialog box with button ********************/
    alert(type: SweetAlertType, title: string, text?: string) {
        swal.fire({
            title,
            animation: false,
            text,
            customClass: 'uk-animation-slide-top-small'
        });
    }

}

