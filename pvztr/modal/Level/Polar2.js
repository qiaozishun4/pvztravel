'use strict';{let firstTimePlay=!localStorage['getJsonItem']('JNG_TR_WON','Polar2');oS['Init']({'PName':[oPeashooter,oSnowPea,oBegonia],'ZName':[oStrollZombie,oSkatingZombie],'PicArr':(function(){let g=oBegonia['prototype'],i=g['PicArr'];return[i[g['CardGif']],i[g['StaticGif']]];}()),'LevelName':$__language_Array__['ae06dd464aaa01a493e089096c800241'],'StartGameMusic':'Bgm_Polar_Fight_Challenge','CanSelectCard':0x0,'DynamicDifficulty':![],'StaticCard':0x0,'FixedProps':'disabled','LoadAccess':function(g){oAudioManager['playAudio']('Bgm_Polar_Noise',0x1);for(let i=0x1;i<0xa;i++){for(let c=0x1;c<0x6;c++){CustomSpecial(oRifter,c,i);}}if(willPlayDialogue()>=0x0){let w=NewEle('effect'+Math['random'](),'div','position:absolute;z-index:257;width:var(--screen-width);height:600px;background:#FFF;opacity:1;',0x0,EDAll),I=0x0,Q=NewEle('DivTeach','div',0x0,0x0,EDAll),k=NewImg('dDave','','left:0;top:81px',EDAll);!firstTimePlay&&(I=5.5),function f(){Q['onclick']=f;switch(I){case 0x0:k['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss3'),innerText(Q,$__language_Array__['6e94099340c74ffd5efce147f320c16b']),I++;break;case 0x1:k['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(Q,$__language_Array__['eb2aa648dbe56c7012a9d365ca7db835']),I++;break;case 0x2:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(Q,$__language_Array__['d49ff9caa743839f872d0473f9a3e244']),I++;break;case 0x3:k['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss2'),innerText(Q,$__language_Array__['1acffb3de3bf20f76bfc42d6dcdc7cc1']),I++;break;case 0x4:oAudioManager['playAudio']('Zomboss3'),innerText(Q,$__language_Array__['103dea8d46a528aad3403b041b4a9a4a']),I++;break;case 0x5:Q['onclick']=null,oEffects['fadeOut'](w,'slow',()=>{Q['onclick']=f,f();}),I+=0.5;break;case 5.5:w['style']['opacity']=0x0,k['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(Q,$__language_Array__['a322d34bdb4db790473e060be25871c3']),I+=0.5;break;case 0x6:k['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong1'),innerText(Q,'……'),I++;break;case 0x7:k['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(Q,$__language_Array__['135a9eddd9b351822cd5a9df9c3f3ca5']),I++;break;case 0x8:k['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong1'),innerText(Q,'……'),I++;break;case 0x9:k['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(Q,$__language_Array__['ab689ce47cf1aa016f9bb503593ebce8']),I++;break;case 0xa:k['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong2'),innerText(Q,$__language_Array__['7145ad96faa53a96d252b5bde65bfe81']),I++;break;case 0xb:k['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss1'),innerText(Q,$__language_Array__['12473b520e9be53a32d6fcbafd25ad53']),I++;break;case 0xc:oAudioManager['playAudio']('Zomboss2'),innerText(Q,$__language_Array__['7d08903ac72999c8041627fcf5150dca']),I++;break;case 0xd:oAudioManager['playAudio']('Zomboss2'),innerText(Q,$__language_Array__['ca73a6a7d4f8b2fc25c96d1d9e08f166']),I++;break;case 0xe:k['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong1'),innerText(Q,'……'),I++;break;case 0xf:k['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss1'),innerText(Q,$__language_Array__['eab74d698ac117a330eaa8dd58c4cfdf']),I++;break;case 0x10:oAudioManager['playAudio']('Zomboss2'),innerText(Q,$__language_Array__['a1545ec0b100a324791f9547de1d9730']),I++;break;case 0x11:oAudioManager['playAudio']('Zomboss3'),innerText(Q,$__language_Array__['c4b07450d250e6f232f8a34a857eedf2']),I++;break;case 0x12:oAudioManager['playAudio']('Zomboss1'),innerText(Q,$__language_Array__['9bab26d5fd937353de2b2adc64c152bc']),I++;break;case 0x13:oAudioManager['playAudio']('Zomboss2'),innerText(Q,$__language_Array__['e961f932e1d85619a62b813791092466']),I++;break;case 0x14:oAudioManager['playAudio']('Zomboss3'),innerText(Q,$__language_Array__['89dac5754a613618c461cb0c5b29a49b']),I++;break;case 0x15:k['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(Q,$__language_Array__['712751232fede16bdf0b36c3dcdccc59']),I++;break;case 0x16:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(Q,$__language_Array__['4cb91c1c8c0785a00c510c619293b280']),I++;break;case 0x17:k['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong3'),innerText(Q,$__language_Array__['db00fb5765db7563ea3086179f7cf626']),I++;break;case 0x18:oAudioManager['playAudio']('crazydavelong2'),innerText(Q,$__language_Array__['38dcefa24488e28eed339e663b80ab2d']),I++;break;case 0x19:ClearChild(Q,k),ClearChild(w),oSym['addTask'](0x1e,g);}}();}else oSym['addTask'](0x1e,g);},'StartGame':g=>oMiniGames['ConveyorBelt']([oPeashooter,oSnowPea,oBegonia,oBegonia],0x208,0x2,[oBegonia,oBegonia,oSnowPea,oPeashooter,oPeashooter,oBegonia,oBegonia,oSnowPea,oBegonia,oBegonia,oBegonia])},{'AZ':[[oStrollZombie,0x3,0x1],[oSkatingZombie,0x2,0x8,[0x8]]],'FlagNum':0xd,'FlagToSumNum':{'a1':[0x4,0x5,0x7,0x9,0xc],'a2':[0x1,0x2,0x5,0xe,0x12,0x24]},'FlagToEnd':function(){firstTimePlay?SelectModal('Polar2-1'):ShowWinItem(GetPlantCardDom(oBegonia));}});}