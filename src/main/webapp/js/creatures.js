//Note: A real jQuery novice wrote this... 

function makeCreature() {

	var set = [];

	var eyes = '<div class="eye"></div><div class="eye"></div>';
	var teeth = '';
	var moustache = '';
	var behavior = '';
	var color = '#CCC';



	if (string.indexOf("teeth") >= 0) { set.push("teeth"); var teeth = "teeth"; }
	if (string.indexOf("moustache") >= 0) { set.push("moustache"); var moustache = '<div class="moustache"></div>'; }
	if (string.indexOf("tooth") >= 0) { set.push("tooth"); var teeth = "tooth"; }
	if (string.indexOf("cyclops") >= 0) { set.push("cyclops"); var eyes = '<div class="eye"></div>'; }

	if (string.indexOf("hungry") >= 0) { set.push("hungry"); var behavior = "hungry"; }
	if (string.indexOf("nervous") >= 0) { set.push("nervous"); var behavior = "nervous"; }
	if (string.indexOf("sad") >= 0) { set.push("sad"); var behavior = "nervous"; }
	if (string.indexOf("hyper") >= 0) { set.push("hyper"); var behavior = "hyper"; }
	if (string.indexOf("happy") >= 0) { set.push("happy"); var behavior = "hyper"; }
	if (string.indexOf("smile") >= 0) { set.push("smile"); var behavior = "hyper"; }
	if (string.indexOf("bounce") >= 0) { set.push("bounce"); var behavior = "hyper"; }
	if (string.indexOf("bouncy") >= 0) { set.push("bouncy"); var behavior = "hyper"; }


	var colors = [
	              'aliceblue',
	              'antiquewhite',
	              'aqua',
	              'aquamarine',
	              'azure',
	              'beige',
	              'bisque',
	              'black',
	              'blanchedalmond',
	              'blue',
	              'blueviolet',
	              'brown',
	              'burlywood',
	              'cadetblue',
	              'chartreuse',
	              'chocolate',
	              'coral',
	              'cornflowerblue',
	              'cornsilk',
	              'crimson',
	              'cyan',
	              'darkblue',
	              'darkcyan',
	              'darkgoldenrod',
	              'darkgray',
	              'darkgreen',
	              'darkgrey',
	              'darkkhaki',
	              'darkmagenta',
	              'darkolivegreen',
	              'darkorange',
	              'darkorchid',
	              'darkred',
	              'darksalmon',
	              'darkseagreen',
	              'darkslateblue',
	              'darkslategray',
	              'darkslategrey',
	              'darkturquoise',
	              'darkviolet',
	              'deeppink',
	              'deepskyblue',
	              'dimgray',
	              'dimgrey',
	              'dodgerblue',
	              'firebrick',
	              'floralwhite',
	              'forestgreen',
	              'fuchsia',
	              'gainsboro',
	              'ghostwhite',
	              'gold',
	              'goldenrod',
	              'gray',
	              'green',
	              'greenyellow',
	              'grey',
	              'honeydew',
	              'hotpink',
	              'indianred',
	              'indigo',
	              'ivory',
	              'khaki',
	              'lavender',
	              'lavenderblush',
	              'lawngreen',
	              'lemonchiffon',
	              'lightblue',
	              'lightcoral',
	              'lightcyan',
	              'lightgoldenrodyellow',
	              'lightgray',
	              'lightgreen',
	              'lightgrey',
	              'lightpink',
	              'lightsalmon',
	              'lightseagreen',
	              'lightskyblue',
	              'lightslategray',
	              'lightslategrey',
	              'lightsteelblue',
	              'lightyellow',
	              'lime',
	              'limegreen',
	              'linen',
	              'magenta',
	              'maroon',
	              'mediumaquamarine',
	              'mediumblue',
	              'mediumorchid',
	              'mediumpurple',
	              'mediumseagreen',
	              'mediumslateblue',
	              'mediumspringgreen',
	              'mediumturquoise',
	              'mediumvioletred',
	              'midnightblue',
	              'mintcream',
	              'mistyrose',
	              'moccasin',
	              'navajowhite',
	              'navy',
	              'oldlace',
	              'olive',
	              'olivedrab',
	              'orange',
	              'orangered',
	              'orchid',
	              'palegoldenrod',
	              'palegreen',
	              'paleturquoise',
	              'palevioletred',
	              'papayawhip',
	              'peachpuff',
	              'peru',
	              'pink',
	              'plum',
	              'powderblue',
	              'purple',
	              'red',
	              'rosybrown',
	              'royalblue',
	              'saddlebrown',
	              'salmon',
	              'sandybrown',
	              'seagreen',
	              'seashell',
	              'sienna',
	              'silver',
	              'skyblue',
	              'slateblue',
	              'slategray',
	              'slategrey',
	              'snow',
	              'springgreen',
	              'steelblue',
	              'tan',
	              'teal',
	              'thistle',
	              'tomato',
	              'transparent',
	              'turquoise',
	              'violet',
	              'wheat',
	              'white',
	              'whitesmoke',
	              'yellow',
	              'yellowgreen'
	              ];


	// Debuggaroo
	console.log('New Creature');
	console.log('===============================================================');



	// Set up the creature
	var html = '<li>';

	html += '<div class="click-anim"><figure class="' + behavior + '" style="background-color:' + color + '">';
	html += eyes;
	html += moustache;
	html += '<div class="mouth ' + teeth + '"></div>';
	html += '</div></figure>';

	html += '<div class="shadow"></div>';
	$("#creatures").append(html);
}

$(document).ready(function(){

	makeCreature();

	$("#toggle-instructions, #footer-toggle-instructions").click(function(){        

		$("html, body").stop().animate({ scrollTop:0 }, 300);

		var toggler = $("#toggle-instructions");

		if (toggler.html() == "<span>Make your own</span>"){
			toggler.html("<span>Close</span>").addClass("opened");
			$("#creatures").addClass("paused");  
			$("#header").slideDown();
			$("#footer-toggle-instructions").hide();
		}

		else {
			toggler.html("<span>Make your own</span>").removeClass("opened");
			$("#creatures").removeClass("paused");
			$("#header").slideUp();
			$("#footer-toggle-instructions").show();
		}
	});

	$("#tweet-intent").click(function(){
		$("#creatures").removeClass("paused");
	});

	$("#color, #personality, #bonus").on('hover click', function(){
		var filter = $(this).attr("id");
		$("#examples ." + filter).toggleClass("active");
	});

	$("#refresh").click(function(){
		creatureLoad();        
	});


});