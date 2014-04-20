/*
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function() {

var __keyboard = {
// the keyboards, defined with X and Y swappedfrom how you see it on the image 
	"upper" : {
		rows : 4,
		cols : 9,
		keys : [ 
			["A","B","C", "D","E","F"," 0", ".u",  "select"],
			["G","H","I", "J","K","L"," 1", ",u",  "select"],
			["M","N","O", "P","Q","R","S", " 2",   "back"],
			["T","U","V", "W","X","Y","Z", " 3",   "ok"]
		],
		next : "lower"
	},
	"lower" : {
		rows : 4,
		cols : 9,
		keys : [
			["a","b","c", "d","e","f"," 4", ".l",  "select"],
			["g","h","i", "j","k","l"," 5", ",l",  "select"],
			["m","o","p", "p","q","r","s", " 6",   "back"],
			["t","u","v", "w","x","y","z", " 7",   "ok"]
		],
		next : "other"
	}, 
	"other" : {
		rows : 4,
		cols : 7,
		keys : [
			["0","1","2","3","4", " 8",  "select"],
			["5","6","7","8","9", " 9",  "select"],
			["!","?","ml","fm","/","-", "back"],
			["...",'"o','"c',"'o","'c", " 10", "ok"]
		],
		next : "upper"
	}
};

var __characters = {
	"A" : {x : 15, y : 5},
	"B" : {x : 27, y : 5},
	"C" : {x : 39, y : 5},
	"D" : {x : 71, y : 5},
	"E" : {x : 83, y : 5},
	"F" : {x : 95, y : 5},
	" 0": {x :107, y : 5, c : " "},
	".u": {x :138, y : 5, c : "."},
	
	"G" : {x : 15, y : 21},
	"H" : {x : 27, y : 21},
	"I" : {x : 39, y : 21},
	"J" : {x : 71, y : 21},
	"K" : {x : 83, y : 21},
	"L" : {x : 95, y : 21},
	" 1": {x :107, y : 21, c : " "},
	",u": {x :138, y : 21, c : ","},
	
	"M" : {x : 15, y : 37},
	"N" : {x : 27, y : 37},
	"O" : {x : 39, y : 37},
	"P" : {x : 71, y : 37},
	"Q" : {x : 83, y : 37},
	"R" : {x : 95, y : 37},
	"S" : {x :107, y : 37},
	" 2": {x :138, y : 37, c : " "},
	
	"T" : {x : 15, y : 53},
	"U" : {x : 27, y : 53},
	"V" : {x : 39, y : 53},
	"W" : {x : 71, y : 53},
	"X" : {x : 83, y : 53},
	"Y" : {x : 95, y : 53},
	"Z" : {x :107, y : 53},
	" 3": {x :138, y : 53, c : " "},
	
	"a" : {x : 15, y : 5},
	"b" : {x : 27, y : 5},
	"c" : {x : 39, y : 5},
	"d" : {x : 71, y : 5},
	"e" : {x : 83, y : 5},
	"f" : {x : 95, y : 5},
	" 4": {x :107, y : 5, c : " "},
	".l": {x :138, y : 5, c : " "},
	
	"g" : {x : 15, y : 21},
	"h" : {x : 27, y : 21},
	"i" : {x : 39, y : 21},
	"j" : {x : 71, y : 21},
	"k" : {x : 83, y : 21},
	"l" : {x : 95, y : 21},
	" 5": {x :107, y : 21, c : " "},
	",l": {x :138, y : 21, c : ","},
	
	"m" : {x : 15, y : 37},
	"n" : {x : 27, y : 37},
	"o" : {x : 39, y : 37},
	"p" : {x : 71, y : 37},
	"q" : {x : 83, y : 37},
	"r" : {x : 95, y : 37},
	"s" : {x :107, y : 37},
	" 6": {x :138, y : 37, c : " "},
	
	"t" : {x : 15, y : 53},
	"u" : {x : 27, y : 53},
	"v" : {x : 39, y : 53},
	"w" : {x : 71, y : 53},
	"x" : {x : 83, y : 53},
	"y" : {x : 95, y : 53},
	"z" : {x :107, y : 53},
	" 7": {x :138, y : 53, c : " "},
	
	"0" : {x : 15, y : 5},
	"1" : {x : 37, y : 5},
	"2" : {x : 59, y : 5},
	"3" : {x : 81, y : 5},
	"4" : {x :103, y : 5},
	" 8": {x :125, y : 5, c : " "},
	
	"5" : {x : 15, y : 21},
	"6" : {x : 37, y : 21},
	"7" : {x : 59, y : 21},
	"8" : {x : 81, y : 21},
	"9" : {x :103, y : 21},
	" 9": {x :125, y : 21, c : " "},
	
	"!" : {x : 15, y : 36},
	"?" : {x : 37, y : 36},
	"ml": {x : 59, y : 36, c : "&#x2642;"},
	"fm": {x : 81, y : 36, c : "&#x2640;"},
	"/" : {x :103, y : 36},
	"-" : {x :125, y : 36},
	
	"...": {x : 15, y : 52, c : "&hellip;"},
	'"o' : {x : 37, y : 52, c : "&ldquo;"},
	'"c' : {x : 59, y : 52, c : "&rdquo;"},
	"'o" : {x : 81, y : 52, c : "&lsquo;"},
	"'c" : {x :103, y : 52, c : "&rsquo;"},
	" 10": {x :125, y : 52, c : " "},
	 
	 "select" : {x : 187, y :  0, special:true},
	 "back"   : {x : 187, y : 26, special:true},
	 "ok"     : {x : 187, y : 48, special:true},
};

var KBOFFSET = {x:13, y:71};
var CARATOFF = {x:73, y:56};

var NAMELIMIT = 8;
var UPPERKB, LOWERKB, OTHERKB;
var SELECTDIV;
var CURSOR, CARAT;
var NAMEDIV;

var acceptingInput = false, namingEnabled = false;
var CursorPos = {kb : "upper", x : 0, y : 0};
var currName = [];

function grabCommand(str) {
	if (!namingEnabled) return null;
	
	if (!/^(start|select|left|right|up|down|b|a|l|r)/i.test(str)) {
		return null;
	}
		
	/*
	var consecutive = str.split(",");
	var cmdList = {};
	for (cmd in consecutive) {
		var combo = cmd.split("+");
			
	}*/
	
	//grab the first two commands out of the list
	var cmditem = /^(start|select|left|right|up|down|b|a|l|r)\+?(start|select|left|right|up|down|b|a|l|r)?/i.exec(str);
	
	var cmd1 = cmditem[1];
	var cmd2 = cmditem[2];
	
	//normalize the strings
	if (cmd1) cmd1 = cmd1.toLowerCase();
	if (cmd2) cmd2 = cmd2.toLowerCase();
	
