'use strict';oS['Init']({'PName':[oPeashooter,oSunFlower,oWallNut,oPotatoMine,oStoneFlower,oSnowPea,oRepeater],'ZName':[oZombie,oNewspaperZombie,oBalloonZombie,oConeheadZombie,oBucketheadZombie],'PicArr':(function(){var g=oTallNut['prototype'],i=g['PicArr'];return['images/interface/Forest.webp',i[g['CardGif']],i[g['StaticGif']]];}()),'SunNum':0x96,'LevelName':$__language_Array__['ae23d2f0e546d658af812536519ab764'],'LoadMusic':'Bgm_Forest_Ready','StartGameMusic':'Bgm_Forest_Fight','LoadAccess':function(g){oSym['addTask'](0x5a,function(){g(0x0);},[]);}},{'AZ':[[oZombie,0x2,0x1],[oNewspaperZombie,0x1,0x3,[0x2]],[oBalloonZombie,0x3,0x2,[0x2,0x4,0x5,0x6,0x7,0x8,0x9,0xa]],[oConeheadZombie,0x2,0x3],[oBucketheadZombie,0x1,0x7,[0x1,0x4,0x7,0x9]]],'FlagNum':0xa,'FlagToSumNum':{'a1':[0x1,0x2,0x3,0x4,0x6,0x7,0x8,0x9,0xa],'a2':[0x0,0x0,0x2,0x1,0x3,0x5,0x3,0x7,0xa]},'FlagToMonitor':{0x5:[()=>{if(!JSON['parse'](localStorage['JNG_TR_WON']||'{}')[oS['Lvl']]&&hasPlants(!![],g=>{return g['constructor']===oSunFlower;})['length']<0x7)PlaySubtitle($__language_Array__['382945c4c89ae6b1216cd24f30e51b9a'],0x3e8);}]},'FlagToEnd':function(){ShowWinItem(GetPlantCardDom(oTallNut,EDAll));}});