'use strict';oS['Init']({'LoadMusic':'Time_Is_Money','backgroundImage':RESPATH+'bg_spf_2020_win.webp','LevelName':'PlayingMusic_AS_Room','LoadAccess':function(){NewEle('jngButton'+Math['random'](),'a','left:1px;top:1px;z-index:258;position:\x20absolute;',{'className':'jngButton\x20Homepage','onclick'(){Exitlevel(oS['Lvl']);}},EDAll);let g=NewEle('filesDIV','div','position:absolute;border-radius:5px;overflow:hidden\x20auto;left:10%;top:10%;height:80%;width:80%;padding-top:20px;',{'className':'HiddenBar'},EDAll),c=NewEle('filesTable','table','color:white;text-align:center;width:100%;border-collapse:separate;\x20border-spacing:0px\x2010px;',{},g),w=['','#55FF55','#5555FF','#FFFF00','#00FFFF','#9900FF'];w['hide']='white',w['strange']='#80431A';let I='images/Achievements/',Q=[['New_Travel',RESPATH+'PreviewMap.webp',0x1,$__language_Array__['a9775b81515b5410dd527d38256255ff'],$__language_Array__['295b7fbd2e9107feb9fc5629522b3628'],'clip:rect(0,80px,80px,0);width:auto;'],['The_Star_Night',RESPATH+'PreviewMap.webp',0x1,$__language_Array__['62f22af0a8d3a6e2820eece8852f6fb1'],$__language_Array__['ea8a45bbbe17bf191d0532a670dec13b'],'left:-85px;clip:rect(0px,'+0xa5+'px,80px,'+0x55+'px);width:auto;'],['The_Ice_Winner',RESPATH+'PreviewMap.webp',0x2,$__language_Array__['eba87089e9cab78377ae64cc885f1620'],$__language_Array__['8d2d2eeef588ba635d7d38e4c2882a36'],'left:'+-0x55*0x3+'px;clip:rect(0px,'+(0x55*0x3+0x50)+'px,80px,'+0x55*0x3+'px);width:auto;'],['Industry_PART2_window',RESPATH+'PreviewMap.webp',0x3,$__language_Array__['63ec5520270cf597d46a8bec0390a6de'],$__language_Array__['e8bba6a9d6fb2f9f17e8ee9270763f75'],'left:'+-0x55*0x4+'px;clip:rect(0px,'+(0x55*0x4+0x50)+'px,80px,'+0x55*0x4+'px);width:auto;'],['Industry_PART2_NoBomb',I+'Bomb_Defused.webp',0x5,$__language_Array__['22779eef1f181bee8f7495f6a4013f94'],$__language_Array__['2bcdb59d2a8fd9ba60ad6010cd8290af']],['Industry_PART3_window',RESPATH+'PreviewMap.webp',0x5,$__language_Array__['ef016f0615c3bf13c203db497ef72a40'],$__language_Array__['c44342314c47eeed86bc4020fcf870f6'],'left:'+-0x55*0x4+'px;clip:rect(0px,'+(0x55*0x4+0x50)+'px,80px,'+0x55*0x4+'px);width:auto;'],['The_No_Begonia_1',I+'Begonia_Holiday.webp',0x1,$__language_Array__['76111177be0e08902a21cbe2c82fd56c'],$__language_Array__['7adaa39011b8e8eb8382b86eba39b01b'],''],['The_Ultimate_Clicker',I+'The_Ultimate_Clicker.webp','hide',$__language_Array__['aaa755edf5471c14369d63d082e58282']],['Broken_Mirror',I+'Broken_Mirror.webp','hide',$__language_Array__['e55643e8596b7a092e1821dd9ae0884b']],['Winner_LEVEL1',RESPATH+'Clearance_reward.png',0x1,$__language_Array__['822282be6ba3c1258190b8ea28f8415c'],$__language_Array__['caf40ce385111376c4525557fe0cca97']],['Winner_LEVEL2',RESPATH+'Clearance_reward.png',0x3,$__language_Array__['7e1a4e3151ec91980eadfba75cdac115'],$__language_Array__['0422faf610b7313c2a94bd699acb084d']],['Winner_LEVEL3',RESPATH+'Clearance_reward.png',0x5,$__language_Array__['f9259cbdc697a33be79f322c07c56b96'],$__language_Array__['115b67b9af86d77631b43f29371e71c2']],['The_oFlowerPot_Egg',I+'Potter_Neighbor.webp','strange',$__language_Array__['3865d42c93d6c9155ac6a4db790c2967'],$__language_Array__['a859613a605f26c2c776e756538c47fe']],['The_oLawnCleaner_Egg',I+'Smooth_Criminal.webp','strange',$__language_Array__['dc431b1725d8545077d8f89ab208db61'],$__language_Array__['8f3c7c1b64fb408d2389f9d4762b1efa']],['The_oGraveBuster_Egg',I+'Unending_Hunger.webp','strange',$__language_Array__['8a11263b84a8cc89ec622226ce0d06be'],$__language_Array__['9d7e82f940fa94de455ed76bddb71cdc']]];function k(G){return G=='hide'&&(G=w['length']),G=='strange'&&(G=w['length']+0x1),G;}function f(G,z){let e=G[0x2],X=z[0x2];e=k(e),X=k(X);if(e>X)return 0x1;else return e==X?G[0x0]>z[0x0]?0x1:-0x1:-0x1;}Q=Q['sort'](f);for(let G=0x0;G<Q['length'];G++){let z=Q[G],e=NewEle('','tr','position:relative;height:100px;background:rgba(0,0,0,0.5);',{},c),X=w[z[0x2]],F=NewEle('','div','position:absolute;left:20px;height:80px;width:80px;line-height:100px;margin-top:8px;border:2px\x20solid\x20'+X+';box-shadow:0\x200\x2010px\x20'+X,{},e),H=NewEle('','img','position:absolute;left:0px;height:80px;width:80px;line-height:100px;'+z[0x5],{'src':z[0x1]},F),W=NewEle('','td','position:absolute;text-align:right;font-size:1.3em;right:10px;padding-right:20px;line-height:100px;',{'innerText':z[0x3]},e);!$User['Achievement'][z[0x0]]&&(H['style']['filter']='grayscale(100%)\x20blur(4px)',W['innerText']=$__language_Array__['3c1f7ca9c3ddc0f7160f67eb2a9ece53']+(!z[0x4]?$__language_Array__['85bf8c534ff48d3e11b1682c4e16bbae']:z[0x4]));}}});