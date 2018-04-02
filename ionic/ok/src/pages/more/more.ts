import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage'
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest'
import { UserPage } from '../user/user'
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage extends BaseUI {
  public isLogin: boolean = false;
  headface: string;
  userinfo: string[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadCtrl: LoadingController,
    public rest: RestProvider,
    public storage: Storage) {
    super();
  }
  showModal() {
    let modal = this.modalCtrl.create(LoginPage)
    modal.present();
    //登陆页面关闭后的回调
    modal.onDidDismiss(()=>{
      this.loadUserPage();
    })
  }
  //生命周期 页面加载的时候
  ionViewDidEnter() {
    this.loadUserPage();
  }
  loadUserPage() {
    this.storage.get('UserId').then((val) => {
      if (val) {
        //加载用户数据
        var loading = super.showLoading(this.loadCtrl, '加载中...');
        this.rest.getUserInfo(val)
          .subscribe(response => {
            this.isLogin = true;
            loading.dismiss()
            this.userinfo = response;
            this.headface = response["UserHeadface"] + "?" + (new Date().valueOf);
          })
      } else {
        this.isLogin = false
      }
    });
  }
  gotoUserPage() {
    this.navCtrl.push(UserPage);
  }
}
