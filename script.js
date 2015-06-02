var initial_size = '15';

$(document).ready(function(){
	populate(initial_size);
});

function populate(size){
	$('.main-table').empty();
	var $size = size;
	var $cl;
	console.log($size);
	
	switch($size){
		case '15':
			$cl = 'box';
			break;
		case '31':
			 $cl = 'bigger-box';
			 console.log("case 31");
			break;
		case '63':
			 $cl = 'biggest-box';
			 console.log("case 63");
			 break;
		default:
			break;
	}
			
	console.log($cl);
	for(var i=0; i < $size; i++){
		$tr = $("<tr></tr>");
		for(var j=0; j < $size; j++){
			$div = $("<div class=" +$cl+"></div>");
			$div.css('background-color', 'slategrey');
			$tr.append($("<td></td>").append($div));
			}
		$(".main-table").append($tr);
	}
	run();
};

function run(){
	$('.box').hover(function(){
		$(this).css('background-color', 'black');
	});
	$('.bigger-box').hover(function(){
		$(this).css('background-color', 'black');
	});
	$('.biggest-box').hover(function(){
		$(this).css('background-color', 'black');
	});
	$('button').click(function(){
		console.log($(this).val());
		populate($(this).val());
	});
};
