'use strict';{function Crys(g,i){PlaceZombie(oCrystal,g,i);}oS['Init']({'PName':[oPeashooter,oSunFlower,oPotatoMine,oSnowPea,oRepeater],'ZName':[oZombie,oNewspaperZombie,oBalloonZombie,oConeheadZombie,oBucketheadZombie,oStrollZombie,oCrystal],'CanSelectCard':0x0,'PicArr':['images/interface/ForestJx.webp'],'backgroundImage':'images/interface/ForestJx.webp','LevelName':$__language_Array__['7bf5839a8599d02e0e7f40821e86b1c9'],'LvlEName':0x6,'LoadMusic':'Bgm_Forest_Ready_JX','StartGameMusic':'Bgm_Forest_Fight_JX','DKind':0x0,'SunNum':0x190,'FixedProps':'disabled','LoadAccess':function(g){oAudioManager['playAudio']('Bgm_Marsh_Noise',0x1,0.5),oSym['addTask'](0x5a,function(){g(0x0);},[]);for(let i=0x1;i<0x6;i++){CustomSpecial(oWallNut,i,0x6),CustomSpecial(oStoneFlower,i,0x7),CustomSpecial(oTallNut,i,0x5),NewEle(0x0,'div','left:\x20570px;top:\x20'+(0x64*i-0x14)+'px;',{'className':'sos'},FightingScene);}},'StartGame':function(){PlaceZombie(oCrystal,[0x1,0x2,0x3]['random'](),0x2),PlaceZombie(oCrystal,[0x4,0x5]['random'](),0x9),oAudioManager['playMusic'](oS['StartGameMusic']),SetVisible($('tdShovel'),$('dFlagMeter'),$('dTop')),oS['InitLawnMover'](),oS['ControlFlagmeter']&&oFlagContent['init']({'fullValue':oP['FlagNum']-0x1,'curValue':0x0}),PrepareGrowPlants(function(){oP['Monitor'](oS['Monitor'],oS['UserDefinedFlagFunc']),BeginCool(),AutoProduceSun(0x32),oSym['addTask'](0x5dc,function(){oP['AddZombiesFlag'](),oS['ControlFlagmeter']&&oFlagContent['show']();},[]);}),oMiniGames['ProtectPlants']({'oTallNut':0x5},null,![]);}},{'AZ':[[oZombie,0x3,0x1],[oNewspaperZombie,0x3,0x5],[oBalloonZombie,0x1,0x4,[0x1,0x2,0x3]],[oConeheadZombie,0x2,0x2],[oBucketheadZombie,0x1,0x4],[oStrollZombie,0x3,0xd,[0x8,0xa,0xc]]],'FlagNum':0xc,'FlagToSumNum':{'a1':[0x1,0x5,0x6,0x8,0x9,0xa,0xb,0xc],'a2':[0x2,0x3,0x5,0x8,0xf,0x5,0x12,0x4]},'FlagToMonitor':{0x6:[()=>{for(let g=0x2;g<=0x9;g+=0x6){let i=[0x1,0x2,0x3,0x4,0x5]['random']();Crys(i,g);}}],0x8:[()=>{for(let g=0x8;g<=0x9;g++){let i=[0x1,0x2,0x3,0x4,0x5]['random']();Crys(i,g);}}],0xa:[()=>{for(let g=0x2;g<=0x3;g++){let i=g==0x2?[0x1,0x2]['random']():[0x3,0x4,0x5]['random']();Crys(i,g);}}]}});}