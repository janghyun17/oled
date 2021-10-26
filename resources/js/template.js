$(function () {
 	var controller = new ScrollMagic.Controller({
		globalSceneOptions:{
			triggerHook:'onLeave',
			reverse: true
		}
	});

	
	/*** section01 : OLED TV for ALL ***/
	var title01 = new TimelineMax()
	.to('.sce01_1 .visual_area .txt .t1', 1, {top:0, opacity:0, scale:0.7, delay:0.8}, 0)
	.to('.sce01_1 .visual_area .txt .t2', 1, {top:-30, opacity:0, scale:0.7, delay:0.9}, 0)
	.to('.sce01_1 .visual_area .txt .t3', 1, {top:-60, opacity:0, scale:0.7, delay:0.95}, 0)
	.to('.sce01_1 .visual_area', 0.8, {opacity: 0, delay:1.2} ,0)
	//.to('.sce01_3', 0.8, {display:'block', delay:1.2}, 0)

	new ScrollMagic.Scene({
		triggerElement:'.sce01_1',
		duration:'100%'
	})
	.setTween(title01)
	.setPin('.sce01_1 .visual_area', {pushFollowers: false})
	.addTo(controller);
	
	
	/*
	new ScrollMagic.Scene({
		triggerElement:'.sce01_2',
		duration:'100%'
	})
	.setPin('.sce01_2 .anchor', {pushFollowers: false})
	.addTo(controller);
	*/
	

	var c01_3 = new TimelineMax()
	.to('.c01_3 .img', 0.8, {filter:'blur(0px)', delay:0}, 0)
	.to('.c01_3 .img span', 0.8, {opacity:0, delay:0}, 0)
	.to('.c01_3 .txt', 1, {top:190, transform:'translate(0%,0%)', delay:0}, 1)
	
	.to('.c01_3', 0.8, {background:'#fff', delay:0.5}, 1)
	.to('.c01_3 .img', 2, {left:245, top:338, height:197, delay:0.8}, 1)
	.to('.c01_3 .txt .text', 1, {opacity:1, delay:0.5}, 2)
	.to('.c01_3 .txt, .c01_3 .txt .text', 1, {color:'#000', delay:0}, 2)
	.to('.c01_3', 4, {background:'#fff', delay:0}, 2)
	
	new ScrollMagic.Scene({
		triggerElement:'.sce01_3',
		duration:'200%',
	})
	.setTween(c01_3)
	.setPin('.sce01_3 .anchor', {pushFollowers: false})
	.addTo(controller);
	
	
	var c01_4 = new TimelineMax()
	.to('.c01_4', 0.8, {background:'#fff', delay:0.8}, 0)
	.to('.c01_4 .img', 2, {left:245, top:288, height:197, delay:0.8}, 0)
	.to('.c01_4 .txt .text', 1, {opacity:1, delay:0.5}, 1)
	.to('.c01_4 .txt, .c01_4 .txt .text', 1, {color:'#000', delay:0}, 1)
	.to('.c01_4', 4, {background:'#fff', delay:0}, 1)

	new ScrollMagic.Scene({
		triggerElement: ".sce01_4",
		duration: "250%"
	})
	.setTween(c01_4)
	.setPin('.sce01_4 .anchor', {pushFollowers: false})
	.addTo(controller);

	
	var c01_5 = new TimelineMax()
	.to('.c01_5', 4, {background:'#fff', delay:0}, 1)
		
	new ScrollMagic.Scene({
		triggerElement:'.sce01_5',
		duration:'150%',
	})
	.setTween(c01_5)
	.setPin('.sce01_5 .anchor', {pushFollowers: false})
	.addTo(controller);
	
	
	
	
	
	/*** section02 : OLED TV for your family ***/
	var title02 = new TimelineMax()
	.to('.sce02_1 .visual_area .txt .t1', 1, {top:0, opacity:0, scale:0.7, delay:0}, 0)
	.to('.sce02_1 .visual_area .txt .t2', 1, {top:-30, opacity:0, scale:0.7, delay:0.1}, 0)
	.to('.sce02_1 .visual_area .txt .t3', 1, {top:-60, opacity:0, scale:0.7, delay:0.15}, 0)
	.to('.sce02_1 .visual_area', 1.2, {opacity: 0, delay:0.2} ,0)

	new ScrollMagic.Scene({
		triggerElement:'.sce02_1',
		duration:'100%'
	})
	.setTween(title02)
	.setPin('.sce02_1 .visual_area', {pushFollowers: false})
	.addTo(controller);
	
	
	var c02_2 = new TimelineMax()
	.to('.c02_1 .txt', 1.2, {bottom:60, opacity:1 , delay:-1}, 0)
	.to('.c02_1 .video video', 1.5, {opacity:0.3, delay:0}, 1)
	.to('.c02_1', 3, {background:'#000', delay:0}, 1)
	
	new ScrollMagic.Scene({
		triggerElement: ".sce02_2",
		duration: "180%"
	})
	.setPin(".sce02_2 .anchor", {pushFollowers: false})
	.setTween(c02_2)
	.addTo(controller);
	
	
	var c02_3 = new TimelineMax()
	.to('.c02_2 .video video', 1.5, {width:'100%', delay:-1}, 0)
	.to('.c02_2 .txt', 1.2, {bottom:60, opacity:1 , delay:-1}, 1)
	.to('.c02_2 .video video', 1.5, {opacity:0.3, delay:0}, 2)
	.to('.c02_2', 3, {background:'#000', delay:0}, 2)
	
	new ScrollMagic.Scene({
		triggerElement: ".sce02_3",
		duration: "180%"
	})
	.setPin(".sce02_3 .anchor", {pushFollowers: false})
	.setTween(c02_3)
	.addTo(controller);

	
	
	
	
	/*** Section03 : OLED TV for you ***/
	var title03 = new TimelineMax()
	.to('.sce03_1 .visual_area .txt .t1', 1, {top:0, opacity:0, scale:0.7, delay:0}, 0)
	.to('.sce03_1 .visual_area .txt .t2', 1, {top:-30, opacity:0, scale:0.7, delay:0.1}, 0)
	.to('.sce03_1 .visual_area .txt .t3', 1, {top:-60, opacity:0, scale:0.7, delay:0.15}, 0)
	.to('.sce03_1 .visual_area', 1.2, {opacity: 0, delay:0.2} ,0)

	new ScrollMagic.Scene({
		triggerElement:'.sce03_1',
		duration:'100%'
	})
	.setTween(title03)
	.setPin('.sce03_1 .visual_area', {pushFollowers: false})
	.addTo(controller);
	
	
	var c03_1 = new TimelineMax()
	.to('.c03_1 #inner_a', 0.1, {css:{className:'+=mov_class_a'}, delay:0}, 0)
	.to('.c03_1 .txt', 0.8, {top:70, left:-10, delay:0}, 0)
	.to('.c03_1 .title .t0', 0.6, {fontSize:30,lineHeight:'34px', opacity:1, delay:0}, 0)
	.to('.c03_1 .title .m1', 0.6, {display:'none', delay:0}, 0)
	.to('.c03_1 .img', 1, {scale:1, delay:0}, 0)


	.to('.c03_1 #inner_a', 0.8, {css:{className:'+=mov_class_b'}, delay:0}, 1)
	.to('.c03_1', 2, {background:'#000', delay:0}, 1)

	.to('.c03_1 #inner_a', 0.8, {css:{className:'+=mov_class_c'}, delay:0}, 2)
	.to('.c03_1', 2, {background:'#000', delay:0}, 2)
	
	.to('.c03_1 #inner_a', 0.8, {css:{className:'+=mov_class_d'}, delay:0}, 3)
	.to('.c03_1', 3, {background:'#000', delay:0}, 3)

	new ScrollMagic.Scene({
		triggerElement: ".sce03_2",
		duration: "400%"
	})
	.setTween(c03_1)
	.setPin('.sce03_2 .anchor', {pushFollowers: false})
	.addTo(controller);
	
	
	

	
	
	/*** Section04 : OLED TV for the virtual world ***/
	var title04 = new TimelineMax()
	.to('.sce04_1 .visual_area .txt .t1', 1, {top:0, opacity:0, scale:0.7, delay:0}, 0)
	.to('.sce04_1 .visual_area .txt .t2', 1, {top:-30, opacity:0, scale:0.7, delay:0.1}, 0)
	.to('.sce04_1 .visual_area .txt .t3', 1, {top:-60, opacity:0, scale:0.7, delay:0.15}, 0)
	.to('.sce04_1 .visual_area', 1.2, {opacity: 0, delay:0.2} ,0)

	new ScrollMagic.Scene({
		triggerElement:'.sce04_1',
		duration:'100%'
	})
	.setTween(title04)
	.setPin('.sce04_1 .visual_area', {pushFollowers: false})
	.addTo(controller);

	
	
	
	
	/*** Section05 : OLED TV for the future ***/
	var title05 = new TimelineMax()
	.to('.sce05_1 .visual_area .txt .t1', 1, {top:0, opacity:0, scale:0.7, delay:0}, 0)
	.to('.sce05_1 .visual_area .txt .t2', 1, {top:-30, opacity:0, scale:0.7, delay:0.1}, 0)
	.to('.sce05_1 .visual_area .txt .t3', 1, {top:-60, opacity:0, scale:0.7, delay:0.15}, 0)
	.to('.sce05_1 .visual_area', 0.8, {opacity: 0, delay:0})

	new ScrollMagic.Scene({
		triggerElement:'.sce05_1',
		duration:'100%'
	})
	.setTween(title05)
	.setPin('.sce05_1 .visual_area', {pushFollowers: false})
	.addTo(controller);
	
	
	
	var c05_2 = new TimelineMax()
	.to('.c05_2 .txt', 1, {top:200, transform:'translate(0%,0%)', delay:-1}, 0)
	.to('.c05_2 .i2', 1.2, {opacity:1, delay:0}, 0)
	.to('.c05_2 .txt, .c05_2 .txt .text', 1, {color:'#000', delay:-0.5}, 0)
	.to('.c05_2 .img_obj', 0.8, {right:-5, opacity:1, delay:-0.3}, 1)
	.to('.c05_2', 1, {background:'#000', delay:0}, 1)
	.to('.c05_2 .img_obj', 0.5, {opacity:0, delay:0}, 2)
	.to('.c05_2 .i3', 1.2, {opacity:1, delay:0.1}, 2)
	.to('.c05_2 .txt, .c05_2 .txt .text', 1, {color:'#fff', delay:-0.5}, 2)
	.to('.c05_2 .mask', 0.8, {border:70, delay:0}, 3)
	.to('.c05_2', 1.2, {background:'#000', delay:0}, 3)
	
	new ScrollMagic.Scene({
		triggerElement:'.sce05_2',
		duration:'300%'
	})
	.setTween(c05_2)
	.setPin('.sce05_2 .anchor', {pushFollowers: false})
	.addTo(controller);
});









