'use strict';oS['Init']({'PName':[oPeashooter,oSunFlower,oWallNut,oPotatoMine,oFlowerPot,oStoneFlower,oRadish,oSnowPea,oRepeater,oCherryBomb,oTallNut,oSunShroom,oPuffShroom,oScaredyShroom,oFumeShroom,oSporeShroom,oBambooUncle,oDoomShroom,oLight],'ZName':[oZombie,oNewspaperZombie,oBalloonZombie,oConeheadZombie,oBucketheadZombie],'PicArr':[...oLSP['prototype']['PicArr']],'CanSelectCard':0x1,'SunNum':0x32,'LevelName':$__language_Array__['6e5069987164ff3f9435454fedb93338'],'InitWaterPath':{'beforeDFS'(g,i){oWaterPath['autoRenderPath']=![];let c=[[0x3,0x1],[0x3,0x6]];for(let w=0x0;w<c['length'];w++){g[c[w][0x0]][c[w][0x1]]=0x2,oGd['$WaterDepth'][c[w][0x0]][c[w][0x1]]=0xa,oWaterPath['wateranim'](c[w][0x0],c[w][0x1],w==0x0?-0x23:-0x14,0.8);}}},'LoadAccess':function(g){CustomSpecial(oFruitBasket,0x1,0x8),CustomSpecial(oFruitBasket,0x2,0x4),CustomSpecial(oFruitBasket,0x5,0x7),CustomSpecial(oRadish,0x3,0x5),CustomSpecial(oZombiePlusBloodObs,0x5,0x8),CustomSpecial(oZombiePlusBloodObs,0x2,0x9),willPlayDialogue()>=0x0?(NewImg('dDave','','left:0;top:81px',EDAll),NewEle('DivTeach','div',0x0,0x0,EDAll),function i(w){let I=$('DivTeach');switch(w){case 0x0:oAudioManager['playAudio']('crazydaveshort1'),$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',I['onclick']=function(){oSym['addTask'](0x1,i,[0x1]);};},[]),innerText(I,$__language_Array__['349331d8b462cf8df41d9a23b23207ab']);break;case 0x1:oAudioManager['playAudio']('crazydavelong'+Math['floor'](0x1+Math['random']()*0x3)),I['onclick']=null,$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',I['onclick']=function(){oSym['addTask'](0x1,i,[0x2]);};},[]),innerText(I,$__language_Array__['f33fd34ae5259d4e75bc5c28aa7dc7cd']);break;case 0x2:oAudioManager['playAudio']('crazydavelong'+Math['floor'](0x1+Math['random']()*0x3)),I['onclick']=null,$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',I['onclick']=function(){oSym['addTask'](0x1,i,[0x3]);};},[]),innerText(I,$__language_Array__['9693aa2b7d2fc86e8b06a25de07e357c']);break;case 0x3:oAudioManager['playAudio']('crazydavelong'+Math['floor'](0x1+Math['random']()*0x3)),I['onclick']=null,$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',I['onclick']=function(){oSym['addTask'](0x1,i,[0x4]);};},[]),innerText(I,$__language_Array__['ba59d051ed2538a47324d18e52821d1a']);break;case 0x4:oAudioManager['playAudio']('crazydavelong'+Math['floor'](0x1+Math['random']()*0x3)),I['onclick']=null,$('dDave')['src']='images/interface/Dave.png',oSym['addTask'](0x1,function(){$('dDave')['src']='images/interface/Dave.png',I['onclick']=function(){oSym['addTask'](0x1,i,[0x5]);};},[]),innerText(I,$__language_Array__['3e705368270e01403957aa387264ebd5']);break;case 0x5:ClearChild($('DivTeach'),$('dDave')),oSym['addTask'](0x1e,function(){g(0x0);},[]);}}(0x0)):oSym['addTask'](0x1e,g);},'StartGame':function(){oAudioManager['pauseMusic'](),oAudioManager['playMusic'](oS['StartGameMusic']),SetVisible($('tdShovel'),$('dFlagMeter'),$('dTop')),oS['InitLawnMover'](),oS['ControlFlagmeter']&&oFlagContent['init']({'fullValue':oP['FlagNum']-0x1,'curValue':0x0}),PrepareGrowPlants(function(){oP['Monitor'](oS['Monitor'],oS['UserDefinedFlagFunc']),BeginCool(),AutoProduceSun(0x19),oSym['addTask'](0x4b0,function(){oP['AddZombiesFlag'](),oS['ControlFlagmeter']&&oFlagContent['show']();},[]);});}},{'AZ':[[oZombie,0x2,0x3],[oNewspaperZombie,0x2,0x3],[oBalloonZombie,0x3,0x1,[0x1,0x2]],[oConeheadZombie,0x2,0x3],[oBucketheadZombie,0x2,0x3]],'FlagNum':0xb,'FlagToSumNum':{'a1':[0x2,0x3,0x6,0x9],'a2':[0x2,0x4,0x8,0xf,0x16]},'FlagToMonitor':{},'FlagToEnd':function(){NewImg('PointerUD2','images/interface/down.gif','left:550px;top:250px;',EDAll),ShowWinItem(GetPlantCardDom(oLSP,EDAll,null,{'onclick':function(){GetNewProp(this,'images/Props/LSP/LSP.gif',$__language_Array__['b6a00043b4abdc66cbbb04000739a031'],$__language_Array__['067fb5bafa930e1b2c7f0201ba385195'],'Season_A3','100px','350px');}}));}});