jQuery(function($)
		{
			//zresetuj scrolla
			$.scrollTo(0);
			
			$('#l1').click(function() { $.scrollTo($('#s1'), 500); });
			$('#l2').click(function() { $.scrollTo($('#s2'), 500); });
			$('#l3').click(function() { $.scrollTo($('#s3'), 500); });
			$('#l4').click(function() { $.scrollTo($('#s4'), 500); });
			$('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
		}
		);
		
		//pokaż podczas przewijania
		$(window).scroll(function()
		{
			if($(this).scrollTop()>300) $('.scrollup').fadeIn();
			else $('.scrollup').fadeOut();		
		}
		);