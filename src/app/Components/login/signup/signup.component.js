"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupComponent = (function () {
    function SignupComponent(router, invidz) {
        this.router = router;
        this.invidz = invidz;
        this.loading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupData = new forms_1.FormGroup({
            'firstName': new forms_1.FormControl(null, forms_1.Validators.required),
            'lastName': new forms_1.FormControl(null, forms_1.Validators.required),
            'email': new forms_1.FormControl(null, [forms_1.Validators.email, forms_1.Validators.required]),
            'password': new forms_1.FormControl(null, forms_1.Validators.required),
            'confirmPassword': new forms_1.FormControl(null, forms_1.Validators.required),
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        this.loading = true;
        console.log('signup successful');
        this.invidz.signup(this.signupData.get('firstName').value, this.signupData.get('password').value, this.signupData.get('confirmPassword').value, this.signupData.get('lastName').value, this.signupData.get('email').value);
        this.router.navigate(['videos']);
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css']
    })
], SignupComponent);
exports.SignupComponent = SignupComponent;
