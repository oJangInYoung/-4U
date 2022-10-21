$(function () {

    var data = $(".nav-ul > li").data("list")
    $(".nav-ul > li").each(function (index) {
        $(this).click(function (e) {
            if (index == "0") {
                $(".all-category").css("display", "block");
                $(".li-list a").removeClass("list-color");
                $(this).children().addClass("list-color");
            } else if(index == "1") {
                $(".li-list a").removeClass("list-color");
                $(this).children().addClass("list-color");
                $(".all-category").css("display", "none");
            } else if(index =="2") {
                $(".li-list a").removeClass("list-color");
                $(this).children().addClass("list-color");
                $(".all-category").css("display", "none");
            } else if(index =="3") {
                $(".li-list a").removeClass("list-color");
                $(this).children().addClass("list-color");
                $(".all-category").css("display", "none");
            } else if (index =="4"){
                $(".li-list a").removeClass("list-color");
                $(this).children().addClass("list-color");
                $(".all-category").css("display", "none");
            }
        });
    });

    $(document).on("mouseover",".top-category01 span",function () {
        var title = $(this).data("title");
        $(".bottom-category").css("display", "block");
        $(this).each(function () {
            if (title == "clothes") {
                $(".bottom-category").html("<div>" +
                    "<span><a href='#'>긴팔티셔츠</a></span>" +
                    "<span><a href='#'>반팔티셔츠</a></span>" +
                    "<span><a href='#'>블러우스</a></span>" +
                    "<span><a href='#'>셔츠/남방</a></span>" +
                    "<span><a href='#'>맨투맨</a></span>" +
                    "<span><a href='#'>후드</a></span>" +
                    "<span><a href='#'>니트/스웨터</a></span>" +
                    "<span><a href='#'>슬리브리스(민소매)</a></span>" +
                    "</div>")
            } else if (title == "outerwear") {
                $(".bottom-category").html("<div>" +
                    "<span><a href='#'>코트</a></span>" +
                    "<span><a href='#'>패딩</a></span>" +
                    "<span><a href='#'>점퍼</a></span>" +
                    "<span><a href='#'>가디건</a></span>" +
                    "<span><a href='#'>자켓</a></span>" +
                    "<span><a href='#'>베스트(조끼)</a></span>" +
                    "<span><a href='#'>후드집업</a></span>" +
                    "</div>")
            } else if (title == "pants") {
                $(".bottom-category").html("<div>" +
                    "<span><a href='#'>데님 팬츠</a></span>" +
                    "<span><a href='#'>코튼 팬츠</a></span>" +
                    "<span><a href='#'>슬랙스</a></span>" +
                    "<span><a href='#'>트레이닝</a></span>" +
                    "<span><a href='#'>숏팬츠</a></span>" +
                    "<span><a href='#'>레깅스</a></span>" +
                    "<span><a href='#'>기타바지</a></span>" +
                    "</div>")
            } else if(title == "dress-skirt"){
                $(".bottom-category").html("<div>" +
                    "<span><a href='#'>미니 원피스</a></span>" +
                    "<span><a href='#'>미디 원피스</a></span>" +
                    "<span><a href='#'>롱 원피스</a></span>" +
                    "<span><a href='#'>미니 스커트</a></span>" +
                    "<span><a href='#'>미디 스커트</a></span>" +
                    "<span><a href='#'>롱 스커트</a></span>" +
                    "</div>")
            }
        });
    });//mouseover 끝남
    $(".top-category01 span").each(function () {
        $(this).click(function () {
            $(".top-category01 a").removeClass("list-color");
            $(this).children().addClass("list-color");
        });
    });//.top-category01 click종료
    $(document).on("click", ".bottom-category span", function () {
        var title = $(".top-category01 span").data("title");
        $(this).each(function () {
            // $(this).parent().css("background", "blue");
            $(".bottom-category a").removeClass("list-color");
            $(this).children().addClass("list-color");
        })
    });

    //mouseenter
    //mouseenter 집어넣는거
    //mouseleave
    //mouseout 두번 반응함

    $(".bottom-category").mouseleave(function () {
        $(".bottom-category").css("display", "none");
    });
    $(".all-category").mouseleave(function () {
        $(".bottom-category").css("display", "none");
    })
})
