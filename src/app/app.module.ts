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
import { DebtDetailsPage } from '../pages/debt-details/debt-details';
import { PaymentDetailsPage } from '../pages/payment-details/payment-details';
//Import del Provider de la API
import { ApiTestProvider } from '../providers/api-test/api-test';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
//import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { ContactsPage } from '../pages/contacts/contacts';
import { ContactsApiProvider } from '../providers/contacts-api/contacts-api';
import { AccountsApiProvider } from '../providers/accounts-api/accounts-api';
//import { NewAccountPage } from '../pages/new-account/new-account';
import { DetailsPage } from '../pages/details/details';
import { IndividualBalancePage } from '../pages/individual-balance/individual-balance';
import { DetailsApiProvider } from '../providers/details-api/details-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //Agregamos Login en Declaraions
    LoginPage,
    RegisterPage,
    DebtDetailsPage,
    ProfilePage,
    ContactsPage,
    DetailsPage,
    IndividualBalancePage,
    PaymentDetailsPage
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
    RegisterPage,
    DebtDetailsPage,
    ProfilePage,
    ContactsPage,
    DetailsPage,
    IndividualBalancePage,
    PaymentDetailsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiTestProvider,
    ContactsApiProvider,
    AccountsApiProvider,
    DetailsApiProvider
  ]
})
export class AppModule {}
