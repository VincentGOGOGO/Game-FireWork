/// <reference path="../../cocos2d-js-v3.6.js" />
/// <reference path="../CfgPanel/CfgPanel.js" />
/// <reference path="../Util/JQ.js" />
/// <reference path="Component/Cell.js" />
/// <reference path="../Util/util.js" />
/// <reference path="Component/Ball.js" />
/// <reference path="../Util/underscore.js" />
/// <reference path="Component/Layer_GameStart.js" />
/// <reference path="Component/Hand.js" />
/// <reference path="Component/Enemy.js" />
 

var GameLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {
        var _this = this;
        GLOBAL_LAYER = this;
         
       

        var overPanel = $.ui.create("res/Layer_GameOver.json");
        this.addChild(overPanel);
        Layer_GameOver.init(overPanel, this);



    },
    
    update: function (dt) {
        var _this = this;
    },

    onEnter: function () {
        this._super();
    },

    onExit: function () {
        this._super();
    }

});