'use strict';{oSelectionMap['loadPage']({'PicArr':[RESPATH+'MarshSelectionMap/img3.webp',RESPATH+'MarshSelectionMap/front/img3.webp',RESPATH+'MarshSelectionMap/water/img3.webp',RESPATH+'MarshSelectionMap/firefly.webp'],'Music':'Bgm_Marsh_Ready','backgroundImage':RESPATH+'MarshSelectionMap/img3.webp','LoadEveryTime'(g){setTimeout(function(){let i=g['getElementsByClassName']('SelectionMapWaterEffect')[0x0],c=oSelectionMap['_CurrentPage_'],w='url('+oSVG['getSVG']('Flowing')+')';if(!$User['LowPerformanceMode']&&i['style']['filter']['length']===0x0){let I=setInterval(function Q(){c!==oSelectionMap['_CurrentPage_']&&(i['style']['filter']='',clearInterval(I));},0x3e8);}drawFireFly(g,c);},0x1);},'LoadAccess'(g,i){NewEle('','div','position:absolute;top:0;left:0;background:url('+(RESPATH+'MarshSelectionMap/water/img3.webp')+')\x20no-repeat;width:900px;height:600px;pointer-events:none;',{'className':'SelectionMapWaterEffect'},i),NewEle('','div','position:absolute;top:0;left:0;background:url('+(RESPATH+'MarshSelectionMap/front/img3.webp')+')\x20no-repeat;width:900px;height:600px;pointer-events:none;',{},i),NewEle('','canvas',void 0x0,{'width':oS['W'],'height':0x258,'className':'SelectionMapFireflyCanvas'},i)['style']['pointerEvents']='none';function c(I){let Q=[[0xb7,0x1aa],[0x13a,0x13f],[0x1b8,0x114],[0x241,0x11d],[0x2c8,0x157]];return'left:'+(Q[I][0x0]+0x4)+'px;top:'+(Q[I][0x1]-0x1e)+'px;';}const w='images/Card/';oLoadRes['loadImage']({'resourceArr':[RESPATH+'MarshSelectionMap/front/img4.webp',RESPATH+'MarshSelectionMap/water/img5.webp',w+'SporeShroom.webp',w+'Light.webp',w+'BambooUncle.webp',w+'DoomShroom.webp']}),g(c(0x0),{'onclick':I=>oLvlInfoUI['open']('Marsh11',0x2,[$__language_Array__['4c8e03fbf9d6c0d961a21486d1db720c'],$__language_Array__['3ff047b4430522038323f48e097d91cf'],$__language_Array__['baacb965f0ddf580b5d4b057bd6c2f6a'],$__language_Array__['a8a363a3d181e5a8fa4cba0d2d80a56e']],['Zombie','ConeheadZombie','BucketheadZombie','CaskZombie','FootballZombie'],0x1,'Marsh11jx')},['Marsh11','Marsh11jx']),g(c(0x1),{'onclick':I=>oLvlInfoUI['open']('Marsh12',0x2,[$__language_Array__['e5f00d1d1728ef5a01a63aeafba6dd09'],$__language_Array__['0660933082fd2ea178bd93607e5d3bdb'],$__language_Array__['baacb965f0ddf580b5d4b057bd6c2f6a'],$__language_Array__['61a5aa8432ed4415f151290f8616a276']],['Zombie','NewspaperZombie','ConeheadZombie','SadakoZombie','StrollZombie','CigarZombie'],['plant',oSporeShroom])},['Marsh12']),g(c(0x2),{'onclick':I=>oLvlInfoUI['open']('Marsh13',0x2,[$__language_Array__['5dc7723a1e0e254bcca76342eb32547a'],$__language_Array__['3ff047b4430522038323f48e097d91cf'],$__language_Array__['baacb965f0ddf580b5d4b057bd6c2f6a'],$__language_Array__['613ce8f95ec248fc03af3806f42a3dea']],['Imp','Zombie','BalloonZombie','NewspaperZombie','ConeheadZombie','SadakoZombie','CaskZombie','BucketheadZombie','FootballZombie'],0x1,'Marsh13jx')},['Marsh13','Marsh13jx']),g(c(0x3),{'onclick':I=>oLvlInfoUI['open']('Marsh14',0x2,[$__language_Array__['ebb0f4a203f6f37d2117ce7c83162205'],$__language_Array__['3ff047b4430522038323f48e097d91cf'],$__language_Array__['baacb965f0ddf580b5d4b057bd6c2f6a'],$__language_Array__['613ce8f95ec248fc03af3806f42a3dea']],['Zombie','ConeheadZombie','NewspaperZombie','StrollZombie','CigarZombie','BucketheadZombie','FootballZombie'],['images/Card/Light.webp','left:\x20150px;top:200px;clip:rect(auto,auto,60px,auto);'],'Marsh14jx')},['Marsh14','Marsh14jx']),g(c(0x4),{'onclick':I=>oLvlInfoUI['open']('Marsh15',0x2,[$__language_Array__['f25c1c930503524a2d5104a4f12bb308'],$__language_Array__['c74626013505c1049e24d759e8ad4178'],$__language_Array__['baacb965f0ddf580b5d4b057bd6c2f6a'],$__language_Array__['61a5aa8432ed4415f151290f8616a276']],['Imp','Zombie','ConeheadZombie','NewspaperZombie','CaskZombie','SadakoZombie','BucketheadZombie'],['plant',oBambooUncle],'Marsh15jx')},['Marsh15','Marsh15jx']),NewImg('imgSF','images/Props/Light/p.gif','left:650px;top:400px;',i,{'onmouseover':I=>ShowCue(0x212,0x1d6,$__language_Array__['7708a9f24efb9f5a0af60042e25db470'],$__language_Array__['2b7fee07046dfaa19ccec87b8ab4fc5a']),'onmouseout':I=>SetNone($('dCue'))}),NewEle(null,'div','top:455px;left:640px;',{'className':'Shadow'},i),function I(Q=[0x1]){let k=i['getElementsByClassName']('VirtualButtonStar');for(let f of Q){k[f]['style']['top']=Number['parseFloat'](k[f]['style']['top'])+0x28+'px';}}();}});function drawFireFly(g,c){let w=g['getElementsByClassName']('SelectionMapFireflyCanvas')[0x0];w['style']['pointerEvents']='';let I=[-0x2710,-0x2710];!IsMobile&&(w['onmousemove']=function(X){I=[X['offsetX'],X['offsetY']];});let Q=w['dataset']['tag']=Math['random']()+'',k=new Image();k['src']=RESPATH+'MarshSelectionMap/firefly.webp';let f=w['getContext']('2d');f['globalAlpha']=0.7,f['clearRect'](0x0,0x0,oS['W'],0x258);let G=[];function z(X=0x0){let F={'x':Math['random']()*oS['W'],'y':Math['random']()*0x258,'size':0x0,'liveTime':X,'destroy':![]},H=Math['random']()*0xa+0xa,W=(Math['random']()+0x1)/0x32,x=Math['random']()*0x4+0x1;F['radius']=Math['random']()*0x2+0x4,F['velocityRate']=Math['pow'](F['radius']/0x6,0x3),F['phi']=Math['PI']*0x2*Math['random'](),F['vx']=Math['cos'](F['phi'])*F['velocityRate'],F['vy']=Math['sin'](F['phi'])*F['velocityRate'],F['accelaration']=Math['random']()*Math['PI']/0x96-Math['PI']/0x12c,F['frequency']=Math['random']()*Math['PI']/0xc8+Math['PI']/0xc8,F['theta']=Math['PI']*0x2*Math['random']();let r=[0x0,0x0];F['move']=()=>{F['x']+=F['vx']+r[0x0],F['y']+=F['vy']+r[0x1];if(!IsMobile&&!$User['LowPerformanceMode']){let t=Math['max'](0x5,Math['hypot'](F['x']-I[0x0],F['y']-I[0x1]));if(t<0x32){if(r[0x0]**0x2+r[0x1]**0x2<0x4){let U=Math['atan2'](F['y']-I[0x1],F['x']-I[0x0]);r[0x0]+=Math['cos'](U)*0xf/t**0x2,r[0x1]+=Math['sin'](U)*0xf/t**0x2;}}}r=Math['MoveTowards'](r,[0x0,0x0],0.03),F['liveTime']<=0x3c?F['size']=Math['Lerp'](0x0,H,F['liveTime']/0x3c):F['size']+=Math['DegToRad']*W*Math['cos'](Math['DegToRad']*W*(F['liveTime']-0x3c))*x,F['liveTime']++,(F['x']<-F['size']||F['x']>oS['W']||F['y']<-F['size']||F['y']>0x258)&&(F['destroy']=!![]),F['theta']+=F['frequency'],F['opacity']=0.5-0.5*Math['cos'](F['theta']),F['theta']>Math['PI']*0x2&&(F['accelaration']=Math['random']()*Math['PI']/0x96-Math['PI']/0x12c,F['theta']%=Math['PI']*0x2),F['phi']+=F['accelaration'],F['phi']%=Math['PI']*0x2,F['vx']=Math['cos'](F['phi'])*F['velocityRate'],F['vy']=Math['sin'](F['phi'])*F['velocityRate'];},G['push'](F);}for(let X=0x0;X<=0x32;X++){z(Math['random']()*0x78);}let e=setInterval(function F(){if(document['hidden'])return;if(Q!=w['dataset']['tag']||c!=oSelectionMap['_CurrentPage_']||oS['Lvl']!=='selectionmap'){w['onmousemove']=null,w['style']['pointerEvents']='none',clearInterval(e);return;}f['clearRect'](0x0,0x0,oS['W'],0x258);for(let H=G['length']-0x1;H>=0x0;H--){f['drawImage'](k,G[H]['x'],G[H]['y'],G[H]['size']*(G[H]['y']/0x258/0x2+0.5),G[H]['size']*(G[H]['y']/0x258/0x2+0.5)),G[H]['move'](),G[H]['destroy']&&G['splice'](H,0x1);}G['length']<0x32&&z();},0x11);}};