//	if (cmd1 == "b" && cmd2) { //Ignore "B+Direction" running combo
//		return cmd2;
//	} //This is commented out for the "with bs" version
	return cmd1;
}

function switchToKeyboard(kbname) {
	var oldkb = $("#pkmnKeyboard .kb."+CursorPos.kb);
	var newkb = $("#pkmnKeyboard .kb."+kbname);
	
	acceptingInput = false;
	CURSOR.hide();
	newkb.show();
	
	oldkb
		.animate({"top" : KBOFFSET.y - 30}, {easing:"swing", duration:200})
		.animate({"top" : KBOFFSET.y}, {easing:"swing", duration:200, start:function(){
			oldkb.css("z-index", 8);
		}, complete:function(){ 
			oldkb.hide(); 
		} });
	newkb
		.animate({"top" : KBOFFSET.y + 30}, {easing:"swing", duration:200})
		.animate({"top" : KBOFFSET.y}, {easing:"swing", duration:200, start:function(){
			newkb.css("z-index", 10);
		}, complete:function(){ 
			acceptingInput = true;
			CURSOR.show(); 
		} });
	
	SELECTDIV.removeClass("upper lower other").addClass(__keyboard[kbname].next);
	
	CursorPos.kb = kbname;
	CursorPos.x = CursorPos.y = 0;
}

function insertChar(key) {
	var kinfo = __characters[key];
	
	if (kinfo.special) {
		switch (key) {
			case "select":
				switchToKeyboard(__keyboard[CursorPos.kb].next);
				return;
			case "back":
				//currName = currName.substr(0, currName.length-1);
				currName.pop();
				break;
			case "ok":
				finishName();
				return;
		}
	} else {
		var c = key;
		if (kinfo.c) c = kinfo.c;
		
		if (currName.length >= NAMELIMIT) {
			currName[currName.length-1] = c;
		} else {
			currName.push(c);
		}
	}
	
	NAMEDIV.html(currName.join(""));
	CARAT.css({
		left: CARATOFF.x + (8 * ((currName.length < NAMELIMIT)? currName.length : NAMELIMIT-1)),
		top:  CARATOFF.y});
}

