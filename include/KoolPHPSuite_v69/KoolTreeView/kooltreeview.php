<?php $_bl0="\063\0560.\060.0"; if (!class_exists("\113oo\154Sc\162ip\164in\147",FALSE)) { class koolscripting { static function start() { ob_start(); return ""; } static function end() { $_bO0=ob_get_clean(); $_bl1=""; $_bO1=new domdocument(); $_bO1->loadxml($_bO0); $_bl2=$_bO1->documentElement; $id=$_bl2->getattribute("id"); $_bO2=$_bl2->nodeName; $id=($id == "") ? "\144um\160": $id; if (class_exists($_bO2,FALSE)) { eval ("\044".$id." =\040ne\167 ".$_bO2."\050\047".$id."'\051;"); $$id->loadxml($_bl2); $_bl1=$$id->render(); } else { $_bl1.=$_bO0; } return $_bl1; } } } function _bl3($_bO3) { return md5($_bO3); } function _bl4() { $_bO4=_bl5("\134","\057",strtolower($_SERVER["S\103RIP\124_N\101ME"])); $_bO4=_bl5(strrchr($_bO4,"\057"),"",$_bO4); $_bO5=_bl5("\134","\057",realpath("\056")); $_bl6=_bl5($_bO4,"",strtolower($_bO5)); return $_bl6; } function _bl5($_bO6,$_bl7,$_bO7) { return str_replace($_bO6,$_bl7,$_bO7); } class _bi10 { static $_bi10="\173\060}\074di\166 i\144='\173id\175' \143la\163s=\047\173st\171le\175K\124V'\040s\164yl\145=\047\173\167\151dt\150}\173he\151g\150t\175\173ov\145rf\154o\167}\047>\074u\154 \143la\163s\075'\153t\166U\114 \173no\160a\144d\151n\147}\040\173\154\151n\145s\175'\076\173su\142n\157d\145s\175<\057u\154\076\173\143\154i\145n\164s\164a\164e\175\1731}\074\057d\151v\076\1732\175"; } function _bl8() { header("Co\156te\156t-t\171pe\072 t\145xt\057j\141va\163cr\151pt"); } function _bO8() { echo "va\162 _b\151O1\0750;"; } function _bl9() { return exit (); } function _bO9() { return _bi10::$_bi10; } function _bla( &$_bOa) { for ($_blb=0; $_blb<3; $_blb ++) $_bOa=_bl5("\173".$_blb."}","",$_bOa); return TRUE; } if ( isset ($_GET[_bl3("\152s")])) { _bl8(); ?> function _bO(_bo){return (_bo!=null);}function _bY(_by,_bI){var _bi=document.createElement(_by); _bI.appendChild(_bi); return _bi; }function _bA(_ba){return document.getElementById(_ba); }function _bE(_bo,_be){if (!_bO(_be))_be=1; for (var i=0; i<_be; i++)_bo=_bo.parentNode; return _bo; }function _bU(_bo,_be){if (!_bO(_be))_be=1; for (var i=0; i<_be; i++)_bo=_bo.firstChild; return _bo; }function _bu(_bo,_be){if (!_bO(_be))_be=1; for (var i=0; i<_be; i++)_bo=_bo.nextSibling; return _bo; }function _bZ(){return (typeof(_biO1)=="undefined");}function _bz(_bX,_bx,_bW,_bw){if (_bX.addEventListener){_bX.addEventListener(_bx,_bW,_bw); return true; }else if (_bX.attachEvent){if (_bw){return false; }else {var _bV= function (){_bW.apply(_bX,[window.event]); };if (!_bX["ref"+_bx])_bX["ref"+_bx]=[]; else {for (var _bv in _bX["ref"+_bx]){if (_bX["ref"+_bx][_bv]._bW === _bW)return false; }}var _bT=_bX.attachEvent("on"+_bx,_bV); if (_bT)_bX["ref"+_bx].push( {_bW:_bW,_bV:_bV } ); return _bT; }}else {return false; }} ; function _bt(_bX,_bx,_bW,_bw){if (_bX.removeEventListener){_bX.removeEventListener(_bx,_bW,_bw); return true; }else if (_bX.detachEvent){if (_bX["ref"+_bx]){for (var _bv in _bX["ref"+_bx]){if (_bX["ref"+_bx][_bv]._bW === _bW){_bX.detachEvent("on"+_bx,_bX["ref"+_bx][_bv]._bV); _bX["ref"+_bx][_bv]._bW=null; _bX["ref"+_bx][_bv]._bV=null; delete _bX["ref"+_bx][_bv]; return true; }}}return false; }else {return false; }}function _bS(_bs){return _bs.className; }function _bR(_bs,_br){_bs.className=_br; }function _bQ(_bo,_bq){if (_bo.className.indexOf(_bq)<0){var _bP=_bo.className.split(" "); _bP.push(_bq); _bo.className=_bP.join(" "); }}function _bp(_bo,_bq){if (_bo.className.indexOf(_bq)>-1){_bN(_bq,"",_bo);var _bP=_bo.className.split(" "); _bo.className=_bP.join(" "); }}function _bN(_bn,_bM,_bm){_bR(_bm,_bS(_bm).replace(_bn,_bM)); }function _bL(_bm,_bq){for (var i=0; i<_bm.childNodes.length; i++)if (_bm.childNodes[i].className.indexOf(_bq)>-1)return _bm.childNodes[i]; }function _bl(_bo,_bK){_bo.style.display=(_bK)?"block": "none"; }function _bk(_bo){return (_bo.style.display!="none"); }function _bJ(_bm){var _bj=""; for (var _bH in _bm){switch (typeof(_bm[_bH])){case "string":if (_bO(_bm.length))_bj+="'"+_bm[_bH]+"',"; else _bj+="'"+_bH+"':'"+_bm[_bH]+"',"; break; case "number":if (_bO(_bm.length))_bj+=_bm[_bH]+","; else _bj+="'"+_bH+"':"+_bm[_bH]+","; break; case "object":if (_bO(_bm.length))_bj+=_bJ(_bm[_bH])+","; else _bj+="'"+_bH+"':"+_bJ(_bm[_bH])+","; break; }}if (_bj.length>0)_bj=_bj.substring(0,_bj.length-1); _bj=(_bO(_bm.length))?"["+_bj+"]": "{"+_bj+"}"; if (_bj=="{}")_bj="null"; return _bj; }var _bh= false; function _bG(_bg){_bF=(window.event)?event.keyCode:_bg.keyCode; if (_bF==17){_bh= true; }}function _bf(_bg){_bF=(window.event)?event.keyCode:_bg.keyCode; if (_bF==17){_bh= false; }}_bz(document,"keyup",_bf, false); _bz(document,"keydown",_bG, false); function _bD(_bd){if (_bd.pageX || _bd.pageY){return {_bC:_bd.pageX,_bc:_bd.pageY } ; }return {_bC:_bd.clientX+document.body.scrollLeft-document.body.clientLeft,_bc:_bd.clientY+document.body.scrollTop-document.body.clientTop } ; }var _bB= {_bb:function (){var _bo0=document.cookie.split("; "); for (var i=0; i<_bo0.length; i++){var _bO0=_bo0[i].split("="); this[_bO0[0]]=_bO0[1]; }} ,_bl0:function (_bH,_bi0,_bI0){if (_bI0){var _bo1=new Date(); _bo1.setTime(_bo1.getTime()+(_bI0*60*60*1000)); var _bO1="; expires="+_bo1.toGMTString(); }else var _bO1=""; document.cookie=_bH+"="+_bi0+_bO1+"; path=/"; this[_bH]=_bi0; } ,_bl1:function (_bH){ this._bl0(_bH,"",-1); this[_bH]=undefined; }} ; _bB._bb(); function _bi1(_bI1){ this.NodeId=_bI1; this._ba=_bI1; }_bi1.prototype= {getText:function (){return this._bo2("Text").innerHTML; } ,setText:function (_bO2){ this._bo2("Text").innerHTML=_bO2; return this ; } ,getImageSrc:function (){var _bl2=this._bo2("Image"); return (_bO(_bl2)?_bl2.src: ""); } ,setImageSrc:function (_bi2){var _bl2=this._bo2("Image"); if (_bO(_bl2))_bl2.src=_bi2; return this ; } ,disableSelect:function (_bI2){ (_bI2)?this._bo3("select"): this._bO3("select"); return this ; } ,disableDrag:function (_bI2){ (_bI2)?this._bo3("drag"): this._bO3("drag"); return this ; } ,disableDrop:function (_bI2){ (_bI2)?this._bo3("drop"): this._bO3("drop"); return this ; } ,disableEdit:function (_bI2){ (_bI2)?this._bo3("edit"): this._bO3("edit"); return this ; } ,_bo3:function (_bl3){var _bi3=this.getTree(); var _bI3=_bi3._bo4(); var _bO4=_bI3[_bl3+"DisableIds"]; if (_bO4.join(" ").indexOf(this._ba)<0)_bO4.push(this._ba); _bi3._bl4(_bI3); } ,_bO3:function (_bl3){var _bi3=this.getTree(); var _bI3=_bi3._bo4(); var _bO4=_bI3[_bl3+"DisableIds"]; for (var i in _bO4)if (typeof _bO4[i]!="function")if (_bO4[i]==this._ba){_bO4.splice(i,1); break; }_bi3._bl4(_bI3); } ,getData:function (_bF){if (_bZ())return this ; var _bi4=_bU(_bA(this._ba)); var _bI4=null; for (var i=0; i<_bi4.childNodes.length; i++)if (_bi4.childNodes[i].nodeName=="INPUT")if (_bi4.childNodes[i].type=="hidden")_bI4=_bi4.childNodes[i]; if (_bO(_bI4)){var _bo5=eval("__="+_bI4.value); var _bi0=_bo5["data"][_bF]; return (_bO(_bi0)?decodeURIComponent(_bi0): ""); }else {return ""; }} ,addData:function (_bF,_bi0){var _bi4=_bU(_bA(this._ba)); var _bI4=null; var _bo5= { "url": "","data":{}} ; for (var i=0; i<_bi4.childNodes.length; i++)if (_bi4.childNodes[i].nodeName=="INPUT")if (_bi4.childNodes[i].type=="hidden")_bI4=_bi4.childNodes[i]; if (_bO(_bI4)){var _bo5=eval("__="+_bI4.value); }else {_bI4=_bY("input",_bi4); _bI4.type="hidden"; }_bo5["data"][_bF]=_bi0; _bI4.value=_bJ(_bo5); } ,select:function (){var _bi4=_bU(_bA(this._ba)); if (_bS(_bi4).indexOf("Selected")<0){if (!this.getTree()._bO5("OnBeforeSelect", { "NodeId": this._ba } ))return; _bQ(_bi4,"ktvSelected"); var _bi3=this.getTree(); var _bl5=_bi3._bo4(); if (!_bO(_bl5.selectedIds))_bl5.selectedIds=new Array(); _bl5.selectedIds.push(this._ba); _bi3._bl4(_bl5); this.getTree()._bO5("OnSelect", { "NodeId": this._ba } ); }return this ; } ,unselect:function (){var _bi4=_bU(_bA(this._ba)); if (_bZ())return this ; if (_bS(_bi4).indexOf("Selected")>0){if (!this.getTree()._bO5("OnBeforeUnselect", { "NodeId": this._ba } ))return; _bp(_bi4,"ktvSelected"); var _bi3=this.getTree(); var _bl5=_bi3._bo4(); for (var i=0; i<_bl5.selectedIds.length; i++)if (_bl5.selectedIds[i]==this._ba){_bl5.selectedIds.splice(i,1); break; }_bi3._bl4(_bl5); this.getTree()._bO5("OnUnselect", { "NodeId": this._ba } ); }return this ; } ,expand:function (){var _bi5=_bA(this._ba); var _bI5=_bu(_bU(_bi5)); if (_bO(_bI5)){if (!this.getTree()._bO5("OnBeforeExpand", { "NodeId": this._ba } ))return; var _bo6=this._bo2("Plus"); if (_bO(_bo6))_bN("Plus","Minus",_bo6); _bl(_bI5,1); if (this.getTree()._bO6){var _bl6=new Array(); var _bi6=this._ba; while (_bi6.indexOf(".root")<0){_bl6.push(_bi6); _bi6=(new _bi1(_bi6)).getParentId(); }_bl6.push(_bi6); this.getTree()._bI6(_bl6); } this.getTree()._bo7(this._ba,1); this.getTree()._bO5("OnExpand", { "NodeId": this._ba } ); }else {var _bi4=_bU(_bA(this._ba)); var _bI4=null; for (var i=0; i<_bi4.childNodes.length; i++)if (_bi4.childNodes[i].nodeName=="INPUT")_bI4=_bi4.childNodes[i]; if (_bO(_bI4)){var _bo5=eval("__="+_bI4.value); if (_bO(_bo5.url) && _bo5.url!=""){_bo5.url=decodeURIComponent(_bo5.url); if (!this.getTree()._bO5("OnBeforeExpand", { "NodeId": this._ba } ))return; this.loadSubTree(_bo5.url); _bo5.loading=1; _bI4.value=_bJ(_bo5); }}}return this ; } ,collapse:function (){var _bi5=_bA(this._ba); var _bI5=_bu(_bU(_bi5)); if (_bZ())return this ; if (_bO(_bI5)){if (!this.getTree()._bO5("OnBeforeCollapse", { "NodeId": this._ba } ))return; var _bO7=this._bo2("Minus"); if (_bO(_bO7))_bN("Minus","Plus",_bO7); _bl(_bI5,0); this.getTree()._bo7(this._ba,0); this.getTree()._bO5("OnCollapse", { "NodeId": this._ba } ); }return this ; } ,getChildIds:function (){var _bI5=_bu(_bU(_bA(this._ba))); var _bl7=new Array(); if (_bO(_bI5)){for (var i=0; i<_bI5.childNodes.length; i++)if (_bI5.childNodes[i].nodeName=="LI")_bl7.push(_bI5.childNodes[i].id); }return _bl7; } ,getParentId:function (){return _bE(_bA(this._ba),2).id; } ,getTree:function (){var _bi6=this._ba; while (_bi6.indexOf(".root")<0){_bi6=(new _bi1(_bi6)).getParentId(); }return eval(_bi6.replace(".root","")); } ,moveToAbove:function (_bi7){if ((new _bi1(_bi7).getParentId()==this.getParentId())){var _bi5=_bA(this._ba); var _bI7=_bA(_bi7); _bE(_bi5).insertBefore(_bi5,_bI7); (new _bi1(this.getParentId()))._bo8(); }return this ; } ,moveToBelow:function (_bi7){if ((new _bi1(_bi7).getParentId()==this.getParentId())){var _bi5=_bA(this._ba); var _bI7=_bA(_bi7); var _bI5=_bE(_bi5); if (_bI5.lastChild==_bI7)_bI5.appendChild(_bi5); else _bI5.insertBefore(_bi5,_bu(_bI7)); (new _bi1(this.getParentId()))._bo8(); }return this ; } ,attachTo:function (_bi7){var _bO8=_bi7; var _bl8= false; while (_bO8.indexOf(".root")<0){_bO8=(new _bi1(_bO8)).getParentId(); if (_bO8==this._ba)_bl8= true; }if (_bl8){return false; }var _bi6=this.getParentId(); if (_bi6==_bi7){return false; }var _bi5=_bA(_bi7); var _bI5=_bu(_bU(_bi5)); if (!_bO(_bI5)){_bI5=_bY("ul",_bi5); _bR(_bI5,"ktvUL"); (new _bi1(_bi7)).getTree()._bo7(_bi7,1); }_bI5.appendChild(_bA(this._ba)); (new _bi1(_bi7))._bo8(); (new _bi1(_bi6))._bo8(); return true; } ,loadSubTree:function (_bi8){if (typeof koolajax!="undefined" && _bO(koolajax)){if (_bZ())return this ; var _bI8=this._bo2("Loading"); if (!_bO(_bI8)){if (!this.getTree()._bO5("OnBeforeSubTreeLoad", { "NodeId": this._ba,"Url":_bi8 } ))return; var _bi4=_bU(_bA(this._ba)); _bI8=_bY("span",_bi4); _bR(_bI8,"ktvLoading"); koolajax.load(_bi8,eval("__=function(ct){"+this.getTree()._ba+".OSTLD('"+this._ba+"',ct);}")); }}return this ; } ,_bo9:function (_bO9){var _bi5=_bA(this._ba); var _bi3=this.getTree(); var _bI5=_bu(_bU(_bi5)); if (_bO(_bI5)){ this.getTree()._bt(_bI5); }else {_bI5=_bY("ul",_bi5); _bR(_bI5,"ktvUL"); }_bI5.innerHTML+=_bO9; var _bI8=this._bo2("Loading"); if (_bO(_bI8))_bU(_bi5).removeChild(_bI8); _bi3._bz(_bI5); this._bo8(); _bi3._bO5("OnSubTreeLoad", { "NodeId": this._ba } ); var _bi4=_bU(_bi5); var _bI4=null; for (var i=0; i<_bi4.childNodes.length; i++)if (_bi4.childNodes[i].nodeName=="INPUT")_bI4=_bi4.childNodes[i]; if (_bO(_bI4)){var _bo5=eval("__="+_bI4.value); if (_bO(_bo5.loading) && _bo5.loading==1){ delete _bo5.loading; _bI4.value=_bJ(_bo5); var _bl9=this._bo2("PM"); _bN("Plus","Minus",_bl9); _bi3._bo7(this._ba,1); _bi3._bO5("OnExpand", { "NodeId": this._ba } ); _bi3.rECSFC(); }}} ,addChildNode:function (_bi7,_bO2,_bl2){var _bi9=_bA(this._ba); var _bI5=_bu(_bU(_bi9)); if (!_bO(_bI5)){_bI5=_bY("ul",_bi9); _bR(_bI5,"ktvUL");}var _bi5=_bY("li",_bI5); _bi5.id=_bi7; _bR(_bi5,"ktvLI"); var _bI9=_bY("div",_bi5); _bR(_bI9,"ktvBot"); if (_bO(_bl2)){var _boa=_bY("img",_bI9); _bR(_boa,"ktvImage"); _boa.src=_bl2; _boa.alt=""; }_bO2=(_bO(_bO2))?_bO2: ""; var _bOa=_bY("span",_bI9); _bR(_bOa,"ktvText"); _bOa.innerHTML=_bO2; _bz(_bOa,"click",_bla, false); _bz(_bOa,"mouseover",_bia, false); _bz(_bOa,"mouseout",_bIa, false); _bz(_bOa,"mousedown",_bob, false); _bz(_bOa,"mouseup",_bOb, false); this._bo8(); return this ; } ,_blb:function (_bi7){ (new _bi1(_bi7)).unselect(); var _bI7=_bA(_bi7); var _bI5=_bE(_bI7); this.getTree()._bt(_bI7); _bI5.removeChild(_bI7); this._bo8(); } ,removeAllChildren:function (){var _bi5=_bA(this._ba); var _bI5=_bu(_bU(_bi5)); if (_bO(_bI5)){ this.getTree()._bt(_bI5); _bi5.removeChild(_bI5); this._bo8(); }} ,_bo8:function (_bib){var _bO4=this.getChildIds(); for (var i=0; i<_bO4.length; i++){var _bi5=_bA(_bO4[i]); try {var _bi4=_bU(_bi5); }catch (_bIb){}_bp(_bi5,"ktvFirst"); _bp(_bi5,"ktvLast"); _bN("ktvTop","ktvMid",_bi4); _bN("ktvBot","ktvMid",_bi4); if (i==0){_bQ(_bi5,"ktvFirst"); _bN("ktvMid","ktvTop",_bi4); }if (i==_bO4.length-1){_bQ(_bi5,"ktvLast"); _bN("ktvMid","ktvBot",_bi4); _bN("ktvTop","ktvBot",_bi4); }}var _boc=this._bo2("PM"); if (_bO4.length==0){if (_bO(_boc)){_bt(_boc,"click",_bOc, false); _bE(_boc).removeChild(_boc); }var _bi5=_bA(this._ba); var _bI5=_bu(_bU(_bi5)); if (_bO(_bI5))_bi5.removeChild(_bI5); }else {if (!_bO(_boc)){var _bi4=_bU(_bA(this._ba)); var _bI5=_bu(_bi4); _boc=_bY("span",_bi4); _bi4.insertBefore(_boc,_bU(_bi4)); _bR(_boc,"ktvPM ktv"+(_bk(_bI5)?"Minus": "Plus")); _bz(_boc,"click",_bOc, false); }}} ,isExpanded:function (){return _bO(this._bo2("Minus")); } ,isSelected:function (){var _bi4=_bU(_bA(this._ba)); return (_bS(_bi4).indexOf("Selected")>0);} ,startEdit:function (_bi0){if (_bZ())return this ; if (!this.getTree()._bO5("OnBeforeStartEdit", { "NodeId": this._ba } ))return; var _bO2=this._bo2("Text"); _bi4=_bU(_bA(this._ba)); _bl(_bO2,0); var _bI4=_bY("input",_bi4); _bz(_bI4,"blur",_blc, false); _bz(_bI4,"keypress",_bic, false); _bR(_bI4,"ktvEdit"); _bI4.value=_bO(_bi0)?_bi0:_bO2.innerHTML; _bI4.focus(); _bI4.select(); this.getTree()._bO5("OnStartEdit", { "NodeId": this._ba } ); return this ; } ,endEdit:function (_bIc){if (!this.getTree()._bO5("OnBeforeEndEdit", { "NodeId": this._ba } ))return; var _bI4=this._bo2("Edit"); var _bO2=this._bo2("Text"); _bt(_bI4,"blur",_blc, false); _bt(_bI4,"keypress",_bic, false); if (!_bO(_bIc))_bIc= true; if (_bIc)_bO2.innerHTML=_bI4.value; _bO2.style.display=""; _bE(_bI4).removeChild(_bI4); this.getTree()._bO5("OnEndEdit", { "NodeId": this._ba } ); return this ; } ,_bo2:function (_bq){var _bi5=_bA(this._ba); var _bod=_bL(_bU(_bi5),"ktv"+_bq); return _bod; } ,_bOd:function (_bg){var _bi3=this.getTree(); if (_bi3._bld){var _bid=this.isSelected(); var _bl5=_bi3._bo4(); var _bId=" "+_bl5.selectDisableIds.join(" "); if (_bId.indexOf(" "+this._ba)<0){if (!_bh || !_bi3._boe){_bi3.unselectAll(); } this.select(); }if (_bid && _bi3._bOe){var _bl5=_bi3._bo4(); var _ble=" "+_bl5.editDisableIds.join(" "); if (_ble.indexOf(" "+this._ba)<0){ this.startEdit(); }}}} ,_bie:function (_bg,_bIc){ this.endEdit(_bIc); } ,_bIe:function (_bg){if (this.isExpanded())this.collapse(); else this.expand(); } ,_bof:function (_bg){var _bi4=_bU(_bA(this._ba)); _bQ(_bi4,"ktvOver"); if (_bOf && this._bIf()){_bQ(_bi4,"ktvDrop"); }} ,_bog:function (_bg){var _bi4=_bU(_bA(this._ba)); _bp(_bi4,"ktvOver"); if (_bOf && this._bIf()){_bp(_bi4,"ktvDrop"); }} ,_bIf:function (){if (_bZ())return false; var _bi3=this.getTree(); var _bO4=" "+_bi3._bo4().dropDisableIds.join(" "); return (_bi3._bOg && _bO4.indexOf(" "+this._ba)<0); } ,_blg:function (_bg){if (_bOf && this._bIf()){var _bi4=_bU(_bA(this._ba)); _bp(_bi4,"ktvDrop"); if (!this.getTree()._bO5("OnBeforeDrop", { "NodeId": this._ba,"DragNodeId":_big } ))return; var _bIg= false; if (this._ba!=_big){_bIg=(new _bi1(_big)).attachTo(this._ba); } this.getTree()._bO5("OnDrop", { "NodeId": this._ba,"DragNodeId":_big,"Succeed":_bIg } ); }} ,_boh:function (){if (_bZ())return false; var _bi3=this.getTree(); var _bO4=" "+_bi3._bo4().dragDisableIds.join(" "); return (_bi3._bOg && _bO4.indexOf(" "+this._ba)<0); } ,_bOh:function (_bg){var _bi4=_bU(_bA(this._ba)); var _bI9=_bi4.cloneNode( true); var _blh=_bL(_bI9,"ktvPM"); if (_bO(_blh))_bI9.removeChild(_blh); var _bih=_bY("div",document.body); _bih.id="__"+this._ba; var _bIh=_bS(_bA(this.getTree()._ba)); _bR(_bih,_bIh);_bQ(_bI9,"ktvDrag"); _bih.style.position="absolute"; _bih.appendChild(_bI9); var _boi=_bD(_bg); _bih.style.top=_boi._bc+"px"; _bih.style.left=(_boi._bC+5)+"px"; this.getTree()._bO5("OnDrag", { "NodeId": this._ba } ); } ,_bOi:function (_bg){var _bih=_bA("__"+this._ba); var _boi=_bD(_bg); _bih.style.top=_boi._bc+"px"; _bih.style.left=(_boi._bC+5)+"px"; } ,_bli:function (_bg){var _bih=_bA("__"+this._ba); document.body.removeChild(_bih); }};function KoolTreeView(_ba,_bO6,_bld,_boe,_bOg,_bOe,_bii,_bIi,_boj){ this._ba=_ba; this._boe=_boe; this._bld=_bld; this._bOg=_bOg; this._bOe=_bOe; this._bO6=_bO6; this._bii=_bii.toLowerCase(); this._bIi=_bIi; this._bOj=new Array(); _bA(_ba+".clientState").value=_boj; this._bb(); }KoolTreeView.prototype= {getSelectedIds:function (){var _boj=this._bo4(); return (_bO(_boj.selectedIds))?_boj.selectedIds: (new Array()); } ,unselectAll:function (){var _bO4=this.getSelectedIds(); for (var i=0; i<_bO4.length; i++)(new _bi1(_bO4[i])).unselect(); return this ; } ,removeNode:function (_bi7){var _blj=this.getNode(this.getNode(_bi7).getParentId()); _blj._blb(_bi7); return this ; } ,getNode:function (_bi7){return new _bi1(_bi7); } ,expandAll:function (){if (_bZ())return this ; var _bij=_bA(this._ba+".root"); var _bIj=_bij.getElementsByTagName("ul"); for (var i=0; i<_bIj.length; i++)if (_bS(_bIj[i]).indexOf("ktvUL")>-1){_bl(_bIj[i],1); var _bi4=_bU(_bE(_bIj[i])); var _bl9=_bL(_bi4,"ktvPM"); _bN("Plus","Minus",_bl9); }return this ; } ,collapseAll:function (){if (_bZ())return this ; this._bI6(new Array()); return this ; } ,_bI6:function (_bl6){if (_bZ())return this ; var _bok=""; if (_bO(_bl6))_bok=_bl6.join(" "); var _bij=_bA(this._ba+".root"); var _bIj=_bij.getElementsByTagName("ul"); for (var i=0; i<_bIj.length; i++){var _bi7=_bE(_bIj[i]).id; if (_bS(_bIj[i]).indexOf("ktvUL")>-1 && _bok.indexOf(_bi7)<0){_bl(_bIj[i],0); var _bi4=_bU(_bE(_bIj[i])); var _bl9=_bL(_bi4,"ktvPM"); _bN("Minus","Plus",_bl9); }}} ,_bo4:function (){var _bOk=_bA(this._ba+".clientState"); var _boj=eval("__="+_bOk.value); return _boj; } ,_bl4:function (_boj){var _bOk=_bA(this._ba+".clientState"); _bOk.value=_bJ(_boj); } ,OSTLD:function (_bi7,_bO9){ (new _bi1(_bi7))._bo9(_bO9); } ,_bz:function (_blk){var _bik=_blk.getElementsByTagName("li"); for (var i=0; i<_bik.length; i++)if (_bS(_bik[i]).indexOf("ktvLI")!=-1){_bi4=_bU(_bik[i]); _boc=_bL(_bi4,"ktvPM"); if (_bO(_boc))_bz(_boc,"click",_bOc, false); _bOa=_bL(_bi4,"ktvText"); _bz(_bOa,"click",_bla, false); _bz(_bOa,"mouseover",_bia, false); _bz(_bOa,"mouseout",_bIa, false); _bz(_bOa,"mousedown",_bob, false); _bz(_bOa,"mouseup",_bOb, false); }} ,_bt:function (_blk){var _bik=_blk.getElementsByTagName("li"); for (var i=0; i<_bik.length; i++)if (_bS(_bik[i]).indexOf("ktvLI")!=-1){_bi4=_bU(_bik[i]); _boc=_bL(_bi4,"ktvPM"); if (_bO(_boc))_bt(_boc,"click",_bOc, false); _bOa=_bL(_bi4,"ktvText"); _bt(_bOa,"click",_bla, false); _bt(_bOa,"mouseover",_bia, false); _bt(_bOa,"mouseout",_bIa, false); _bt(_bOa,"mousedown",_bob, false); _bt(_bOa,"mouseup",_bOb, false); }} ,_bb:function (){var _bi3=document.getElementById(this._ba); _bi3.onselectstart=_bIk; this._bz(_bi3); setTimeout(this._ba+".rECSFC()",0); } ,rECSFC:function (){var _bol=""; switch (this._bii){case "onpage":var _bll=window.location.href.indexOf("?"); _bol=(_bll<0)?window.location.href:window.location.href.substring(0,_bll)+"_"+this._ba+"_opcl"; break; case "crosspage":_bol=this._ba+"_opcl"; break; case "none":default:return; break; }var _bO2=_bB[_bol]; _bO2=_bO(_bO2)?_bO2: "{}"; var _bil=eval("__="+_bO2); var _bik=_bA(this._ba).getElementsByTagName("li"); for (var i=0; i<_bik.length; i++)if (_bS(_bik[i]).indexOf("ktvLI")!=-1){if (_bO(_bil[_bik[i].id])){var _bIl=this.getNode(_bik[i].id); if (_bil[_bIl._ba]==1 && !_bIl.isExpanded()){_bIl.expand(); }else if (_bil[_bIl._ba]==0 && _bIl.isExpanded()){_bIl.collapse(); }}}} ,_bo7:function (_bi7,_bom){var _bol=""; switch (this._bii){case "onpage":var _bll=window.location.href.indexOf("?"); _bol=((_bll<0)?window.location.href:window.location.href.substring(0,_bll))+"_"+this._ba+"_opcl"; break; case "crosspage":_bol=this._ba+"_opcl"; break; case "none":default:return; break; }var _bO2=_bB[_bol]; _bO2=_bO(_bO2)?_bO2: "{}"; var _bil=eval("__="+_bO2); _bil[_bi7]=_bom; _bB._bl0(_bol,_bJ(_bil),this._bIi); } ,registerEvent:function (_bH,_bOm){if (_bZ())return this ; this._bOj[_bH]=_bOm; } ,_bO5:function (_bH,_bIm){if (_bZ())return true; return (_bO(this._bOj[_bH]))?this._bOj[_bH](this,_bIm): true; }};function _bOc(_bg){ (new _bi1(_bE(this,2).id))._bIe(_bg); }function _bla(_bg){ (new _bi1(_bE(this,2).id))._bOd(_bg); }function _bia(_bg){ (new _bi1(_bE(this,2).id))._bof(_bg); }function _bIa(_bg){ (new _bi1(_bE(this,2).id))._bog(_bg); }function _blc(_bg){ (new _bi1(_bE(this,2).id))._bie(_bg); }function _bic(_bg){var _bF=(window.event)?event.keyCode:_bg.keyCode; if (_bF==13 || _bF==27){ (new _bi1(_bE(this,2).id))._bie(_bg,(_bF==13)); if (_bF==13){if (_bg.stopPropagation){_bg.stopPropagation(); _bg.preventDefault(); }else {event.cancelBubble= true; event.returnValue= false; }return false; }}}var _bon=0,_bOn,_bOf,_big; var _bIn= true; function _bob(_bg){if ((new _bi1(_bE(this,2).id))._boh(_bg)){if (_bg.preventDefault)_bg.preventDefault(); _bIn= false; _big=_bE(this,2).id; _bOn=_bD(_bg); _bon=1; _bOf= false; _bz(document,"mousemove",_boo, false); _bz(document,"mouseup",_bOo, false); if (_bg.stopPropagation!=null)_bg.stopPropagation(); else event.cancelBubble= true; }}function _boo(_bg){if (_bon==1 || _bon==2){if (_bOf){ (new _bi1(_big))._bOi(_bg); }else {var _boi=_bD(_bg); if (Math.abs(_boi._bC-_bOn._bC)>10 || Math.abs(_boi._bc-_bOn._bc)>10){_bOf= true; (new _bi1(_big))._bOh(_bg); }}}_bon=2; }function _bOo(_bg){if (_bon==1){}if (_bon==2){if (_bOf){ (new _bi1(_big))._bli(_bg); _bOf= false; }}_bt(document,"mousemove",_boo, false); _bt(document,"mouseup",_bOo, false); _bIn= true; }function _bOb(_bg){ (new _bi1(_bE(this,2).id))._blg(_bg); }function _bIk(){if (_bh || !_bIn)return false; }if (typeof(__KTVInits)!="undefined" && _bO(__KTVInits)){for (var i=0; i<__KTVInits.length; i++){__KTVInits[i](); }} <?php _bO8(); _bl9(); } if (!class_exists("\113\157olT\162ee\126ie\167",FALSE)) { function _bOb($_blc) { return _bl5("\053","\040",urlencode($_blc)); } class treenode { var $id; var $text; var $image; var $_bOc; var $expand=FALSE; var $subTreeUrl; var $visible=TRUE; var $showPlusMinus=TRUE; var $_bld; var $_bOd; function __construct($_ble,$_bO3="",$_bOe=FALSE,$_blf="",$_bOf="") { $this->id =$_ble; $this->text =$_bO3; $this->image =$_blf; $this->expand =$_bOe; $this->subTreeUrl =$_bOf; $this->_bOc =array(); $this->_bld =array(); } function addchild($_blg) { $_blg->_bOd =$this; array_push($this->_bOc ,$_blg); } function adddata($_bOg,$_blh) { $this->_bld[$_bOg]=$_blh; } } class kooltreeview { var $_bl0="\063\0560.\060.0"; var $id; var $_bOh; var $_bOi; var $_blj; var $width=""; var $height=""; var $overflow=""; var $styleFolder; var $imageFolder; var $selectedIds; var $selectEnable=TRUE; var $selectDisableIds; var $multipleSelectEnable=FALSE; var $DragAndDropEnable=FALSE; var $dragDisableIds; var $dropDisableIds; var $EditNodeEnable=FALSE; var $editDisableIds; var $isSubTree=FALSE; var $singleExpand=FALSE; var $keepState="no\156e"; var $keepStateHours=030; var $showLines=FALSE; var $scriptFolder=""; function __construct($_ble) { $this->id =$_ble; $this->_bOh =new treenode("roo\164"); $this->_blj =array(); $this->_blj["ro\157t"]=$this->_bOh; } function loadxml($_bOj) { if (gettype($_bOj) == "s\164ri\156g") { $_bO1=new domdocument(); $_bO1->loadxml($_bOj); $_bOj=$_bO1->documentElement; } $id=$_bOj->getattribute("\151d"); if ($id != "") $this->id =$id; $this->width =$_bOj->getattribute("w\151dth"); $this->height =$_bOj->getattribute("\150eig\150t"); $this->overflow =$_bOj->getattribute("ove\162flo\167"); $this->styleFolder =$_bOj->getattribute("\163\164yl\145Fo\154de\162"); $this->imageFolder =$_bOj->getattribute("i\155ag\145Fol\144er"); $this->selectedIds =$_bOj->getattribute("\163e\154ect\145dI\144s"); $this->selectDisableIds =$_bOj->getattribute("\163el\145ctD\151sa\142leI\144s"); $this->dragDisableIds =$_bOj->getattribute("\144r\141gDi\163ab\154eI\144s"); $this->dropDisableIds =$_bOj->getattribute("dr\157pD\151sab\154eI\144s"); $this->editDisableIds =$_bOj->getattribute("e\144itD\151\163a\142leI\144s"); $_blk=$_bOk->getattribute("sc\162ip\164Fol\144er"); if ($_blk != "") $this->scriptFolder =$_blk; $_bll=$_bOj->getattribute("\163\145lec\164En\141bl\145"); $this->selectEnable =($_bll == "") ? FALSE: (($_bll == "\164\162ue") ? TRUE: FALSE); $_bll=$_bOj->getattribute("\155ul\164ipl\145Se\154ect\105na\142l\145"); $this->multipleSelectEnable =($_bll == "") ? FALSE: (($_bll == "t\162ue") ? TRUE: FALSE); $_bll=$_bOj->getattribute("\104\162agA\156dD\162op\105nab\154e"); $this->DragAndDropEnable =($_bll == "") ? FALSE: (($_bll == "\164ru\145") ? TRUE: FALSE); $_bll=$_bOj->getattribute("Ed\151tN\157deE\156a\142le"); $this->EditNodeEnable =($_bll == "") ? FALSE: (($_bll == "t\162ue") ? TRUE: FALSE); $_bll=$_bOj->getattribute("\151sS\165bTr\145e"); $this->isSubTree =($_bll == "") ? FALSE: (($_bll == "tr\165e") ? TRUE: FALSE); $_bll=$_bOj->getattribute("\163\150ow\117nEx\160an\144"); $this->showOnExpand =($_bll == "") ? FALSE: (($_bll == "tr\165e") ? TRUE: FALSE); $_bll=$_bOj->getattribute("\153ee\160Sta\164e"); if ($_bll != "") $this->keepState =$_bll; $_bll=$_bOj->getattribute("ke\145pSt\141te\110ou\162s"); if ($_bll != "") $this->keepStateHours =intval($_bll); $_bll=$_bOj->getattribute("\163in\147leE\170pa\156d"); $this->singleExpand =($_bll == "") ? FALSE: (($_bll == "\164r\165e") ? TRUE: FALSE); foreach ($_bOj->childNodes as $_blm) { switch (strtolower($_blm->nodeName)) { case "r\157ot\156ode": $this->_bOh->text =$_blm->getattribute("te\170t"); $this->_bOh->image =$_blm->getattribute("i\155ag\145"); $this->_bOh->subTreeUrl =$_blm->getattribute("\163ub\124ree\125r\154"); $_bll=$_blm->getattribute("exp\141nd"); $this->_bOh->expand =($_bll == "") ? FALSE: (($_bll == "\164r\165e") ? TRUE: FALSE); $_bll=$_blm->getattribute("v\151s\151ble"); $this->_bOh->visible =($_bll == "") ? TRUE: (($_bll == "t\162ue") ? TRUE: FALSE); $_bll=$_blm->getattribute("\163ho\167Plu\163Mi\156us"); $this->_bOh->showPlusMinus =($_bll == "") ? TRUE: (($_bll == "\164ru\145") ? TRUE: FALSE); $this->_bOm($this->_bOh ,$_blm); break; case "\164\145mp\154ate\163": break; } } } function _bOm($_bln,$_bOn) { foreach ($_bOn->childNodes as $_blo) { if ($_blo->nodeName == "nod\145") { $id=$_blo->getattribute("\151d"); $_bOo=new treenode($id); $_bOo->text =$_blo->getattribute("te\170t"); $_bOo->image =$_blo->getattribute("\151m\141ge"); $_bOo->subTreeUrl =$_blo->getattribute("s\165b\124ree\125rl"); $_bll=$_blo->getattribute("ex\160an\144"); $_bOo->expand =($_bll == "") ? FALSE: (($_bll == "\164r\165e") ? TRUE: FALSE); $this->_bOm($_bOo,$_blo); $_bln->addchild($_bOo); } } } function render() { $_blp=""; if ($this->isSubTree) { $this->_bOp(); for ($_blb=0; $_blb<sizeof($this->_bOh->_bOc); $_blb ++) $_blp.=$this->_blq($this->_bOh->_bOc[$_blb]); } else { $_blp="\n\074\041-\055Ko\157lT\162ee\126ie\167 v\145rs\151on\040".$this->_bl0." \055 w\167w.k\157ol\160hp\056ne\164 -\055>\n"; $_blp.=$this->registercss(); $_blp.=$this->rendertree(); $_bOq= isset ($_POST["\137_k\157ola\152ax"]) || isset ($_GET["\137_k\157ola\152ax"]); $_blp.=($_bOq) ? "": $this->registerscript(); $_blp.="<\163cr\151pt \164yp\145='t\145x\164/j\141va\163cr\151pt\047>"; $_blp.=$this->startupscript(); $_blp.="\074/\163cri\160t>"; } return $_blp; } function add($_blr,$_ble,$_bO3="",$_bOe=FALSE,$_blf="",$_bOf="") { $_bls=new treenode($_ble); $_bls->text =$_bO3; $_bls->expand =$_bOe; $_bls->image =$_blf; $_bls->subTreeUrl =$_bOf; $this->_blj[$_blr]->addchild($_bls); $this->_blj[$_ble]=$_bls; return $_bls; } function getrootnode() { return $this->_bOh; } function getnode($_bOs) { return $this->_blj[$_bOs]; } function _bOp() { $this->styleFolder =_bl5("\134","/",$this->styleFolder); $_blt=trim($this->styleFolder ,"/"); $_bOt=strrpos($_blt,"\057"); $this->_bOi =substr($_blt,($_bOt ? $_bOt: -1)+1); } function registercss() { $this->_bOp(); $_blu="\074s\143rip\164 t\171pe\075't\145x\164/j\141va\163cr\151pt\047>\151f\040(\144o\143um\145n\164.g\145t\105l\145me\156t\102y\111d(\047\137_\173s\164yl\145}\113T\126')\075\075n\165l\154)\173va\162 \137h\145a\144 \075 \144o\143u\155en\164.\147e\164E\154e\155e\156t\163\102yT\141\147N\141m\145(\047h\145a\144\047)\1330\135;\166a\162 \137\154i\156k\040=\040\144o\143u\155e\156\164.\143r\145a\164\145E\154e\155\145n\164(\047\154i\156k\047\051\073 \137\154i\156k\056\151d\040\075\040\047_\137\173s\164\171l\145\175K\124\126\047\073\137l\151n\153\056\162e\154\075'\163\164y\154\145s\150\145e\164\047;\040\137\154i\156\153\056h\162\145\146=\047\173\163t\171\154\145p\141\164\150}\057\173\163t\171\154\145}\057\173\163\164y\154\145\175.\143\163\163'\073\137\150\145a\144\056\141\160\160e\156\144\103h\151\154\144\050_l\151n\153\051\073\175\074\057sc\162\151p\164\076"; $_bOu=_bl5("\173\163tyl\145}",$this->_bOi ,$_blu); $_bOu=_bl5("\173st\171lep\141t\150}",$this->_blv(),$_bOu); return $_bOu; } function rendertree() { $this->_bOp(); $_bOv="\074\151npu\164\040\164yp\145='\150id\144en\047 \151d=\047\173\151\144}.\143l\151en\164S\164at\145'\040n\141me\075'\173i\144}.\143l\151e\156t\123t\141te\047 \057>"; $_bOa=_bl5("\173\151d\175",$this->id ,_bO9()); $_bOa=_bl5("\173s\164yle\175",$this->_bOi ,$_bOa); $_bOa=_bl5("\173n\157pad\144in\147}",(!$this->_bOh->visible || !$this->_bOh->showPlusMinus) ? "\153tv\116oPa\144di\156g": "",$_bOa); $_bOa=_bl5("\173s\165bno\144es\175",$this->_blq($this->_bOh),$_bOa); $_bOa=_bl5("\173\154in\145s}",(($this->showLines) ? "k\164vL\151nes": ""),$_bOa); $_blw=_bl5("\173\151d}",$this->id ,$_bOv); if (_bla($_bOa)) { $_bOa=_bl5("\173\143\154ien\164st\141te\175",$_blw,$_bOa); } $_bOa=_bl5("\173w\151dth\175",(($this->width != "") ? "w\151dt\150:".$this->width."\073": ""),$_bOa); $_bOa=_bl5("\173\150eig\150t}",(($this->height != "") ? "h\145igh\164:".$this->height."\073": ""),$_bOa); $_bOa=_bl5("\173\157ver\146lo\167}",(($this->overflow != "") ? "\157ve\162flo\167:".$this->overflow.";": ""),$_bOa); $_bOa=_bl5("\173ve\162sio\156}",$this->_bl0 ,$_bOa); return $_bOa; } function _blq($_bln) { $_bOw="\074\165l \143la\163s=\047kt\166U\114' \163ty\154e=\047di\163p\154ay\072\173di\163pl\141y}\047>\173s\165bn\157d\145s\175</\165l\076"; $_blx="\074l\151 id\075'\173no\144eid\175'\040cl\141ss\075'\173cl\141s\163}'\076\173no\144ec\157n\164en\164}\173su\142n\157de\163}\074/\154i\076"; $_bOx="<d\151v \143la\163s=\047\173\143l\141ss\175'>\173pl\165s\155in\165s\175\173\151m\141g\145}\173te\170t\175\173\156o\144e\144at\141}\074\057d\151v>"; $_bly="\074s\160an \143l\141ss=\047k\164vP\115 k\164v\173\160\154us\155i\156u\163}'\076 \074/\163pa\156>"; $_bOy="<im\147 s\162c='\173im\141ge\175' \143la\163s=\047k\164vI\155ag\145'\040a\154t\075'\047/>"; $_blz="<sp\141n c\154as\163='\153tv\124ex\164'>\173te\170t}\074/\163pa\156>"; $_bOz="\074i\156put\040i\144='\173nod\145id\175_d\141ta\047 \164yp\145=\047h\151dd\145n\047 \166al\165e\075'\173va\154u\145}'\057>"; $_bl10=$_blx; $_bO10=$_bOx; $_bll=_bl5("\173\164ex\164}",$_bln->text ,$_blz); $_bO10=_bl5("\173te\170t}",$_bll,$_bO10); $_bl11=""; if ($_bln->image != "") { $_bll=_bl5("\173i\155age\175",(($this->imageFolder != "") ? $this->imageFolder."\057": "").$_bln->image ,$_bOy); $_bO10=_bl5("\173ima\147e}",$_bll,$_bO10); } else { $_bO10=_bl5("\173\151mag\145}","",$_bO10); } if (sizeof($_bln->_bOc)>0) { $_bll=_bl5("\173\160l\165smi\156u\163}",($_bln->expand) ? "\115in\165s": "Pl\165s",$_bly); $_bO10=_bl5("\173\160lu\163min\165s}",$_bll,$_bO10); $_bl11=""; for ($_blb=0; $_blb<sizeof($_bln->_bOc); $_blb ++) { $_bl11.=$this->_blq($_bln->_bOc[$_blb]); } $_bl11=_bl5("\173\163ubn\157de\163}",$_bl11,$_bOw); $_bl11=_bl5("\173d\151spl\141y}",($_bln->expand) ? "\142\154ock": "\156o\156e",$_bl11); } else { if ($_bln->subTreeUrl != "") { $_bll=_bl5("\173pl\165sm\151nu\163}","Plus",$_bly); $_bO10=_bl5("\173p\154usm\151nu\163}",$_bll,$_bO10); } else { $_bO10=_bl5("\173plu\163mi\156us}","",$_bO10); } } if ($_bln->subTreeUrl != "" || sizeof($_bln->_bld)>0) { $_bO11=_bOb($_bln->subTreeUrl); $_bl12=array(); foreach ($_bln->_bld as $_bO12 => $_bl13) { $_bl12[$_bO12]=_bOb($_bl13); } $_bld=array("ur\154" => $_bO11,"\144\141ta" => $_bl12); $_bO13=_bl5("\173\156od\145id}",(($_bln === $this->_bOh) ? $this->id."\056": "").$_bln->id ,$_bOz); $_bO13=_bl5("\173\166a\154ue}",json_encode($_bld),$_bO13); $_bO10=_bl5("\173nod\145dat\141}",$_bO13,$_bO10); } else { $_bO10=_bl5("\173nod\145dat\141}","",$_bO10); } $_bl14="k\164vL\111"; if (( isset ($_bln->_bOd->_bOc[0]) && $_bln->_bOd->_bOc[0] === $_bln) || $_bln === $this->_bOh) { $_bl14.="\040\153tv\106ir\163t"; } if (( isset ($_bln->_bOd->_bOc) && isset ($_bln->_bOd->_bOc[sizeof($_bln->_bOd->_bOc)-1]) && $_bln->_bOd->_bOc[sizeof($_bln->_bOd->_bOc)-1] === $_bln) || $_bln === $this->_bOh) { $_bl14.=" k\164vL\141st"; } $_bO14=""; if ($_bln === $this->_bOh) { $_bO14="\153\164vTo\160"; if (!$_bln->visible) $_bO14.="\040\153tv\111nv"; if (!$_bln->showPlusMinus) $_bO14.="\040k\164vNo\120M"; } else { if ($_bln->_bOd->_bOc[0] === $_bln) { $_bO14="\153tv\124op"; } if ($_bln->_bOd->_bOc[sizeof($_bln->_bOd->_bOc)-1] === $_bln) { $_bO14="\153tv\102ot"; } if ($_bO14 == "") { $_bO14="kt\166Mi\144"; } } $_bl15="[".str_replace("\054","]\133",$this->selectedIds)."\135"; if (strpos($_bl15,"[".$_bln->id."\135") !== FALSE) $_bO14.="\040kt\166Se\154ec\164ed"; $_bO10=_bl5("\173cla\163s}",$_bO14,$_bO10); $_bl10=_bl5("\173nod\145id\175",(($_bln === $this->_bOh) ? $this->id.".": "").$_bln->id ,$_bl10); $_bl10=_bl5("\173\143las\163}",$_bl14,$_bl10); $_bl10=_bl5("\173\156o\144eco\156t\145nt}",$_bO10,$_bl10); $_bl10=_bl5("\173\163ubn\157de\163}",$_bl11,$_bl10); return $_bl10; } function registerscript() { $_blu="<sc\162ip\164 ty\160e=\047te\170t\057j\141va\163cr\151pt\047>\151f\050t\171pe\157f \137l\151b\113TV\075=\047u\156de\146i\156e\144'\051\173do\143u\155en\164.\167r\151t\145(u\156e\163c\141pe\050\042%\063C\163c\162i\160t \164y\160e\075'\164e\170t\057j\141v\141\163c\162i\160t\047 \163r\143=\047\173s\162c\175'\0453\105 \045\063C\057\163c\162i\160t\0453\105\042)\051;\137\154i\142K\124V\075\061;\175\074/\163\143r\151p\164\076"; $_bOu=_bl5("\173\163rc}",$this->_bO15()."\077".md5("\152\163"),$_blu); return $_bOu; } function startupscript() { $_blu="v\141r \173id\175; \146un\143ti\157n \173id\175_\151ni\164()\173 \173i\144} \075 \156e\167 K\157o\154T\162ee\126i\145w(\042\173i\144}\042,\173si\156g\154eE\170p\141n\144}\054\173se\154e\143t\105na\142l\145}\054\173mu\154t\151p\154e\123e\154e\143t\105n\141b\154e\175,\173D\162a\147A\156\144D\162o\160E\156a\142l\145}\054\173E\144i\164N\157d\145\105n\141b\154e\175\054'\173k\145\145p\123t\141t\145\175'\054\173k\145e\160S\164\141t\145H\157\165r\163}\054\042\173c\163}\042\051;\175"; $_blu.="if\040(t\171pe\157f(\113oo\154Tr\145eV\151ew\051==\047f\165nc\164i\157n'\051\173\173\151d}\137i\156it\050\051;}"; $_blu.="e\154se\173if(\164yp\145of\050__\113TV\111ni\164s)\075=\047u\156de\146i\156ed\047)\173__\113T\126In\151t\163=n\145w\040A\162ra\171(\051\073}\040__\113T\126I\156i\164s.\160u\163h\050\173\151\144}\137in\151t\051\073\173\162\145g\151s\164er\137s\143r\151p\164}\175"; $_bl16="\151f(\164ype\157f(\137li\142KT\126)=\075'u\156de\146i\156ed\047)\173va\162 \137he\141d \075 \144o\143u\155en\164.\147et\105l\145m\145nt\163B\171T\141gN\141m\145(\047h\145ad\047)\1330\135;\166a\162 \137sc\162i\160t\040=\040d\157c\165m\145n\164.\143r\145a\164e\105l\145m\145n\164(\047s\143r\151p\164'\051\073 \137s\143r\151p\164\056t\171p\145=\047t\145x\164\057j\141v\141s\143\162i\160t\047\073 \137s\143\162i\160t\056\163r\143=\047\173s\162c\175\047;\040\137h\145\141d\056a\160\160e\156d\103\150i\154\144(\137s\143\162\151\160t\051\073_\154\151b\113\124V\075\061;\175"; $_bO16=_bl5("\173\163r\143}",$this->_bO15()."\077".md5("js"),$_bl16); $_bl17="\173'\163ele\143t\145dId\163':\133\173\163e\154ec\164ed\111d\163}]\054'\163e\154ec\164D\151sa\142l\145Id\163'\072[\173se\154e\143t\104i\163ab\154e\111d\163}]\054'\144r\141g\104is\141b\154e\111d\163'\072[\173d\162ag\104i\163a\142l\145I\144s\175]\054\047d\162o\160D\151s\141b\154e\111d\163'\072[\173d\162\157p\104i\163a\142l\145I\144s\175]\054'\145d\151t\104i\163\141b\154e\111d\163'\072\133\173ed\151\164D\151s\141b\154e\111\144s\175]\175"; $_blp=_bl5("\173\151d\175",$this->id ,$_blu); $_bl15=($this->selectedIds != "") ? "'"._bl5(",","',\047",$this->selectedIds)."'": ""; $_blw=_bl5("\173\163e\154ect\145d\111ds\175",$_bl15,$_bl17); $_bl15=($this->selectDisableIds != "") ? "'"._bl5("\054","\047,\047",$this->selectDisableIds)."\047": ""; $_blw=_bl5("\173s\145lec\164Di\163ab\154eId\163}",$_bl15,$_blw); $_bl15=($this->dragDisableIds != "") ? "\047"._bl5(",","\047,\047",$this->dragDisableIds)."'": ""; $_blw=_bl5("\173\144\162agD\151sa\142le\111ds\175",$_bl15,$_blw); $_bl15=($this->dropDisableIds != "") ? "\047"._bl5(",","'\054'",$this->dropDisableIds)."'": ""; $_blw=_bl5("\173\144ro\160Di\163abl\145Id\163}",$_bl15,$_blw); $_bl15=($this->editDisableIds != "") ? "'"._bl5(",","\047,\047",$this->editDisableIds)."'": ""; $_blw=_bl5("\173\145di\164Di\163abl\145Id\163}",$_bl15,$_blw); $_blp=_bl5("\173\163ing\154eE\170pa\156d}",($this->singleExpand) ? "1": "0",$_blp); $_blp=_bl5("\173se\154ect\105na\142le\175",($this->selectEnable) ? "1": "0",$_blp); $_blp=_bl5("\173mul\164ip\154eS\145le\143tE\156ab\154e}",($this->multipleSelectEnable) ? "\061": "0",$_blp); $_blp=_bl5("\173\104rag\101nd\104rop\105na\142le\175",($this->DragAndDropEnable) ? "1": "0",$_blp); $_blp=_bl5("\173\105dit\116od\145En\141ble\175",($this->EditNodeEnable) ? "1": "0",$_blp); $_blp=_bl5("\173\153eep\123ta\164e}",$this->keepState ,$_blp); $_blp=_bl5("\173\153\145epS\164at\145Ho\165rs\175",$this->keepStateHours ,$_blp); $_blp=_bl5("\173\143s}",$_blw,$_blp); $_blp=_bl5("\173\162eg\151st\145r_s\143ri\160t}",$_bO16,$_blp); return $_blp; } function _bO15() { if ($this->scriptFolder == "") { $_bl6=_bl4(); $_bO17=substr(_bl5("\134","/",__FILE__),strlen($_bl6)); return $_bO17; } else { $_bO17=_bl5("\134","/",__FILE__); $_bO17=$this->scriptFolder.substr($_bO17,strrpos($_bO17,"\057")); return $_bO17; } } function _blv() { $_bl18=$this->_bO15(); $_bO18=_bl5(strrchr($_bl18,"/"),"",$_bl18)."/\163ty\154es"; return $_bO18; } } } ?>