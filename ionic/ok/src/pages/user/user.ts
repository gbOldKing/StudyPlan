import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController,ViewController} from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest'

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage extends BaseUI {
  headface:string = "http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg";
  nickname:string = "加载中...";
  errorMessage:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl:LoadingController,
    public toastCtrl:ToastController,
    public viewCtrl:ViewController,
    public storage:Storage,
    public rest:RestProvider) {
      super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

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
            this.nickname = response["UserNickName"];
            this.headface = response["UserHeadface"] + "?" + (new Date().valueOf);
            loading.dismiss()
          },error =>this.errorMessage=<any>error)
      }
    });
  }
  updateNickName(){
    this.storage.get('UserId').then(val=>{
      if(val){
        var loading = super.showLoading(this.loadCtrl,'修改中...');
        this.rest.updateNickName(val,this.nickname)
        .subscribe(response=>{
          if(response['Status']=='OK'){
            loading.dismiss();
            super.showTast(this.toastCtrl,'昵称修改成功')
          }else{
            loading.dismiss();
            super.showTast(this.toastCtrl,response['StatusContent']);
          }
        },error =>this.errorMessage=<any>error)
      }
    })
  }
  logout(){
    this.storage.remove('UserId');
    this.viewCtrl.dismiss();
  }
}
