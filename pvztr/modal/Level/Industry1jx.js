'use strict';{oS['Init']({'PName':[oPeashooter,oSunFlower,oWallNut,oPotatoMine,oStoneFlower,oRadish,oSnowPea,oRepeater,oCherryBomb,oTallNut,oSunShroom,oPuffShroom,oScaredyShroom,oFumeShroom,oSporeShroom,oBambooUncle,oDoomShroom,oBegonia,oPepper,oIceAloe,oImitater,oMonotropa,oSpikeweed,oTorchwood,oKiwibeast],'ZName':[oZombie,oConeheadZombie,oBucketheadZombie,oImp,oMembraneZombie,oCigarZombie,oPushIceImp,oStrollZombie,oFootballZombie,oSculptorZombie,oSculpture],'LevelName':$__language_Array__['eaff6f1c8577f142e556c2cd71c98ef0'],'SunNum':0x12c,'LoadMusic':'Bgm_Industry_Ready_JX','StartGameMusic':'Bgm_Industry_Fight_JX','DKind':0x0,'__BalancedPlant__':!![],'LoadAccess'(g){for(let i=0x1;i<=0x5;i++){PlaceZombie(oSculpture,i,0x9);}for(let c=0x1;c<=0x5;c+=0x2){for(let w=0x5;w<=0x6;w++){PlaceZombie(oSculpture,c,w);}}PlaceZombie(oSculpture,0x2,0x6),PlaceZombie(oSculpture,0x4,0x6),CustomSpecial(oTrafficLight,0x2,0x7)['SetColor'](0x0),CustomSpecial(oTrafficLight,0x4,0x7)['SetColor'](0x1),CustomSpecial(oWallNut,0x2,0x7),CustomSpecial(oWallNut,0x4,0x7),CustomSpecial(oWallNut,0x4,0x5),oSym['addTask'](0x5a,g);}},{'AZ':[[oZombie,0x3,0x1,[0x1,0xa,0xb,0xc,0xd,0xe,0xf]],[oConeheadZombie,0x2,0x2,[0x3]],[oBucketheadZombie,0x1,0xa],[oImp,0x2,0x1,[0xa,0xb,0xc,0xd,0xe,0xf]],[oMembraneZombie,0x1,0x14,[0x5,0xa]],[oCigarZombie,0x2,0x3,[0x3,0xa,0x13,0x14]],[oPushIceImp,0x1,0x5],[oStrollZombie,0x1,0x2],[oFootballZombie,0x1,0x11],[oSculptorZombie,0x1,0xb,[0xb,0xf]]],'FlagNum':0x10,'FlagToSumNum':{'a1':[0x1,0x2,0x5,0x6,0x7,0x9,0xb,0xd,0xf,0x10],'a2':[0x1,0x0,0x2,0x3,0x3,0x5,0xa,0x8,0x10,0x1a]},'FlagToMonitor':{0x1:[g=>{PlaceZombie(oZombie,0x2,0xb,0x0),PlaceZombie(oImp,0x4,0xb,0x0),oSym['addTask'](0x1f4,i=>{PlaceZombie(oFootballZombie,0x2,0xb,0x0),PlaceZombie(oConeheadZombie,0x4,0xb,0x0);});}],0x3:[g=>{PlaceZombie(oStrollZombie,0x4,0xb,0x0),oSym['addTask'](0xc8,i=>{PlaceZombie(oStrollZombie,0x4,0xb,0x0);});}],0x4:[g=>{CustomSpecial(oTrafficLight,0x2,0x7)['SetColor'](0x2),CustomSpecial(oTrafficLight,0x4,0x7)['SetColor'](0x2);}],0x6:[g=>{CustomSpecial(oTrafficLight,0x2,0x7)['SetColor'](0x1),CustomSpecial(oTrafficLight,0x4,0x7)['SetColor'](0x0),PlaceZombie(oFootballZombie,0x4,0xb,0x0),PlaceZombie(oBucketheadZombie,0x4,0xb,0x0),PlaceZombie(oStrollZombie,0x4,0xb,0x0);for(let c=0x1;c<=0x5;c+=0x2){PlaceZombie(oConeheadZombie,c,0xb,0x0);}}],0x7:[g=>{PlaceZombie(oFootballZombie,0x4,0xb,0x0),PlaceZombie(oBucketheadZombie,0x4,0xb,0x0),PlaceZombie(oStrollZombie,0x4,0xb,0x0),PlaceZombie(oConeheadZombie,0x2,0xb,0x0);}],0x8:[g=>{PlaceZombie(oBucketheadZombie,0x2,0xb,0x0),PlaceZombie(oStrollZombie,0x4,0xb,0x0),oSym['addTask'](0xc8,i=>{PlaceZombie(oStrollZombie,0x4,0xb,0x0),PlaceZombie(oFootballZombie,0x4,0xb,0x0),PlaceZombie(oBucketheadZombie,0x4,0xb,0x0);});}],0x9:[g=>{CustomSpecial(oTrafficLight,0x2,0x7)['SetColor'](0x2),CustomSpecial(oTrafficLight,0x4,0x7)['SetColor'](0x1),oSym['addTask'](0x1f4,c=>{for(let w=0x2;w<=0x5;w+=0x2){PlaceZombie(oSculptorZombie,w,0xc,0x0);}});}],0xb:[g=>{CustomSpecial(oTrafficLight,0x2,0x7)['SetColor'](0x0),CustomSpecial(oTrafficLight,0x4,0x7)['SetColor'](0x0);for(let c=0x2;c<=0x4;c+=0x2){PlaceZombie(oFootballZombie,c,0xb,0x0),PlaceZombie(oFootballZombie,c,0xc,0x0);}oSym['addTask'](0x1f4,w=>{for(let I=0x2;I<0x6;I+=0x2){!oGd['$LockingGrid'][I+'_11']&&PlaceZombie(oSculpture,I,0xb,0x0);}for(let Q=0x1;Q<=0x5;Q++){PlaceZombie(oSculptorZombie,Q,0xc,0x0);}});}],0xc:[g=>{for(let c=0x2;c<=0x4;c+=0x2){PlaceZombie(oConeheadZombie,c,0xb,0x0),PlaceZombie(oFootballZombie,c,0xc,0x0);}}],0xd:[g=>{for(let c=0x2;c<=0x4;c+=0x2){PlaceZombie(oBucketheadZombie,c,0xb,0x0),PlaceZombie(oFootballZombie,c,0xb,0x0);}}],0xe:[g=>{CustomSpecial(oTrafficLight,0x2,0x7)['SetColor'](0x1),CustomSpecial(oTrafficLight,0x4,0x7)['SetColor'](0x1);for(let c=0x2;c<0x5;c+=0x2){PlaceZombie(oMembraneZombie,c,0xc,0x0);}oSym['addTask'](0x1f4,w=>{for(let I=0x1;I<=0x5;I++){PlaceZombie(oSculptorZombie,I,0xc,0x0);}});}],0xf:[g=>{CustomSpecial(oTrafficLight,0x2,0x7)['SetColor'](0x2),CustomSpecial(oTrafficLight,0x4,0x7)['SetColor'](0x2);}]}});}