gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDNewSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewSpriteObjects2= [];
gdjs.Game_32OverCode.GDRestartObjects1= [];
gdjs.Game_32OverCode.GDRestartObjects2= [];
gdjs.Game_32OverCode.GDMain_9595MenuObjects1= [];
gdjs.Game_32OverCode.GDMain_9595MenuObjects2= [];
gdjs.Game_32OverCode.GDInformasiObjects1= [];
gdjs.Game_32OverCode.GDInformasiObjects2= [];
gdjs.Game_32OverCode.GDNewTextObjects1= [];
gdjs.Game_32OverCode.GDNewTextObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Game_32OverCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDRestartObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDRestartObjects1[k] = gdjs.Game_32OverCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\watching you.mp3", 10, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.Game_32OverCode.GDMain_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDMain_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDMain_9595MenuObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDMain_9595MenuObjects1[k] = gdjs.Game_32OverCode.GDMain_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDMain_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "home menu2.mp3", 10, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\Music & Sound effects\\GameOver.wav", 1, false, 100, 1);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDRestartObjects1.length = 0;
gdjs.Game_32OverCode.GDRestartObjects2.length = 0;
gdjs.Game_32OverCode.GDMain_9595MenuObjects1.length = 0;
gdjs.Game_32OverCode.GDMain_9595MenuObjects2.length = 0;
gdjs.Game_32OverCode.GDInformasiObjects1.length = 0;
gdjs.Game_32OverCode.GDInformasiObjects2.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
