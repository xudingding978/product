var ddmenutimer = new Array();
var ddmenus = new Array();
var ignore_checks = false;

function dom_id(el)
{
	return document.getElementById(el);
}

function tooltip(obj, id)
{
	var sdiv = dom_id(id);
	if (sdiv) {
		sdiv.style.visibility = "visible";
	}
}

function get_position(obj, type) 
{
	var retval = 0;
	if (type == "Left" && obj.x) {
		return obj.x;
	}
	else if (obj.y) {
		return obj.y;
	}
	else {
		while (obj.offsetParent) {
			if (obj && obj.style && obj.style.position) obj.style.position = "relative";
			retval += eval("obj.offset" + type);
			obj = obj.offsetParent;
		}
		return retval;
	}
}

function display_menu(obj)
{
	hide_all_menus(obj.id);

	var menu = dom_id("dd_" + obj.id);
	if (menu && obj) {

		menu.style.left = get_position(obj, "Left");
		menu.style.top = get_position(obj, "Top") + obj.offsetHeight;
		menu.style.visibility = "visible";
	}
}

function hide_all_menus(except)
{
	x = 0;
	while (ddmenus[x]) {
		(ddmenus[x] == except) ? cancel_hide_timer(ddmenus[x]) : hide_menu(ddmenus[x]);
		x ++;
	}
}

function hide_menu(id)
{
	var me = dom_id("dd_" + id);
	if (me) {
		me.style.visibility = "hidden";
	}
}

function start_hide_timer(obj)
{
	ddmenutimer[obj.id] = setTimeout("hide_menu('" + obj.id + "')", 200);
}

function cancel_hide_timer(id)
{
	id = id.replace(/^dd_/, "");
	clearTimeout(ddmenutimer[id]);
}

function setup_display_and_rollovers()
{
	var ph = dom_id("menu_holder");
	if (ph) {
		if (ph.hasChildNodes()) {
			var x = 0;
			while (ph.childNodes[x]) {
				if (ph.childNodes[x].tagName.toUpperCase() == "A" && typeof(ph.childNodes[x].id) != "undefined" && ph.childNodes[x].id != "") 
				{
					ddmenus[ddmenus.length] = ph.childNodes[x].id;
					ph.childNodes[x].onmouseover = new Function("display_menu(this)");
					ph.childNodes[x].onmouseout = new Function("start_hide_timer(this)");
				}
				x++;
			}
		}
	}
}

function show_info(info)
{
	hide_infos();
	var me = dom_id("info_" + info);
	var pa = dom_id("info_placeholder");
	me.style.left = get_position(pa, "Left");
	me.style.top = get_position(pa, "Top");
	me.style.visibility = "visible";
}

function hide_infos()
{
	var divs = document.getElementsByTagName("div");
	for (var g = 0; g < divs.length; g ++) {
		if (divs[g].id.substring(0, 5) == "info_") {
			if (divs[g].style.visibility == "visible") divs[g].style.visibility = "hidden";
		}
	}
}
window.onload = setup_display_and_rollovers;
//window.onerror = function() { return true; }