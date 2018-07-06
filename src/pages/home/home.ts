import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ValueTransformer } from '@angular/compiler/src/util';
import { WinnerPage } from '../winner/winner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Sowetoscore =0;
Tembisascore=0;

  constructor(public navCtrl: NavController) {

  }

  Soweto(Value:number):void{
    this.Sowetoscore+=Value;

  }

  Tembisa(Value:number):void{
    this.Tembisascore+=Value;

  }

  reset(Value:number):void{
    this.Sowetoscore=0;
    this.Tembisascore=0;
  }

  end():void{
   this.navCtrl.push(WinnerPage)

  }


}