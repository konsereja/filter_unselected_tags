define(['jquery', 'https://st.servicepanel.ru/js/new/F5.js'], function($, F5js) {
    var CustomWidget = function () {
    	var self = this,
            system = self.system(),
            F5 = new F5js(this);

		this.callbacks = {
			render: function(){
				// F5.linkCSS("widget_lp_style", self.params.path + "/style.css");
				  if ($('link[href="' + self.params.path + '/style.css"').length < 1) {
		             //  Подключаем файл style.css передавая в качестве параметра версию виджета
		             $("head").append('<link href="' + self.params.path + '/style.css"' + ' type="text/css" rel="stylesheet">');
		        }

					$('h3.tags-lib__header .tags-lib__tags-logic-holder').append('<span id="selected_all_tags" class="tags-lib_selected_text"></span>');
					$('body').off('click.search_input').on('click.search_input', '#search_input', function() {
						let intervalProgressSearch = setInterval(function() {
			               	if($('#selected_all_tags').get(0) == undefined) {
			                   	clearInterval(intervalProgressSearch);
			                   	 $('h3.tags-lib__header .tags-lib__tags-logic-holder').append('<span id="selected_all_tags" class="tags-lib_selected_text">Исключить</span>');   
			                   }
			            }, 1000)
		        	});
					

					if($('#filter-search__tags-lib h3.filter-search__entity-header').hasClass('tags-lib__header_tags-logic-visible')){
		        		$('#selected_all_tags').text('Отменить');
		        		$('#selected_all_tags').addClass('ok_text');    
		        	} else {
		        		$('#selected_all_tags').text('Исключить'); 
		        		$('#selected_all_tags').removeClass('ok_text');    
		        	}

		        	$('body').off('click.all_tags').on('click.all_tags', '#selected_all_tags', function() {

		        		let n = $('#selected_all_tags').toggleClass('ok_text');
			        	let intervalProgress = setInterval(function() {
			               	if($('.js-suggest__load-more-link').get(0) == undefined) {
			                   	clearInterval(intervalProgress);
			                   	$('.tags-lib__item-name').trigger('click');

			     //               	if($(n).hasClass('ok_text') ) {
				    //     			$( ".tags-lib__items-suggest li" ).each(function() {
								//       if(!$(this).hasClass('tags-lib__item_selected')){
								//        $(this).find('.tags-lib__item-name').trigger('click');
								//     }
								// });
				    //     		} else {
				    //     			$( ".tags-lib__items-suggest li" ).each(function() {
								// 	      if($(this).hasClass('tags-lib__item_selected')){
								// 	       $(this).find('.tags-lib__item-name').trigger('click');
								// 	    }
								// 	});
				    //     		}
			                 	
			               } else {
			               		$('.js-suggest__load-more-link').click();
			                }
						});
		        		// var n = $('#selected_all_tags').toggleClass('ok_text');
		        		if($(n).hasClass('ok_text') ) {
		        			$(n).text('Отменить');
		        			$('#selected_all_tags').addClass('ok_text');    
		        		} else {
		        			$(n).text('Исключить');
		        			$('#selected_all_tags').removeClass('ok_text');    
		        		}
		        		
		        	});
		        	
		        	$('body').off('click.deselect').on('click.deselect', '.tags-lib__header-deselect', function() {
		        		$('#selected_all_tags').text('Исключить');     
		        		$('#selected_all_tags').removeClass('ok_text');     
		        	});
		        	
		        	
		        
		        

				return true;
			},
			init: function(){
				
				return true;
			},
			bind_actions: function(){
				return true;
			},
			settings: function(){
				return true;
			},
			onSave: function(){
				return true;
			},
			contacts: {
					selected: function(){
						return true;
					}
				},
			leads: {
					selected: function(){
						return true;
					}
				},
			tasks: {
					selected: function(){
						return true;
					}
				}
		};
		return this;
    };

return CustomWidget;
});