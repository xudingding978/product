<?php $_fl0 = "1\0568.0.\060";
if (!class_exists("\113ool\123\143rip\164\151ng", FALSE)) {

    class koolscripting {

        static function start() {
            ob_start();
            return "";
        }

        static function end() {
            $_fO0 = ob_get_clean();
            $_fl1 = "";
            $_fO1 = new domdocument();
            $_fO1->loadxml($_fO0);
            $_fl2 = $_fO1->documentElement;
            $id = $_fl2->getattribute("i\144");
            $name = $_fl2->nodeName;
            $id = ($id == "") ? "dump" : $id;
            if (class_exists($name, FALSE)) {
                eval("\044" . $id . " = ne\167\040" . $name . "\050'" . $id . "');");
                $$id->loadxml($_fl2);
                $_fl1 = $$id->render();
            } else {
                $_fl1.=$_fO0;
            } return $_fl1;
        }

    }

}

function _fO2($_fl3) {
    return md5($_fl3);
}

function _fO3() {
    $_fl4 = _fO4("\134", "\057", strtolower($_SERVER["\123CR\111\120T_NA\115\105"]));
    $_fl4 = _fO4(strrchr($_fl4, "/"), "", $_fl4);
    $_fl5 = _fO4("\134", "\057", realpath("\056"));
    $_fO5 = _fO4($_fl4, "", strtolower($_fl5));
    return $_fO5;
}

function _fO4($_fl6, $_fO6, $_fl7) {
    return str_replace($_fl6, $_fO6, $_fl7);
}

class _fi10 {

    static $_fi10 = "\173\060\175\173\061\175<div\040id='\173\151d}' \143\154ass\075'\173\163\164yle\175\113TS\040\173st\171\154e}\173\160osi\164\151o\156\175KT\123\047 s\164\171le\075'wid\164\150:\173\167idt\150};he\151ght\072\173he\151\147ht\175;'>\173\164pl\137\142ou\156\144}\074div\040sty\154\145='\143\154e\141\162:b\157th;\047\076<\057div\076\173s\145\154e\143\164ed\175\173t\141bte\155\160l\141\164e\175\074/\144\151v\076\1732\175";

}

function _fO7() {
    header("Cont\145\156t-t\171\160e: \164\145xt/\152\141vas\143\162ip\164");
}

function _fl8() {
    echo "\166\141r _f\151\1171=0\073";
}

function _fO8() {
    return exit();
}

function _fl9() {
    return _fi10::$_fi10;
}

function _fO9(&$_fla) {
    for ($_fOa = 0; $_fOa < 3; $_fOa++)
        $_fla = _fO4("\173" . $_fOa . "}", "", $_fla); return TRUE;
}

