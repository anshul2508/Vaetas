"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var login_component_1 = require("./Components/login/login.component");
var header_component_1 = require("./Components/dashboard/header/header.component");
var videos_component_1 = require("./Components/dashboard/videos/videos.component");
var single_video_component_1 = require("./Components/dashboard/videos/single-video/single-video.component");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var Invidz_1 = require("./Services/Invidz");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var accounts_component_1 = require("./Components/dashboard/accounts/accounts.component");
var dashboard_component_1 = require("./Components/dashboard/dashboard.component");
var call_to_actions_component_1 = require("./Components/dashboard/call-to-actions/call-to-actions.component");
var emails_component_1 = require("./Components/dashboard/emails/emails.component");
var templates_component_1 = require("./Components/dashboard/templates/templates.component");
var settings_component_1 = require("./Components/dashboard/settings/settings.component");
var page_not_found_component_1 = require("./Components/page-not-found/page-not-found.component");
var forget_password_component_1 = require("./Components/login/forget-password/forget-password.component");
var signup_component_1 = require("./Components/login/signup/signup.component");
var single_template_component_1 = require("./Components/dashboard/templates/single-template/single-template.component");
var compose_email_component_1 = require("./Components/dashboard/emails/compose-email/compose-email.component");
var AuthGuard_1 = require("./Guards/AuthGuard");
var AnonGuard_1 = require("./Guards/AnonGuard");
var store_1 = require("@ngrx/store");
var index_1 = require("./reducers/index");
var store_devtools_1 = require("@ngrx/store-devtools");
var alert_1 = require("./Services/alert");
var truncate_1 = require("./Pipes/truncate");
var flex_alignment_hack_1 = require("./Directives/flex-alignment-hack");
var time_1 = require("./Pipes/time");
var onboard_component_1 = require("./Components/onboard-home/onboard/onboard.component");
var step_one_component_1 = require("./Components/onboard-home/onboard/steps/step-one/step-one.component");
var steps_component_1 = require("./Components/onboard-home/onboard/steps/steps.component");
var step_two_component_1 = require("./Components/onboard-home/onboard/steps/step-two/step-two.component");
var step_three_component_1 = require("./Components/onboard-home/onboard/steps/step-three/step-three.component");
var onboard_home_component_1 = require("./Components/onboard-home/onboard-home.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            header_component_1.HeaderComponent,
            videos_component_1.VideosComponent,
            single_video_component_1.SingleVideoComponent,
            accounts_component_1.AccountsComponent,
            dashboard_component_1.DashboardComponent,
            call_to_actions_component_1.CallToActionsComponent,
            emails_component_1.EmailsComponent,
            templates_component_1.TemplatesComponent,
            settings_component_1.SettingsComponent,
            page_not_found_component_1.PageNotFoundComponent,
            forget_password_component_1.ForgetPasswordComponent,
            signup_component_1.SignupComponent,
            single_template_component_1.SingleTemplateComponent,
            compose_email_component_1.ComposeEmailComponent,
            truncate_1.TruncatePipe,
            time_1.TimePipe,
            flex_alignment_hack_1.FlexAlignmentHackDirective,
            onboard_component_1.OnboardComponent,
            step_one_component_1.StepOneComponent,
            steps_component_1.StepsComponent,
            step_two_component_1.StepTwoComponent,
            step_three_component_1.StepThreeComponent,
            onboard_home_component_1.OnboardHomeComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            flex_layout_1.FlexLayoutModule,
            material_1.MatCardModule,
            material_1.MatInputModule,
            material_1.MatButtonModule,
            material_1.MatProgressSpinnerModule,
            material_1.MatMenuModule,
            material_1.MatIconModule,
            material_1.MatSnackBarModule,
            store_1.StoreModule.provideStore(index_1.myReducer),
            store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension(),
        ],
        providers: [Invidz_1.InvidzService, AuthGuard_1.AuthGuard, AnonGuard_1.AnonGuard, alert_1.AlertService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
