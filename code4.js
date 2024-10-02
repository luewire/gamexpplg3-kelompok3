gdjs.Game_32Information_47_32ENGCode = {};
gdjs.Game_32Information_47_32ENGCode.GDNewTiledSpriteObjects1= [];
gdjs.Game_32Information_47_32ENGCode.GDNewTiledSpriteObjects2= [];
gdjs.Game_32Information_47_32ENGCode.GDNewTextObjects1= [];
gdjs.Game_32Information_47_32ENGCode.GDNewTextObjects2= [];
gdjs.Game_32Information_47_32ENGCode.GDNewSpriteObjects1= [];
gdjs.Game_32Information_47_32ENGCode.GDNewSpriteObjects2= [];
gdjs.Game_32Information_47_32ENGCode.GDBACKObjects1= [];
gdjs.Game_32Information_47_32ENGCode.GDBACKObjects2= [];
gdjs.Game_32Information_47_32ENGCode.GDGanti_9595BahasaObjects1= [];
gdjs.Game_32Information_47_32ENGCode.GDGanti_9595BahasaObjects2= [];


gdjs.Game_32Information_47_32ENGCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BACK"), gdjs.Game_32Information_47_32ENGCode.GDBACKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Information_47_32ENGCode.GDBACKObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Information_47_32ENGCode.GDBACKObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Information_47_32ENGCode.GDBACKObjects1[k] = gdjs.Game_32Information_47_32ENGCode.GDBACKObjects1[i];
        ++k;
    }
}
gdjs.Game_32Information_47_32ENGCode.GDBACKObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "home menu.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ganti_Bahasa"), gdjs.Game_32Information_47_32ENGCode.GDGanti_9595BahasaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Information_47_32ENGCode.GDGanti_9595BahasaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Information_47_32ENGCode.GDGanti_9595BahasaObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Information_47_32ENGCode.GDGanti_9595BahasaObjects1[k] = gdjs.Game_32Information_47_32ENGCode.GDGanti_9595BahasaObjects1[i];
        ++k;
    }
}
gdjs.Game_32Information_47_32ENGCode.GDGanti_9595BahasaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Information/ IND", false);
}}

}


};

gdjs.Game_32Information_47_32ENGCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Information_47_32ENGCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32Information_47_32ENGCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32Information_47_32ENGCode.GDNewTextObjects1.length = 0;
gdjs.Game_32Information_47_32ENGCode.GDNewTextObjects2.length = 0;
gdjs.Game_32Information_47_32ENGCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32Information_47_32ENGCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32Information_47_32ENGCode.GDBACKObjects1.length = 0;
gdjs.Game_32Information_47_32ENGCode.GDBACKObjects2.length = 0;
gdjs.Game_32Information_47_32ENGCode.GDGanti_9595BahasaObjects1.length = 0;
gdjs.Game_32Information_47_32ENGCode.GDGanti_9595BahasaObjects2.length = 0;

gdjs.Game_32Information_47_32ENGCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32Information_47_32ENGCode'] = gdjs.Game_32Information_47_32ENGCode;
