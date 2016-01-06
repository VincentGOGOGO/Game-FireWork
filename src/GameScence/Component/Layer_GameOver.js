/// <reference path="../../Util/JQ/Component/device.js" />
/// <reference path="../../Util/JQ/Component/encrypt.js" />
/// <reference path="../../Util/JQ/Component/net.js" />
/// <reference path="../../Util/JQ/Component/sql.js" />
/// <reference path="../../Util/JQ/Component/ui.js" />
/// <reference path="../../Util/JQ/Component/util.js" />
/// <reference path="../../Util/JQ/Component/wx.js" />
/// <reference path="../../Util/JQ/JQ.js" />
/// <reference path="../../Util/underscore.js" />
/// <reference path="../../GLOBAL_DATA.js" />
/// <reference path="../../Util/util.js" />
/// <reference path="../../GLOBAL_DATA.js" />
 

var Layer_GameOver = {};

Layer_GameOver.init = function (node, parentLayer) {

 
    
    Layer_GameOver.layerNode = node;

    Layer_GameOver.parentLayer = parentLayer;

    Layer_GameOver.panelBg = $(node, "Panel_Color");

    Layer_GameOver.titleLabel = $(node, "Text_Title").setStringWithL18nKey("game_over");

    Layer_GameOver.scoreLabel = $(node, "Text_Score_Text").setStringWithL18nKey("score");

    Layer_GameOver.scoreNum = $(node, "Text_Score").setString(GLOBAL_DATA.UserSocre+"");


    Layer_GameOver.bestLabel = $(node, "Text_Best_Text").setStringWithL18nKey("best");

    Layer_GameOver.bestNum = $(node, "Text_Best").setString(GLOBAL_DATA.UserBest+"");



    Layer_GameOver.backBtn = $(node, "Button_Back");

    Layer_GameOver.rankBtn = $(node, "Button_Rank");

    Layer_GameOver.shareBtn = $(node, "Button_Share");

    
    Layer_GameOver.backBtn.bind("touchend", function () {
        cc.director.runScene(new StartScence());
        
    });

    Layer_GameOver.rankBtn.bind("touchend", function () {
        $.device.gameCenter_ShowLeaderboard();

    });

    Layer_GameOver.shareBtn.bind("touchend", function () {
        Util.openShare();

    });

    if (cc.sys.isNative) {
        $.net.dcUserDefault("xxx", GLOBAL_DATA.UserSocre, 1);
    } else {
        $.net.dcUserDefault("yyy", GLOBAL_DATA.UserSocre, 1);
    };

     

};
 
 
 
 