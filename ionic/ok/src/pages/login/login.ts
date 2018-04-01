import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController,ToastController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import {RestProvider} from '../../providers//rest/rest';
import {Storage} from '@ionic/storage';

import {RegisterPage} from '../register/register'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseUI {
  mobile:any;
  password:any;
  errorMessage:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl:ViewController,
    public loadCtrl:LoadingController,
    public rest:RestProvider,
    public toastCtrl:ToastController,
    public storage:Storage){
    super();//调用父类的构造函数 constructor
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    var loading = super.showLoading(this.loadCtrl,'登录中...');
    this.rest.login(this.mobile,this.password)
    .subscribe(f=>{     //subscribe为login()返回值Observable的方法
      if(f["Status"]=="OK"){
        //登录成功
        //正常是存储从后台返回的token
        super.showTast(this.toastCtrl, f["StatusContent"]);
        this.storage.set('UserId',f['UserId']);
        this.dismiss();
        loading.dismiss();   
      }else{
        super.showTast(this.toastCtrl, f["StatusContent"]);
        loading.dismiss();
      }
    },error=>this.errorMessage=<any>error);
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  pushRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }
}
