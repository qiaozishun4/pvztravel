'use strict';{let bosschk=function(){let g=0x0,c=0x0;for(let w of $Z){if(w['EName']=='oBeetleCarZombieSP')g++;}if(g==0x0){for(let I of $Z){if(I['X']>0x352)I['DisappearDie']();else{if(!I['isPuppet'])c++;}}if(c==0x0){toWin();for(let Q of $Z){Q['DisappearDie']();}}}else return!![];};oS['Init']({'PName':[oPeashooter,oSunFlower,oWallNut,oPotatoMine,oStoneFlower,oRadish,oSnowPea,oRepeater,oCherryBomb,oTallNut,oSunShroom,oPuffShroom,oScaredyShroom,oFumeShroom,oSporeShroom,oBambooUncle,oDoomShroom,oBegonia,oPepper,oIceAloe,oImitater,oMonotropa,oSpikeweed,oTorchwood,oKiwibeast,oPlantern,oCabbage,oBlover],'ZName':[oZombie,oBeetleCarZombieSP,oConeheadZombie,oBucketheadZombie,oSadakoZombie,oCaskZombie,oMembraneZombieSP,oBeetleCarZombie,oCigarZombie,oStrollZombie,oFootballZombie,oZomboni,oNewspaperZombie,oMembraneZombie,oPushIceImp,oMakeRifterZombie,oSkatingZombie,oBalloonZombie,oSculpture],'LevelName':$__language_Array__['874164ff7f16ab21c19d562db0fa3d7f'],'__BalancedPlant__':!![],'SunNum':0x12c,'LoadMusic':'Bgm_Industry_Ready_JX','StartGameMusic':'Bgm_Industry_Fight_Challenge_JX_2','DKind':0x0,'__BalancedPlant__':!![],'CardsType':{'oKiwibeast':0x1,'oBambooUncle':0x1,'oDoomShroom':0x1},'LoadAccess'(g){for(let i=0x1;i<=0x5;i++){i%0x2!=0x0&&PlaceZombie(oSculpture,i,0x3),i%0x2==0x0&&PlaceZombie(oSculpture,i,0x4);}CustomSpecial(oTrafficLight,0x1,0x8)['SetColor'](0x2),CustomSpecial(oTrafficLight,0x5,0x9)['SetColor'](0x2),NewEle(0x0,'div','left:732px;z-index:0;',{'className':'Mould'},FightingScene),NewEle(0x0,'div','left:812px;z-index:0;',{'className':'Mould'},FightingScene),NewEle(0x0,'div','left:892px;z-index:0;',{'className':'Mould'},FightingScene);for(let c=0x1;c<0x6;c++){for(let w=0x7;w<0xa;w++){CustomSpecial(oObstacle,c,w);}}if(willPlayDialogue()>=0x0){let I=0x0,Q=NewEle('DivTeach','div',0x0,0x0,EDAll),k=NewImg('dDave','','left:0;top:81px',EDAll),f,G=NewEle('','div','position:absolute;left:0;top:0;width:var(--screen-width);height:600px;z-index:1299;display:none;',{},EDAll);(function z(){Q['onclick']=z,Q['style']['display']=k['style']['display']='none',oAudioManager['playAudio']('zombosswrite'),oEffects['TextEffects']['ZombossEffect'](![],function(X){f=X,SetBlock(G);let F=0x0;G['onclick']=f['onclick']=function(){F<0x4?(oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),f['innerText']=[$__language_Array__['5294935dda0d1bfb04ebba886391c288'],$__language_Array__['2781b9d12e5ebe142686a5d7270f895f'],$__language_Array__['df8e98f7475db095834dc41629df1d0f'],$__language_Array__['33fcc47168e747552590c0373d99bc4a']][F++]):e();},f['click']();});function e(){oAudioManager['playAudio']('zombosswrite'),oEffects['TextEffects']['ZombossEffect'](f,()=>{SetNone(G),ClearChild(Q,k,G),oSym['addTask'](0xa,g);});}}());}else oSym['addTask'](0x5a,g);},'HaveFog':{'leftBorder':0x3,'type':'Fog'},'StartGame':function(){oSym['addTask'](0x7d0,g=>{PlaceZombie(oSadakoZombie,0x2,0xc,0x0),PlaceZombie(oZombie,0x1,0xc,0x0),PlaceZombie(oSadakoZombie,0x4,0xc,0x0),PlaceZombie(oZombie,0x3,0xc,0x0);}),oAudioManager['pauseMusic'](),oAudioManager['playMusic'](oS['StartGameMusic']),SetVisible($('tdShovel'),$('dFlagMeter'),$('dTop')),oS['InitLawnMover'](),oS['ControlFlagmeter']&&oFlagContent['init']({'fullValue':oP['FlagNum']-0x1,'curValue':0x0}),PrepareGrowPlants(function(){oP['Monitor'](oS['Monitor'],oS['UserDefinedFlagFunc']),BeginCool(),oS['DKind']&&AutoProduceSun(0x32),oSym['addTask'](0x5dc,function(){oP['AddZombiesFlag'](),oS['ControlFlagmeter']&&oFlagContent['show']();},[]);});}},{'AZ':[[oZombie,0x4,0x1],[oBeetleCarZombieSP,0x1,0x64],[oConeheadZombie,0x2,0x2],[oBucketheadZombie,0x1,0x6],[oMembraneZombieSP,0x1,0x64],[oCigarZombie,0x2,0x6],[oStrollZombie,0x1,0x7],[oFootballZombie,0x1,0x64],[oBeetleCarZombie,0x1,0x64],[oZomboni,0x1,0x64]],'FlagNum':0xc,'FlagToSumNum':{'a1':[0x1,0x6,0x8,0xa,0xb],'a2':[0x0,0x3,0x5,0xa,0x16]},'FlagToMonitor':{0x1:[g=>{oSym['addTask'](0x320,i=>{PlaceZombie(oConeheadZombie,0x2,0xc,0x0),PlaceZombie(oConeheadZombie,0x4,0xc,0x0);});}],0x2:[g=>{PlaceZombie(oStrollZombie,0x3,0xb,0x0),PlaceZombie(oStrollZombie,0x4,0xb,0x0),PlaceZombie(oSadakoZombie,0x2,0xb,0x0),oSym['addTask'](0xc8,i=>{PlaceZombie(oStrollZombie,0x3,0xb,0x0),PlaceZombie(oStrollZombie,0x4,0xb,0x0);});}],0x3:[g=>{CustomSpecial(oTrafficLight,0x1,0x8)['SetColor'](0x1),PlaceZombie(oStrollZombie,0x1,0xb,0x0),oSym['addTask'](0x320,i=>{PlaceZombie(oFootballZombie,0x1,0xc,0x0);});}],0x4:[g=>{CustomSpecial(oTrafficLight,0x5,0x9)['SetColor'](0x1),PlaceZombie(oCaskZombie,0x5,0xb,0x0),PlaceZombie(oConeheadZombie,0x2,0xc,0x0),PlaceZombie(oSadakoZombie,[0x1,0x2,0x3,0x4]['random'](),0xb,0x0),PlaceZombie(oSadakoZombie,[0x1,0x2,0x3,0x4]['random'](),0xc,0x0);}],0x5:[g=>{CustomSpecial(oTrafficLight,0x1,0x8)['SetColor'](0x2),PlaceZombie(oStrollZombie,0x5,0xb,0x0);for(let c=0x1;c<=0x5;c+=0x2){PlaceZombie(oConeheadZombie,c,0xb,0x0);}}],0x6:[g=>{CustomSpecial(oTrafficLight,0x5,0x9)['SetColor'](0x2);for(let c=0x1;c<=0x5;c+=0x2){PlaceZombie(oBucketheadZombie,c,0xb,0x0);}oSym['addTask'](0x1f4,w=>{PlaceZombie(oCigarZombie,0x2,0xc,0x0),PlaceZombie(oCigarZombie,0x4,0xc,0x0);});}],0x7:[g=>{PlaceZombie(oBeetleCarZombie,0x4,0xc,0x0),oSym['addTask'](0x3e8,i=>{PlaceZombie(oCaskZombie,0x4,0xb,0x0);}),PlaceZombie(oSadakoZombie,0x2,0xb,0x0),PlaceZombie(oStrollZombie,0x3,0xb,0x0),PlaceZombie(oStrollZombie,0x4,0xb,0x0),PlaceZombie(oConeheadZombie,0x1,0xb,0x0);}],0x8:[g=>{for(let i=0x1;i<=0x5;i++){i%0x2!=0x0&&PlaceZombie(oSculpture,i,0x7),i%0x2!=0x0&&PlaceZombie(oCrystal,i,0x9),i%0x2==0x0&&PlaceZombie(oSculpture,i,0x8);}CustomSpecial(oTrafficLight,0x1,0x8)['SetColor'](0x0),PlaceZombie(oZomboni,0x2,0xc,0x0),PlaceZombie(oMembraneZombieSP,0x4,0xc,0x0),PlaceZombie(oMembraneZombieSP,0x2,0xc,0x0),PlaceZombie(oStrollZombie,0x4,0xb,0x0),oSym['addTask'](0x12c,c=>{for(let w=0x1;w<0x5;w++)PlaceZombie(oFootballZombie,0x1,0xb,0x0);PlaceZombie(oBucketheadZombie,0x3,0xb,0x0);});}],0x9:[g=>{CustomSpecial(oTrafficLight,0x5,0x9)['SetColor'](0x0),PlaceZombie(oZomboni,0x5,0xc,0x0),PlaceZombie(oBeetleCarZombie,0x5,0xc,0x0),PlaceZombie(oCaskZombie,0x5,0xc,0x0),oSym['addTask'](0x1f4,c=>{for(let w=0x2;w<=0x5;w+=0x2){PlaceZombie(oCaskZombie,w,0xc,0x0);}});}],0xa:[g=>{CustomSpecial(oTrafficLight,0x1,0x8)['SetColor'](0x1),oSym['addTask'](0x1f4,c=>{for(let w=0x1;w<=0x5;w+=0x2){PlaceZombie(oConeheadZombie,w,0xc,0x0);}});}],0xb:[g=>{CustomSpecial(oTrafficLight,0x5,0x9)['SetColor'](0x2);for(let c=0x1;c<=0x5;c++){PlaceZombie(oBucketheadZombie,c,0xb,0x0);}oSym['addTask'](0x7d0,w=>{PlaceZombie(oBeetleCarZombie,0x2,0xc,0x0),PlaceZombie(oBeetleCarZombieSP,0x3,0xc,0x0),PlaceZombie(oBeetleCarZombie,0x4,0xc,0x0),oSym['addTask'](0x190,I=>{PlaceZombie(oBeetleCarZombie,0x1,0xc,0x0),PlaceZombie(oMembraneZombieSP,0x3,0xc,0x0);}),oSym['addTask'](0x7d0,I=>{CustomSpecial(oTrafficLight,0x1,0x8)['SetColor'](0x2),PlaceZombie(oMembraneZombieSP,0x1,0xc,0x0),PlaceZombie(oMembraneZombieSP,0x5,0xc,0x0);});for(let I=0x1;I<=0xa;I++){oSym['addTask'](I*0xdac,Q=>{CustomSpecial(oTrafficLight,0x1,0x8)['SetColor'](0x1),CustomSpecial(oTrafficLight,0x5,0x9)['SetColor'](0x2),oSym['addTask'](0x6d6,k=>{CustomSpecial(oTrafficLight,0x1,0x8)['SetColor'](0x2),CustomSpecial(oTrafficLight,0x5,0x9)['SetColor'](0x1);});}),oSym['addTask'](I*0x190,Q=>{bosschk()&&PlaceZombie(oZombie,I%0x5+0x1,0xc);}),oSym['addTask'](I*0x2a8,Q=>{bosschk()&&PlaceZombie(oStrollZombie,I%0x5+0x1,0xc);}),oSym['addTask'](I*0x9c4,Q=>{bosschk()&&PlaceZombie(oFootballZombie,I%0x5+0x1,0xc);}),oSym['addTask'](I*0x370,Q=>{bosschk()&&PlaceZombie(oConeheadZombie,0x5-I%0x5,0xc);}),oSym['addTask'](I*0x3c0,Q=>{bosschk()&&PlaceZombie(oSadakoZombie,[0x1,0x2,0x3,0x4,0x5]['random'](),0xc);}),oSym['addTask'](I*0x5dc,Q=>{bosschk()&&PlaceZombie(oBucketheadZombie,0x5-I%0x5,0xc);}),oSym['addTask'](I*0x500,Q=>{bosschk()&&PlaceZombie(oCaskZombie,[0x1,0x2,0x3,0x4,0x5]['random'](),0xc);}),oSym['addTask'](I*0xe10,Q=>{bosschk()&&PlaceZombie(oBeetleCarZombie,[0x1,0x2,0x4,0x5]['random'](),0xc);});if(I%0x2!=0x0)oSym['addTask'](I*0x1518,Q=>{bosschk()&&PlaceZombie(oZomboni,[0x2,0x4]['random'](),0xc);});}});}]},'FlagToEnd':function(){localStorage['JNG_TR_PropsUnlock']=JSON['stringify'](Object['assign'](localStorage['JNG_TR_PropsUnlock']?JSON['parse'](localStorage['JNG_TR_PropsUnlock']):{},{'bat_staff':0x1})),ShowWinItem(NewImg('imgSF','images/Props/PropsIcon/bat_staff.webp','left:767px;top:330px;width:60px;height:60px;',EDAll,{'onclick':function(){GetNewProp(this,'images/Props/BatStaff/BatStaff.webp',$__language_Array__['37530e2749c179aaeeee7eb509705e5a'],$__language_Array__['87956ecb389169858aa178ffc50b2240'],'Industry_SelectionMap_2','180px','400px');}}));}});}