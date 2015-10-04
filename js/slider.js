function slider(){
    var posX=0, pos, clicked = false;
	var width = $(".slider_wrap:visible").outerWidth();
	var offset_left = $(".slider_wrap").offset().left;

    function mueve (e) {
    	var shocasWidth = $('.show').outerWidth();
    	var halfWidth = shocasWidth/2;
    	var shocaseleft = $('.show').offset().left;
        clicked = true;
        posX = e.pageX ;

    	var valueAlongWrp = Math.round(posX-offset_left);

        var slide_val = Math.round(posX-shocaseleft);
        console.log(shocasWidth, slide_val) 
        var slidePercent = Math.round(slide_val/shocasWidth*100);
        var slide_val_show = Math.round(valueAlongWrp/width*100);
        slide_val_show = Math.round(slide_val_show*.37);

        if(posX >= width+offset_left || posX <= offset_left){
            return false;
        }

        if(slidePercent){

        	var clickVal = parseInt(slidePercent/50);
        	if(clickVal % 2 == 1 || slidePercent > 100){
        	console.log("mxxxx",clickVal, slidePercent);

    			$('.max-age-text').text(slide_val_show + " years");
        		$('.max-range').css({left:valueAlongWrp});
        		$(".show").css({
			        			'width': (slide_val),
			        		});
        	}
    		else{
        	console.log("mnnnnn",clickVal, slidePercent);

    			$('.min-age-text').text(slide_val_show + " years");
        		$('.min-range').css({left:valueAlongWrp});
		        $(".show").css({
			        			'width': (shocasWidth-slide_val),
			        			'left' : valueAlongWrp
			        		});
    		}
        }
    }

    $(".slider_wrap").on('mousedown',mueve);

    $(document).on('mouseup', function(e) {
    	clicked = false;
    })

    $(document).mousemove(function(e) {
        if (!clicked) {
            return false;
        }else{
            $('.min-range').stop();
            $('.max-range').stop();
            mueve(e);
        }
    });
}