'use strict';oS['Init']({'LoadMusic':'','backgroundImage':'modal/AS_Room/Room.webp','LevelName':'PlayingMusic_AS_Room','LoadAccess':function(){oAudioManager['pauseMusic']();function g(){if(!(CanXHR&&navigator['onLine']&&/(http:\/\/)|(https:\/\/)/['test'](location['href'])))return![];const X=[()=>new XMLHttpRequest(),()=>new ActiveXObject('Msxml2.XMLHTTP'),()=>new ActiveXObject('Msxml3.XMLHTTP'),()=>new ActiveXObject('Microsoft.XMLHTTP')];let F=null;for(let H=0x0;H<X['length'];H++){try{F=X[H]();}catch(W){continue;}break;}return F;}function i(X=![],F){const H=g();if(H){H['open']('GET','./modal/AS_Room/songData.json',X),H['send']();if(X)H['onload']=W=>{F(JSON['parse'](H['responseText']));};else return JSON['parse'](H['responseText']);}else F(![]);}let c=[],w=new Audio(),I='https://angelshadow2017.github.io/Love_Music/';navigator['language']['toLowerCase']()=='zh-cn'&&(I='http://zero1_as.gitee.io/love_music/');i(!![],function(X){k(X);}),w['volume']=0.6*$User['MusicVolumePercent'],oAudioManager['resourceMusicMap']['set']('as_room',w),oAudioManager['curMusic']='as_room';let Q=oAudioManager['__ticket__'];function k(X){if(!X){c=X,w['pause'](),w['src']='modal/AS_Room/backup.mp3',w['play']();return;}X=X['shuffle'](),c=X,w['src']=I+X[0x0],w['currentTime']=0x0;if(!oS['Silence']){w['play']();let F=w['src'];oSym['addTask'](0x2bc,function(){oAudioManager['__ticket__']===Q&&oAudioManager['getDom']('as_room')&&w['currentTime']==0x0&&w['src']==F&&(w['pause'](),w['src']='modal/AS_Room/backup.mp3',w['play']());});}}w['addEventListener']('pause',function X(){oS['LevelName']!=='PlayingMusic_AS_Room'?(w['removeEventListener']('pause',X),oAudioManager['resourceMusicMap']['delete']('as_room#music'),document['body']['appendChild'](w),ClearChild(w)):k(c);});let f=(...F)=>{return oAudioManager['pauseMusic']('as_room'),SelectModal(...F);};NewEle('filterbuttons','div','z-index:5;top:0;left:0;position:absolute;height:100%;transition:opacity\x200.5s;width:100%;background:url(modal/AS_Room/filter.webp);opacity:0;background-attachment:\x20scroll;pointer-events:none;',0x0,EDAll);function G(F,H,W,r,t,U=0x1){F['style']['opacity']=U,F['style']['clip']='rect('+W+'px,'+(H+r)+'px,'+(W+t)+'px,'+H+'px)';}NewEle('button1X','div','transition:opacity\x200.3s;opacity:0.5;top:0;color:white;left:310px;cursor:pointer;position:absolute;height:100px;width:100px;',{'onmouseenter':F=>{$('button1X')['style']['opacity']=0x1,G($('filterbuttons'),0xe6,0x0,0xc8,0xc8);},'onmouseleave':F=>{$('button1X')['style']['opacity']=0.5,G($('filterbuttons'),0xe6,0x0,0xc8,0xc8,0x0);},'innerHTML':'<center\x20class=\x27LvlUI_Industry20Div\x27\x20style=\x27text-shadow:0\x200\x205px\x20#48DD22;position:relative;left:15px;top:105px;cursor:auto;\x27>'+$__language_Array__['017d14191959dddb38cc466fb79d7efe']+'</center>','onclick':F=>{f('Service/writer.js');}},EDAll),NewEle('button2','div','transition:opacity\x200.3s;opacity:0.5;top:195px;color:white;left:603px;cursor:pointer;position:absolute;height:70px;width:70px;',{'onmouseenter':F=>{$('button2')['style']['opacity']=0x1,G($('filterbuttons'),0x230,0xaa,0x64,0x64);},'onmouseleave':F=>{$('button2')['style']['opacity']=0.5,G($('filterbuttons'),0x230,0xaa,0x64,0x64,0x0);},'innerHTML':'<center\x20class=\x27LvlUI_Industry20Div\x27\x20style=\x27text-shadow:0\x200\x205px\x20#48DD22;position:relative;left:-15px;top:-25px;cursor:auto;\x27>'+$__language_Array__['2ee444aed1c4bcd39f0287cd5901492f']+'</center>','onclick':F=>{f('Everyday_Normal');}},EDAll),NewEle('button3','div','transition:opacity\x200.3s;opacity:0.5;color:white;top:470px;left:690px;cursor:pointer;position:absolute;height:150px;width:150px;',{'onmouseenter':F=>{$('button3')['style']['opacity']=0x1,G($('filterbuttons'),0x294,0x1d6,0xd2,0xc8);},'onmouseleave':F=>{$('button3')['style']['opacity']=0.5,G($('filterbuttons'),0x294,0x1d6,0xd2,0xc8,0x0);},'innerHTML':'<center\x20class=\x27LvlUI_Industry20Div\x27\x20style=\x27text-shadow:0\x200\x205px\x20#48DD22;position:relative;left:15px;top:-35px;cursor:auto;\x27>'+$__language_Array__['f8d62a07f9386439a2a142b1e5cbf686']+'</center>','onclick':F=>{f('AS_Room/Achievement.js');}},EDAll);let z=[oPeashooter,oPuffShroom,oIceAloe,oWallNut,oStoneFlower,oRadish,oSnowPea,oRepeater,oMonotropa,oSpikeweed,oTorchwood,oKiwibeast,oAbutilonHybriden,oMiracleImitater,oJalapeno,oFlowerPot,oBambooUncle,oCabbage,oKernelPult,oPlantern,oBlover,oShiitake,oCranberry,oMelonPult,oElecTurnip,oLilyPad,oGraveBuster,oUmbrellaLeaf,oEichhornia,oIceShroom,oAyTsao,oTangerine];NewEle('button4','div','transition:opacity\x200.3s;opacity:0.5;top:316px;color:white;left:830px;cursor:pointer;position:absolute;height:100px;width:100px;',{'onmouseenter':F=>{$('button4')['style']['opacity']=0x1,G($('filterbuttons'),0x334,0x13c,0xd2,0x96);},'onmouseleave':F=>{$('button4')['style']['opacity']=0.5,G($('filterbuttons'),0x334,0x13c,0xd2,0x96,0x0);},'onclick':F=>{let H=0x1;for(let W=0x0;W<H;W++){let x=new(z['random']())(),r=NewEle('eggs'+Math['random'](),'div','opacity:0.7;top:'+(0x122+Math['random']()*0x19-12.5)+'px;color:white;left:'+(0x32a+Math['random']()*0x19-12.5)+'px;pointer-events:none;transform:scale(0.4);cursor:pointer;position:absolute;height:'+(x['height']+0x1e)+'px;width:'+x['width']+'px;background:url('+x['PicArr'][x['NormalGif']]+')\x20no-repeat;',{},EDAll);oEffects['Animate'](r,{'left':0x30c+Math['random']()*0x64-0x32+'px','transform':'scale('+(Math['random']()/0x3+0.5)+')','top':Number['parseFloat'](r['style']['top'])-0x7d*Math['random']()-0x23+'px'},0.3,![],t=>{oSym['addTask'](0x1,U=>{oEffects['Animate'](r,{'top':'600px'},0x1,![],u=>{ClearChild(r);});});});}}},EDAll),NewEle('jngButton'+Math['random'](),'a','left:1px;top:1px;z-index:258;position:\x20absolute;',{'className':'jngButton\x20Homepage','onclick'(){f('index','Service');}},EDAll);{{let F=NewEle('jngButton'+Math['random'](),'a','position:absolute;cursor:pointer;z-index:2;color:white;transition:filter\x200.4s;left:290px;top:400px;height:164px;width:216px;background:url('+oCherryBomb['prototype']['PicArr'][oCherryBomb['prototype']['StaticGif']]+')\x20no-repeat',{'innerHTML':'<center\x20class=\x27LvlUI_Industry20Div\x27\x20style=\x27opacity:0.5;text-shadow:0\x200\x205px\x20#48DD22;font-size:1em;width:300px;pointer-events:none;position:relative;left:-37.5px;top:75px;cursor:auto;\x27>'+$__language_Array__['97fea73a300c6a2e8bbc612ec3acc1a7']+'</center>','onmouseenter'(){this['style']['filter']='brightness(120%)';},'onmouseleave'(){this['style']['filter']='brightness(100%)';},'onclick'(){f('pvp');}},EDAll);}}{NewEle('jngButton'+Math['random'](),'a','color:white;left:220px;top:108px;height:60px;transform:scale(0.6);position:\x20absolute;background:url('+oPeashooter['prototype']['PicArr'][oPeashooter['prototype']['NormalGif']]+')\x20no-repeat',{'className':'jngButton\x20Homepage','onclick'(){f('LevelCreater_enter','FanmadeTools');},'innerHTML':'<center\x20class=\x27LvlUI_Industry20Div\x27\x20style=\x27opacity:0.5;text-shadow:0\x200\x205px\x20#48DD22;font-size:1.3em;width:300px;pointer-events:none;position:relative;left:-120px;top:80px;cursor:auto;\x27>'+$__language_Array__['9b2049d1720a53c670cd4b41c11aea78']+'</center>'},EDAll);};let e=NewEle('whiteDIV','div','z-index:6;opacity:0.05;pointer-events:none;transition:opacity\x2010s;left:0;width:100%;top:0;position:absolute;background:white;height:100%;width:100',{},EDAll);oSym['addTask'](0xc8,function H(){e['style']['opacity']=Math['random']()/0x5,oSym['addTask'](0x3e8,H);});}});