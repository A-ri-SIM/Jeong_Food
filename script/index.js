$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();

    function resizing(){
        ww=$(window).width();
        wh=$(window).height();
        $("section").css({
            width:ww,
            height:wh,
            top:wh
        });
        $(".top_section").css({
            top:0
        })
        $(".bottom_wrap").css({
            width:ww,
            top:wh
        })
        $(".full_menu_box").css({
            width:ww,
            height:wh
        })
        
    }
    resizing();
    $(window).resize(function(){
        resizing();
    });
    $(".best_menu").click(function(){
        let i=$(this).index()
        $(".best_pro_wrap").fadeOut();
        $(".best_menu").css({
            fontWeight:300
        })
        $(".best_pro_wrap").eq(i).fadeIn();
        $(this).css({
            fontWeight:700
        })
    })

    
    var before_time = new Date().getTime();
    var now_time = new Date().getTime();
    var direction = '';
    
    $(window).on("scroll", function () {
        let sct=$(this).scrollTop()/10;
        let box_index = sct;
        // wh=$(window).height();
        // box_index ++;
        if(box_index>550){
            box_index=550;
        }
        if(sct>0 && sct<100){
            $(".out_box").css({
                top:wh-(10*box_index)
            })  
            if(box_index>90){
                $(".out_box").css({
                    top:0
                })
            }else if(box_index<10){
                $(".out_box").css({
                    top:wh
                })
            }

        }else if(sct>100 && sct<200){
            box_index = sct-100;
            $(".bland_section").css({
                top:wh-(10*box_index)
            })  
            if(box_index>90){
                $(".bland_section").css({
                    top:0
                })
            }
            if(box_index<10){
                $(".bland_section").css({
                    top:wh
                })
            }
        }else if(sct>200 && sct<550){
            box_index = sct-200;
            $(".bottom_wrap").css({
                top:wh-(10*box_index)
            })
            
            if(box_index>540){
                $(".bottom_wrap").css({
                    top:wh*2.3
                })
            }
            if(box_index<10){
                $(".bottom_wrap").css({
                    top:wh+10
                })
            }
        }

    })

    $(".brand_out_box").click(function(){
        let a=$(this).parent();
        let b=a.index()
        // scroll_on()
        $('html,body').css({
            overflow: 'hidden'
        })
        $(".brand").eq(b).addClass("click",10,function(){
            $(this).css({
                zIndex: '999'
            })
           
            $(".brand_info_box").fadeOut(function(){
                $(".brand_out_box").addClass("click_logo")
                $(".brand_out_box").removeClass("brand_out_box")
                $(".brand_text_box").fadeIn(500,function(){
                    
                        $(".line").addClass("line_on",500,function(){
                            $(".top_text,.text_title,.bland_text").fadeIn(2000).css({
                                marginTop:'10%'
                        })
                        $(".close_but").fadeIn(500)
                        })
                })
            })
        })
    });

    $(".close_but").click(function(){
        // scroll_off();
        $('html,body').css({
            overflowY: 'scroll'
        })
        $(".line").removeClass("line_on",500,function(){
                        $(".top_text,.text_title,.bland_text").fadeOut().css({
                            marginTop:'7%'
                    })
                
                    })

        $(".close_but").fadeOut()
        $(".brand_text_box").fadeOut(500,function(){
            $(".click_logo").addClass("brand_out_box")
            $(".brand_out_box").removeClass("click_logo")
            $(".brand_info_box").fadeIn()
            $(".brand").removeClass("click",100,function(){
                $(this).css({
                    zIndex: '99'
                })
            })
        })
    });

    var burger = $('.menu-trigger');

    burger.each(function(index){
    var $this = $(this);
    let num=0;
    
    $this.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active-12');
        if(num==0){
            $(".full_menu_box").slideDown(500);
            num++;
        }else{
            $(".full_menu_box").slideUp(500);
            num--;
        }
        
    })
    });

});//end