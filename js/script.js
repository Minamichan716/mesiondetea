'use strict'

//スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
function FixedAnime() {
	//ヘッダーの高さを取得
	var headerH = $('#headerMenu').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//ヘッダーの高さ以上までスクロールしたら
			$('.openbtn').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
			$('#headerMenu').addClass('dnone');//#headerにdnoneというクラス名を付与
		}else{//それ以外は
			$('.openbtn').removeClass('fadeDown');//fadeDownというクラス名を除き
			$('#headerMenu').removeClass('dnone');//dnoneというクラス名を除く
		}
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

//ボタンをクリックした際のアニメーションの設定
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#headerMenu").toggleClass('panelactive');
});
$("#gnav li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#headerMenu").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});

//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
    $('#gnav li a').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top-0;
	$('body,html').animate({scrollTop: pos}, 1000);
	return false;
});


// ロゴをふわっとさせたい
//実験
//https://b-risk.jp/wp/wp-content/themes/brisk/sample/entry/20210107/

let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('load', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 0) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});



/*ページトップボタン*/

$(window).scroll(function () {
  var now = $(window).scrollTop();
  if (now > 200) {
    $('.pagetop').fadeIn("slow");
  } else {
    $('.pagetop').fadeOut('slow');
  }
})


/*http://ishi-note.com/6814.html*/
/*季節のメニューをふわっとさせたい*/

window.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function (){
      var myFade = document.getElementsByClassName("fadein");
      for(var i = 0; i < myFade.length; i++){
        var targetElement = myFade[i].getBoundingClientRect(); //ターゲット要素の高さ
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;  //スクロール
        var windowHeight = window.innerHeight;  //ウィンドウの高さ
        if (scroll > scroll + targetElement.top - windowHeight + 300){
          myFade[i].style.opacity = "1";
          myFade[i].style.transform = "translateY(0)";
        }
      }
    }
}, false);

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述






// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


