'use strict';{oSelectionMap['loadPage']({'PicArr':[RESPATH+'MirageSelection1.webp',RESPATH+'MirageSelection2.webp',RESPATH+'MarshSelectionMap/firefly.webp'],'Music':'Bgm_Mirage_Ready','backgroundImage':'images/interface/MirageSelection1.webp','LoadEveryTime'(g){setTimeout(function(){let i=oSelectionMap['_CurrentPage_'];drawFireFly(g,i);},0x1);},'LoadAccess'(g,i){const c=z=>{return z['sort']((e,X)=>e['prototype']['CardStars']-X['prototype']['CardStars'])['map'](e=>e['prototype']['GetCardImg']['call'](e['prototype']));},w=c([oStrollZombie,oPushIceImp,oZombie,oConeheadZombie,oBucketheadZombie,oZomboni,oSculptorZombie,oBeetleCarZombie,oThiefZombie,oCigarZombie,oCaskZombie,oFootballZombie,oGargantuar,oMakeRifterZombie]),I=c([oConeheadZombie,oMakeRifterZombie,oFootballZombie,oMembraneZombie,oSculptorZombie]),Q=c([oThiefZombie,oPeashooterZombie,oWallNutZombie]),k=c([oStrollZombie,oPeashooterZombie,oSnorkelerZombie,oZombie,oCigarZombie,oImp,oMakeRifterZombie,oSkatingZombie,oConeheadZombie,oBucketheadZombie,oFootballZombie]),f=c([oZombie,oConeheadZombie,oBucketheadZombie,oMembraneZombie,oWallNutZombie,oPeashooterZombie,oSnorkelerZombie,oNewspaperZombie,oSadakoZombie,oSculptorZombie,oZomboni,oGargantuar]),G='images/Card/';oLoadRes['loadImage']({'resourceArr':[RESPATH+'Mirage.webp',RESPATH+'Mirage_Night.webp','images/Props/WaterPath/edgeMask.webp','images/Props/WaterPath/fullWater.webp',RESPATH+'Tombstone.webp',G+'GraveBuster.webp',G+'UmbrellaLeaf.webp',G+'LilyPad.webp',G+'Eichhornia.webp']}),NewEle('','canvas','width:967px;pointer-events:none;',{'width':oS['W']-0x64,'height':0x258,'className':'SelectionMapFireflyCanvas'},i),g('left:74px;top:308px;',{'onclick':z=>oLvlInfoUI['open']('Mirage1',0x6,[$__language_Array__['a6945079fb6a44dea69137d09993ea39'],$__language_Array__['0384d36faf7e21ab117bfe548efa53c2'],$__language_Array__['43b20992252fd7793366c0552605a02d'],$__language_Array__['d14e18caba7b9a59f8346a22367d1c03']],w,['plant',oGraveBuster])},['Mirage1']),g('left:\x20245px;top:\x20292px;',{'onclick':z=>oLvlInfoUI['open']('Mirage2',0x6,[$__language_Array__['721c3d56c37cfb2352856c00abfb810c'],$__language_Array__['0384d36faf7e21ab117bfe548efa53c2'],$__language_Array__['deebc6cbd62419f293e0df7cbaa87d41'],$__language_Array__['1d98c03165c89f729945e38a38edd485']],I,0x1)},['Mirage2']),g('left:\x20416px;top:\x20310px;',{'onclick':z=>oLvlInfoUI['open']('Mirage3',0x6,[$__language_Array__['8cc569a9ec8bdd1c8128560efb581a1b'],$__language_Array__['e1e304c62bb093f6c70d57c7f264f612'],$__language_Array__['43b20992252fd7793366c0552605a02d'],$__language_Array__['9a649d78899ba35b1868a958a2fd964f']],Q,['plant',oUmbrellaLeaf])},['Mirage3']),g('left:602px;top:292px;',{'onclick':z=>oLvlInfoUI['open']('Mirage4',0x6,[$__language_Array__['0c4d31856f17a42a018b5268f762c4b0'],$__language_Array__['0384d36faf7e21ab117bfe548efa53c2'],$__language_Array__['4c84d03009f55dfe488775420e4ffb14'],$__language_Array__['d14e18caba7b9a59f8346a22367d1c03']],k,['plant',oLilyPad])},['Mirage4']),g('left:\x20769px;top:292px;',{'onclick':z=>oLvlInfoUI['open']('Mirage5',0x6,[$__language_Array__['3a1d1e9a1fcc0f3becb22b002b8db513'],$__language_Array__['0384d36faf7e21ab117bfe548efa53c2'],$__language_Array__['4c84d03009f55dfe488775420e4ffb14'],$__language_Array__['e2cefb9b97b9a9e4f2a7ff66e51b5233']],f,['plant',oEichhornia])},['Mirage5']);}});function drawFireFly(g,c){let w=g['getElementsByClassName']('SelectionMapFireflyCanvas')[0x0];w['style']['pointerEvents']='';let I=[-0x2710,-0x2710];!IsMobile&&(w['onmousemove']=function(X){I=[X['offsetX'],X['offsetY']];});let Q=w['dataset']['tag']=Math['random']()+'',k=new Image();k['src']=RESPATH+'MarshSelectionMap/mirage_firefly.webp';let f=w['getContext']('2d');f['globalAlpha']=0.4,f['clearRect'](0x0,0x0,oS['W'],0x258);let G=[];function z(X=0x0){let F={'x':Math['random']()*oS['W']-0x64,'y':Math['random']()*0x258,'size':0x0,'liveTime':X,'destroy':![]},H=Math['random']()*0xa+0x5,W=(Math['random']()+0x1)/0x32,x=Math['random']()*0x4+0x1;F['radius']=Math['random']()*0x2+0x4,F['velocityRate']=Math['pow'](F['radius']/0x6,0x3),F['phi']=Math['PI']*0x2*Math['random'](),F['vx']=Math['cos'](F['phi'])*F['velocityRate'],F['vy']=Math['sin'](F['phi'])*F['velocityRate'],F['accelaration']=Math['random']()*Math['PI']/0x96-Math['PI']/0x12c,F['frequency']=Math['random']()*Math['PI']/0xc8+Math['PI']/0xc8,F['theta']=Math['PI']*0x2*Math['random']();let r=[0x0,0x0];F['move']=()=>{F['x']+=F['vx']+r[0x0],F['y']+=F['vy']+r[0x1];if(!IsMobile&&!$User['LowPerformanceMode']){let t=Math['max'](0x5,Math['hypot'](F['x']-I[0x0],F['y']-I[0x1]));if(t<0x32){if(r[0x0]**0x2+r[0x1]**0x2<0x4){let U=Math['atan2'](F['y']-I[0x1],F['x']-I[0x0]);r[0x0]+=Math['cos'](U)*0xf/t**0x2,r[0x1]+=Math['sin'](U)*0xf/t**0x2;}}}r=Math['MoveTowards'](r,[0x0,0x0],0.03),F['liveTime']<=0x3c?F['size']=Math['Lerp'](0x0,H,F['liveTime']/0x3c):F['size']+=Math['DegToRad']*W*Math['cos'](Math['DegToRad']*W*(F['liveTime']-0x3c))*x,F['liveTime']++,(F['x']<-F['size']||F['x']>oS['W']-0x64||F['y']<-F['size']||F['y']>0x258)&&(F['destroy']=!![]),F['theta']+=F['frequency'],F['opacity']=0.5-0.5*Math['cos'](F['theta']),F['theta']>Math['PI']*0x2&&(F['accelaration']=Math['random']()*Math['PI']/0x96-Math['PI']/0x12c,F['theta']%=Math['PI']*0x2),F['phi']+=F['accelaration'],F['phi']%=Math['PI']*0x2,F['vx']=Math['cos'](F['phi'])*F['velocityRate'],F['vy']=Math['sin'](F['phi'])*F['velocityRate'];},G['push'](F);}for(let X=0x0;X<=0x19;X++){z(0x78);}let e=setInterval(function F(){if(document['hidden'])return;if(Q!=w['dataset']['tag']||c!=oSelectionMap['_CurrentPage_']||oS['Lvl']!=='selectionmap'){w['onmousemove']=null,w['style']['pointerEvents']='none',clearInterval(e);return;}f['clearRect'](0x0,0x0,oS['W'],0x258);for(let H=G['length']-0x1;H>=0x0;H--){let W=Math['Lerp'](0x1,0x0,(G[H]['x']-0x384)/0x43);f['drawImage'](k,G[H]['x'],G[H]['y'],G[H]['size']*(G[H]['y']/0x258/0x2+0.5)*W,G[H]['size']*(G[H]['y']/0x258/0x2+0.5)*W),G[H]['move'](),G[H]['destroy']&&G['splice'](H,0x1);}G['length']<0x19&&z();},0x11);}}