'use strict';oS['Init']({'PName':[oPeashooter,oSunFlower,oWallNut,oPotatoMine,oStoneFlower,oSnowPea,oRepeater,oTallNut],'ZName':[oZombie,oNewspaperZombie,oBalloonZombie,oConeheadZombie,oBucketheadZombie,oStrollZombie],'SunNum':0x96,'LevelName':$__language_Array__['660263d0cf9850d93bea593129cac36f'],'LoadMusic':'Bgm_Forest_Ready','StartGameMusic':'Bgm_Forest_Fight','LoadAccess'(g){for(let c=0x1;c<=oS['R'];c++){CustomSpecial(oTallNut,c,0x9);}oSym['addTask'](0x5a,g);}},{'AZ':[[oZombie,0x3,0x1],[oNewspaperZombie,0x1,0x3],[oBalloonZombie,0x2,0x4,[0x1,0x2,0x3]],[oConeheadZombie,0x2,0x2],[oBucketheadZombie,0x1,0x8,[0x8,0xb,0xc]],[oStrollZombie,0x2,0x4,[0x4,0x7,0x9,0xa,0xb,0xc]]],'FlagNum':0xc,'FlagToSumNum':{'a1':[0x1,0x2,0x6,0x7,0x8,0xa,0xb,0xc],'a2':[0x4,0x3,0x4,0x7,0xa,0x6,0xb,0xc]},'FlagToMonitor':{0x5:[()=>{if(!JSON['parse'](localStorage['JNG_TR_WON']||'{}')[oS['Lvl']]&&hasPlants(!![],g=>{return g['constructor']===oSunFlower;})['length']<0x7)PlaySubtitle($__language_Array__['7c56d51cb4b10d4192605e4ea5bb7aad'],0x3e8);}]}});