function beginName() {
	currName = [];
	NAMEDIV.html(currName.join(""));
	CARAT.css({
		left: CARATOFF.x,
		top:  CARATOFF.y});
	
	namingEnabled = true;
	
	$(".kb").animate({"top": KBOFFSET.y}, {duration:300, complete:function(){
		acceptingInput = true;
		CURSOR.show();
		CARAT.show();
	} });
}

function finishName() {
	acceptingInput = false;
	CURSOR.hide();
	CARAT.hide();
	
	CursorPos.kb = "upper";
	CursorPos.x = CursorPos.y = 0;
	
	$(".kb").animate({"top": 170}, {duration:1000, complete:function(){
		namingEnabled = false;
		acceptingInput = false;
		$(".kb").hide();
		$(".kb.upper").show();
		SELECTDIV.removeClass("upper lower other").addClass("lower");
	} });
}

function submitCommand(cmd){
	if (!acceptingInput) return;
	
	var kb = __keyboard[CursorPos.kb];
	var curchar = kb.keys[CursorPos.y][CursorPos.x];
	
	switch (cmd) {
		case "left":		
			CursorPos.x = (((CursorPos.x - 1) % kb.cols) + kb.cols) % kb.cols;
			break;
		case "right":
			CursorPos.x = (CursorPos.x + 1) % kb.cols;
			break;
		case "up":
			CursorPos.y = (((CursorPos.y - 1) % kb.rows) + kb.rows) % kb.rows;
			break;
		case "down":
			CursorPos.y = (CursorPos.y + 1) % kb.rows;
			break;
		case "select":
		case "l": case "r":
			insertChar("select");
			break;
		case "b":
			insertChar("back");
			break;
		case "a":
			insertChar(curchar);
			break;
		case "start":
			if (curchar != "ok") {
				CursorPos.x = kb.cols-1;
				CursorPos.y = kb.rows-1;
			} else {
				insertChar("ok");
			}
			break;
	}
	
	//in case the curr keyboard or selected key changed
	kb = __keyboard[CursorPos.kb];
	curchar = kb.keys[CursorPos.y][CursorPos.x];
	
	CURSOR.css({
		left: KBOFFSET.x + __characters[curchar].x,
		top:  KBOFFSET.y + __characters[curchar].y});
	
}
window.__submitCommand = submitCommand;

$(function(){
	var AREA;
	var _log = function(){ if (console && console.log) console.log(arguments); };
	
	_log("LOADING Pokemon Keyboard by Tustin2121!");
	
	var chatinterface = $(".chat-interface");
	if (chatinterface.length) {
		_log("PkMN: Found chat interface!");
		chatinterface.after("<div id='tustin-pkmnkb-container'>");
		
		var cont = $("#tustin-pkmnkb-container");
		var path = "https://dl.dropboxusercontent.com/u/3311718/TPPChatKeyboard/";
		cont.append("<link rel='stylesheet' type='text/css' href='"+path+"pkmn_keyboard.css'>");
		
		AREA = $("<div id='pkmnKeyboard'>").appendTo(cont);
	} else {
		_log("PkMN: FAILED to find interface!");
		AREA = $("#pkmnKeyboard");
	}
	
	AREA.click(function(){
		if (namingEnabled) return;
		beginName();
	});
	
	OTHERKB = $("<div>").addClass("kb other").appendTo(AREA).hide();
	LOWERKB = $("<div>").addClass("kb lower").appendTo(AREA).hide();
	UPPERKB = $("<div>").addClass("kb upper").appendTo(AREA);
	
	NAMEDIV = $("<div>").addClass("name-field").appendTo(AREA);
	SELECTDIV = $("<div>").addClass("select").appendTo(AREA);
	CARAT = $("<div>").addClass("carat").appendTo(AREA);
	NAMEDIV.html("Tustin2121");
	
	CURSOR = $("<div>").addClass("cursor").appendTo(AREA);
	
	CURSOR.css({
		left: KBOFFSET.x + __characters["A"].x,
		top:  KBOFFSET.y + __characters["A"].y}).hide();
	
	(function initPassthrough(){
		if (!window.App || !window.App.Room) return;
		
		var oldAddMessage;
		function _addMessage(info) {
			var cmd;
			if (cmd = grabCommand(info.message)) {
				submitCommand(cmd);
			}
			return oldAddMessage.apply(this, arguments);
		}
		
	    var Room_proto = window.App.Room.prototype;
	    oldAddMessage = Room_proto.addMessage;
	    Room_proto.addMessage = _addMessage;
	})();
	
	_log("PkMN: LOAD COMPLETE");
});

})();

