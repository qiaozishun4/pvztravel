'use strict';oS['Init']({'PName':[oNutBowling],'ZName':[oZomboni],'PicArr':['images/interface/Forest.webp','images/interface/Marsh.webp','images/interface/Polar2.webp','images/interface/PolarClue1.webp','images/Props/PolarPlots/StarryNight.webp'],'LevelName':$__language_Array__['678f861992f3f323a9dde9c4a361a26f'],'LoadMusic':'Bgm_Polar_18_NPC_1','StartGameMusic':'Bgm_Polar_Fight_'+(0x2+Math['round'](Math['random']()*0x2)),'MusicArr':['Bgm_Polar_18_NPC_2'],'CanSelectCard':0x0,'StaticCard':0x0,'DKind':0x0,'ControlFlagmeter':0x0,'InitLawnMover':g=>{},'FixedProps':'disabled','LoadAccess':function(g){NewEle('PolarFire2','span',null,{'className':'PolarFire'},$('tGround')),NewEle('PolarFire','span',null,{'className':'PolarFire'},$('tGround')),NewEle(0x0,'div','position:absolute;background:url(images/Props/Terrains/BowlingLine.webp)\x20no-repeat;left:490px;top:82px;height:600px;width:40px;',0x0,FightingScene),oAudioManager['playAudio']('Bgm_Polar_Noise',0x1);let i=['images/interface/Forest.webp','images/interface/Marsh.webp','images/interface/Polar2.webp','images/Props/PolarPlots/StarryNight.webp',''];if(willPlayDialogue()>=0x0){let c=NewEle('effect'+Math['random'](),'div','position:absolute;z-index:257;width:var(--screen-width);height:600px;background:url(images/Props/PolarPlots/StarryNight.webp);opacity:0;',0x0,EDAll),w=NewEle('effect'+Math['random'](),'div','position:absolute;z-index:257;width:var(--screen-width);height:600px;background:#FFF;opacity:0;',0x0,EDAll);function I(G,z){oEffects['Animate'](w,{'background':'black','opacity':0x1},0.5,'linear',()=>{oSym['addTask'](0x1,()=>{c['style']['backgroundImage']='url('+i[G]+')',oEffects['Animate'](w,{'opacity':0x0},0.5,'linear',()=>{z();});});});}oEffects['Animate'](w,{'opacity':0x1},'slow','linear',()=>{oSym['addTask'](0x1,()=>{c['style']['opacity']=0x1,oEffects['Animate'](w,{'opacity':0x0},'slow','linear',()=>{Q();});});});function Q(){let G=NewEle('effect'+Math['random'](),'div','position:absolute;z-index:257;width:var(--screen-width);height:600px;background:#FFF;opacity:0;',0x0,EDAll),z=0x0,e=NewEle('DivTeach','div',0x0,0x0,EDAll),X=NewImg('dDave','','left:0;top:81px',EDAll);(function F(){e['onclick']=F;switch(z){case 0x0:X['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss1'),innerText(e,$__language_Array__['7c72bcec489ce7d8046c20743ac5714b']),z++;break;case 0x1:X['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong1'),e['onclick']=null,I(0x1,()=>{e['onclick']=F;}),innerText(e,$__language_Array__['8dcf481999e3e5237a038af343de98b8']),z++;break;case 0x2:oAudioManager['playAudio']('crazydavelong2'),innerText(e,$__language_Array__['61a1255923591d7b46bebbd5ee703f4f']),z++;break;case 0x3:oAudioManager['playAudio']('crazydavelong1'),e['onclick']=null,I(0x4,()=>{e['onclick']=F;}),innerText(e,$__language_Array__['ff10a230f7940b007fd2780f7864e105']),z++;break;case 0x4:X['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss3'),e['onclick']=null,I(0x3,()=>{e['onclick']=F;}),innerText(e,$__language_Array__['f2667e79f19a83b403b86cb82233fd10']),z++;break;case 0x5:oAudioManager['playAudio']('Zomboss1'),innerText(e,$__language_Array__['6e50f2cf99440226f266a09f96ba71c5']),z++;break;case 0x6:e['onclick']=null,X['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(e,$__language_Array__['9c681aaf5dbc4045865ce86bfe4be6d9']),oEffects['fadeIn'](G,'slow',()=>e['onclick']=F),z++;break;case 0x7:X['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss1'),innerText(e,$__language_Array__['10986dd5966d6012723bb2a4a4962e31']),z++;break;case 0x8:oAudioManager['playAudio']('Zomboss3'),innerText(e,$__language_Array__['52e0d6bf65c5cc34ff41125aaa62e46b']),z++;break;case 0x9:e['onclick']=null,oAudioManager['playAudio']('Zomboss1'),innerText(e,$__language_Array__['7c72bcec489ce7d8046c20743ac5714b']),oEffects['fadeOut'](G,'slow',()=>{e['onclick']=()=>{f(e,F),e['style']['display']=X['style']['display']='none';};}),z++;break;case 0xa:e['style']['display']=X['style']['display']='',X['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(e,$__language_Array__['69de8840d0065267b7f18279740d44fe']),oEffects['fadeIn'](G,'fast',()=>e['onclick']=F),z++;break;case 0xb:X['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss2'),innerText(e,$__language_Array__['12e66a3529e28ba2e7211a1c147fb15e']),z++;break;case 0xc:X['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(e,$__language_Array__['6d34d3dce64af830a50575e483ca6868']),z++;break;case 0xd:X['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss2'),e['innerHTML']='<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>'+oEffects['TextEffects']['ShakeText']({'text':$__language_Array__['2fea1e1a8f9df65d9024675e13a373fc'],'font_size':0x12})[0x0]+'</p>',z++;break;case 0xe:X['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),e['innerHTML']='<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>'+oEffects['TextEffects']['ShakeText']({'text':$__language_Array__['ac2a5106d37a2b81edb62c8993d923b6'],'font_size':0x12})[0x0]+'</p>',z++;break;case 0xf:X['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss2'),e['innerHTML']='<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>'+oEffects['TextEffects']['ShakeText']({'text':$__language_Array__['e0650d330052a8048245007b0b7da3fe'],'font_size':0x18})[0x0]+'</p>',e['style']['fontSize']='24px',z++;break;case 0x10:ClearChild(e,X,c,w),oEffects['fadeOut'](G,'slow',H=>{ClearChild(H),g();});}}());}function k(G,z=0x14,e=![],X=''){let F={'text':G,'font_size':z,'str':e,'font_family':X,'align_center':![]};return oEffects['TextEffects']['ShakeText'](F);}function f(G,z){G['onclick']=null;let e=NewEle('effect'+Math['random'](),'div','position:absolute;z-index:299;width:var(--screen-width);height:600px;background:url(images/interface/Forest.webp);opacity:0;',0x0,EDAll);oEffects['fadeIn'](e,'slow',()=>{F();function X(){oEffects['fadeOut'](e,'slow',()=>{ClearChild(e),G['onclick']=z;}),z();}function F(){let H=NewEle('talk'+Math['random'](),'div','z-index:300;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:150px;height:220px;width:727px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);',0x0,EDAll),W=NewEle('talk'+Math['random'](),'div','cursor:pointer;word-break:break-all;z-index:300;padding:0;color:white;font-size:20px;position:absolute;top:30px;left:20px;height:200px;width:560px;',0x0,H),x=NewEle('daveName','div','pointer-events:\x20none;\x20word-break:\x20break-all;\x20z-index:\x20300;\x20color:\x20white;\x20font-size:\x2020px;\x20position:\x20absolute;padding-left:20px;\x20bottom:\x20230px;\x20left:\x20150px;\x20height:\x2025px;\x20width:\x20600px;',0x0,EDAll),r=[[$__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],$__language_Array__['36a20e210830c5013ed6925e05b36fe8']],[$__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],$__language_Array__['2a5dfe062a1aede643a4e8c7a8bd57b5']],[$__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],$__language_Array__['915c5a76bc3bccd06c57267b24a132f5']],[$__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],$__language_Array__['5dbf94e2eac99979caf929757c8b5ffc']],[$__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],$__language_Array__['0b8646d5ec71f61b14f38518fb580db1']],[$__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],k($__language_Array__['07faa8f482ae3abad557175778c3ae25'])],[$__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],$__language_Array__['d40e9c2a8e76d773da1bea1fc0683b2f']],[$__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],$__language_Array__['8b5ee9f0574508e911ef6c8c9f333c87']],[$__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],$__language_Array__['b13f8574e5b464c09df06912fa7f65cb']],[$__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],$__language_Array__['6a2fba20c61332156d9740b4baebcbc7']],[$__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],$__language_Array__['9b86d0fabd3423becbd68e8e1fa95e21']],[$__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],$__language_Array__['958ca428ac702426de19c75ced9cd583']],[$__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],$__language_Array__['309a1c343cc37eb422d8a31e14374c15']],[$__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],$__language_Array__['630cac12eae7a4ec300ceac0cad65842']],[$__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],'……'],[$__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],$__language_Array__['6701601161390a6dc02bcafb54ba7c6f']]],t=-0x1,U=0x32,u={'，':0xc8,'…':0x12c},O=![];W['onclick']=function(){if(t>=0x0&&W['innerHTML']['length']<r[t][0x1]['length']){let y=r[t][0x1]['split']($__language_Array__['515e0edf6e794194b8ff61c61204a83f'])['at'](-0x1);W['innerHTML']=y instanceof Array?y:TextToHTML(y)+'\x20',O=!![];return;}O=![],t++;if(t>=r['length']){ClearChild(H,x),X();return;}W['innerHTML']='',x['innerHTML']=r[t][0x0];let D=r[t][0x1],V=D instanceof Array?D:TextToHTML(D,!![]),Z=0x0,J='',d=t;setTimeout(function L(){if(t!=d||Z>=V['length']||O){Z>=V['length']&&!O&&setTimeout(R=>{t==d&&!O&&(O=!![],W['innerHTML']=J+='\x20');},0xc8);return;}W['innerHTML']=J+=V[Z++],setTimeout(L,u[V[Z-0x1]]?u[V[Z-0x1]]:U);},U);},W['click']();}});}}else oSym['addTask'](0x1e,g);},'StartGame'(){oMiniGames['ConveyorBelt'](),oMiniGames['WinWithScore']({'scoreMax':0x2710,'zombieFunc':g=>0xc8});}},{'AZ':[[oZomboni,0x3,0x1]],'FlagNum':0x29a,'FlagToSumNum':{'a1':[0x2,0x5,0x7,0x9,0xc,0xf,0x19,0x1e,0x2d,0x32,0x46,0x5a],'a2':[0xc,0x24,0x42,0x6c,0x84,0xa8,0xba,0xd2,0xf0,0x12c,0x258,0x384,0x4b0]},'FlagToEnd':()=>{if(willPlayDialogue(0x2)>=0x0){oAudioManager['playMusic'](oS['LoadMusic']='Bgm_Polar_18_NPC_2');let i=0x0,c=NewEle('DivTeach','div','left:calc(var(--edall-move-left)\x20+\x20300px);',0x0,EDAll),w=NewImg('dDave','','left:'+oS['EDAllScrollLeft']+'px;top:81px',EDAll);(function I(){c['onclick']=I;switch(i){case 0x0:w['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong2'),innerText(c,$__language_Array__['7e1c65b8ebc261dbf03c4ebeb58ccaa4']),i++;break;case 0x1:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['0f668ffef5114ac1a056d6b4191de72a']),i++;break;case 0x2:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['0e3555c069978b43b35707ce8924818e']),i++;break;case 0x3:w['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong1'),innerText(c,$__language_Array__['9939d81e062fa54e812aa00f5a24f05a']),i++;break;case 0x4:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['adbabd3ce6cc6acd9ff25f2477c90d11']),i++;break;case 0x5:w['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong2'),innerText(c,$__language_Array__['2513ffc1ff9d7984bb9cc18cc75206a1']),i++;break;case 0x6:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['7f4fb48afc648e94e96b3a6232ec408b']),i++;break;case 0x7:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['bfc5836da1ef6581fb53e4ba51aac1a3']),i++;break;case 0x8:w['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong3'),innerText(c,$__language_Array__['d984aba97a2fc079c115c6893b85697b']),i++;break;case 0x9:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['e9911d290eece5692d166f540da03368']),i++;break;case 0xa:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['c4f24facb59ffd347d5f244351dcedeb']),i++;break;case 0xb:w['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong2'),innerText(c,$__language_Array__['5bb614dba2274162aa6dc14da37256a9']),i++;break;case 0xc:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['aebdbbde7feebcff93a42b98962ecefe']),i++;break;case 0xd:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['b1036ce2991ada74b8f09e9ae9c16a69']),i++;break;case 0xe:w['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong3'),innerText(c,$__language_Array__['cb0e0ca5b0f2a1d33e8d8f069ae5eacb']),i++;break;case 0xf:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['a2acd23106078d62ac60bf338b11d829']),i++;break;case 0x10:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['9a05e4595e7a808a037b6b2a95604eee']),i++;break;case 0x11:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['02553c7ce6960ac62964135c9d551294']),i++;break;case 0x12:w['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong1'),innerText(c,$__language_Array__['0a5d862495b8be9936294d8c73427644']),i++;break;case 0x13:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['e5bed5a4b5f513cc6bb87c4176dd2a70']),i++;break;case 0x14:w['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong3'),innerText(c,$__language_Array__['ccc9c24875e0d2deb7f14a71ba795827']),i++;break;case 0x15:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['9f614f33b89e38559a3cccc4650c1073']),i++;break;case 0x16:w['src']='images/interface/Dave.png',oAudioManager['playAudio']('crazydavelong3'),innerText(c,$__language_Array__['157327f0862379997d3b95e20aa6e2f4']),i++;break;case 0x17:oAudioManager['playAudio']('crazydavelong1'),innerText(c,$__language_Array__['e5d4c0b9c913bff1ee43913b55244ef1']),i++;break;case 0x18:oAudioManager['playAudio']('crazydavelong2'),innerText(c,$__language_Array__['f326b3351812864cf7ce4ec76d316217']),i++;break;case 0x19:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['e4d19b58be3599610ec0310f03b967de']),setTimeout(()=>{oAudioManager['playAudio']('Rifter_Summon2');},0x1f4),i++;break;case 0x1a:ClearChild(c,w),setTimeout(g,0x3e8);}}());}else setTimeout(g,0x1f4);function g(){oEffects['AudioFadeOut'](oS['LoadMusic'],0x0,0.5,()=>{ShowWinItem(NewImg('imgSF','images/interface/PolarClue1.webp','left:420px;top:200px;transform-origin:left\x20top;transform:\x20scale(0.15);',EDAll,{'onclick':function(){GetNewProp(this,'images/interface/PolarClue1.webp',$__language_Array__['9ef19251eebffeb1cd87b93cb11233b5'],$__language_Array__['7170098786b4b5527bb906289b90533e'],NextLevel(),'top:\x20-10%;transform:\x20scale(0.15);width:var(--screen-width);height:\x20597px;');}}));});}}},{'GrowPlant':function(w,I,Q,G,z){ZimuRQ['style']['display']==='block'&&PlaySubtitle();if(I>0x15b)return PlaySubtitle($__language_Array__['22e54dbbf076113366f09c279484c0f3']),CancelPlant(),![];var X=oS['ChoseCard'],F=ArCard[X],H=F['PName'],W=H['prototype'],x=F['DID'],r,t=oGd['$LF'][G];if(W['CanGrow'](w,G,z)){oAudioManager['playAudio'](t!=0x2?'plant'+Math['floor'](0x1+Math['random']()*0x2):'plant_water'),new H()['Birth'](I,Q,G,z,w);const U=$('imgGrowSoil');U['src']=GrowSoilImg,SetStyle(U,{'left':I-0x1e+'px','top':Q-0x28+'px','z-index':0x3*G,'visibility':'visible'}),oSym['addTask'](0x64,SetHidden,[U]),ClearChild($('MovePlant'),$('MovePlantAlpha')),$('dCardList')['removeChild'](r=$(x)),r=null,ArCard['splice'](X,0x1),oS['ChoseCard']='',oS['Chose']=0x0,GroundOnmousemove=function(){},CancelPlant();}else(IsMobile||G<0x1||z<0x1||z>0x9)&&CancelPlant();}});