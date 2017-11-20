"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./Components/login/login.component");
var videos_component_1 = require("./Components/dashboard/videos/videos.component");
var single_video_component_1 = require("./Components/dashboard/videos/single-video/single-video.component");
var accounts_component_1 = require("./Components/dashboard/accounts/accounts.component");
var core_1 = require("@angular/core");
var page_not_found_component_1 = require("./Components/page-not-found/page-not-found.component");
var AnonGuard_1 = require("./Guards/AnonGuard");
var AuthGuard_1 = require("./Guards/AuthGuard");
var dashboard_component_1 = require("./Components/dashboard/dashboard.component");
var call_to_actions_component_1 = require("./Components/dashboard/call-to-actions/call-to-actions.component");
var emails_component_1 = require("./Components/dashboard/emails/emails.component");
var templates_component_1 = require("./Components/dashboard/templates/templates.component");
var settings_component_1 = require("./Components/dashboard/settings/settings.component");
var signup_component_1 = require("./Components/login/signup/signup.component");
var forget_password_component_1 = require("./Components/login/forget-password/forget-password.component");
var single_template_component_1 = require("./Components/dashboard/templates/single-template/single-template.component");
var compose_email_component_1 = require("./Components/dashboard/emails/compose-email/compose-email.component");
var onboard_component_1 = require("./Components/onboard-home/onboard/onboard.component");
var step_one_component_1 = require("./Components/onboard-home/onboard/steps/step-one/step-one.component");
var steps_component_1 = require("./Components/onboard-home/onboard/steps/steps.component");
var step_two_component_1 = require("./Components/onboard-home/onboard/steps/step-two/step-two.component");
var step_three_component_1 = require("./Components/onboard-home/onboard/steps/step-three/step-three.component");
var onboard_home_component_1 = require("./Components/onboard-home/onboard-home.component");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [AnonGuard_1.AnonGuard] },
    { path: 'signup', component: signup_component_1.SignupComponent, canActivate: [AnonGuard_1.AnonGuard] },
    { path: 'forgetpassword', component: forget_password_component_1.ForgetPasswordComponent, canActivate: [AnonGuard_1.AnonGuard] },
    { path: 'onboard', component: onboard_home_component_1.OnboardHomeComponent, children: [
            { path: '', component: onboard_component_1.OnboardComponent },
            { path: 'step', component: steps_component_1.StepsComponent, children: [
                    { path: '1', component: step_one_component_1.StepOneComponent },
                    { path: '2', component: step_two_component_1.StepTwoComponent },
                    { path: '3', component: step_three_component_1.StepThreeComponent },
                ] },
        ] },
    { path: '', component: dashboard_component_1.DashboardComponent, canActivate: [AuthGuard_1.AuthGuard],
        children: [
            { path: 'accounts', component: accounts_component_1.AccountsComponent },
            { path: 'ctas', component: call_to_actions_component_1.CallToActionsComponent },
            { path: 'videos', component: videos_component_1.VideosComponent },
            { path: 'videos/:id', component: single_video_component_1.SingleVideoComponent },
            { path: 'emails', component: emails_component_1.EmailsComponent, children: [
                    { path: 'send', component: compose_email_component_1.ComposeEmailComponent },
                ] },
            { path: 'templates', component: templates_component_1.TemplatesComponent, children: [
                    { path: 'templates/:id', component: single_template_component_1.SingleTemplateComponent },
                ] },
            { path: 'settings', component: settings_component_1.SettingsComponent },
            { path: '', redirectTo: 'videos', pathMatch: 'full' },
        ] },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
