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
 

var MainLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        
        return true;
    },

    init: function () {
        var _this = this;
        this._imgIdx = 0;
        GLOBAL_LAYER = this;
        this._particleEmitter = null;
        var _eventCfg = {};
        _eventCfg.event = cc.EventListener.TOUCH_ALL_AT_ONCE;
        if (this.onTouchesBegan) { _eventCfg.onTouchesBegan = this.onTouchesBegan; }
        if (this.onTouchesMoved) { _eventCfg.onTouchesMoved = this.onTouchesMoved; }
        if (this.onTouchesEnded) { _eventCfg.onTouchesEnded = this.onTouchesEnded; }
        cc.eventManager.addListener(cc.EventListener.create(_eventCfg), this);



        var cfgPanel = $.ui.create("res/MainScene.json");
        this.addChild(cfgPanel);

        _this._particleEmitter = new cc.ParticleSystem.create(GLOBAL_DATA.DefaultParticle);
        _this._particleEmitter.retain();
        _this.addChild(_this._particleEmitter, 9000);

        setTimeout(function(){
            $("Button_Publish").bind("touchend",function(e){

                 Util.submitCanvas();
                $.net.dcUserDefault(52, 1, 1);
            })

            $("Button_Other").bind("touchend",function(e){
                jQuery(".container").show();
            })

        },400);
        

        function reset(img) {
            _this._particleEmitter.removeFromParent();

            _this._particleEmitter = new cc.ParticleSystem.create(GLOBAL_DATA.DefaultParticle);
            //var qqq = _this._particleEmitter = new cc.ParticleFire();
            _this._particleEmitter.setPosition(cc.p(700, 200));
            _this._particleEmitter.retain();
            _this.addChild(_this._particleEmitter, 9000);
            _this._particleEmitter.texture = cc.textureCache.addImage(img);
            _this._particleEmitter.shapeType = cc.ParticleSystem.STAR_SHAPE;

        }
        reset("res/0.png");
        _this.reset1=reset;

        function funCreate(pName, min, max) {
            return function (sender, type) {
                switch (type) {
                    case ccui.Slider.EVENT_PERCENT_CHANGED:
                        var percent = sender.getPercent();
                        var value = GLOBAL_DATA.DefaultParticle[pName] = min + (max - min) * percent / 100;
                        value = value + "";
                        var p = "res/" + _this._imgIdx % 10 + ".png";
                        reset(p);
                        $("Text_" + pName).setString(value.substr(0,5));
                      
                        break;
                    default:
                        break;
                }


            }

        }
 
        function loop(node) {
            var childs = node.getChildren();
            for (var i = 0; i < childs.length; i++) {
                var cName = childs[i].getName();
                if (cName.indexOf('Slider_') > -1) {
                    childs[i].setPercent(90);
                    var nameArr = cName.split('_');
                    var pName = nameArr[1];
                    var min = parseInt(nameArr[2]);
                    var max = parseInt(nameArr[3]);
            
                    setTimeout((function (_child,_pname, _min, _max) {
                        return function () {
                            var value = GLOBAL_DATA.DefaultParticle[_pname]+"";
                            $("Text_" + _pname).setString(value.substr(0, 5));
                            _child.setPercent(((value-_min)/(_max-_min))*100);
                        }
                    })(childs[i],pName, min, max), 11);
                
                    
                    childs[i].addEventListener(funCreate(pName, min, max), _this);


                }
                loop(childs[i]);

            }

        }
        loop(_this);

        window.___loop=loop;
 
        setTimeout(function () {
            $("Button_Img").bind("touchend", function (sender, type) {
                _this._imgIdx++;
                var p = "res/" + _this._imgIdx%10 + ".png";
                $("Button_Img").items[0].loadTextureNormal(p);
                reset(p);
            });



            $("Button_G").bind("touchend", function (sender, type) {
                GLOBAL_DATA.DefaultParticle["emitterType"] = 0;
                var p = "res/" + _this._imgIdx % 10 + ".png";
                reset(p);

                $("Button_R").items[0].setColor(cc.color(255,255,255));
                $("Button_G").items[0].setColor (cc.color(134, 255, 142));

            })

            $("Button_R").bind("touchend", function (sender, type) {
                GLOBAL_DATA.DefaultParticle["emitterType"] = 1;
                var p = "res/" + _this._imgIdx % 10 + ".png";
                reset(p);
                $("Button_G").items[0].setColor ( cc.color(255, 255, 255));
                $("Button_R").items[0].setColor (cc.color(134, 255, 142));

            })

        }, 500);

        var m_p=0;
        setTimeout(function(){
            
            var ScrollView_Main=$("ScrollView_Main").items[0];
                //console.log(ScrollView_Main);
                cc.eventManager.addListener({
                    event: cc.EventListener.MOUSE,
            
                    onMouseScroll: function (event) {
                        var delta = cc.sys.isNative ? event.getScrollY() * 6 : -event.getScrollY();
                        
                        if(delta>0){
                            m_p+=5;
                            if(m_p>100){m_p=100};
                            ScrollView_Main.scrollToPercentVertical(m_p,0.2,1);
                        }
                        if(delta<0){
                            m_p-=5;
                            if(m_p<0){m_p=0};
                            ScrollView_Main.scrollToPercentVertical(m_p,0.2,1);
                        }

                        return true;
                    }
                }, _this);
        },300);
        





        
 
    },
    onTouchesBegan: function (touches, event) {
        var touch = touches[0];
        var location = touch.getLocation();
        var target = event.getCurrentTarget();

        //event.stopPropagation();
        return false
    },
    onTouchesMoved: function (touches, event) {
        var _this = this;
        var touch = touches[0];
        var location = touch.getLocation();
        var target = event.getCurrentTarget();
 
        target._particleEmitter.setPosition(location);
      
        //event.stopPropagation();
    },
    onTouchesEnded: function (touches, event) {
        var touch = touches[0];
        var location = touch.getLocation();
        var target = event.getCurrentTarget();
        //event.stopPropagation();
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