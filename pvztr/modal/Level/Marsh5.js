'use strict';oS['Init']({'PName':[oPeashooter,oSunFlower,oWallNut,oPotatoMine,oStoneFlower,oRadish,oSnowPea,oRepeater,oCherryBomb,oTallNut,oSunShroom,oPuffShroom],'ZName':[oZombie,oConeheadZombie,oBucketheadZombie,oSadakoZombie,oStrollZombie],'PicArr':(function(){var g=oScaredyShroom['prototype'],i=g['PicArr'];return[i[g['CardGif']],i[g['StaticGif']]];}()),'CanSelectCard':0x1,'SunNum':0x96,'DKind':0x0,'LevelName':$__language_Array__['cd5c98beaf2b38bb1441679fde8ca191'],'LoadMusic':'Bgm_Marsh_Ready','StartGameMusic':'Bgm_Marsh_Fight','LoadAccess':function(g){oAudioManager['playAudio']('Bgm_Marsh_Noise',0x1,0.5),NewEle(0x0,'div','left:572px;',{'className':'FlowerBed'},FightingScene);let i=NewEle(0x0,'div','left:652px;top:380px;clip:rect(auto,auto,100px,auto)',{'className':'FlowerBed'},FightingScene);for(let k=0x1,f=0x6;k<f;k++){CustomSpecial(oObstacle2,k,0x5);}let c=NewEle('effect'+Math['random'](),'div','position:absolute;z-index:257;width:var(--screen-width);height:600px;background:#FFF;opacity:0;',0x0,EDAll),w=willPlayDialogue(),I=NewEle('DivTeach','div',0x0,0x0,EDAll),Q=NewImg('dDave','','left:0;top:81px',EDAll);(function G(){I['onclick']=G;switch(w){case 0x0:I['onclick']=null,Q['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss1'),innerText(I,$__language_Array__['2c149e9bada779f4515aec928f8c658e']),oEffects['fadeIn'](c,'slow',()=>I['onclick']=G),w++;break;case 0x1:Q['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(I,$__language_Array__['481c198357eb8f512cd29a72fc8b8c62']),w++;break;case 0x2:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(I,$__language_Array__['3971a37a8c7baa6c0a1432f1c21580ad']),w++;break;case 0x3:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(I,$__language_Array__['671e0b9ba2d2627867c7eae943620f31']),w++;break;case 0x4:Q['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss1'),innerText(I,$__language_Array__['843dd768198c93b035bee92b8147e5dc']),w++;break;case 0x5:oAudioManager['playAudio']('Zomboss2'),innerText(I,$__language_Array__['8d9c5b585596eaca6904732c492cd980']),w++;break;case 0x6:Q['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(I,$__language_Array__['f2b6aeba73fe50a3501189380aab6d28']),w++;break;case 0x7:Q['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss3'),innerText(I,$__language_Array__['604a7aac6c01eb15a1aa2465eab90607']),w++;break;case 0x8:oAudioManager['playAudio']('Zomboss3'),innerText(I,$__language_Array__['0b9b0ae078658f31f69b23bc48c2ad2d']),w++;break;case 0x9:oAudioManager['playAudio']('Zomboss2'),innerText(I,$__language_Array__['b844aafcbdce2322c158ad8d4f47f759']),w++;break;case 0xa:oAudioManager['playAudio']('Zomboss2'),innerText(I,$__language_Array__['dd0c8e66d764601d6ecffc41aefd38b2']),w++;break;case 0xb:oAudioManager['playAudio']('Zomboss2'),innerText(I,$__language_Array__['f7c65a8abd281775918ca3325c4af32c']),w++;break;case 0xc:oAudioManager['playAudio']('Zomboss2'),innerText(I,$__language_Array__['344ac9e7b06c03151b6e70192549e1ad']),w++;break;case 0xd:Q['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(I,$__language_Array__['0a239b998cccde333ab2a687b4d0fd13']),w++;break;case 0xe:Q['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss2'),innerText(I,$__language_Array__['6f4af49d330d68b867c416eaecebcfd0']),w++;break;case 0xf:Q['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(I,$__language_Array__['37917d9a2a3c399ce574fc33b3a2cb84']),w++;break;case 0x10:I['onclick']=null,Q['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong2'),innerText(I,$__language_Array__['80efb5dbd20b33a1c5d50f6836a94b2f']),oEffects['fadeOut'](c,'slow',()=>I['onclick']=G),w++;break;case 0x11:oAudioManager['playAudio']('crazydavelong2'),innerText(I,$__language_Array__['9953184e9420849ea39ece3d533460c7']),ClearChild(i),w++;break;case 0x12:oAudioManager['playAudio']('crazydavelong1'),innerText(I,$__language_Array__['cc2ad9fc32d9909b57fb5ee6fa24f4be']),w++;break;case 0x13:oAudioManager['playAudio']('crazydavelong1'),innerText(I,$__language_Array__['f6ea2f707e145b3754d9d83014ab5a41']),w++;break;default:ClearChild(I,Q,c,i),oSym['addTask'](0x1e,g);}}());},'StartGame':g=>{PlaySubtitle($__language_Array__['06eb602b20a4783bbbf384b97348b480'],0x190),oMiniGames['ProtectPlants']({'oObstacle2':0x5});}},{'AZ':[[oZombie,0x3,0x1],[oConeheadZombie,0x1,0x5],[oSadakoZombie,0x1,0x6],[oBucketheadZombie,0x1,0x8],[oStrollZombie,0x1,0x9,[0x9,0xb]]],'FlagNum':0xc,'FlagToSumNum':{'a1':[0x3,0x6,0x8,0xa,0xb],'a2':[0x1,0x3,0x8,0xc,0x10,0x16]},'FlagToEnd':function(){ShowWinItem(GetPlantCardDom(oScaredyShroom,EDAll));}});