/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 */

define(function (require, exports, module) {
    var Pagination=require('./pagination.js');
    var pager=new Pagination(20,20,7);
    pager.render('.pagination');
});