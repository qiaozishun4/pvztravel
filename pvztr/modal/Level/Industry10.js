'use strict';{function showADate(g,i=!![],c=null,w=null){let I='0,0,0',Q='255,255,255',k=NewEle('effect'+Math['random'](),'div','position:absolute;z-index:257;width:var(--screen-width);height:600px;background:rgba('+(i?Q:I)+',0);opacity:1;left:0px;',0x0,EDAll),f=NewEle('effect'+Math['random'](),'div','font-size:28px;position:absolute;color:'+(i?'black':'white')+';text-align:center;line-height:600px;z-index:257;width:var(--screen-width);left:0px;height:600px;opacity:0;',0x0,EDAll);oEffects['Animate'](k,{'background':'rgba('+(i?Q:I)+',1)'},'slow','linear',()=>{f['innerText']=g,oEffects['fadeIn'](f,0x2,()=>{oSym['addTask'](0x64,function(){w&&w(),oEffects['Animate'](k,{'background':'rgba('+(i?Q:I)+',0)'},0x2),oEffects['fadeOut'](f,0x2,()=>{ClearChild(f,k),c&&c();});});});});}let ids=[];oS['Init']({'PicArr':['Industry.webp','IndustryClue1_1.webp','IndustryClue1_2.webp','IndustryClue1_3.webp']['map'](g=>'images/interface/'+g),'PName':[oSnowPea,oIceAloe,oShiitake,oPlantern,oBlover,oSpikeweed],'ZName':[oSadakoZombie,oConeheadZombie,oCigarZombie,oSculptorZombie,oStrollZombie,oNewspaperZombie,oCaskZombie,oFootballZombie,oBucketheadZombie,oBeetleCarZombie,oSculpture],'LevelName':$__language_Array__['a90cc6f7fa2279690cec95a6c45c0b2c'],'StartGameMusic':'Bgm_Industry_Fight_Challenge_1','LoadMusic':'Bgm_Industry_Plot_2','PicArr':['images/Props/PolarPlots/Dave_CloseEyeMouse.png'],'CanSelectCard':0x0,'StaticCard':0x0,'HaveFog':{'leftBorder':0x3,'type':'strongFog'},'FixedProps':'disabled','LoadAccess'(g){oAudioManager['playAudio']('Bgm_Industry_Noise',0x1);for(let i=0x1;i<=0x5;i+=0x2){ids['push'](CustomSpecial(oShiitake,i,0x5)['id']),NewEle(0x0,'div','left:570px;top:'+(0x50+(i-0x1)*0x64)+'px;',{'className':'sos'},FightingScene);}CustomSpecial(oZombieComeOnObs,0x2,0x6),CustomSpecial(oZombieComeOnObs,0x4,0x6);if(willPlayDialogue()>=0x0){oAudioManager['pauseMusic']();let c=oAudioManager['playAudio']('rain',!![],0.5);oSym['addTask'](0x1,function I(){if(!c)return;c['currentTime']>c['duration']-0.4&&(c['currentTime']=0x0),oSym['addTask'](0x3,I);});let w=oEffects['BgParticle']({'style':'z-index:21','url':'images/Props/Effect/Rain.png','timeout':0x4,'move':function(Q){Q['left']-=4.5*oSym['NowSpeed'],Q['top']+=0x6*oSym['NowSpeed'];},'size':{'width':0x8c,'height':0x8c}});showADate($__language_Array__['1b4135a4471eb55129b5b2f9a8693eee'],!![],()=>{let Q=NewEle('effect'+Math['random'](),'div','position:absolute;z-index:257;width:var(--screen-width);height:600px;background:#FFF;opacity:0;',0x0,EDAll),k=0x0,f=NewEle('DivTeach','div',0x0,0x0,EDAll),G=NewImg('dDave','','left:0;top:81px',EDAll);(function z(){f['onclick']=z;switch(k){case 0x0:f['onclick']=null,G['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveshort'+Math['floor'](0x1+Math['random']()*0x2)),innerText(f,'……'),oEffects['fadeIn'](Q,'slow',()=>f['onclick']=z),k++;break;case 0x1:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['bbed5ba2bc8278c52a730c0b5d2b66f5']),k++;break;case 0x2:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['fb0b81a5365b3094817746b489e99ebd']),k++;break;case 0x3:f['onclick']=null,oAudioManager['playMusic'](),oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['4f60ae69c7b0683c7dda8ae413807672']),oEffects['Animate'](Q,{'background':'black'},'slow','linear',()=>f['onclick']=z),k++;break;case 0x4:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['da5be2478a3b6776520302f1d2663149']),k++;break;case 0x5:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['797c62d6c5f8f0464522e8cdb9478102']),k++;break;case 0x6:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['952cddd625352bb3e483ed3d518273a3']),k++;break;case 0x7:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['2dda982c64d75a77cced98988e863563']),k++;break;case 0x8:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['a44582709dc9c0d9e9c82235f63e5994']),k++;break;case 0x9:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['97beb5ebe571b864a5044ae23b312b30']),k++;break;case 0xa:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['26ef4d3fe90ea9a4a979a03df9ab7a72']),k++;break;case 0xb:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['4c1acea157783690cd09cc1cc2fefb2a']),k++;break;case 0xc:oAudioManager['deleteAudio']('rain'),oEffects['Animate'](w,{'opacity':0x0},0x1/oSym['NowSpeed'],'linear',ClearChild),oAudioManager['playAudio']('realdavelong'+Math['floor'](0x1+Math['random']()*0x4)),innerText(f,$__language_Array__['86780dc0c472b5dee6a7136ee1cbf172']),k++;break;case 0xd:f['onclick']=null,G['src']='images/Props/PolarPlots/Dave_CloseEyeMouse.png',oAudioManager['playAudio']('crazydaveshort'+Math['floor'](0x1+Math['random']()*0x3)),innerText(f,'……'),oEffects['fadeOut'](Q,'slow',()=>f['onclick']=z),k++;break;default:ClearChild(f,G),ClearChild(Q),oSym['addTask'](0x1e,g);}}());});}else oSym['addTask'](0x1e,g);},'StartGame'(){let g='oShiitake',i=0x3,c=new Set(['1_5','3_5','5_5']);addEventListenerRecord('jng-event-startgame',()=>{(function w(){let I=0x0;for(let Q of $P)Q['EName']===g&&c['has'](Q['R']+'_'+Q['C'])&&Q['id']===ids[I]&&++I;if(I!==i)return console['log']($P,c,ids),toOver(0x2);oSym['addTask'](0xc8,w);}());},{'once':!![]}),oMiniGames['ConveyorBelt'](void 0x0,0x226,0x4,[oBlover,oShiitake,oSpikeweed,oSnowPea,oShiitake,oBlover,oBlover,oBlover]);}},{'AZ':[[oSadakoZombie,0x1,0x1,[0x1,0x2,0x3]],[oConeheadZombie,0x1,0x1,[0x1]],[oCigarZombie,0x1,0x1,[0x5,0xa,0xb,0xc,0xd,0xe,0xf]],[oSculptorZombie,0x2,0x2,[0x2,0x3,0x5,0x7,0x8,0xa,0xb,0xc,0xd,0xe,0xf]],[oStrollZombie,0x1,0xa],[oNewspaperZombie,0x1,0xa],[oCaskZombie,0x1,0xa],[oFootballZombie,0x3,0xa,[0xa,0x14,0xb,0xc,0xd,0xe,0xf]],[oBucketheadZombie,0x3,0xa,[0xa,0x14,0xb,0xc,0xd,0xe,0xf]],[oBeetleCarZombie,0x2,0x14,[0x14,0xb,0xc,0xd,0xe,0xf]]],'FlagNum':0xf,'FlagToSumNum':{'a1':[0x1,0x3,0x5,0x8,0x9,0xa,0xb,0xc,0xd,0xe,0xf],'a2':[0xa,0x8,0x16,0x22,0x33,0x26,0x2e,0x36,0x39,0x45,0x6e]},'FlagToEnd'(){willPlayDialogue(0x2)>=0x0?SelectModal('Industry10-1'):ShowWinItem(GetPlantCardDom(oShiitake,EDAll));}});}