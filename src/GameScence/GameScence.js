/// <reference path="../Util/JQ/Component/device.js" />
/// <reference path="../Util/JQ/Component/encrypt.js" />
/// <reference path="../Util/JQ/Component/net.js" />
/// <reference path="../Util/JQ/Component/sql.js" />
/// <reference path="../Util/JQ/Component/ui.js" />
/// <reference path="../Util/JQ/Component/util.js" />
/// <reference path="../Util/JQ/Component/wx.js" />
/// <reference path="../Util/JQ/JQ.js" />
/// <reference path="../Util/underscore.js" />
/// <reference path="../Util/util.js" />
/// <reference path="../GLOBAL_DATA.js" />
/// <reference path="../L18n.js" />


var GameScence = cc.Scene.extend({
    ctor: function () {
        this._super();
        this.init();
        return true;
    },
    init: function () {

        var __id;
 

    },
    onEnter: function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});


