import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ApiTestProvider } from '../../providers/api-test/api-test';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userEmail: any;
  password: any;
  disabled: any;//Control del formulario
  //
  response: any;
  options: any;
  loginData: any;
  constructor(public navCtrl: NavController,public navParams: NavParams, public apiTestProvider: ApiTestProvider,public http: Http,public alertCtrl: AlertController) {
    this.validateForm();
  }

  //Ir a la página de registro
  goToFormRegister(){
    this.navCtrl.push(RegisterPage);
  }
  //Función del botón de Login
  logIn(){
    //console.log(this.userEmail);//Nombre de usuario que viene del formulario
    //console.log(this.password);//Password que viene del formulario
    this.loginData = this.apiTestProvider.validateUser('m=userLogin'+'&email='+this.userEmail+'&password='+this.password);
    //Va a esperar todas las promesas
    Promise.all([
      this.loginData
    ]).then(data=>{
        var statusOk =  data[0].status;
        //var userId =  data[0].data.userid;
        if (statusOk == '200') {
          this.userEmail = this.apiTestProvider.userEmail;
          this.navCtrl.push('TabsPage');
        }else{
          this.incorrectAlert();
        }
    })
  }
  //----------------------------------------------------------------------------------------------------------
  //Alerta de usuario incorrecto
  incorrectAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error :( ',
      subTitle: 'Nombre de usuario o contraseña incorrectos',
      buttons: ['Aceptar']
    });
    alert.present();
  }
  //Validamos el formulario del login
  validateForm(){
    if( this.userEmail == '' || this.password == ''){
      return this.disabled = true;
    }else{
      return this.disabled = false;
    }
  }
}
