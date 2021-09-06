import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiUrl } from '../core/apiUrl';

import { HttpService } from '../services/http/http.service';
import { MessageService } from '../services/message/message.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    show = false;
    form: FormGroup;
    token = '';

    constructor(
            private fb: FormBuilder, private message: MessageService, private router: Router,
            private http: HttpService, private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        localStorage.clear();
        this.route.queryParams.subscribe(data => {
            this.token = data.token;
        });
        this.makeForm();
    }

    makeForm() {
        this.form = this.fb.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    formSubmit(): void {
        this.show = true;
        if (this.form.valid) {
            if (this.form.value.password === this.form.value.confirmPassword) {
                this.resetPassword();
            } else {
                this.message.alert('info', 'Password and confirm password not matched!');
            }
        }
    }

    resetPassword() {
        const obj = {
            password: this.form.value.password,
            token: this.token
        };
        const url = '';
        // if(this.router.url.startsWith('/reset-password-respondent')) {
        //   url = ApiUrl.reset_password_respondent;
        // } else {
        //   url = ApiUrl.reset_password_client;
        // }
        this.http.postData(url, obj).subscribe(response => {
            this.form.reset();
            this.show = false;
            this.message.alert('success', 'Password reset successfully!');
        }, error => {
        });
    }

}
