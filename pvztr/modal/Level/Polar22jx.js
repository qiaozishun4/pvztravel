'use strict';{let saveR;oS['Init']({'PName':[oPuffShroom,oPotatoMine,oPeashooter,oBegonia,oPepper],'ZName':[oImp,oBalloonZombie,oSkatingZombie,oZomboni,oCigarZombie,oMembraneZombie,oMakeRifterZombie],'LevelName':$__language_Array__['aa2e0b0ec8df7f7dde3bdb7c29501997'],'LoadMusic':'Bgm_Polar_Ready_JX_2','StartGameMusic':'Bgm_Polar_Fight_JX_2','__BalancedPlant__':!![],'SunNum':0x12c,'CanSelectCard':0x0,'LoadAccess'(g){oAudioManager['playAudio']('Bgm_Polar_Noise',0x1),oSym['addTask'](0x5a,g);},'StartGame':function(){oAudioManager['pauseMusic'](),oAudioManager['playMusic'](oS['StartGameMusic']),SetVisible($('tdShovel'),$('dFlagMeter'),$('dTop')),oS['InitLawnMover'](),oS['ControlFlagmeter']&&oFlagContent['init']({'fullValue':oP['FlagNum']-0x1,'curValue':0x0}),PrepareGrowPlants(g=>{oP['Monitor'](),BeginCool(),AutoProduceSun(0x19),oSym['addTask'](0x4b0,i=>{oP['AddZombiesFlag'](),oS['ControlFlagmeter']&&oFlagContent['show']();});});}},{'AZ':[[oImp,0x1,0x1],[oMakeRifterZombie,0x1,0xa],[oCigarZombie,0x1,0xa],[oBalloonZombie,0x1,0x3,[0x3]],[oSkatingZombie,0x1,0x64],[oZomboni,0x1,0xa],[oMembraneZombie,0x1,0xa]],'FlagNum':0x9,'FlagToMonitor':{0x1:[g=>{let c=[];for(let I of $P){I['EName']=='oPotatoMine'&&(c[I['R']]=!![]);}var w=[0x1,0x2,0x3,0x4,0x5]['random']();for(let Q=0x1;Q<0x6;Q++){if(c[Q]){w=Q;break;}}PlaceZombie(oSkatingZombie,w,0xb,0x0),CustomSpecial(oRifterAnimate,w,0x8,0x0),oSym['addTask'](0x1f4,function(){PlaceZombie(oZomboni,w,0xb,0x0);});}],0x2:[g=>{for(let I=0x1;I<0x6;I++){PlaceZombie(oZombie,I,0xb,0x0);}let c=hasPlants(),w=0x3;for(let Q of c){Math['random']()<0.5&&w-->0x0&&Q['R']!=saveR&&CustomSpecial(oRifterAnimate,Q['R'],Math['min'](Q['C']+0x1,0x9));}}],0x3:[g=>{PlaySubtitle($__language_Array__['7a7e733369443da0c8729ce1c525a8b1'],0x3e8);for(let c=0x0;c<0x3;c++){PlaceZombie(oSkatingZombie,c+0x1,0xb,0x0);}oSym['addTask'](0x190,function(){let w=[PlaceZombie(oMembraneZombie,0x2,0xb,0x0),PlaceZombie(oMembraneZombie,0x4,0xb,0x0)];for(let I of w){I['OSpeed']+=0.8,I['HP']-=0xfa;}for(let Q=0x6;Q<0xa;Q++){for(let k=0x1;k<0x6;k++)CustomSpecial(oRifterAnimate,k,Q);}});}],0x4:[g=>{oSym['addTask'](0x258,function(){for(let c=0x1;c<0x6;c++){if(c!=0x3)PlaceZombie(oCigarZombie,c,0xb,0x0)['Speed']+=0.3;PlaceZombie(oImp,c,0xb,0x0)['Speed']+=0.8;}}),oSym['addTask'](0x3e8,function(){for(let c=0x1;c<0x6;c++){oSym['addTask'](c%0x3*0x12c,w=>{PlaceZombie(oSkatingZombie,c,0xb,0x0)['HP']-=0x1e;});}oSym['addTask'](0xc8,function(){PlaceZombie(oBalloonZombie,0x3,0xb,0x0)['Speed']+=0.2;});});}],0x5:[g=>{let c=[];for(let I of $P){I['EName']=='oPotatoMine'&&(c[I['R']]=!![]);}oSym['addTask'](0x12c,function(){for(let Q=0x1;Q<0x6;Q++){oSym['addTask'](Q%0x4*0x12c,k=>{PlaceZombie(oImp,Q,0xb,0x0)['HP']-=0x14;});}});let w=[0x1,0x2,0x3,0x4,0x5]['random']();oSym['addTask'](0x2bc,function(){for(let Q=0x1;Q<0x6;Q++){if(c[Q]){w=Q;break;}Q!=0x3&&oSym['addTask'](Q%0x2*0x12c,k=>{PlaceZombie(oBalloonZombie,Q,0xb,0x0)['HP']-=0x50;});}PlaceZombie(oSkatingZombie,w,0xb,0x0),oSym['addTask'](0x12c,function(){PlaceZombie(oZombie,w,0xb,0x0);});}),oSym['addTask'](0x3e8,function(){PlaceZombie(oMakeRifterZombie,0x3,0xb,0x0);});}],0x6:[g=>{for(let c=0x1;c<0x6;c++){c!=0x3&&(PlaceZombie(oZombie,c,0xb,0x0)['HP']-=0x1e),c!=0x3&&oSym['addTask'](c*0x64+c%0x3*0xc8,function(){PlaceZombie(oSkatingZombie,c,0xb,0x0);});}}],0x7:[g=>{let i=[],c=0x3;oSym['addTask'](0x2bc,function(){for(let w=0x1;w<0x6;w++){if(i[w]){c=w;break;}}}),PlaceZombie(oZomboni,c,0xb,0x0),oSym['addTask'](0x320,function(){PlaceZombie(oMakeRifterZombie,c,0xb,0x0)['HP']-=0x64;});}],0x8:[g=>{PlaceZombie(oZomboni,0x1,0xb,0x0),PlaceZombie(oZomboni,0x5,0xb,0x0);}]},'FlagToSumNum':{'a1':[0x3,0x5,0x6,0x8,0x9],'a2':[0x1,0x0,0x0,0x3,0x8]}});}