'use strict';{let oImp2=InheritO(oImp,{'EName':'oImp2','OSpeed':0x3,'BirthCallBack':function(g){oAudioManager['playAudio'](['imp','imp2'][Math['round'](Math['random']()*0x1)]),OrnNoneZombies['prototype']['BirthCallBack'](g),oSym['addTask'](0x12c,g['shoot'],[g]),oSym['addTask'](0xc8,g['check'],[g]);},'check'(g){if(!$Z[g['id']])return;oMiniGames['oStg']['hero']&&oMiniGames['oStg']['checkTrigger']({'x':g['X']+g['width']/0x2,'y':GetY(g['R'])-g['height']/0x2,'r':0x23},oMiniGames['oStg']['hero']['Trigger'])&&(oMiniGames['oStg']['hero']['Die'](),g['NormalDie']()),oSym['addTask'](0xc8,g['check'],[g]);},'shoot'(g,i=0x1){if(!$Z[g['id']])return;new oMiniGames['oStg']['Obj']['CBullet']()['Birth']({'pic':oMiniGames['oStg']['publicPic']['ball'],'width':0x23,'height':0x23,'r':0x8,'x':g['X']+g['width']/0x2,'y':GetY(g['R'])-g['height']/0x2,'speed':0x6,'angle':['hero',Math['max'](0xa,(0xa+i*0x2)%0x168)],'rgb':oMiniGames['oStg']['publicRGB']['purple']}),new oMiniGames['oStg']['Obj']['CBullet']()['Birth']({'pic':oMiniGames['oStg']['publicPic']['ball'],'width':0x23,'height':0x23,'r':0x8,'x':g['X']+g['width']/0x2,'y':GetY(g['R'])-g['height']/0x2,'speed':0x6,'angle':['hero',Math['min'](-0xa,(-0xa-i*0x2)%0x168)],'rgb':oMiniGames['oStg']['publicRGB']['purple']}),oSym['addTask'](0x14,g['shoot'],[g,i+0x9]);}}),oImp3=InheritO(oImp,{'EName':'oImp3','OSpeed':2.7,'BirthCallBack':function(g){oAudioManager['playAudio'](['imp','imp2'][Math['round'](Math['random']()*0x1)]),OrnNoneZombies['prototype']['BirthCallBack'](g),oSym['addTask'](0x12c,g['shoot'],[g]),oSym['addTask'](0xc8,g['check'],[g]);},'check'(g){if(!$Z[g['id']])return;oMiniGames['oStg']['hero']&&oMiniGames['oStg']['checkTrigger']({'x':g['X']+g['width']/0x2,'y':GetY(g['R'])-g['height']/0x2,'r':0x23},oMiniGames['oStg']['hero']['Trigger'])&&(oMiniGames['oStg']['hero']['Die'](),g['NormalDie']()),oSym['addTask'](0xc8,g['check'],[g]);},'shoot'(g,c=0x1){if(!$Z[g['id']]||g['HP']<0x5a)return;for(let w=-0x1e;w<=0x1e;w+=0xf){new oMiniGames['oStg']['Obj']['CBullet']()['Birth']({'pic':oMiniGames['oStg']['publicPic']['rice'],'width':0x1e,'height':0x1e,'r':0x3,'x':g['X']+g['width']/0x2,'y':GetY(g['R'])-g['height']/0x2,'speed':0x4*Math['max'](Math['abs'](w/0x28),1.5),'angle':['hero',w],'rgb':oMiniGames['oStg']['publicRGB']['purple']});}c%0x9==0x0&&new oMiniGames['oStg']['Obj']['CBullet']()['Birth']({'pic':oMiniGames['oStg']['publicPic']['big'],'width':0x64,'height':0x64,'r':0x14,'x':g['X']+g['width']/0x2-0x32,'y':GetY(g['R'])-g['height']/0x2-0x32,'speed':0x4,'angle':['hero',0x0],'rgb':oMiniGames['oStg']['publicRGB']['red']}),oSym['addTask'](0x32,g['shoot'],[g,c+0x1]);}}),oZombie2=InheritO(oZombie,{'EName':'oZombie2','HP':0x258,'OSpeed':2.2,'BirthCallBack':function(g){OrnNoneZombies['prototype']['BirthCallBack'](g),oSym['addTask'](0x12c,g['shoot'],[g]),oSym['addTask'](0xc8,g['check'],[g]);},'check'(g){if(!$Z[g['id']])return;oMiniGames['oStg']['hero']&&oMiniGames['oStg']['checkTrigger']({'x':g['X']+g['width']/0x2,'y':GetY(g['R'])-g['height']/0x2,'r':0x23},oMiniGames['oStg']['hero']['Trigger'])&&(oMiniGames['oStg']['hero']['Die'](),g['NormalDie']()),oSym['addTask'](0xc8,g['check'],[g]);},'shoot'(g){if(!$Z[g['id']])return;let c=Math['random']()*0x168;for(let w=0x0;w<=0x5;w++){for(let I=-0x5;I<=0x5;I++){let Q=Math['floor'](Math['random']()*0x2)*0xa+0x1e;oSym['addTask']((I+0xa)*0x4,k=>{new oMiniGames['oStg']['Obj']['CBullet']()['Birth']({'pic':oMiniGames['oStg']['publicPic']['rice'],'width':Q,'height':Q,'r':Q/0x8,'x':g['X']+g['width']/0x2,'y':GetY(g['R'])-g['height']/0x2,'speed':0x2+(I+0xa)%0x3,'angle':['hero',I*0x2+c+w*0x3c],'rgb':oMiniGames['oStg']['publicRGB']['red']});});}}oSym['addTask'](0x190,g['shoot'],[g]);}});oS['Init']({'PName':[oRepeater2],'ZName':[oImp2,oImp3,oZombie2],'backgroundImage':'images/interface/Polar2.webp','CanSelectCard':0x0,'SunNum':0x3e8,'DKind':0x0,'LevelName':$__language_Array__['574f21a2ea66070d54f7549d8efc419b'],'InitLawnMover':function(){},'EDAllScrollLeft':0x3a,'LoadMusic':'Bgm_Polar_Ready_2','backgroundMask':'BgMask-Polar','FixedProps':oPropSym['data']['light']?{'light':{'num':oPropSym['data']['light'],'canRecorded':!![]}}:'disabled','StartGameMusic':'Bgm_Polar_Fight_Challenge','LoadAccess':function(g){oSym['addTask'](0x1e,g,[0x0]),oAudioManager['playAudio']('Bgm_Polar_Noise',0x1),oMiniGames['oStg']['Init']();},'StartGame':function(){$('dCardList')['style']['display']='none',oAudioManager['pauseMusic'](),oAudioManager['playMusic'](oS['StartGameMusic']),SetVisible($('dFlagMeter'),$('dTop'));let g=NewImg('','images/interface/DanmakuBorder.webp','top:0px;left:57px;z-index:201;opacity:0;pointer-events:none;',EDAll);oEffects['Animate'](g,{'opacity':0x1},0.3),oS['InitLawnMover'](),oS['ControlFlagmeter']&&oFlagContent['init']({'fullValue':oP['FlagNum']-0x1,'curValue':0x0});let i=CustomSpecial(oRepeater2,0x3,0x1),w=new oMiniGames['oStg']['Obj']['CHero']();w['Birth']($(i['id']),0x96,0x122,0x4b,0x4b,0x4,!![]),PrepareGrowPlants(function(){oP['Monitor'](oS['Monitor'],oS['UserDefinedFlagFunc'],PlaySubtitle(IsMobile?$__language_Array__['7ef18e276383685fdf50162d318ac0a7']:$__language_Array__['4af54dcd40dc88225fe782b733f6a351'],0x320)),BeginCool(),oSym['addTask'](0x1f4,function(){oP['AddZombiesFlag'](),oS['ControlFlagmeter']&&oFlagContent['show']();},[]);});}},{'AZ':[[oImp2,0x1,0x1,[0x1]],[oZombie2,0x1,0x5,[0x5,0x6,0x7]],[oImp3,0x1,0x2]],'FlagNum':0xb,'FlagToSumNum':{'a1':[0x1,0x2,0x4,0x5,0x7,0x9],'a2':[0x1,0x3,0x7,0x1,0x5,0x6,0xa]},'FlagToEnd'(){localStorage['Act_Danmaku']=Number['parseInt'](localStorage['Act_Danmaku'])+0x1,ShowWinItem(NewImg('imgSF','images/interface/Clearance_reward.png','left:535px;top:200px;width:116px;height:119px;',EDAll,{'onclick':function(){GetWin(this,'Act_Danmaku2_2');}}));}});}