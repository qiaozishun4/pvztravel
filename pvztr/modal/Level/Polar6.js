'use strict';oS['Init']({'PName':[oPeashooter,oSunFlower,oWallNut,oPotatoMine,oStoneFlower,oRadish,oSnowPea,oRepeater,oCherryBomb,oTallNut,oSunShroom,oPuffShroom,oScaredyShroom,oFumeShroom,oSporeShroom,oBambooUncle,oDoomShroom,oBegonia,oPepper],'ZName':[oImp,oBucketheadZombie,oFootballZombie],'PicArr':['images/interface/Polar.webp'],'LevelName':$__language_Array__['d9addae36676e179f30a12892a6fa4fd'],'LoadMusic':'Bgm_Polar_Ready_1','StartGameMusic':'Bgm_Polar_Fight_1','LoadAccess':function(g){for(let c=0x1;c<0x6;c++){CustomSpecial(oRifter,c,0x1),CustomSpecial(oRifter,c,0x8),CustomSpecial(oRifter,c,0x9);}if(willPlayDialogue()>=0x0){let w=0x0,I=NewEle('DivTeach','div',0x0,0x0,EDAll),Q=NewImg('dDave','','left:0;top:81px',EDAll);(function k(){I['onclick']=k;switch(w){case 0x0:Q['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(I,$__language_Array__['317ffaa84f6e22d4d8ea9b3d50c134be']),w++;break;case 0x1:Q['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong3'),innerText(I,$__language_Array__['bbc7ea630a729fc015b20ee337fd9cfa']),w++;break;case 0x2:Q['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(I,$__language_Array__['622d654c2dff0cb9257e0c88d8adbd4f']),w++;break;case 0x3:Q['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong3'),innerText(I,$__language_Array__['9dfe44533be04531a3b064270901ddca']),w++;break;case 0x4:Q['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(I,$__language_Array__['18ddca56b3cdd518684aa5da06b06b1f']),w++;break;case 0x5:Q['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss2'),innerText(I,$__language_Array__['33c7af137f73217e9a25c2df75bc6ad8']),w++;break;case 0x6:Q['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong2'),innerText(I,$__language_Array__['89bd8d6538471ba7e27f393d47401cae']),w++;break;case 0x7:Q['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(I,$__language_Array__['79d439fedf8ff5936f35b413c6c73958']),w++;break;case 0x8:Q['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong3'),innerText(I,$__language_Array__['a3465f4412a3d707607b8c7e2cf9febc']),w++;break;case 0x9:ClearChild(I,Q),oSym['addTask'](0x1e,g);}}());}else oSym['addTask'](0x1e,g);}},{'AZ':[[oImp,0x4,0x1],[oBucketheadZombie,0x3,0x5,[0x3,0x4,0x5,0x6,0x7]],[oFootballZombie,0x1,0xa,[0x8,0x8,0x9,0x9]]],'FlagNum':0x9,'FlagToSumNum':{'a1':[0x1,0x2,0x3,0x5,0x7,0x8,0x9],'a2':[0x4,0x5,0x5,0x8,0x10,0x1c,0x20]}});