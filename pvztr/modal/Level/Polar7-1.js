oS['Init']({'PicArr':(function(){let g='images/interface/';return[g+'Polar2.webp'];}()),'LoadMusic':'','StartGameMusic':'Bgm_Marsh_Ready','backgroundImage':'images/interface/Polar2.webp','LevelEName':0x1,'LoadAccess':function(g){EDAll['scrollLeft']=oS['EDAllScrollLeft'];let i=0x0,c=NewEle('DivTeach','div','left:calc(var(--edall-move-left)\x20+\x20300px);',0x0,EDAll),w=NewImg('dDave','','left:'+oS['EDAllScrollLeft']+'px;top:81px',EDAll);(function Q(){c['onclick']=Q;switch(i){case 0x0:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['efb00ea5d4acd45d70e1f9c6941f8212']),i++;break;case 0x1:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['5d0595e3a1a75ee47376b4285f641aea']),i++;break;case 0x2:c['onclick']=null,w['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss2'),innerText(c,$__language_Array__['0834823b9256401b9d4e59d72978b453']),i++,setTimeout(Q,0x258);break;case 0x3:c['onclick']=Q,w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['804c35c62c0db53f656b6351ce3bca49']),i++;break;case 0x4:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['1050054ec8f83e25662e92a860f987fa']),i++;break;case 0x5:w['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss1'),innerText(c,$__language_Array__['505ce2b328a43a1b5895b1b4afce554f']),i++;break;case 0x6:oAudioManager['playAudio']('Zomboss2'),innerText(c,$__language_Array__['5fe348abd6708937f5d4b243a9c9b343']),i++;break;case 0x7:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['4d01a26108b2eaf58e579c16424355e1']),i++;break;case 0x8:w['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss1'),innerText(c,$__language_Array__['3e0c646e0fe84c4bfff945d8f4d78e82']),i++;break;case 0x9:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['ed1427014e6ab8aebe49fbbc7856efb2']),i++;break;case 0xa:w['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss2'),innerText(c,$__language_Array__['505ce2b328a43a1b5895b1b4afce554f']),i++;break;case 0xb:oAudioManager['playAudio']('Zomboss3'),innerText(c,$__language_Array__['2f3129ae88a347a2865e1b068a579392']),i++;break;case 0xc:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['79be506e62ce5bc20e75b1db66f036d6']),i++;break;case 0xd:oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['abf2f03e650396454669595edc8c22eb']),i++;break;case 0xe:w['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss2'),innerText(c,$__language_Array__['81501f533eb762a27a75853840253c38']),i++;break;case 0xf:oAudioManager['playAudio']('Zomboss1'),innerText(c,$__language_Array__['1cbbdd4f2714ad20337794be1d084e35']),i++;break;case 0x10:oAudioManager['playAudio']('Zomboss2'),innerText(c,$__language_Array__['d8852b88894e300bb3e38ca0b01f6880']),i++;break;case 0x11:oAudioManager['playAudio']('Zomboss2'),innerText(c,$__language_Array__['0e24803c6bff49d3b0e302e30b4bd5c1']),i++;break;case 0x12:oAudioManager['playAudio']('Zomboss2'),innerText(c,$__language_Array__['66087b2eedf689b78b45f971d4f220dd']),i++;break;case 0x13:w['src']='images/interface/Black_Dave.png',oAudioManager['playAudio']('realdaveextralong'+Math['floor'](Math['random']()*0x4+0x1)),innerText(c,$__language_Array__['f4ee89f893aa8fd856e19698ac538007']),i++;break;case 0x14:w['src']='images/interface/Zomboss.png',oAudioManager['playAudio']('Zomboss1'),innerText(c,$__language_Array__['7d83a408dbe3531c272bb1f00ddb7ca0']),i++;break;case 0x15:oAudioManager['playAudio']('Zomboss1'),innerText(c,$__language_Array__['2463dea700cef69d8f52e8398ebdd742']),i++;break;case 0x16:oAudioManager['playAudio']('Zomboss3'),innerText(c,$__language_Array__['c01b2a7f2970a1bda534e91d2e7062d9']),i++;break;case 0x17:ClearChild(c,w),oSym['addTask'](0x1e,I);}}());function I(){NewEle('DivA','div','position:absolute;width:var(--screen-width);height:600px;background:#FFF;opacity:0;z-index:257;left:'+oS['EDAllScrollLeft']+'px;',0x0,EDAll),ShowWinItem(GetPlantCardDom(oIceAloe,EDAll,null,{'onclick':function(){GetNewCard(this,oIceAloe,'Polar8');}}));}}});