'use strict';{function Crys(g,i){PlaceZombie(oCrystal,g,i);}oS['Init']({'PName':[oPeashooter,oSunFlower,oWallNut,oPotatoMine,oStoneFlower,oSnowPea,oRepeater,oTallNut,oRadish],'ZName':[oZombie,oConeheadZombie,oBucketheadZombie,oStrollZombie,oBalloonZombie,oFootballZombie,oCrystal],'PicArr':['images/interface/ForestJx.webp'],'backgroundImage':'images/interface/ForestJx.webp','LevelName':$__language_Array__['e86b14e213652aef2b51922d86e75e34'],'LvlEName':0x6,'LoadMusic':'Bgm_Forest_Ready_JX','StartGameMusic':'Bgm_Forest_Fight_JX','DKind':0x0,'SunNum':0x190,'LoadAccess':function(g){oAudioManager['playAudio']('Bgm_Marsh_Noise',0x1,0.5);for(let i=0x1;i<=0x5;i++){for(let w=0x3;w<=0x7;w+=0x2){w==0x3||w==0x7?CustomSpecial(oSunFlower,i,w):CustomSpecial(oWallNut,i,w);}}oSym['addTask'](0x5a,g,[0x0]);},'StartGame':function(){for(let g=0x1;g<=0x5;g++){Crys(g,0x1),Crys(g,0x9);}oAudioManager['pauseMusic'](),oAudioManager['playMusic'](oS['StartGameMusic']),SetVisible($('tdShovel'),$('dFlagMeter'),$('dTop')),oS['InitLawnMover'](),oS['ControlFlagmeter']&&oFlagContent['init']({'fullValue':oP['FlagNum']-0x1,'curValue':0x0}),PrepareGrowPlants(function(){oP['Monitor'](oS['Monitor'],oS['UserDefinedFlagFunc']),BeginCool(),oS['DKind']&&AutoProduceSun(0x32),oSym['addTask'](0x5dc,function(){oP['AddZombiesFlag'](),oS['ControlFlagmeter']&&oFlagContent['show']();},[]);});}},{'AZ':[[oZombie,0x2,0x1,[0x1]],[oConeheadZombie,0x1,0x2],[oBucketheadZombie,0x2,0x1,[0x1]],[oStrollZombie,0x1,0x4],[oBalloonZombie,0x2,0x2,[0x2,0x3,0x4,0x5,0x6]],[oFootballZombie,0x1,0x9,[0x5,0x7,0x8,0x9]]],'FlagNum':0xa,'FlagToSumNum':{'a1':[0x5,0x6,0x7,0x9,0xa],'a2':[0x4,0x9,0x10,0x14,0x19]},'FlagToMonitor':{0x8:[()=>{for(let g=0x1;g<0x6;g++){Crys(g,0x8),Crys(g,0x9);}}]}});}