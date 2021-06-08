$(document).ready(function(){
    resize();
    $(window).on('load resize', function(){
        resize();
    });

    /*$(window).on('load', function(){
        resize();
    });

     */

    $(".category-title").on("click", function (){
        $(this).toggleClass("category-title-div--activated");
        $(this).find("p").toggleClass("category-title-p--activated");
        $(this).next().slideToggle();
    });
    /*$(".btn").on("click", function (){
        $(this).toggleClass("btn--activated");
    });

     */
    $("#btn1").on("click", function (){
        $("#mid-center").toggleClass("mid-center--activated");
        $("#mid-right").toggleClass("mid-right--activated");
        $(this).toggleClass("btn--activated");
    });
});

function resize(){
    $bodywidth = $("body").innerWidth();
    $bodyheight = $("body").innerHeight();
    $headerheight = $('header').innerHeight();//親要素の幅を取得
    $num0 = $headerheight / 1.5;
    $("#searchbox").css({
        "border-radius": $num0 / 2 + "px"
    });
    $("#category").css("height", $bodyheight - $headerheight);
    $("#searchbox input").css({
        "height": $num0 + "px",
        "line-height": $num0 + "px",
        "font-size": $num0 / 2 + "px"
    });
    $("#searchbox input::placeholder").css("line-height",  + "px");
    $(".btn").css({
        "height": $num0 + "px",
        "width": $num0 + "px",
        "font-size": $num0 * 0.5 + "px"
    });
    if($("#btn1").hasClass("btn--activated")){
        $("#mid-right").removeClass("mid-right--activated");
        $("#mid-center").removeClass("mid-center--activated");
        $("#btn1").removeClass("btn--activated");
    }
    $num1w = $("#articlezone-upper").innerWidth();
    $num1ha = $num1w * 63 / 129;
    $num1hb = $num1w * 129 / 63;
    $num2w = $("#articlezone-lower").innerWidth();
    $num2ha = $num2w * 30 / 129;
    $num2hb = $num2w;
    if($bodywidth >= 600) {
        $("#articlezone-upper").css({
            "height": $num1ha + "px",
            "gap": $num1w / 60 + "px",
        });
        $("#mid-center").css({
            "height": $("#mid-center").innerWidth() * 0.9 + "px",
            "margin-top": $num1w / 40 + "px",
            "margin-bottom": $num1w / 20 + "px"
        });
        if($bodywidth >= 957 || $bodywidth <= 779){
            $("#mid-center").css({
                "margin-left": $num1w / 40 + "px",
                "margin-right": $num1w / 40 + "px",
            });
        }else if(779 < $bodywidth < 957){
            $margin0 = ($bodywidth - $num1w) / 2;
            $("#mid-center").css({
                "margin-left": $margin0 + "px",
                "margin-right": $margin0 + "px"
            });
        }
        $(".title").css({
            "width": "auto",
            "height": $num1ha / 10 + "px",
            "line-height": $num1ha / 10 + "px",
            "font-size": $num1ha / 15 + "px"
        });
        $("#articlezone-lower").css({
            "height": $num2ha + "px",
            "gap": $num1w / 60 + "px"
        });
    }else {
        $("#mid-center").css({
            "height": $("#mid-center").innerWidth() * 0.9 + "px",
            "margin-left": $num1w / 20 + "px",
            "margin-right": $num1w / 20 + "px",
            "margin-top": $num1w / 40 + "px",
            "margin-bottom": $num1w / 20 + "px"
        });
        $("#mid-center-lower").css("margin-top", $num1w / 40 +"px");
        $(".title").css({
            "width" : $num1w * 3 / 5,
            "height": $num1hb / 20 + "px",
            "line-height": $num1hb / 20 + "px",
            "max-font-size": $num1hb / 40 + "px"
        });
        $(".title").each(function (index, value){
            let length  = value.textContent.length;
            let charwidth = ($num1w * 3 / 5) / length;
            if(charwidth > ($num1hb / 30)){
                charwidth = $num1hb / 30;
            }
            $("#title" + index).css("font-size", charwidth + "px");
        });
        $("#articlezone-upper").css({
            "height": $num1hb + "px",
            "gap": $num1w / 60 + "px"
        });
        $("#articlezone-lower").css({
            "height": $num2hb + "px",
            "gap": $num1w / 60 + "px"
        });
    }
    $num3 = $("#example-subart").innerHeight();
    $(".article").find("p").css({
        "font-size": $num3 / 15 + "px",
        "margin-top": $num3 / 40 + "px",
        "margin-left": $num3 / 20 + "px",
        "margin-right": $num3 / 20 + "px",
        "margin-bottom": $num3 / 40 + "px"
    });

    $num4 = $("#mainarticle");
    $num4h = $("#mainarticle").innerHeight();
    $num4.find("p").css("font-size", $num4h / 15 + "px");
    $num4.find("p").css({
        "margin-top": $num4h / 80 + "px",
        "margin-left": $num4h / 20 + "px",
        "margin-right": $num4h / 20 + "px",
        "margin-bottom": $num4h / 80 + "px"
    });
    $(".category-title").css({
        "line-height": $(".category-title").innerHeight() + "px",
    });
    $num5 = $(".category-title").innerHeight();
    $num5 = $num5 * 0.75;
    $(".category-detail li").css({
        "height": $num5 + "px",
        "line-height": $num5 + "px",
        "font-size": $num5 * 0.4 + "px"
    });

}

