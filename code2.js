gdjs.Menu_32PauseCode = {};
gdjs.Menu_32PauseCode.GDBackgroundObjects1= [];
gdjs.Menu_32PauseCode.GDBackgroundObjects2= [];
gdjs.Menu_32PauseCode.GDResumeObjects1= [];
gdjs.Menu_32PauseCode.GDResumeObjects2= [];
gdjs.Menu_32PauseCode.GDMain_9595MenuObjects1= [];
gdjs.Menu_32PauseCode.GDMain_9595MenuObjects2= [];
gdjs.Menu_32PauseCode.GDNewTiledSpriteObjects1= [];
gdjs.Menu_32PauseCode.GDNewTiledSpriteObjects2= [];


gdjs.Menu_32PauseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Resume"), gdjs.Menu_32PauseCode.GDResumeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32PauseCode.GDResumeObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32PauseCode.GDResumeObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32PauseCode.GDResumeObjects1[k] = gdjs.Menu_32PauseCode.GDResumeObjects1[i];
        ++k;
    }
}
gdjs.Menu_32PauseCode.GDResumeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\watching you.mp3", 10, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.Menu_32PauseCode.GDMain_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32PauseCode.GDMain_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32PauseCode.GDMain_9595MenuObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32PauseCode.GDMain_9595MenuObjects1[k] = gdjs.Menu_32PauseCode.GDMain_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.Menu_32PauseCode.GDMain_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "home menu2.mp3", 10, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Information/ ENG", false);
}}

}


};

gdjs.Menu_32PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_32PauseCode.GDBackgroundObjects1.length = 0;
gdjs.Menu_32PauseCode.GDBackgroundObjects2.length = 0;
gdjs.Menu_32PauseCode.GDResumeObjects1.length = 0;
gdjs.Menu_32PauseCode.GDResumeObjects2.length = 0;
gdjs.Menu_32PauseCode.GDMain_9595MenuObjects1.length = 0;
gdjs.Menu_32PauseCode.GDMain_9595MenuObjects2.length = 0;
gdjs.Menu_32PauseCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Menu_32PauseCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.Menu_32PauseCode.eventsList0(runtimeScene);

return;

}

gdjs['Menu_32PauseCode'] = gdjs.Menu_32PauseCode;
