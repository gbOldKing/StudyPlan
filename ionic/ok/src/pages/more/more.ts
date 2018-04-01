import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {Storage} from '@ionic/storage'
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {
  public isLogin : boolean =false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl:ModalController,
    public storage:Storage) {

  }
  showModal(){
    let modal =this.modalCtrl.create(LoginPage)
    modal.present();
  }
  //生命周期 页面加载的时候
  ionViewDidEnter(){
    this.loadUserPage();
  }
  loadUserPage(){
    this.storage.get('UserId').then((val)=>{
      val?this.isLogin=true:this.isLogin=false;
    });
  }
}
