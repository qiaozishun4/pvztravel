'use strict';{function showADate(g,i=!![],c=null,w=null){let I='0,0,0',Q='255,255,255',k=NewEle('effect'+Math['random'](),'div','position:absolute;z-index:257;width:var(--screen-width);height:600px;background:rgba('+(i?Q:I)+',0);opacity:1;left:0px;',0x0,EDAll),f=NewEle('effect'+Math['random'](),'div','font-size:28px;position:absolute;color:'+(i?'black':'white')+';text-align:center;line-height:600px;z-index:257;width:var(--screen-width);left:0px;height:600px;opacity:0;',0x0,EDAll);oEffects['Animate'](k,{'background':'rgba('+(i?Q:I)+',1)'},'slow','linear',()=>{f['innerText']=g,oEffects['fadeIn'](f,0x2,()=>{oSym['addTask'](0x64,function(){w&&w(),oEffects['Animate'](k,{'background':'rgba('+(i?Q:I)+',0)'},0x2),oEffects['fadeOut'](f,0x2,()=>{ClearChild(f,k),c&&c();});});});});}let ids=[];oS['Init']({'PicArr':(function(){let g='images/interface/';return[g+'Industry.webp'];}()),'LoadMusic':'Bgm_Industry_Plot_2','PName':[oShiitake],'ZName':[oSculpture],'backgroundImage':'images/interface/Industry.webp','LoadAccess':function(g){oAudioManager['pauseMusic']();let i=oAudioManager['playAudio']('rain',!![],0.5);oSym['addTask'](0x1,function I(){i['currentTime']>i['duration']-0.4&&(i['currentTime']=0x0),oSym['addTask'](0x3,I);});let c=oEffects['BgParticle']({'style':'z-index:21','url':'images/Props/Effect/Rain.png','timeout':0x4,'move':function(Q){Q['left']-=4.5*oSym['NowSpeed'],Q['top']+=0x6*oSym['NowSpeed'];},'size':{'width':0x8c,'height':0x8c}});EDAll['scrollLeft']=oS['EDAllScrollLeft'],showADate($__language_Array__['89a4f6d7787238efa8a1e9e42e15e856'],!![],()=>{let Q=NewEle('effect'+Math['random'](),'div','position:absolute;z-index:257;width:1300px;height:600px;background:#FFF;opacity:0;',0x0,EDAll),k=0x0,f=NewEle('DivTeach','div','left:calc(var(--edall-move-left)\x20+\x20300px);',0x0,EDAll),G=NewImg('dDave','','left:'+oS['EDAllScrollLeft']+'px;top:81px',EDAll);(function z(){f['onclick']=z;switch(k){default:{f['onclick']=null,oEffects['fadeIn'](Q,'slow',F);function e(){EDAll['scrollLeft']=oS['EDAllScrollLeft'],oEffects['fadeOut'](Q,'slow',()=>{ClearChild(Q),w();});}function X(H){let W=[$__language_Array__['8c694b1a6b5fee1ae98738d25e0e61ff'],$__language_Array__['05d87bbab20f1c82bc53dd3915708c32'],$__language_Array__['b52be355ca8d886a3110613ac63daccf'],$__language_Array__['2423b6483d88f2c5dbece4b165502122'],$__language_Array__['e0fab9efe26f00e5fb8d6005bc46e178'],$__language_Array__['d7238d6f3657c2995efccb6a3032ab58'],$__language_Array__['9f762c5bb42acc6c63db7bcf171064d9'],$__language_Array__['7c1df91634335aa893c9bf44717bc15f']];function x(r=Infinity){let t=H['innerText'];if(/黑影/['test'](t)||/Dave/['test'](t))return;let U='';for(let u of t){U['length']<r&&u!=$__language_Array__['7ef01e92c4d71f5e178930be2003caf2']&&u!=':'&&(u=W['random']()),U+=u;}H['innerText']=U,oSym['addTask'](0x5,x);}x(0x1);}function F(){G['style']['display']=f['style']['display']='none';let H=NewEle('talk'+Math['random'](),'div','z-index:300;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:150px;height:220px;width:727px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);',0x0,EDAll),W=NewEle('talk'+Math['random'](),'div','cursor:pointer;word-break:break-all;z-index:300;padding:0;color:white;font-size:20px;position:absolute;top:30px;left:20px;height:200px;width:560px;',0x0,H),x=NewEle('daveName','div','pointer-events:\x20none;\x20word-break:\x20break-all;\x20z-index:\x20300;\x20color:\x20white;\x20font-size:\x2020px;\x20position:\x20absolute;padding-left:20px;\x20bottom:\x20230px;\x20left:\x20150px;\x20height:\x2025px;\x20width:\x20600px;',0x0,EDAll),r=[[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['d22d50abade0e6a2ca39c8ff6bf9ca9c']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['9f07338287c52fb0ab55f6aa4080d26a']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['62d35c773d516bc97754f5ec63ef24e6']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['366a6af76ec4bec4e6ac14dbeee07116']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['bb6d92b726a53fa0fe940a7dfe683e45']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['f4b6af5b164604449066b4a5c33634da']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['563d774866d7b140c70d4915466d57b6']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['1442f5f3e8849863d5c99ee27c11aa52']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['cb6b2f74ec05380bc2ce0a27a84c4eec']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['4dcd3ab20c49dc00c2b7c65ff0996dc7']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['32e0cd7b95ff798359df910859d9b630']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['705cbaa0f59f43c3b95637fa0f8b353b']],[$__language_Array__['aaabaecc5ae8a85d0f56dcd057083485'],$__language_Array__['2fa1db2db26cfeb34cb4d0afd248b9d3']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['7a73d956d34abce6ebea17b08602b357']],[$__language_Array__['aaabaecc5ae8a85d0f56dcd057083485'],$__language_Array__['bb459c7411f021b1c8b1f2885f18676d']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['1315aed5715e4542c6084d6545b2a525']],[$__language_Array__['aaabaecc5ae8a85d0f56dcd057083485'],$__language_Array__['1e4bb55eb91ac58b100850fc9bb712ad']],[$__language_Array__['aaabaecc5ae8a85d0f56dcd057083485'],$__language_Array__['573b7871e01811efe1e9a68c5b7e2e2a']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['3574122f63989bf7cf56e4366b0cc730']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['e8c2b2757d225ef8942abf94bd5f9a83']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['61793c8828f85a54ac85aaf0c64a26cf']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['b03257fb9aeaa6f37692e46652ecad41']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['d9dd7620174a5b5c9cdf64859786ace5']],[$__language_Array__['e58857876d2e862269b03189c452d4f3'],$__language_Array__['8b416071800beb1d3bb2dfb48a77af16']]],t=-0x1,U=0x32,u={'，':0xc8,'…':0x12c},O=![];W['onclick']=function(){if(t>=0x0&&W['innerText']['length']<r[t][0x1]['length']){let y=r[t][0x1]['split']($__language_Array__['7ef01e92c4d71f5e178930be2003caf2']);W['innerText']=y[y['length']-0x1]+'\x20',O=!![];return;}t>=0x0&&(oAudioManager['deleteAudio']('rain'),oEffects['Animate'](c,{'opacity':0x0},0x1/oSym['NowSpeed'],'linear'),oAudioManager['playMusic']());(t==0xf||t==0x10)&&($('daveName')['innerText']=$__language_Array__['aaabaecc5ae8a85d0f56dcd057083485'],X($('daveName')));if(t==0x11){for(let L=0x1;L<0x6;L++)for(let R=0x1;R<0xa;R++)R==0x1?CustomSpecial(oShiitake,L,R):PlaceZombie(oSculpture,L,R);oEffects['fadeOut'](Q,'slow'),$('daveName')['innerText']=$__language_Array__['a3e53af45c49edbf553f494a98187d91'];}O=![],t++;if(t>=r['length']){ClearChild(H,x),e();return;}W['innerText']='',x['innerText']=r[t][0x0];let D=r[t][0x1],V=D instanceof Array?D:D['split'](''),Z=0x0,J='',d=t;setTimeout(function h(){if(t!=d||Z>=V['length']||O){Z>=V['length']&&!O&&setTimeout(Y=>{t==d&&!O&&(O=!![],W['innerText']=J+='\x20');},0xc8);return;}W['innerText']=J+=V[Z++],setTimeout(h,u[V[Z-0x1]]?u[V[Z-0x1]]:U);},U);},W['click']();}}ClearChild(f,G);}}());});function w(){let Q=oAudioManager['getDom'](oS['LoadMusic']);oEffects['AudioFadeOut'](Q,0x0,0.8/oSym['NowSpeed'],()=>{NewEle('DivA','div','position:absolute;width:var(--screen-width);height:600px;background:#FFF;opacity:0;z-index:257;left:'+oS['EDAllScrollLeft']+'px;',0x0,EDAll),ShowWinItem(GetPlantCardDom(oShiitake,EDAll));});}},'HaveFog':{'leftBorder':0x9,'type':'Fog'}});}