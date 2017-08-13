/**
 * Created by oldKing on 2017/8/1.
 */

function HistogramChart(option){
    this._init(option);
}
HistogramChart.prototype={
    _init: function (option) {
        this.x=option.x || 0;
        this.y=option.y || 0;
        this.w=option.w || 0;
        this.h=option.h || 0;
        this.data=option.data || []
        var x0=0;
        var y0=0;
        this.group=new Konva.Group({
            x:this.x,
            y:this.y
        })
        this.rectGroup=new Konva.Group({
            x:0,
            y:0
        })
        this.textGroup=new Konva.Group({
            x:0,
            y:0
        })
        this.group.add(this.textGroup);
        this.group.add(this.rectGroup);

        //初始化底线
        var self=this;
        var bsLine=new Konva.Line({
            points:[x0,y0,x0+this.w,y0],
            strokeWidth:1,
            stroke:'skyblue'
        })
        this.group.add(bsLine);

        var rectWidth=this.w/this.data.length;
        this.data.forEach(function (item, index) {
            var rect = new Konva.Rect({
                x: x0 + (1 / 4 + index) * rectWidth,
                y: y0 - item.value * self.h,
                width: rectWidth / 2,
                height: item.value * self.h,
                fill: item.color,
                cornerRadius: 10
            })
            self.rectGroup.add(rect)

            var text = new Konva.Text({
                x: x0 + index * rectWidth,
                y: y0 - item.value * self.h - 16,
                fontSize: 14,
                text: item.value * 100 + '%',
                fill: item.color,
                width: rectWidth,
                align: 'center',
                name: 'textPercent'
            })
            self.textGroup.add(text);
            var textBottom=new Konva.Text({
                x:x0+(2/4+index)*rectWidth,
                y:10,
                fontSize:14,
                text:item.name,
                fill:item.color,
                rotation:30
            })
            self.group.add(textBottom);
        })
    },
    addToGroupOrlayer: function (layer) {
        layer.add(this.group)
    },
    playAnimate: function () {
        var self=this;
        this.rectGroup.getChildren().each(function (item, index) {
            item.y(0);
            item.height(0);
            item.to({
                duration:1,
                y:-self.data[index].value*self.h,
                height:self.data[index].value*self.h
            })
        })
        this.textGroup.getChildren().each(function (item, index) {
            item.y(-14);
            item.to({
                duration:1,
                y:-self.data[index].value*self.h-18
            })
        })
    }
}