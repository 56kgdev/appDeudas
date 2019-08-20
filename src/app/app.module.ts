import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//Páginas del login
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
//Import del Provider de la API
import { ApiTestProvider } from '../providers/api-test/api-test';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //Agregamos Login en Declaraions
    LoginPage,
    RegisterPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //Agregamos el Login en entryCoponents
    LoginPage,
    SettingsPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiTestProvider
  ]
})
export class AppModule {}
