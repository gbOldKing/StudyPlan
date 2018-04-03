import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the HeadfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-headface',
  templateUrl: 'headface.html',
})
export class HeadfacePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl:ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeadfacePage');
  }
  presentActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title:'选择图片',
      buttons:[{
        text:'从图库中选择',
        handler:()=>{

        }
      },{
        text:'拍照',
        handler:()=>{

        }
      },{
        text:'取消',
        role:'cancel'
      }]
    });
    actionSheet.present();
  }

}
