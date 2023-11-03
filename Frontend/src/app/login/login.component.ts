import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AutheticationService } from '../authetication.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
    loading = false;
    submitted = false;
    isSuccessful=false
    isSignUpFailed = false;
    errorMessage = "";

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AutheticationService,
    ) {

    }

    ngOnInit() {
    }



    onSubmit() {
        this.submitted = true;

        console.log("l")

        this.loading = true;
        this.authenticationService.login(this.form.username, this.form.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(["/"]);
                },
                error => {
 
                    this.loading = false;
                });
    }
}
