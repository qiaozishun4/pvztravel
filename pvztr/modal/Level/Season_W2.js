'use strict';oS['Init']({'PName':[oPeashooter,oSunFlower,oWallNut,oPotatoMine,oStoneFlower,oRadish,oSnowPea,oRepeater,oCherryBomb,oTallNut,oSunShroom,oPuffShroom,oScaredyShroom,oFumeShroom,oSporeShroom,oBambooUncle,oDoomShroom,oBegonia,oPepper,oIceAloe,oImitater,oMonotropa,oSpikeweed,oMiracleImitater,oJalapeno,oLSP],'ZName':[oZombie,oConeheadZombie,oBucketheadZombie,oBalloonZombie,oNewspaperZombie,oStrollZombie,oCigarZombie,oSkatingZombie,oZomboni,oMakeRifterZombie,oFootballZombie,oImp,oCaskZombie,oSadakoZombie,oIceBlock,oPushIceImp,oMembraneZombie],'LevelName':$__language_Array__['680e5ceb64b376bf5d9911d7b3175d57'],'LoadAccess':function(g){oAudioManager['playAudio']('Bgm_Polar_Noise',0x1);for(let c=0x1;c<=0x5;c++){for(let w=0x8;w>=0x1;w--){if(w<0x5&&w!=0x4)CustomSpecial(oBegonia,c,w);else{if(w<0x7&&w!=0x4){let I=new oIceBlock();oP['AppearUP'](I,c,w,{'useEleBodyAnim':!![]},![]);}else CustomSpecial(oRifter,c,w);}}CustomSpecial(oZombiePlusBloodObs,c,0x9);}willPlayDialogue()>=0x0?(NewImg('dDave','','left:0;top:81px',EDAll),NewEle('DivTeach','div',0x0,0x0,EDAll),function Q(k){var f=$('DivTeach');switch(k){case 0x0:oAudioManager['playAudio']('crazydavelong'+Math['floor'](0x1+Math['random']()*0x3)),$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',f['onclick']=function(){oSym['addTask'](0x1,Q,[0x1]);};},[]),innerText(f,$__language_Array__['da47a178378015819007db28d421e0c8']);break;case 0x1:oAudioManager['playAudio']('crazydaveshort1'),f['onclick']=null,$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',f['onclick']=function(){oSym['addTask'](0x1,Q,[0x2]);};},[]),innerText(f,$__language_Array__['528104bbbfda514c11a42d6cc28bb5f8']);break;case 0x2:oAudioManager['playAudio']('crazydaveshort1'),f['onclick']=null,$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',f['onclick']=function(){oSym['addTask'](0x1,Q,[0x3]);};},[]),innerText(f,$__language_Array__['a69966b655aff7c0a0067e068d8dc37e']);break;case 0x3:oAudioManager['playAudio']('crazydavelong'+Math['floor'](0x1+Math['random']()*0x3)),f['onclick']=null,$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',f['onclick']=function(){oSym['addTask'](0x1,Q,[0x4]);};},[]),innerText(f,$__language_Array__['9185e30433f668d5ac7fe8012966ad45']);break;case 0x4:oAudioManager['playAudio']('crazydaveshort1'),f['onclick']=null,$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',f['onclick']=function(){oSym['addTask'](0x1,Q,[0x5]);};},[]),innerText(f,$__language_Array__['c783c3a7110e5deb767c22c51cd7c7c2']);break;case 0x5:oAudioManager['playAudio']('crazydavecrazy'),f['onclick']=null,$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',f['onclick']=function(){oSym['addTask'](0x1,Q,[0x6]);};},[]),innerText(f,$__language_Array__['6a2695292b2c4303d4361582b36302a6']);break;case 0x6:oAudioManager['playAudio']('crazydavelong'+Math['floor'](0x1+Math['random']()*0x3)),f['onclick']=null,$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',f['onclick']=function(){oSym['addTask'](0x1,Q,[0x7]);};},[]),innerText(f,$__language_Array__['4485ed5ed55526ea7dce5eeaaa54c134']);break;case 0x7:ClearChild($('DivTeach'),$('dDave')),oSym['addTask'](0x1e,function(){g(0x0);});}}(0x0)):oSym['addTask'](0x1e,g);},'StartGame':function(){oEffects['BgParticle']({'url':'images/Props/Effect/snow_pieces.png','style':'left:'+oS['EDAllScrollLeft']+'px;'}),oAudioManager['pauseMusic'](),oAudioManager['playMusic'](oS['StartGameMusic']),SetVisible($('tdShovel'),$('dFlagMeter'),$('dTop')),oS['InitLawnMover'](),oS['ControlFlagmeter']&&oFlagContent['init']({'fullValue':oP['FlagNum']-0x1,'curValue':0x0}),oSym['addTask'](0x2710,function g(){if(Math['random']()*0x3<0x2){const i=Math['floor'](Math['random']()*0x2)+0x1;oMiniGames['IceStorm'](i,i,0x1);}else{const c=[[0x1,0x4],[0x3,0x4],[0x4,0x5],[0x1,0x3],[0x3,0x5],[0x2,0x4],[0x1,0x2],[0x2,0x3]],w=c[Math['floor'](Math['random']()*c['length'])];oMiniGames['IceStorm'](w[0x0],w[0x1],Math['floor'](Math['random']()*0x3)+0x2);}oSym['addTask'](Math['random']()*0x3e8+0x1770,g);}),PrepareGrowPlants(function(){oP['Monitor'](oS['Monitor'],oS['UserDefinedFlagFunc']),BeginCool(),oSym['addTask'](0x258,function(){oP['AddZombiesFlag'](),oS['ControlFlagmeter']&&oFlagContent['show']();});});}},{'AZ':[[oZomboni,0x1,0xd,[0x5,0xc]],[oMakeRifterZombie,0x1,0x7],[oMembraneZombie,0x1,0xc,[0x8,0xa,0xc]],[oZombie,0x1,0x1],[oConeheadZombie,0x1,0x2],[oBucketheadZombie,0x1,0x3],[oBalloonZombie,0x1,0x5],[oNewspaperZombie,0x1,0x2],[oStrollZombie,0x1,0x5],[oFootballZombie,0x1,0x5],[oImp,0x3,0x1],[oCaskZombie,0x1,0x2],[oSadakoZombie,0x1,0x2],[oPushIceImp,0x1,0x6],[oCigarZombie,0x1,0x2]],'FlagNum':0xc,'FlagToMonitor':{0x5:[()=>{for(let g=0x2;g<0x5;g+=0x2){PlaceZombie(oBalloonZombie,g,0xc,0x0);}},0x0],0x6:[()=>{oMiniGames['IceStorm'](0x2,0x5,0x2);},0x0],0x7:[()=>{oMiniGames['IceStorm'](0x2,0x5,0x3);for(let g=0x1;g<0x6;g++){PlaceZombie(oBalloonZombie,g,0xb,0x0);}},0x0],0x8:[()=>{for(let g=0x1;g<0x6;g+=0x2){oSym['addTask'](0x3e8,PlaceZombie,[oMakeRifterZombie,g,0xb,0x0]),oSym['addTask'](0x6a4,PlaceZombie,[oStrollZombie,g,0xb,0x0]);}},0x0],0xa:[()=>{oMiniGames['IceStorm'](0x2,0x5,0x4);for(let g=0x2;g<0x6;g+=0x2){PlaceZombie(oSkatingZombie,g,0xb),oSym['addTask'](0x320,PlaceZombie,[oZomboni,g,0xb,0x0]);}},0x0]},'FlagToSumNum':{'a1':[0x1,0x4,0x6,0x8,0x9,0xa],'a2':[0x0,0x1,0x2,0x3,0x7,0xc,0x16]},'FlagToEnd':function(){ShowWinItem(NewImg('imgSF','images/interface/Clearance_reward.png','left:535px;top:200px;width:116px;height:119px;',EDAll,{'onclick'(){GetWin(this,'Season_W3');}}));}});