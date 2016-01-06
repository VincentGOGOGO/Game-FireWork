var GLOBAL_DATA = {};
var GLOBAL_LAYER=null;

GLOBAL_DATA.Music = true;
GLOBAL_DATA.Sound = true;

GLOBAL_DATA.UserSocre = 0;
GLOBAL_DATA.UserBest = 0;
GLOBAL_DATA.DefaultParticle = {"angle":100.94352709359607,"angleVariance":102.87375731376297,"blendFuncDestination":1,"blendFuncSource":770,"duration":-1,"emitterType":0,"finishColorAlpha":1,"finishColorBlue":1,"finishColorGreen":1,"finishColorRed":1,"finishColorVarianceAlpha":0,"finishColorVarianceBlue":1,"finishColorVarianceGreen":1,"finishColorVarianceRed":1,"finishParticleSize":18.736187795315175,"finishParticleSizeVariance":0,"gravityx":0,"gravityy":-750,"maxParticles":161.73424318285822,"maxRadius":100,"maxRadiusVariance":0,"minRadius":0,"particleLifespan":0.9739282727241516,"particleLifespanVariance":1.44556725025177,"radialAccelVariance":0,"radialAcceleration":0,"rotatePerSecond":0,"rotatePerSecondVariance":0,"rotationEnd":233.2869488287938,"rotationEndVariance":0,"rotationStart":0,"rotationStartVariance":-384.3867216246099,"sourcePositionVariancex":243.61999893188477,"sourcePositionVariancey":99.5110720418217,"sourcePositionx":365.8900451660156,"sourcePositiony":403.206298828125,"speed":429.3791198730469,"speedVariance":312.65704345703125,"startColorAlpha":1,"startColorBlue":1,"startColorGreen":1,"startColorRed":1,"startColorVarianceAlpha":0,"startColorVarianceBlue":1,"startColorVarianceGreen":1,"startColorVarianceRed":1,"startParticleSize":41.23684310913086,"startParticleSizeVariance":67.23526000976562,"tangentialAccelVariance":0,"tangentialAcceleration":0,"textureFileName":"res/0.png"};

GLOBAL_DATA.save = function () {

    cc.sys.localStorage.setItem("UserBest", GLOBAL_DATA.UserBest + "");
 
    cc.sys.localStorage.setItem("Music", GLOBAL_DATA.Music+"");

    cc.sys.localStorage.setItem("Sound", GLOBAL_DATA.Sound + "");

}

GLOBAL_DATA.load = function () {
    var userBest = cc.sys.localStorage.getItem("UserBest");
    GLOBAL_DATA.UserBest = userBest ? parseInt(userBest) : 0;
    GLOBAL_DATA.UserBest = parseInt(GLOBAL_DATA.UserBest);

  
 
    
    GLOBAL_DATA.Music = cc.sys.localStorage.getItem("Music") == "false" ? false : true;
    GLOBAL_DATA.Sound = cc.sys.localStorage.getItem("Sound") == "false" ? false : true;
 
}
