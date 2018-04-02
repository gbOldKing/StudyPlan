import {Loading,LoadingController,ToastController,Toast} from 'ionic-angular';

/**
 * UI层所有公用方法的抽象类
 * 
 * @export
 * @abstract
 * @class BaseUI
 */
export abstract class BaseUI{
    constructor(){};
    /**
     * 通用展示loading组件
     * 
     * @protected
     * @param {LoadingController} loadingCtrl 
     * @param {string} message 
     * @returns 
     * @memberof BaseUI
     */
    protected  showLoading(loadingCtrl:LoadingController,message:string){
        let loader = loadingCtrl.create({
            content:message,
            dismissOnPageChange:true,
        });
        loader.present();
        return loader;
    };
    /**
     * 通用展示toast组件
     * 
     * @protected
     * @param {ToastController} toastCtrl 
     * @param {string} message 
     * @returns {Toast} 
     * @memberof BaseUI
     */
    protected showTast(toastCtrl:ToastController,message:string):Toast{
        let toast = toastCtrl.create({
            message: message,
            duration: 3000, //默认展示的时长
            position: 'bottom'
        });
        toast.present();
        return toast;
    }
}