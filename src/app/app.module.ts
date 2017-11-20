import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import {HeaderComponent} from './Components/dashboard/header/header.component';
import { VideosComponent } from './Components/dashboard/videos/videos.component';
import { SingleVideoComponent } from './Components/dashboard/videos/single-video/single-video.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule,
  MatSnackBarModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {InvidzService} from './Services/Invidz';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import { AccountsComponent } from './Components/dashboard/accounts/accounts.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CallToActionsComponent } from './Components/dashboard/call-to-actions/call-to-actions.component';
import { EmailsComponent } from './Components/dashboard/emails/emails.component';
import { TemplatesComponent } from './Components/dashboard/templates/templates.component';
import { SettingsComponent } from './Components/dashboard/settings/settings.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ForgetPasswordComponent } from './Components/login/forget-password/forget-password.component';
import { SignupComponent } from './Components/login/signup/signup.component';
import { SingleTemplateComponent } from './Components/dashboard/templates/single-template/single-template.component';
import { ComposeEmailComponent } from './Components/dashboard/emails/compose-email/compose-email.component';
import {AuthGuard} from './Guards/AuthGuard';
import {AnonGuard} from './Guards/AnonGuard';
import {StoreModule} from '@ngrx/store';
import {myReducer} from './reducers/index';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AlertService} from './Services/alert';
import {TruncatePipe} from './Pipes/truncate';
import {FlexAlignmentHackDirective} from './Directives/flex-alignment-hack';
import {TimePipe} from './Pipes/time';
import { OnboardComponent } from './Components/onboard-home/onboard/onboard.component';
import { StepOneComponent } from './Components/onboard-home/onboard/steps/step-one/step-one.component';
import { StepsComponent } from './Components/onboard-home/onboard/steps/steps.component';
import { StepTwoComponent } from './Components/onboard-home/onboard/steps/step-two/step-two.component';
import { StepThreeComponent } from './Components/onboard-home/onboard/steps/step-three/step-three.component';
import {OnboardHomeComponent} from './Components/onboard-home/onboard-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    VideosComponent,
    SingleVideoComponent,
    AccountsComponent,
    DashboardComponent,
    CallToActionsComponent,
    EmailsComponent,
    TemplatesComponent,
    SettingsComponent,
    PageNotFoundComponent,
    ForgetPasswordComponent,
    SignupComponent,
    SingleTemplateComponent,
    ComposeEmailComponent,
    TruncatePipe,
    TimePipe,
    FlexAlignmentHackDirective,
    OnboardComponent,
    StepOneComponent,
    StepsComponent,
    StepTwoComponent,
    StepThreeComponent,
    OnboardHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    StoreModule.provideStore(myReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [InvidzService, AuthGuard, AnonGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
