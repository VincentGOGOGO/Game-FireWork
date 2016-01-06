/// <reference path="../../cocos2d-js-v3.6.js" />
/// <reference path="../GLOBAL_DATA.js" />
/// <reference path="JQ/JQ.js" />
/// <reference path="JQ/Component/device.js" />
/// <reference path="JQ/Component/net.js" />
/// <reference path="JQ/Component/sql.js" />
/// <reference path="JQ/Component/ui.js" />
/// <reference path="JQ/Component/util.js" />
/// <reference path="JQ/Component/wx.js" />



var Util = {};

Util.playMusic = function(src, isLoop) {
    if (GLOBAL_DATA.Music) {
        cc.audioEngine.playMusic(src, isLoop);
    }
}
Util.StopMusic = function() {
    cc.audioEngine.stopMusic();

}

Util.playEffic = function(src) {
    if (GLOBAL_DATA.Sound) {
        cc.audioEngine.playEffect(src);
    }

}

Util.getText = function(key) {
    var lang = cc.sys.language;
    var result;
    var objL = LANG[key];
    if (!objL) {
        result = "no_text_for:" + key
    } else {
        if (objL[lang] !== undefined) {
            result = objL[lang];
        } else {
            result = objL["en"];
        }
    }
    return result;
}



Util.openShare = function() {
    if (cc.sys.isNative) {
        if (cc.sys.language.toLowerCase() == "zh") {
            $.device.openShare("分享文案", "res/logo_200.png", "https://itunes.apple.com/us/app/rock-paper-scissors-battle/id1014895272?l=zh&ls=1&mt=8");
        } else {
            $.device.openShare("share text", "res/logo_200.png", "https://itunes.apple.com/us/app/rock-paper-scissors-battle/id1014895272?l=us&ls=1&mt=8");
        }
    } else {
        $.weixin.showMask();;
    }
}


Util.getScreenDataBASE64 = function(cb) {
    $("Panel_1").items[0].setVisible(0);
    setTimeout(function() {
        var canvas = document.getElementById("gameCanvas");
        var _canvas = document.createElement("canvas");
        _canvas.width = 800;
        _canvas.height = 500;
        _canvas.getContext("2d").drawImage(canvas, -200, -100);
        cb(canvas.toDataURL())
        $("Panel_1").items[0].setVisible(1);
    }, 200);




}

Util.submitCanvas=function(){
    var user_uuid=cc.sys.localStorage.getItem("uuid");
    var particle_name=prompt("请为你的作品起一个名字吧");
    if(particle_name.trim()==""){
        return;
    }
    var p = "res/" + GLOBAL_LAYER._imgIdx % 10 + ".png";
    GLOBAL_DATA.DefaultParticle.textureFileName=p;
    var particle_data=JSON.stringify(GLOBAL_DATA.DefaultParticle);
    Util.getScreenDataBASE64(function(d){
        var particle_img=d;
        jQuery.post("http://wshxbqq.sinaapp.com/addParticle/",{
            user_uuid:user_uuid,
            particle_name:particle_name,
            particle_img:particle_img,
            particle_data:particle_data,
        },function(d1){
            alert("发布成功");
        })
    })


}

Util.showParticleLibs=function(){

}
