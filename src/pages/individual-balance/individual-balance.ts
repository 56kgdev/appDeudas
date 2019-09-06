import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiTestProvider } from '../../providers/api-test/api-test';

@IonicPage()
@Component({
  selector: 'page-individual-balance',
  templateUrl: 'individual-balance.html',
})
export class IndividualBalancePage {
  idContact: any;
  nameContact: any;

  individualBalance: any;
  arr: any = [];

  balance: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public aTP: ApiTestProvider) {
    this.getIndividualBalance();
    this.checkBalance();
  }
  //-------------------------------------------------------------------------------------------
  //Obtener balance con usuario específico
  getIndividualBalance(){
    this.idContact = this.navParams.get('idContact');
    this.nameContact = this.navParams.get('nameContact');
      Promise.all([
        this.aTP.getIndividualBalance(this.idContact)
      ]).then(data=>{
        console.log(data);
        this.arr = data[0]
        this.individualBalance =this.arr.data;
      })
  }
  //-------------------------------------------------------------------------------------------
  //Mostrar el estado de la deuda
  checkBalance(){
    this.balance = false;
    return this.balance;
  }
}
