'use strict';oS['Init']({'PName':[oMonotropa,oAbutilonHybriden,oMiracleImitater,oJalapeno,oCherryBomb,oBambooUncle],'ZName':[oZombie,oConeheadZombie,oNewspaperZombie,oSadakoZombie,oPushIceImp,oZomboni,oCaskZombie],'CanSelectCard':0x0,'LevelName':''+$__language_Array__['47b8fbd8631992bb027d4df6763785fc'][0x0]+localStorage['JNG_TR_ACT_SPFES_2020'],'StaticCard':0x1,'DKind':0x1,'LoadMusic':'Bgm_Forest_Ready','StartGameMusic':'Bgm_Forest_Fight_Challenge','backgroundMask':'BgMask-Forest','backgroundImage':'images/interface/Forest.webp','LoadAccess':function(g){oSym['addTask'](0x5a,function(){g(0x0);});}},{'AZ':[[oZombie,0x2,0x1,[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa]],[oConeheadZombie,0x2,0x2,[0x2,0x3,0x4,0x6,0x7,0x8,0x9,0xb,0xe]],[oNewspaperZombie,0x1,0x2,[0x2,0x3,0x4,0x5,0x6,0xe,0xf]],[oSadakoZombie,0x2,0x4,[0x4,0x5,0x6,0x8,0xa]],[oPushIceImp,0x1,0x3,[0x3,0x5,0x7,0x8,0x9,0xb,0xe]],[oZomboni,0x2,0x4,[0x4,0x6,0x7,0x8,0xa,0xb,0xd,0xe,0xf]],[oCaskZombie,0x2,0x2,[0x2,0x3,0x5,0x7,0xa,0xb,0xe]]],'FlagNum':0xf,'FlagToSumNum':{'a1':[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa,0xb,0xc,0xd,0xe,0xf],'a2':[0x2,0x3,0x7,0x12,0xd,0xf,0x12,0x18,0x1a,0x23,0x2c,0x26,0x36,0x3f,0x2d]},'FlagToEnd':function(){ShowWinItem(NewImg('imgSF','images/interface/Clearance_reward.png','left:535px;top:200px;width:116px;height:119px;',EDAll,{'onclick':g=>{localStorage['JNG_TR_ACT_SPFES_2020']=Math['min'](Number['parseInt'](localStorage['JNG_TR_ACT_SPFES_2020'])+0x1,0x10),GetWin(g['target'],Exitlevel(oS['Lvl'],0x1));}}));}});