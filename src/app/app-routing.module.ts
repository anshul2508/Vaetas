import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './Components/login/login.component';
import {VideosComponent} from './Components/dashboard/videos/videos.component';
import {SingleVideoComponent} from './Components/dashboard/videos/single-video/single-video.component';
import {AccountsComponent} from './Components/dashboard/accounts/accounts.component';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './Components/page-not-found/page-not-found.component';
import {AnonGuard} from './Guards/AnonGuard';
import {AuthGuard} from './Guards/AuthGuard';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {CallToActionsComponent} from './Components/dashboard/call-to-actions/call-to-actions.component';
import {EmailsComponent} from './Components/dashboard/emails/emails.component';
import {TemplatesComponent} from './Components/dashboard/templates/templates.component';
import {SettingsComponent} from './Components/dashboard/settings/settings.component';
import {SignupComponent} from './Components/login/signup/signup.component';
import {ForgetPasswordComponent} from './Components/login/forget-password/forget-password.component';
import {SingleTemplateComponent} from './Components/dashboard/templates/single-template/single-template.component';
import {ComposeEmailComponent} from './Components/dashboard/emails/compose-email/compose-email.component';
import {OnboardComponent} from './Components/onboard-home/onboard/onboard.component';
import {StepOneComponent} from './Components/onboard-home/onboard/steps/step-one/step-one.component';
import {StepsComponent} from './Components/onboard-home/onboard/steps/steps.component';
import {StepTwoComponent} from './Components/onboard-home/onboard/steps/step-two/step-two.component';
import {StepThreeComponent} from './Components/onboard-home/onboard/steps/step-three/step-three.component';
import {OnboardHomeComponent} from './Components/onboard-home/onboard-home.component';



const appRoutes: Routes = [
  {path: 'login', component: LoginComponent , canActivate: [AnonGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [AnonGuard]},
  {path: 'forgetpassword' , component: ForgetPasswordComponent, canActivate: [AnonGuard] },
  {path: 'onboard', component: OnboardHomeComponent, children: [
    {path: '', component: OnboardComponent},
    {path: 'step', component: StepsComponent, children: [
      {path: '1', component: StepOneComponent},
      {path: '2', component: StepTwoComponent},
      {path: '3', component: StepThreeComponent},
    ]},
  ]},
  {path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      {path: 'accounts', component: AccountsComponent},
      {path: 'ctas', component: CallToActionsComponent},
      {path: 'videos', component: VideosComponent},
      {path: 'videos/:id', component: SingleVideoComponent},
      {path: 'emails', component: EmailsComponent, children: [
        {path: 'send', component: ComposeEmailComponent },
      ]},
      {path: 'templates', component: TemplatesComponent, children: [
        {path: 'templates/:id', component: SingleTemplateComponent},
      ]},
      {path: 'settings', component: SettingsComponent},
      {path: '', redirectTo: 'videos', pathMatch: 'full' },
    ] },
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
