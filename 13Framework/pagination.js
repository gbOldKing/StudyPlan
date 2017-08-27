/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 */
define(function (require, exports, module) {
    function Pagination(current, total, show) {
        this.current = current;
        this.total = total;
        this.show = show;
        //1.根据显示数量计算出正常情况下当前页左右各有多少页
        var region = Math.floor(show / 2);
        //2、计算出当前界面上的起始值
        var begin = current - region;//可能会小于1
        begin = begin < 1 ? 1 : begin;
        var end = begin + show;
        if (end > total) {
            end = total + 1;
            begin = end - show;
            begin = begin < 1 ? 1 : begin;
        }
        this.begin = begin;
        this.end = end;
    }

    Pagination.prototype.render = function (containers) {
        if (typeof containers === 'string') {
        }
        containers = document.querySelectorAll(containers);
        if (containers.length === undefined) {
            containers = [containers];
        }
        for (var c = 0; c < containers.length; c++) {
            var container = containers[c];
            var prevElement=document.createElement('li');
            prevElement.innerHTML='<a href="?page='+(this.current-1)+'">&laquo;</a>';
            container.appendChild(prevElement);
            if(this.current==1){
                prevElement.classList.add('disabled');
            }
            for (var i = this.begin; i < this.end; i++) {
                var liElement = document.createElement('li');
                liElement.innerHTML = '<a href="?page='+i+'">' + i + '</a>';
                if (i == this.current) {
                    liElement.classList.add('active');
                }
                container.appendChild(liElement);
            }
            var nextElement=document.createElement('li');
            nextElement.innerHTML='<a href="?page='+(this.current+1)+'">&raquo;</a>'
            if(this.current==this.total){
                nextElement.classList.add('disabled');
            }
            container.appendChild(nextElement);
        }
    };
    module.exports=Pagination;
});