if (isset($_GET[_fO2("\152s")])) {
    _fO7(); ?> function _fO(_fo){return document.getElementById(_fo); }function _fY(_fy){return (_fy!=null); }function _fI(_fi,_fA){var _fa=document.createElement(_fi); _fA.appendChild(_fa); return _fa; }function _fE(_fe,_fU,_fu){return _fu.replace(eval("/"+_fe+"/g"),_fU); }function _fZ(_fy,_fz){_fz=(_fY(_fz))?_fz: 1; for (var i=0; i<_fz; i++)_fy=_fy.parentNode; return _fy; }function _fX(_fy,_fz){_fz=(_fY(_fz))?_fz: 1; for (var i=0; i<_fz; i++)_fy=_fy.firstChild; return _fy; }function _fx(_fy,_fz){_fz=(_fY(_fz))?_fz: 1; for (var i=0; i<_fz; i++)_fy=_fy.nextSibling; return _fy; }function _fW(_fy,_fz){_fz=(_fY(_fz))?_fz: 1; for (var i=0; i<_fz; i++)_fy=_fy.previousSibling; return _fy; }function _fW(_fy,_fz){_fz=(_fY(_fz))?_fz: 1; for (var i=0; i<_fz; i++)_fy=_fy.previousSibling; return _fy; }function _fw(){return (typeof(_fiO1)=="undefined");}function _fV(_fy,_fv){_fy.style.display=(_fv)?"": "none"; }function _fT(_fy){return (_fy.style.display!="none"); }function _ft(_fy){return _fy.className; }function _fS(_fy,_fv){_fy.className=_fv; }function _fs(_fR,_fr){return _fr.indexOf(_fR); }function _fQ(_fR,_fq,_fP){_fS(_fP,_ft(_fP).replace(_fR,_fq)); }function _fp(_fy,_fN){if (_fy.className.indexOf(_fN)<0){var _fn=_fy.className.split(" "); _fn.push(_fN); _fy.className=_fn.join(" "); }}function _fM(_fy,_fN){if (_fy.className.indexOf(_fN)>-1){_fQ(_fN,"",_fy);var _fn=_fy.className.split(" "); _fy.className=_fn.join(" "); }}function _fm(_fL,_fN,_fl){_fl=_fY(_fl)?_fl:document.body; var _fK=_fl.getElementsByTagName(_fL); var _fk=new Array(); for (var i=0; i<_fK.length; i++)if (_fK[i].className.indexOf(_fN)>=0){_fk.push(_fK[i]); }return _fk; }function _fJ(_fP){var _fj="{"; for (var _fH in _fP){switch (typeof(_fP[_fH])){case "string":_fj+="\""+_fH+"\":\""+_fP[_fH]+"\","; break; case "number":_fj+="\""+_fH+"\":"+_fP[_fH]+","; break; case "object":_fj+="\""+_fH+"\":"+_fJ(_fP[_fH])+","; break; }}if (_fj.length>1)_fj=_fj.substring(0,_fj.length-1); _fj+="}"; if (_fj=="{}")_fj="null"; return _fj; }function _fh(_fG,_fg,_fF,_ff){if (_fG.addEventListener){_fG.addEventListener(_fg,_fF,_ff); return true; }else if (_fG.attachEvent){if (_ff){return false; }else {var _fD= function (){_fF.apply(_fG,[window.event]); };if (!_fG["ref"+_fg])_fG["ref"+_fg]=[]; else {for (var _fd in _fG["ref"+_fg]){if (_fG["ref"+_fg][_fd]._fF === _fF)return false; }}var _fC=_fG.attachEvent("on"+_fg,_fD); if (_fC)_fG["ref"+_fg].push( {_fF:_fF,_fD:_fD } ); return _fC; }}else {return false; }}function _fc(_fB){var a=_fB.attributes,i,_fb,_fo0; if (a){_fb=a.length; for (i=0; i<_fb; i+=1){_fo0=a[i].name; if (typeof _fB[_fo0] === "function"){_fB[_fo0]=null; }}}a=_fB.childNodes; if (a){_fb=a.length; for (i=0; i<_fb; i+=1){_fc(_fB.childNodes[i]); }}}function KoolTabsItem(_fO0){ this.id=_fO0; this._fO0=_fO0; }KoolTabsItem.prototype= {_fl0:function (){var _fi0=_fZ(_fO(this._fO0)).id; return eval(_fi0.substring(0,_fs(".",_fi0))); } ,isEnabled:function (){var _fI0=_fO(this._fO0); return _fs("ktsDisable",_ft(_fI0))<0; } ,enable:function (_fo1){var _fI0=_fO(this._fO0); (_fo1)?_fM(_fI0,"ktsDisable"):_fp(_fI0,"ktsDisable"); } ,isSelected:function (){var _fO1=_fX(_fO(this._fO0)); return _fs("Selected",_ft(_fO1))>0; } ,select:function (){var _fl1=this._fl0(); if (_fw())return; if (!_fl1._fi1("OnBeforeSelect", { "TabId": this._fO0 } ))return; this._fI1(); var _fI0=_fO(this._fO0); var _fo2=_fW(_fI0); var _fO2=_fx(_fI0); if (_fY(_fo2) && _fs("ktsLI",_ft(_fo2))>-1){_fp(_fX(_fo2),"ktsBefore"); }if (_fY(_fO2) && _fs("ktsLI",_ft(_fO2))>-1){_fp(_fX(_fO2),"ktsAfter"); }_fp(_fX(_fI0),"ktsSelected"); _fl1._fl2(); _fl1._fi2(); _fl1._fi1("OnSelect", { "TabId": this._fO0 } ); } ,unselect:function (){var _fl1=this._fl0(); if (!_fl1._fi1("OnBeforeUnselect", { "TabId": this._fO0 } ))return; var _fI0=_fO(this._fO0); var _fo2=_fW(_fI0); var _fO2=_fx(_fI0); if (_fY(_fo2) && _fs("ktsLI",_ft(_fo2))>-1){_fM(_fX(_fo2),"ktsBefore"); }if (_fY(_fO2) && _fs("ktsLI",_ft(_fO2))>-1){_fM(_fX(_fO2),"ktsAfter"); }_fM(_fX(_fI0),"ktsSelected"); _fl1._fl2(); _fl1._fi2(); _fl1._fi1("OnUnselect", { "TabId": this._fO0 } ); } ,getParentId:function (){var _fI2=_fZ(_fO(this._fO0)); var _fo3=_fI2.id.replace(this._fl0()._fO0+".","").replace(".sub",""); return _fo3; } ,moveToFront:function (_fO3){if ((new KoolTabsItem(_fO3).getParentId()==this.getParentId())){var _fl3=_fO(this._fO0); var _fi3=_fO(_fO3); _fZ(_fl3).insertBefore(_fl3,_fi3); this._fI3(); }} ,moveToBehind:function (_fO3){if ((new KoolTabsItem(_fO3).getParentId()==this.getParentId())){var _fl3=_fO(this._fO0); var _fi3=_fO(_fO3); var _fI2=_fZ(_fl3); if (_fI2.lastChild==_fi3)_fI2.appendChild(_fl3); else _fI2.insertBefore(_fl3,_fx(_fi3)); this._fI3(); }} ,getChildIds:function (){var _fl1=this._fl0(); var _fI2=_fO(_fl1._fO0+"."+this._fO0+".sub"); var _fo4=new Array(); if (_fY(_fI2)){var _fO4=_fm("li","ktsLI",_fI2); for (var i=0; i<_fO4.length; i++){_fo4.push(_fO4[i].id); }}return _fo4; } ,_fl4:function (){var _fi4=this.getChildIds(); if (_fi4.length>0){for (var i=0; i<_fi4.length; i++){ (new KoolTabsItem(_fi4[i]))._fl4(); }var _fI2=_fO(this._fl0()._fO0+"."+this._fO0+".sub"); var _fI4=_fZ(_fI2); _fI4.removeChild(_fI2); var _fo5=_fm("ul","ktsUL",_fI4); if (_fo5.length==0){_fO5=_fI4; while (_fs("ktsLevel",_ft(_fO5))<0){_fO5=_fZ(_fO5); }_fZ(_fO5).removeChild(_fO5); }}var _fI0=_fO(this._fO0); _fc(_fI0); _fZ(_fI0).removeChild(_fI0); } ,_fI3:function (){var _fI2=_fZ(_fO(this._fO0)); var _fl5=_fm("li","ktsLI",_fI2); var _fi5=-2; for (var i=0; i<_fl5.length; i++){var _fI0=_fl5[i]; var _fO1=_fX(_fI0); var _fN=""; if (i==0 || _ft(_fI0.previousSibling)=="ktsBreak"){_fN+=" ktsFirst"; }if (i==_fl5.length-1 || _ft(_fI0.nextSibling)=="ktsBreak"){_fN+=" ktsLast"; }if (_fN=="")_fN="ktsMid"; _fS(_fI0,"ktsLI "+_fN); if (_fs("ktsSelected",_ft(_fO1))>-1){_fi5=i; }}for (var i=0; i<_fl5.length; i++){var _fI0=_fl5[i]; var _fO1=_fX(_fI0); switch (i){case _fi5:_fS(_fO1,"ktsA ktsSelected"); break; case (_fi5+1):_fS(_fO1,"ktsA ktsAfter"); break; case (_fi5-1):_fS(_fO1,"ktsA ktsBefore"); break; default:_fS(_fO1,"ktsA"); break; }}} ,_fI1:function (){var _fI2=_fZ(_fO(this._fO0)); var _fI5=_fm("li","ktsLI",_fI2); for (var i=0; i<_fI5.length; i++){var _fo6=new KoolTabsItem(_fI5[i].id); if (_fo6.isSelected())_fo6.unselect(); }} ,_fO6:function (_fl6){if (!this._fl0()._fi1("OnBeforeClick", { "TabId": this._fO0 } ))return; if (this.isEnabled() && !this.isSelected()){ this.select(); } this._fl0()._fi1("OnClick", { "TabId": this._fO0 } ); } ,_fi6:function (_fl6){ this._fl0()._fi1("OnMouseOver", { "TabId": this._fO0 } ); } ,_fI6:function (_fl6){ this._fl0()._fi1("OnMouseOut", { "TabId": this._fO0 } ); }};function KoolTabs(_fO0,_fo7){ this.id=_fO0; this._fO0=_fO0; this._fo7=_fo7; this._fO7=new Array(); this._fl7=null; this._fi7=null; this._fI7(); this._fo8(); }KoolTabs.prototype= {_fo8:function (){var _fl1=_fO(this._fO0); var _fI5=_fm("li","ktsLI",_fl1); for (var i=0; i<_fI5.length; i++){_fh(_fI5[i],"click",_fO8, false); _fh(_fI5[i],"mouseover",_fl8, false); _fh(_fI5[i],"mouseout",_fi8, false); }var _fI8=_fm("a","ktsPrev",_fl1); for (var i=0; i<_fI8.length; i++){_fh(_fI8[i],"mousedown",_fo9, false); _fh(_fI8[i],"mouseup",_fO9, false); }var _fl9=_fm("a","ktsNext",_fl1); for (var i=0; i<_fl9.length; i++){_fh(_fl9[i],"mousedown",_fo9, false); _fh(_fl9[i],"mouseup",_fO9, false); }var _fi9=_fm("div","Scroll",_fl1); for (var i=0; i<_fi9.length; i++){ this._fI9(_fi9[i]); } this._fl2(); } ,_fI7:function (){var _foa=_fm("div","ktsjustify",_fO(this._fO0)); for (var i=0; i<_foa.length; i++){var _fo5=_fm("ul","ktsUL",_foa[i]); for (var _fOa=0; _fOa<_fo5.length; _fOa++){var _fO4=_fm("li","ktsLI",_fo5[_fOa]); for (var _fla=0; _fla<_fO4.length; _fla++){_fO4[_fla].style.width=(100/_fO4.length)+"%";}}}} ,getSelectedChain:function (){_fia=_fO(this._fO0+"_selected"); return _fia.value; } ,getTab:function (_fO3){return (new KoolTabsItem(_fO3)); } ,removeTab:function (_fO3){var _fI2=_fZ(_fO(_fO3)); (new KoolTabsItem(_fO3))._fl4(); var _fO4=_fm("li","ktsLI",_fI2); if (_fO4.length>0 || _fs(".root.",_fI2.id)>0){if (_fO4.length>0){ (new KoolTabsItem(_fO4[0].id))._fI3(); }}else {var _fI4=_fZ(_fI2); _fI4.removeChild(_fI2); _fo5=_fm("ul","ktsUL",_fI4); if (_fo5.length<1){_fO5=_fI4; while (_fs("ktsLevel",_ft(_fO5))<0){_fO5=_fZ(_fO5); }_fZ(_fO5).removeChild(_fO5); }} this._fl2(); this._fI7(); } ,addTab:function (_fo3,_fO0,_fIa,_fob,_fOb,_flb,_fib,_fIb){if (_fw())return; if (!_fY(_fob))_fob=""; if (!_fY(_fOb))_fOb=0; if (!_fY(_flb))_flb=1; if (!_fY(_fib))_fib=""; if (!_fY(_fIb))_fIb=""; var _fI2=_fO(this._fO0+"."+_fo3+".sub"); if (!_fY(_fI2)){var _foc=new KoolTabsItem(_fo3); var _fz=0; while (_fs("root",_foc.getParentId())<0){_foc=new KoolTabsItem(_foc.getParentId()); _fz++; }_fOc=_fm("div","ktsLevel"+(_fz+1),_fO(this._fO0)); if (_fOc.length==0){_flc=_fm("div","ktsLevel"+_fz,_fO(this._fO0))[0]; _fic=_flc.cloneNode( true); var _fo5=_fm("ul","ktsUL",_fic); var _fI4=_fZ(_fo5[0]); _fI4.innerHTML=""; _fZ(_flc).insertBefore(_fic,_flc); if (this._fo7!="bottom"){_fZ(_flc).insertBefore(_flc,_fic); }_fQ(_fz,_fz+1,_fic); }else {var _fic=_fOc[0]; var _fo5=_fm("ul","ktsUL",_fic); var _fI4=_fZ(_fo5[0]); }var _fI2=_fI("ul",_fI4); _fI2.id=this._fO0+"."+_fo3+".sub"; _fS(_fI2,"ktsUL"); _fV(_fI2,0); }var _fIc="<a class='ktsA' {link}>{tabtemplate}</a>"; var _fod=_fO(this._fO0+".tab.template").innerHTML; var _fOd=_fE("{tabtemplate}",_fod,_fIc); _fOd=_fE("{link}",(_fob!="")?"href='"+_fob+"'": "",_fOd); _fOd=_fE("{tabcontent}","<span class='ktsText'>"+_fIa+"</span>",_fOd); var _fI0=_fI("li",_fI2); _fI0.id=_fO0; _fS(_fI0,"ktsLI"); _fI0.style.width=_fib; _fI0.style.height=_fIb; _fI0.innerHTML=_fOd; _fh(_fI0,"click",_fO8, false); _fh(_fI0,"mouseover",_fl8, false); _fh(_fI0,"mouseout",_fi8, false); var _fld=new KoolTabsItem(_fO0); _fld._fI3(); _fld.enable(_flb); if (_fOb)_fld.select(); this._fI7(); } ,registerEvent:function (_fid,_fId){ this._fO7[_fid]=_fId; } ,_fl2:function (){var _foe=_fO(this._fO0+".root.sub"); var _fOe=""; while (_fY(_foe)){var _fle=_fm("a","ktsSelected",_foe)[0]; if (_fY(_fle)){var _fI0=_fZ(_fle); _fOe+=":"+_fI0.id; _foe=_fO(this._fO0+"."+_fI0.id+".sub"); }else {_foe=null; }}_fOe=_fOe.substring(1); var _fia=_fO(this._fO0+"_selected"); _fia.value=_fOe; } ,_fi2:function (){var _fie=this.getSelectedChain(); _fo5=_fm("ul","ktsUL",_fO(this._fO0)); for (var i=0; i<_fo5.length; i++)if (_fs(".root.",_fo5[i].id)<0)_fV(_fo5[i],0); var _fIe=_fie.split(":"); for (var i=0; i<_fIe.length; i++){_fI2=_fO(this._fO0+"."+_fIe[i]+".sub"); if (_fY(_fI2)){_fV(_fI2,1); var _fic=_fZ(_fI2); while (_fs("ktsLevel",_ft(_fic))<0){_fic=_fZ(_fic); } this._fI9(_fic); }}} ,_fi1:function (_fH,_fof){return (_fY(this._fO7[_fH]))?this._fO7[_fH](this,_fof): true; } ,_fOf:function (_fIf,_fl6){if (_fw())return; if (_fs("Disable",_ft(_fIf))<0){var _fo5=_fm("ul","ktsUL",_fZ(_fIf)); var _fi0=""; for (var i=0; i<_fo5.length; i++)if (_fT(_fo5[i])){_fi0=_fo5[i].id; break; }var _fog=(_fs("Prev",_ft(_fIf))<0)?1: -1; this._fi7=setTimeout(this._fO0+".SC('"+_fi0+"',"+_fog+");",15); }} ,_fOg:function (_fIf,_fl6){if (_fs("Disable",_ft(_fIf))<0){ this._flg(); }} ,_flg:function (){if (_fY(this._fi7)){clearTimeout(this._fi7); this._fi7=null; }} ,_fI9:function (_fic){if (_fs("Scroll",_ft(_fic))>0){var _fo5=_fm("ul","ktsUL",_fic); var _fI2=null; for (var i=0; i<_fo5.length; i++)if (_fT(_fo5[i])){_fI2=_fo5[i]; break; }if (_fY(_fI2)){if (_fI2.style.marginLeft=="")_fI2.style.marginLeft="0px"; var _fig=parseInt(_fI2.style.marginLeft); var _fo2=_fm("a","Prev",_fic)[0]; var _fO2=_fm("a","Next",_fic)[0]; if (_fig>=0){_fig=0; _fS(_fo2,"ktsPrevDisable"); this._flg(); }else {_fS(_fo2,"ktsPrev"); }var _fI5=_fm("li","ktsLI",_fI2); var _fIg=0; for (var i=0; i<_fI5.length; i++)_fIg+=_fI5[i].offsetWidth; var _foh=0; if (_fs("leftScroll",_ft(_fic))>-1){_foh=0; }else if (_fs("rightScroll",_ft(_fic))>-1){_foh=_fo2.offsetWidth+_fO2.offsetWidth; }else if (_fs("middleScroll",_ft(_fic))>-1){_foh=_fO2.offsetWidth; }if (_fIg+_fig>_fic.offsetWidth-_foh){_fS(_fO2,"ktsNext"); }else {_fS(_fO2,"ktsNextDisable"); _fig=_fic.offsetWidth-_foh-_fIg; this._flg(); }}}} ,SC:function (_fi0,_fog){ this._fi7=setTimeout(this._fO0+".SC('"+_fi0+"',"+_fog+");",15); var _fOh=_fog*5; var _fI2=_fO(_fi0); if (_fY(_fI2)){if (_fI2.style.marginLeft=="")_fI2.style.marginLeft="0px"; _fI2.style.marginLeft=(parseInt(_fI2.style.marginLeft)-_fOh)+"px"; var _fic=_fZ(_fI2); while (_fs("ktsLevel",_ft(_fic))<0){_fic=_fZ(_fic); } this._fI9(_fic); }}};function _fO8(_fl6){ (new KoolTabsItem(this.id))._fO6(_fl6); }function _fl8(_fl6){ (new KoolTabsItem(this.id))._fi6(_fl6); }function _fi8(_fl6){ (new KoolTabsItem(this.id))._fI6(_fl6); }function _fo9(_fl6){var _fO5=_fZ(this ); var _flh=_fm("ul","ktsUL",_fO5)[0]; var _fi0=_flh.id; var _fih=eval("__="+_fi0.substring(0,_fs(".",_fi0))); _fih._fOf(this,_fl6); }function _fO9(_fl6){var _fO5=_fZ(this ); var _flh=_fm("ul","ktsUL",_fO5)[0]; var _fi0=_flh.id; var _fih=eval("__="+_fi0.substring(0,_fs(".",_fi0))); _fih._fOg(this,_fl6); }if (typeof(__KTSInits)!="undefined" && _fY(__KTSInits)){for (var i=0; i<__KTSInits.length; i++){__KTSInits[i](); }} <?php _fl8();
    _fO8();
} if (!class_exists("Ko\157\154Tab\163", FALSE)) {

    class kooltabsitem {

        var $id;
        var $text;
        var $_flb;
        var $enabled = TRUE;
        var $selected = FALSE;
        var $width = "";
        var $height = "";
        var $children;
        var $_fOb = NULL;
        var $_flc = -1;
        var $_fOc = FALSE;

        function __construct($_fld, $_fl3) {
            $this->id = $_fld;
            $this->text = $_fl3;
            $this->children = array();
        }

        function addchild($_fOd) {
            $_fOd->_fOb = $this;
            $_fOd->_flc = $this->_flc + 1;
            array_push($this->children, $_fOd);
        }

    }

    class kooltabs {

        var $_fl0 = "1\0568.0.0";
        var $id;
        var $styleFolder = "";
        var $_fle;
        var $scriptFolder = "";
        var $width = "aut\157";
        var $height = "\141\165to";
        var $position = "\164\157p";
        var $align = "le\146\164";
        var $scroll = "\150id\144\145n";
        var $_fOe;
        var $_flf;

        function __construct($_fld) {
            $this->id = $_fld;
            $this->_fOe = new kooltabsitem("root", "");
            $this->_fOe->selected = TRUE;
            $this->_flf = array();
            $this->_flf["\162\157ot"] = $this->_fOe;
        }

        function addtab($_fOf, $_fld, $_fl3 = "N\145\167 tab", $_flg = "", $_fOg = FALSE, $_flh = TRUE, $_fOh = "", $_fOi = "") {
            $_flj = $this->_fOe;
            if (isset($this->_flf[$_fOf])) {
                $_flj = $this->_flf[$_fOf];
            } $_fOj = new kooltabsitem($_fld, $_fl3);
            if ($_fOg) {
                foreach ($_flj->children as $_flk) {
                    $_flk->selected = FALSE;
                }
            } $_fOj->_flb = ($_flg == NULL) ? "" : $_flg;
            $_fOj->selected = $_fOg;
            $_fOj->enabled = $_flh;
            $_fOj->width = $_fOh;
            $_fOj->height = $_fOi;
            $_flj->addchild($_fOj);
            $this->_flf[$_fld] = $_fOj;
            return $_fOj;
        }

        function addbreak($_fOf) {
            $_flj = $this->_fOe;
            if (isset($this->_flf[$_fOf])) {
                $_flj = $this->_flf[$_fOf];
            } $_fOc = new kooltabsitem("", "");
            $_fOc->_fOc = TRUE;
            $_flj->addchild($_fOc);
        }

        function gettab($_fld) {
            return $this->_flf[$_fld];
        }

        function loadxml($_fOk) {
            if (gettype($_fOk) == "\163tr\151\156g") {
                $_fll = new domdocument();
                $_fll->loadxml($_fOk);
                $_fOk = $_fll->documentElement;
            } $_fld = $_fOk->getattribute("\151\144");
            if ($_fld != "") $this->id = $_fld; $_flm = $_fOk->getattribute("style\106\157lder");
            if ($_flm != "") $this->styleFolder = $_flm; $_fOm = $_fOk->getattribute("\163cript\106\157lder");
            if ($_fOm != "") $this->scriptFolder = $_fOm; $_fOh = $_fOk->getattribute("\167idth");
            if ($_fOh != "") $this->width = $_fOh; $_fOi = $_fOk->getattribute("h\145\151ght");
            if ($_fOi != "") $this->height = $_fOi; $_fln = $_fOk->getattribute("posit\151\157n");
            if ($_fln != "") $this->position = $_fln; $_fOn = $_fOk->getattribute("a\154\151gn");
            if ($_fOn != "") $this->align = $_fOn; $_flo = $_fOk->getattribute("\163\143rol\154");
            if ($_flo != "") $this->scroll = $_flo; $this->_fOo($_fOk);
        }

        function _fOo($_fOb) {
            foreach ($_fOb->childNodes as $_flp) {
                switch (strtolower($_flp->nodeName)) {
                    case "\164ab": $_fld = $_flp->getattribute("i\144");
                        $_fl3 = $_flp->getattribute("tex\164");
                        $_flg = $_flp->getattribute("\154ink");
                        $_fOg = (strtolower($_flp->getattribute("\163ele\143\164ed")) == "true") ? TRUE : FALSE;
                        $_flh = (strtolower($_flp->getattribute("ena\142\154ed")) == "fal\163\145") ? FALSE : TRUE;
                        $_fOh = $_flp->getattribute("\167\151dth");
                        $_fOi = $_flp->getattribute("hei\147\150t");
                        $_fOf = (strtolower($_fOb->nodeName) == "t\141\142") ? $_fOb->getattribute("id") : "ro\157\164";
                        $this->addtab($_fOf, $_fld, $_fl3, $_flg, $_fOg, $_flh, $_fOh, $_fOi);
                        $this->_fOo($_flp);
                        break;
                    case "break": $_fOf = (strtolower($_fOb->nodeName) == "\164ab") ? $_fOb->getattribute("\151\144") : "roo\164";
                        $this->addbreak($_fOf);
                        break;
                }
            }
        }

        function render() {
            $_fOp = "\n<!-\055\113ool\124\141bs vers\151\157n " . $this->_fl0 . " - \167\167w.ko\157\154php\056\156et\040\055->\n";
            $_fOp.=$this->registercss();
            $_fOp.=$this->rendertabs();
            $_flq = isset($_POST["_\137\153ool\141\152ax"]) || isset($_GET["\137_koo\154\141jax"]);
            $_fOp.=($_flq) ? "" : $this->registerscript();
            $_fOp.="\074scrip\164\040typ\145\075'te\170\164/j\141\166as\143\162ipt\047>";
            $_fOp.=$this->startupscript();
            $_fOp.="\074/s\143\162ipt\076";
            return $_fOp;
        }

        function rendertabs() {
            $this->_fOq();
            $tpl_bound = '{boundcontent}';
            $tpl_level = '{levelcontent}';
            $tpl_tab = '<span class="ktsOut"><span class="ktsIn">{tabcontent} </span></span>';
            include "\163tyle\163" . "\057" . $this->_fle . "/" . $this->_fle . "\056tpl";
            $_flr = "<\144\151v cl\141\163s='\153\164sLe\166\145l kt\163\114ev\145\154\173\154\145vel\175\040kt\163\173al\151\147n}\040\173sc\162\157ll\175\047>\173\164pl_\154\145ve\154}\173\156\145xt\141\162ro\167\175\173\160\162ev\141\162ro\167}</\144\151v>";
            $_fls = "<inp\165\164 id=\047\173id}\137\163ele\143\164ed'\040\156am\145\075'\173\151d}_\163\145le\143\164ed\047\040ty\160\145='\150\151dd\145n' /\076";
            $_fOs = "\074\141 cl\141\163s='k\164\163\173a\162\162ow}\047\076 <\057\141>";
            $_flt = "\074di\166\040id=\047\173id}\056\164em\160\154ate\047 sty\154\145='\144\151sp\154\141y:n\157ne'>\173\164em\160\154at\145\175<\057\144i\166\076";
            $_fla = _fO4("\173id\175", $this->id, _fl9());
            $_fla = _fO4("\173st\171\154e}", $this->_fle, $_fla);
            $_fla = _fO4("\173width}", $this->width, $_fla);
            $_fla = _fO4("\173heig\150\164}", $this->height, $_fla);
            $_fla = _fO4("\173\160osi\164\151on}", $this->position, $_fla);
            $_fla = _fO4("\173\164\160l_b\157\165nd}", $tpl_bound, $_fla);
            $_fOt = "";
            $_flu = array();
            $this->_fOu($this->_fOe, $_flu);
            for ($_fOa = 0; $_fOa < sizeof($_flu); $_fOa++) {
                $_flv = ($this->position == "bott\157\155") ? sizeof($_flu) - $_fOa - 1 : $_fOa;
                $_fOv = _fO4("\173\154eve\154\175", $_flv, $_flr);
                if ($this->scroll != "\150idden") {
                    $_fOv = _fO4("\173sc\162\157ll}", "kts" . $this->scroll . "S\143\162oll", $_fOv);
                    $_flw = _fO4("\173\141\162row}", "\120rev", $_fOs);
                    $_fOv = _fO4("\173\160rev\141\162row}", $_flw, $_fOv);
                    $_fOw = _fO4("\173arrow\175", "\116ext", $_fOs);
                    $_fOv = _fO4("\173nexta\162\162ow}", $_fOw, $_fOv);
                } else {
                    $_fOv = _fO4("\173scrol\154\175", "", $_fOv);
                    $_fOv = _fO4("\173n\145\170tarr\157\167}\173\160\162eva\162\162ow}", "", $_fOv);
                } $_fOv = _fO4("\173\164\160l_le\166\145l}", $tpl_level, $_fOv);
                $_fOv = _fO4("\173\154evel\143\157nte\156\164}", $_flu[$_flv], $_fOv);
                $_fOv = _fO4("\173al\151\147n}", $this->align, $_fOv);
                $_fOt.=$_fOv;
            } $_fOg = _fO4("\173id\175", $this->id, $_fls);
            $_flx = _fO4("\173id\175", $this->id . ".\164\141b", $_flt);
            $_flx = _fO4("\173templ\141\164e}", $tpl_tab, $_flx);
            $_fla = _fO4("\173boun\144\143onte\156\164}", $_fOt, $_fla);
            $_fla = _fO4("\173sele\143\164ed}", $_fOg, $_fla);
            if (_fO9($_fla)) {
                $_fla = _fO4("\173\164abte\155\160late\175", $_flx, $_fla);
            } $_fla = _fO4("\173\166\145rsio\156\175", $this->_fl0, $_fla);
            return $_fla;
        }

        function _fOu($_fOx, &$_flu) {
            $tpl_bound = '{boundcontent}';
            $tpl_level = '{levelcontent}';
            $tpl_tab = '<span class="ktsOut"><span class="ktsIn">{tabcontent}</span></span>';
            include "\163\164yle\163" . "\057" . $this->_fle . "/" . $this->_fle . ".tp\154";
            $_fly = "<\165\154 id=\047\173kta\142\151d}.\173\151d}.s\165\142' c\154\141ss\075\047kt\163\125L'\040\163ty\154\145='\144\151sp\154\141y:\173\144is\160\154ay\175\047>\173\154is}\074/ul>";
            $_fOy = "\074li \151\144='\173\151\144}'\040\143las\163\075'kt\163\114I \173\160la\143\145} \173\145nab\154\145}'\040\163ty\154\145='w\151dth:\173\167id\164\150};\150\145ig\150\164:\173\150eig\150\164}'\076\173a\175\074/l\151>";
            $_flz = "\074li \143\154ass\075\047kts\102\162eak\047\076</\154\151>";
            $_fOz = "\074a \143\154ass=\047\153tsA\040\173se\154\145ct}\047\040\173\150\162ef\175\040>\173\164pl_\164\141b}\040\074/a\076";
            $_fl10 = "<\163\160an c\154\141ss=\047\153tsT\145\170t'>\173\164ext\175\040</\163\160an>";
            if ($_fOx->_fOc) {
                return $_flz;
            } $_fO10 = "";
            $_fl11 = 0;
            if ($_fOx !== $this->_fOe) {
                for ($_fOa = 0; $_fOa < sizeof($_fOx->_fOb->children); $_fOa++)
                    if ($_fOx === $_fOx->_fOb->children[$_fOa]) $_fl11 = $_fOa; if ($_fl11 == 0 || $_fOx->_fOb->children[$_fl11 - 1]->_fOc) {
                    $_fO10.="\040k\164\163Firs\164";
                } if ($_fl11 == sizeof($_fOx->_fOb->children) - 1 || $_fOx->_fOb->children[$_fl11 + 1]->_fOc) {
                    $_fO10.=" k\164\163Las\164";
                }
            } if ($_fO10 == "") $_fO10 = "\153tsMid"; $_fO11 = _fO4("\173\151d}", $_fOx->id, $_fOy);
            $_fO11 = _fO4("\173plac\145\175", $_fO10, $_fO11);
            $_fO11 = _fO4("\173\145\156abl\145\175", ($_fOx->enabled) ? "" : "k\164\163Dis\141\142le", $_fO11);
            $_fO11 = _fO4("\173width\175", $_fOx->width, $_fO11);
            $_fO11 = _fO4("\173heigh\164\175", $_fOx->height, $_fO11);
            $_fO11 = _fO4("\173\141\175", $_fOz, $_fO11);
            $_fO11 = _fO4("\173hr\145\146}", ($_fOx->_flb != "") ? "h\162\145f='" . $_fOx->_flb . "'" : "", $_fO11);
            if ($_fOx->selected) {
                $_fO11 = _fO4("\173selec\164\175", "k\164\163Sele\143\164ed", $_fO11);
            } if ($_fOx !== $this->_fOe) {
                if (isset($_fOx->_fOb->children[$_fl11 - 1]) && $_fOx->_fOb->children[$_fl11 - 1]->selected) $_fO11 = _fO4("\173\163elec\164\175", "\153\164sAft\145\162", $_fO11); if (isset($_fOx->_fOb->children[$_fl11 + 1]) && $_fOx->_fOb->children[$_fl11 + 1]->selected) $_fO11 = _fO4("\173s\145\154ect}", "ktsBe\146\157re", $_fO11);
            } $_fO11 = _fO4("\173sele\143\164}", "", $_fO11);
            $_fO11 = _fO4("\173\164\160l_t\141\142}", $tpl_tab, $_fO11);
            $_fO11 = _fO4("\173t\141\142cont\145\156t}", $_fl10, $_fO11);
            $_fO11 = _fO4("\173text}", $_fOx->text, $_fO11);
            if (sizeof($_fOx->children) > 0) {
                $_fl12 = _fO4("\173\151\144}", $_fOx->id, $_fly);
                $_fl12 = _fO4("\173kt\141\142id}", $this->id, $_fl12);
                $_fl12 = _fO4("\173d\151\163play\175", ($_fOx->selected) ? "" : "\156one", $_fl12);
                $_fO12 = "";
                foreach ($_fOx->children as $_fl13) {
                    $_fO12.=$this->_fOu($_fl13, $_flu);
                } $_fl12 = _fO4("\173\154\151s}", $_fO12, $_fl12);
                if (!isset($_flu[$_fOx->_flc + 1])) {
                    $_flu[$_fOx->_flc + 1] = "";
                } $_flu[$_fOx->_flc + 1].=$_fl12;
            } return $_fO11;
        }

        function _fOq() {
            $this->styleFolder = _fO4("\134", "/", $this->styleFolder);
            $_flm = trim($this->styleFolder, "/");
            $_fO13 = strrpos($_flm, "/");
            $this->_fle = substr($_flm, ($_fO13 ? $_fO13 : -1) + 1);
        }

        function registercss() {
            $this->_fOq();
            $_fl14 = "\074sc\162\151pt t\171\160e='\164\145xt\057\152ava\163\143ri\160\164'>\151\146 (\144\157cu\155\145nt\056getE\154\145me\156\164B\171\111d\050\047__\173styl\145}KT\123\047)=\075nul\154\051\173\166ar \137\150ea\144 = \144\157cu\155ent\056\147e\164\105le\155ent\163ByT\141gNa\155\145('\150ead\047)[0\135;va\162\040_\154\151n\153\040=\040doc\165men\164.\143r\145\141t\145\105le\155ent\050'li\156k'\051\073 \137\154i\156\153.\151\144 \075\040'\137_\173\163tyl\145}K\124\123'\073\137l\151nk.\162el\075'st\171les\150ee\164';\040_l\151nk\056\150r\145f='\173st\171lep\141th\175/\173\163ty\154\145}\057\173\163\164y\154e}\056cs\163\047;\137he\141d.\141pp\145\156d\103hi\154\144(\137li\156k)\073}<\057sc\162ip\164>";
            $_fOp = _fO4("\173s\164\171le}", $this->_fle, $_fl14);
            $_fOp = _fO4("\173\163tyle\160\141th}", $this->_fO14(), $_fOp);
            return $_fOp;
        }

        function registerscript() {
            $_fl14 = "\074\163cri\160\164 typ\145\075't\145\170t/ja\166\141scr\151\160t'\076\151f(\164\171pe\157\146 _l\151\142KT\123\075='\165\156de\146ined\047)\173\144\157cum\145\156t\056\167ri\164\145(u\156\145sc\141\160e(\042%3C\163\143ri\160\164 t\171pe=\047\164ex\164\057j\141vas\143\162ip\164\047 \163\162c\075\047\173\163rc}\047%3E\040%3C\057scr\151\160t\045\063E\042));\137lib\113\124S\075\061;\175</s\143rip\164\076";
            $_fOp = _fO4("\173sr\143\175", $this->_fl15() . "\077" . md5("\152s"), $_fl14);
            return $_fOp;
        }

        function startupscript() {
            $_fl14 = "var \173\151d}; \146\165nct\151\157n \173\151d}_in\151\164()\173\040\173\151\144}=\156\145w K\157\157lT\141\142s(\047\173id\175\047,\047\173po\163\151ti\157\156}'\051\073}";
            $_fl14.="\151f (\164\171peof\050\113ool\124\141bs)\075\075'f\165\156cti\157\156')\173\173id}\137\151ni\164\050);\175";
            $_fl14.="else\173\151f(ty\160\145of(_\137\113TSI\156\151ts)\075='un\144\145fi\156\145d')\173\137_K\124\123In\151\164s=n\145\167 A\162\162a\171\050);\175\040__\113\124SI\156\151t\163\056pu\163\150(\173\151d}_\151nit\051\073\173\162egi\163\164er\137scr\151\160t}\175";
            $_fO15 = "\151f(typ\145\157f(_l\151\142KTS\051\075='\165\156def\151\156ed'\051\173va\162\040_h\145\141d \075\040d\157\143ume\156\164.g\145\164El\145\155en\164\163By\124\141gN\141\155e(\047head\047)[0\135\073va\162\040_\163\143ri\160\164 =\040doc\165\155en\164\056c\162\145a\164\145El\145\155en\164('s\143\162i\160\164')\073 _s\143rip\164\056t\171\160e=\047tex\164/ja\166asc\162ipt\047; _\163\143r\151\160t\056\163r\143\075'\173src\175'; \137hea\144.ap\160end\103hi\154\144(\137\163c\162\151p\164);_\154ib\113\124S\0751;}";
            $_fl16 = _fO4("\173src}", $this->_fl15() . "?" . md5("\152s"), $_fO15);
            $_fOp = _fO4("\173id}", $this->id, $_fl14);
            $_fOp = _fO4("\173po\163\151tion\175", $this->position, $_fOp);
            $_fOp = _fO4("\173reg\151\163ter\137\163cri\160\164}", $_fl16, $_fOp);
            return $_fOp;
        }

        function _fl15() {
            if ($this->scriptFolder == "") {
                $_fO5 = _fO3();
                $_fO16 = substr(_fO4("\134", "\057", __FILE__), strlen($_fO5));
                return $_fO16;
            } else {
                $_fO16 = _fO4("\134", "/", __FILE__);
                $_fO16 = $this->scriptFolder . substr($_fO16, strrpos($_fO16, "\057"));
                return $_fO16;
            }
        }

        function _fO14() {
            $_fl17 = $this->_fl15();
            $_fO17 = _fO4(strrchr($_fl17, "\057"), "", $_fl17) . "\057style\163";
            return $_fO17;
        }

    }

} ?>