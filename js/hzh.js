	$(function(){
		$(".sjtb a").mouseover(function(){
			$(".article").show(1000);
		}).mouseout(function(){
			$(".article").hide(1000);
		});
			
		$("#qbspfl").mouseenter(function(){
			var offset=$(this).offset();
			$(".top3_1_cbspfl").css({"top":offset.top+40,"left":offset.left}).show(1000);
		})
		$(".top3_1_cbspfl").mouseleave(function(){
		$(".top3_1_cbspfl").hide();
			
		});
		
		$("#top3_1 a:not(#qbspfl)").mouseenter(function(){
			var offset=$(this).offset();
			$(".top3_1_cbspf2").css({"top":offset.top+40,"left":offset.left-110}).show();
		})
		$(".top3_1_cbspf2").mouseleave(function(){
		$(".top3_1_cbspf2").hide();
			
		});
		 //轮换图片
//  function changeImg(){
//      var index=0;
//      var stop=false;
//      var $li=$("#content").find("#scroll_img").children("li");
//      var $page = $("#content").find("#scroll_number").children("li");
//      $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
//      $page.mouseover(function(){
//          stop=true;
//          index=$page.index($(this));
//          $li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
//          $(this).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
//      }).mouseout(function(){
//          stop=false;
//      });
//      setInterval(function(){
//          if(stop) return;
//          index++;
//          if(index>=$li.length){
//              index=0;
//          }
//          $li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
//          $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
//      },3000);
//  }
//  changeImg();
		//循环向左移动
		 function movedome(){
        var marginleft=0;
        var stop=false;
        var interval=setInterval(function(){
            if(stop) return;
            $(".index_lbt").children("li").first().animate({"margin-left":marginleft--},0,function(){
                var $first=$(this);
                if(!$first.is(":animated")){
                    if((-marginleft)>$first.height()){
                        $first.css({"margin-left":0}).appendTo($(".index_lbt"));
                        marginleft=0;
                    }
                }
            });
            
        },50);
        $(".index_lbt").mouseover(function(){
            stop=true;
        }).mouseout(function(){
            stop=false;
        });
    }
    	movedome();
		
		
		function total() {
            var prices=document.getElementsByName("price");
            var count=document.getElementsByName("amount");
            var sum=0;
            for(var i=0;i<prices.length;i++){
                sum+=prices[i].value*count[i].value;
            }
            document.getElementById("totalPrice").innerHTML="￥"+sum;
        }  
        function jiajia(num){
            var prices=document.getElementsByName("price")[num].value;
            var count=parseInt(document.getElementsByName("amount")[num].value)+1;
                document.getElementsByName("amount")[num].value=count;
                var totals=parseFloat(prices*count);
                document.getElementById("price"+num).innerHTML="￥"+totals;

        }
        function jianjian(num){
            var prices=document.getElementsByName("sopping_money")[num].value;
            var count=parseInt(document.getElementsByName("amount")[num].value)-1;
            if(count<1){
                alert("不能再减了，再减就没有啦！");
            }else{
                document.getElementsByName("amount")[num].value=count;
                var totals=parseFloat(prices*count);
                documt.getElentById("price"+num).innerHTML="￥"+totals;
            }
        }
	})	
