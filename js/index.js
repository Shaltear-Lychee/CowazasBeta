$(document).ready(function () {
    resize();

    $(window).on('load resize', function () {
        resize();
    });

    //Set event on elements clicked
    $(".category_title").on("click", function () {
        $(this).toggleClass("category_title_div__activated");
        $(this).find("p").toggleClass("category_title_p__activated");
        $(this).next().slideToggle();
    });
    $("#btn1").on("click", function () {
        $("#mid_center").toggleClass("mid_center__activated");
        $("#mid_right").toggleClass("mid_right__activated");
        $(this).toggleClass("btn__activated");
    });
});

function resize() {

    //Define reference display propaties
    const body = {width: $("body").innerWidth(), height: $("body").innerHeight()},
        header = {width: undefined, height: $("header").innerHeight()},
        header_elements = {width: undefined, height: header.height / 1.5},
        articlezone_upper = {
            width: $("#articlezone_upper").innerWidth(),
            height_alpha: $("#articlezone_upper").innerWidth() * 63 / 129,
            height_beta: $("#articlezone_upper").innerWidth() * 129 / 63
        },
        articlezone_lower = {
            width: $("#articlezone_lower").innerWidth(),
            height_alpha: $("#articlezone_lower").innerWidth() * 30 / 129,
            height_beta: $("#articlezone_lower").innerWidth()
        }


    if ($("#btn1").hasClass("btn__activated")) {
        $("#mid_right").removeClass("mid_right__activated");
        $("#mid_center").removeClass("mid_center__activated");
        $("#btn1").removeClass("btn__activated");
    }

    //Append propaties to css
    $("#searchbox").css({
        "border-radius": header_elements.height / 2 + "px"
    });
    $("#category").css("height", body.height - header.height);
    $("#searchbox input").css({
        "height": header_elements.height + "px",
        "line-height": header_elements.height + "px",
        "font-size": header_elements.height / 2 + "px"
    });
    $(".btn").css({
        "height": header_elements.height + "px",
        "width": header_elements.height + "px",
        "font-size": header_elements.height / 2 + "px"
    });


    //Responsive
    if (body.width >= 600) {
        $("#articlezone_upper").css({
            "height": articlezone_upper.height_alpha + "px",
            "gap": articlezone_upper.width / 60 + "px",
        });
        $("#mid_center").css({
            "height": $("#mid_center").innerWidth() * 0.9 + "px",
            "margin-top": articlezone_upper.width / 40 + "px",
            "margin-bottom": articlezone_upper.width / 20 + "px"
        });
        if (body.width >= 950 || body.width <= 779) {
            $("#mid_center").css({
                "margin-left": articlezone_upper.width / 40 + "px",
                "margin-right": articlezone_upper.width / 40 + "px",
            });
        } else if (779 < body.width < 950) {
            const margin_0 = (body.width - articlezone_upper.width) / 2;
            $("#mid_center").css({
                "margin-left": margin_0 + "px",
                "margin-right": margin_0 + "px"
            });
        }
        $(".title").css({
            "width": "auto",
            "height": articlezone_upper.height_alpha / 10 + "px",
            "line-height": articlezone_upper.height_alpha / 10 + "px",
            "font-size": articlezone_upper.height_alpha / 15 + "px"
        });
        $("#articlezone_lower").css({
            "height": articlezone_lower.height_alpha + "px",
            "gap": articlezone_upper.width / 60 + "px"
        });
    } else {
        $("#mid_center").css({
            "height": $("#mid_center").innerWidth() * 0.9 + "px",
            "margin-left": articlezone_upper.width / 20 + "px",
            "margin-right": articlezone_upper.width / 20 + "px",
            "margin-top": articlezone_upper.width / 40 + "px",
            "margin-bottom": articlezone_upper.width / 20 + "px"
        });
        $("#mid_center_lower").css("margin-top", articlezone_upper.width / 40 + "px");
        $(".title").css({
            "width": articlezone_upper.width * 3 / 5,
            "height": articlezone_upper.height_beta / 20 + "px",
            "line-height": articlezone_upper.height_beta / 20 + "px",
            "max-font-size": articlezone_upper.height_beta / 40 + "px"
        });
        $(".title").each(function (index, value) {
            let length = value.textContent.length;
            let charwidth = (articlezone_upper.width * 3 / 5) / length;
            if (charwidth > (articlezone_upper.height_beta / 30)) {
                charwidth = articlezone_upper.height_beta / 30;
            }
            $("#title" + index).css("font-size", charwidth + "px");
        });
        $("#articlezone_upper").css({
            "height": articlezone_upper.height_beta + "px",
            "gap": articlezone_upper.width / 60 + "px"
        });
        $("#articlezone_lower").css({
            "height": articlezone_lower.height_beta + "px",
            "gap": articlezone_upper.width / 60 + "px"
        });
    }
    const example_default_article = {width: undefined, height: $("#example_default_article").innerHeight()},
        main_article = {width: undefined, height: $("#article_main").innerHeight()},
        category_title = {width: undefined, height: $(".category_title").innerHeight()},
        category_detail_title = {width: undefined, height: category_title.height * 0.75};

    $(".article").find("p").css({
        "font-size": example_default_article.height / 15 + "px",
        "margin-top": example_default_article.height / 40 + "px",
        "margin-left": example_default_article.height / 20 + "px",
        "margin-right": example_default_article.height / 20 + "px",
        "margin-bottom": example_default_article.height / 40 + "px"
    });
    $("#article_main").find("p").css({
        "margin-top": main_article.height / 80 + "px",
        "margin-left": main_article.height / 20 + "px",
        "margin-right": main_article.height / 20 + "px",
        "margin-bottom": main_article.height / 80 + "px",
        "font-size": main_article.height / 15 + "px"
    });
    $(".category_title").css({
        "line-height": category_title.height + "px",
    });
    $(".category_detail li").css({
        "height": category_detail_title.height + "px",
        "line-height": category_detail_title.height + "px",
        "font-size": category_detail_title.height * 0.4 + "px"
    });
    const ref_disp_propaties = [body, header, header_elements, articlezone_upper, articlezone_lower, example_default_article, main_article, category_title, category_detail_title];
}

