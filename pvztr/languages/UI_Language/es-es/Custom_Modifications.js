'use strict';{let FilePath='./languages/UI_Language/en-us/';oLoadRes['loadImage']({'resourceArr':[FilePath+'uis/GetNewPlantPanelEnglish.webp',FilePath+'uis/map.webp',FilePath+'uis/Fuben1.webp',FilePath+'uis/Introduction.webp',FilePath+'uis/panel.webp',FilePath+'uis/Almanac.webp',FilePath+'uis/GameOver.png',FilePath+'uis/store.webp',FilePath+'uis/loading.webp']}),jngTemplate['template']['Writer']='<div\x20id=\x22wrap\x22><img\x20src=\x22'+FilePath+'uis/writers.webp\x22></div>',jngTemplate['template']['Diary']='<iframe\x20id=\x27DiaryIframe\x27\x20class=\x22NoBar\x22\x20width=\x22'+oS['W']+'\x22\x20height=\x22600\x22\x20frameBorder=\x270\x27\x20scrolling=\x27auto\x27\x20src=\x27frame/Diary.html?folder=../'+FilePath+'/uis/diary/\x27></iframe>',jngTemplate['template']['labMap']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22lab0\x22\x20class=\x22WindowFrame\x22\x20data-jng-bg=\x22'+FilePath+'uis/lab1.webp\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22VirtualButton\x22\x20style=\x22width:200px;height:325px;left:\x20304px;top:\x20150px;\x22\x20onclick=\x22SelectModal(\x27Lab1\x27)\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22VirtualButton\x22\x20style=\x22width:200px;height:325px;left:732px;top:185px;\x22\x20onclick=\x22SelectModal(\x27Lab2\x27)\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22jngButton\x20ArrowMap\x20ArrowNext\x22\x20onclick=\x22labMap.change(1)\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22lab1\x22\x20class=\x22WindowFrame\x20noneLab\x22\x20data-jng-bg=\x22'+FilePath+'uis/lab2.webp\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22VirtualButton\x22\x20style=\x22width:200px;height:325px;left:184px;top:180px;\x22\x20onclick=\x22SelectModal(\x27Lab3\x27)\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22VirtualButton\x22\x20style=\x22width:200px;height:325px;left:612px;top:38px;\x22\x20onclick=\x22SelectModal(\x27Lab4\x27)\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22jngButton\x20ArrowMap\x20ArrowLast\x22\x20onclick=\x22labMap.change(-1)\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22jngButton\x20ArrowMap\x20ArrowNext\x22\x20onclick=\x22labMap.change(1)\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22lab2\x22\x20class=\x22WindowFrame\x20noneLab\x22\x20data-jng-bg=\x22'+FilePath+'uis/lab3.webp\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22VirtualButton\x22\x20style=\x22width:200px;height:325px;left:\x20262px;top:\x2050px;\x22\x20onclick=\x22SelectModal(\x27Lab5\x27)\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22VirtualButton\x22\x20style=\x22width:200px;height:325px;left:632px;top:185px;\x22\x20onclick=\x22SelectModal(\x27Lab6\x27)\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22jngButton\x20ArrowMap\x20ArrowLast\x22\x20onclick=\x22labMap.change(-1)\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22jngButton\x20ArrowMap\x20ArrowNext\x22\x20onclick=\x22labMap.change(1)\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22lab3\x22\x20class=\x22WindowFrame\x20noneLab\x22\x20data-jng-bg=\x22'+FilePath+'uis/lab4.webp\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22VirtualButton\x22\x20style=\x22width:200px;height:325px;left:\x20192px;top:\x20180px;\x22\x20onclick=\x22SelectModal(\x27Lab7\x27)\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22VirtualButton\x22\x20style=\x22width:200px;height:325px;left:\x20557px;top:\x2080px;\x22\x20onclick=\x22SelectModal(\x27Lab8\x27)\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22jngButton\x20ArrowMap\x20ArrowLast\x22\x20onclick=\x22labMap.change(-1)\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';};