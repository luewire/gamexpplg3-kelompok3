gdjs.StartCode = {};
gdjs.StartCode.GDThe_9595LouisObjects1= [];
gdjs.StartCode.GDThe_9595LouisObjects2= [];
gdjs.StartCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.StartCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.StartCode.GDSquareWhiteToggleObjects1= [];
gdjs.StartCode.GDSquareWhiteToggleObjects2= [];
gdjs.StartCode.GDAudioObjects1= [];
gdjs.StartCode.GDAudioObjects2= [];
gdjs.StartCode.GDNewTiledSpriteObjects1= [];
gdjs.StartCode.GDNewTiledSpriteObjects2= [];
gdjs.StartCode.GDNewSpriteObjects1= [];
gdjs.StartCode.GDNewSpriteObjects2= [];
gdjs.StartCode.GDNewSprite2Objects1= [];
gdjs.StartCode.GDNewSprite2Objects2= [];
gdjs.StartCode.GDNamaObjects1= [];
gdjs.StartCode.GDNamaObjects2= [];
gdjs.StartCode.GDNewSprite3Objects1= [];
gdjs.StartCode.GDNewSprite3Objects2= [];
gdjs.StartCode.GDquitObjects1= [];
gdjs.StartCode.GDquitObjects2= [];
gdjs.StartCode.GD_9595Objects1= [];
gdjs.StartCode.GD_9595Objects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.StartCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.StartCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit"), gdjs.StartCode.GDquitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDquitObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDquitObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDquitObjects1[k] = gdjs.StartCode.GDquitObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDquitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "home menu.mp3", 0, true, 100, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_"), gdjs.StartCode.GD_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GD_9595Objects1.length;i<l;++i) {
    if ( gdjs.StartCode.GD_9595Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GD_9595Objects1[k] = gdjs.StartCode.GD_9595Objects1[i];
        ++k;
    }
}
gdjs.StartCode.GD_9595Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Information/ ENG", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDThe_9595LouisObjects1.length = 0;
gdjs.StartCode.GDThe_9595LouisObjects2.length = 0;
gdjs.StartCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.StartCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.StartCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.StartCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.StartCode.GDAudioObjects1.length = 0;
gdjs.StartCode.GDAudioObjects2.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewSprite2Objects1.length = 0;
gdjs.StartCode.GDNewSprite2Objects2.length = 0;
gdjs.StartCode.GDNamaObjects1.length = 0;
gdjs.StartCode.GDNamaObjects2.length = 0;
gdjs.StartCode.GDNewSprite3Objects1.length = 0;
gdjs.StartCode.GDNewSprite3Objects2.length = 0;
gdjs.StartCode.GDquitObjects1.length = 0;
gdjs.StartCode.GDquitObjects2.length = 0;
gdjs.StartCode.GD_9595Objects1.length = 0;
gdjs.StartCode.GD_9595Objects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