/* Scroll Event */
$(window).on('scroll', feScrollFn);
$.fn.feScrollGet = function(){
    var offset = $(window).scrollTop() + $(window).height() * 0.9;
	var offset_half = $(window).scrollTop() + $(window).height() * 0.2;
	var offset_half2 = $(window).scrollTop() + $(window).height() * 0.5;
  	
	$animate = $('.ani');
    $animate.each(function(i){
        var $ani = $(this),
            ani = $ani,
            item_top = $ani.offset().top,
            item_h = $ani.height();
		if(($ani.offset().top) < offset){
            if(!$ani.hasClass('active')){
                $ani.addClass('active');	
            }
        }else{
            if($ani.hasClass('active')){
            	$ani.removeClass('active');
            }
        }
    });
	
	
	$videos = $('.video');
    $videos.each(function(i){
        var $video = $(this).find('video'),
            video = $video,
            item_top = $video.offset().top,
            item_h = $video.height();
		if(($video.offset().top) < (offset) && (item_top + item_h) > (offset_half)){
            if(!$video.hasClass('video_on')){
                video.get(0).play();
                $video.addClass('video_on');
            }
        }else{
            if($video.hasClass('video_on')){
                video.get(0).pause();
				video.get(0).currentTime = 0;
                $video.removeClass('video_on');
            }
        }	
    });
};

// Scroll Event Function 
function feScrollFn(){
    $.fn.feScrollGet();
}







