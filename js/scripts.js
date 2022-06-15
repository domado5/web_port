$(function () {
    $(".innnerAnchor").on("click", function(){
        var headerHeight = $("header").outerHeight();
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "body" : href);
        var position = target.offset().top - headerHeight;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
    });
});


$('.more-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        $('.chart').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor:'#68c3a3',
            trackColor:'rgba(255,255,255,0.2)',
            scaleColor: false,
            lineWidth: 8,
            size: 140,
            animate: 2000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }

        });
        $(this).unbind('inview');
    }
});

//**// 
  var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       
       var tyInt = setInterval(typing,100); // 타이핑 스피드 설정 
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
       $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
       typingIdx++; 
       } else{ 
       clearInterval(tyInt); //끝나면 반복종료
       
       } 
     }

 // -------------------------------------------------------------
 // WOW JS
// -------------------------------------------------------------

    (function () {

        new WOW({

            mobile:  false

        }).init();

    }());