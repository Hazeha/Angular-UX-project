import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { FanContainerComponent } from './fan-setting/fan-container/fan-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FanBasicComponent } from './fan-setting/fan-basic/fan-basic.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FanSettingComponent } from './fan-setting/fan-setting.component';
import { NewlearningelementsComponent } from './newlearningelements/newlearningelements.component';
import { InfoComponent } from './info/info.component';
import { QuizComponent } from './quiz/quiz.component';

export const routing = RouterModule.forRoot([
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'cp', component: ControlpanelComponent },
  // TODO This needs to be changed
  {
    path: 'cp/fanSetting', component: FanSettingComponent, children: [
      { path: '', component: FanBasicComponent },
      { path: 'basic', component: FanBasicComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'login/:invalidLoginMessage', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/:invalidLoginMessage', component: SignupComponent },
  { path: 'cp/fan', component: FanContainerComponent },
  { path: 'learningelement', component: NewlearningelementsComponent },
  { path: 'learningelement/info', component: InfoComponent },
  { path: '**', component: PageNotFoundComponent },

]);


