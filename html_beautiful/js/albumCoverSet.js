//img自动正方形宽高度裁切填充
function albumCoverSet(albumCoverOutBox,boxWidth,boxHeight){
    var tagBox =$(albumCoverOutBox);
    if(tagBox.length>1){
        tagBox.each(function(){
            var screenImage = $(this).children('img');
            var theImage = new Image();
            theImage.src = screenImage.attr("src");
            var imgW = theImage.width;
            var imgH = theImage.height;
            if((imgW / imgH) > (boxWidth / boxHeight)){
                screenImage.height(boxHeight);
                var nowW = imgW / imgH * boxHeight;
                screenImage.width(nowW);
                screenImage.css("left",0-(nowW - boxWidth)/2).css('top',0);
            }else{
                screenImage.width(boxWidth);
                var nowH = imgH / imgW * boxWidth;
                screenImage.height(nowH);
                screenImage.css("top",0-(nowH - boxHeight)/2).css('left',0);
            }
        });
    }else{
        var screenImage = tagBox.children('img');
        var theImage = new Image();
        theImage.src = screenImage.attr("src");
        var imgW = theImage.width;
        var imgH = theImage.height;
        if((imgW / imgH) > (boxWidth / boxHeight)){
            screenImage.height(boxHeight);
            var nowW = imgW / imgH * boxHeight;
            screenImage.width(nowW);
            screenImage.css("left",0-(nowW - boxWidth)/2).css('top',0);
        }else{
            screenImage.width(boxWidth);
            var nowH = imgH / imgW * boxWidth;
            screenImage.height(nowH);
            screenImage.css("top",0-(nowH - boxHeight)/2).css('left',0);
        }

    }
}
