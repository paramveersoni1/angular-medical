import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiUrl } from '../core/apiUrl';
import { HttpService } from '../services/http/http.service';
import { UtilService } from '../services/util/util.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    show = false;
    form: FormGroup;

    constructor(
            private fb: FormBuilder,
            private http: HttpService,
            private uiService: UtilService,
            private router: Router
    ) {}

    ngOnInit() {
        this.makeForm();
    }

    makeForm() {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    signIn(): void {
        this.show = true;
        if (this.form.valid) {
            this.login();
        }
    }

    login() {
        const obj = this.form.value;
        this.http.postData(ApiUrl.LOGIN, obj).subscribe(response => {
            this.localStorageSetRole(response.data);
        }, error => {
        });
    }

    localStorageSetRole(data) {
        this.uiService.setToken(data.access_token);
        this.router.navigate(['/users']);
    }

}
