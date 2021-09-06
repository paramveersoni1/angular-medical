import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { MessageService } from 'src/app/services/message/message.service';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalVariable } from 'src/app/core/constant';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

    resetForm: FormGroup;
    show = false;

    constructor(
            public bsModalRef: BsModalRef,
            private http: HttpService,
            private message: MessageService,
            private router: Router,
            private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.makeForm();
    }

    makeForm() {
        this.resetForm = this.fb.group({
            old_password: ['', Validators.required],
            new_password: ['', Validators.required],
            changePassword: ['', Validators.required]
        });
    }

    changePassword() {
        if (!!this.resetForm.valid) {
            if (this.resetForm.value.new_password !== this.resetForm.value.changePassword) {
                this.message.toast('info', 'Password and confirmed password not matched!');
            } else {
                this.changePasswordCall();
            }
        } else {
            this.show = true;
        }
    }

    changePasswordCall() {
        const obj = {
            new_password: this.resetForm.value.new_password,
            old_password: this.resetForm.value.old_password
        };
        this.http.postData('', obj).subscribe(response => {
            this.bsModalRef.hide();
            this.message.toast('success', SuccessErrorConst.updatedSuccess);
            localStorage.clear();
            this.router.navigate(['/login']);

        }, error => {
        });
    }

    ngOnDestroy() {
        this.bsModalRef.hide();
    }

}
