import { Component } from '@angular/core';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers//rest/rest';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, Toast } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI {
  mobile: string;
  nickname: string;
  password: any;
  confirmPassword: any;
  errorMessage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public loadCtrl: LoadingController) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  //doRegister 注册账号方法
  doRegister() {
    //前端验证用户输入的数据优点：速度快，不需等后台验证返回的数据。缺点：代码的灵活性被限制在了固定的APP版本中，如有修改需APP迭代
    //后台验证优点:代码灵活，不受APP迭代影响。缺点：用户流量及速度等。
    if (!(/^1[345789]\d{9}$/.test(this.mobile))) { //验证国内手机号码
      super.showTast(this.toastCtrl, '请输入正确的手机号码！');
    } else if (this.nickname.length < 3 || this.nickname.length > 10) {
      super.showTast(this.toastCtrl, '昵称长度不符合要求');
    } else if (this.password.length < 6 || this.password.length > 20) {
      super.showTast(this.toastCtrl, '密码长度不符合要求');
    } else if (this.password != this.confirmPassword) {
      super.showTast(this.toastCtrl, '两次输入的密码不一致')
    }
    else {
      var loading = super.showLoading(this.loadCtrl, '注册中....');
      this.rest.register(this.mobile, this.nickname, this.password)
        .subscribe(f => {
          if (f["Status"] == "OK") {
            console.log(f);
            loading.dismiss();
            super.showTast(this.toastCtrl, '恭喜！注册成功');
            this.dismiss();
          } else {
            loading.dismiss();
            super.showTast(this.toastCtrl, f["StatusContent"]);
          }
        },
          error => this.errorMessage = <any>error
        );
    }
  }
  gotoLogin() {
    this.navCtrl.pop();
  }
}
