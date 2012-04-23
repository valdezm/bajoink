
$(document).ready(function () {
	SetHeader();
	SetButtons();
	SetContentHeight();
        
	bgimg = $("#bg img");
	var hash = window.location.hash;
	var idtoclick = hash + "-link";
	$(idtoclick).click();
	$("body").scrollTop(0);
});

$(window).load(function () {
	InitBackgroundImage();
	$(window).resize(function () {
		SetBackgroundImage();
		SetContentHeight();
	});
});

var allNav = $("#nav ul li");
var contentitems = $("#content-main > div");
var invitationinfo = $("p#invitation-intro");
var moreinfonav = $("div#more-info-nav");
var moreinfonavlinks = moreinfonav.find("a");
var moreinfoitems = $("div#more-info > div");
function setHiringNotice () {
    var notice = $("#hiring-notice");

    setTimeout(function () {
        notice.slideDown("slow", "easeOutCubic");
    }, 1000);

    $("#close-hiring").click(function () {
        notice.slideUp("slow", "easeOutCubic");
    });

    $("#notice-link").click(function () {
            /*
				BEFORE ACTIONABLE LINK
			allNav.removeClass("selected");
            $("#jobs-link").addClass("selected");
            contentitems.hide();
            invitationinfo.hide();
            moreinfonav.hide();
            $("div#jobs-section").show("drop", { direction: "up" }, 800);
				*/
            notice.slideUp("slow", "easeOutCubic");
    });
}


var SetHeader = function () {

	$("#nav ul li").click(function () {
		HeaderSelect($(this));
	});

	var loginlink = $("#nav ul li#today-link");
	loginlink.click(function () {
		$("div#today").show("drop", { direction: "up" }, 800);
	});

        var jobslink = $("#nav ul li#past-link");
                jobslink.click(function () {
		$("div#jobs-section").show("drop", { direction: "up" }, 800);
	});

	var invitationlink = $("#nav ul li#invitation-link");
	invitationlink.click(function () {
		$("div#invitation").show("drop", { direction: "up" }, 800);
		invitationinfo.show("drop", { direction: "up" }, 800);
	});

	$("a.invitation").click(function () {
		invitationlink.click();
	});

	var moreinfolink = $("#nav ul li#more-info-link");
	moreinfolink.click(function () {
		$("div#more-info").show("drop", { direction: "up" }, 800);
		moreinfonav.show("drop", { direction: "up" }, 800);
	});

	moreinfonavlinks.click(function () {
		var clicked = $(this);
		MoreInfoNavSelect(clicked);
	});



	var aboutlink = $("a#about-link", moreinfonav);
	aboutlink.click(function () {
		$("div#more-info div#about").show("drop", { direction: "up" }, 800);
		$(".logo img").hide();//Hide logo imgs for IE 7
	});

	var howlink = $("a#how-link", moreinfonav);
	howlink.click(function () {
		$("div#more-info div#how").show("drop", { direction: "up" }, 800);
		$(".logo img").hide();//Hide logo imgs for IE 7
	});

	var teamlink = $("a#team-link", moreinfonav);
	teamlink.click(function () {
		$("div#more-info div#team").show("drop", { direction: "up" }, 800);
		$(".logo img").hide();//Hide logo imgs for IE 7
	});

	var contactlink = $("a#contact-link", moreinfonav);
	contactlink.click(function () {
		$("div#more-info div#contact").show("drop", { direction: "up" }, 800);
		$(".logo img").hide();//Hide logo imgs for IE 7
	});

	var faqlink = $("a#faq-link", moreinfonav);
	faqlink.click(function () {
		$("div#more-info div#faq").show("drop", { direction: "up" }, 800);
		$(".logo img").hide();//Hide logo imgs for IE 7
	});
	var jobslink = $("a#jobs-link", moreinfonav);
	jobslink.click(function () {
		$("div#more-info div#jobs").show("drop", { direction: "up" }, 800);
		$(".logo img").hide();//Hide logo imgs for IE 7
	});

	var voucherlink = $("a#voucher-link", moreinfonav);
	voucherlink.click(function () {
		$(".logo img").show("drop", { direction: "up" }, 800);//Show logo imgs for IE 7
		$("div#more-info div#voucher").show("drop", { direction: "up" }, 800);
	});
};

function popitup(url) {
	newwindow=window.open(url,'Art.sy on New York Magazine','height=620,width=470');
	if (window.focus) {newwindow.focus()}
	return false;
}

var HeaderSelect = function (clicked) {
	allNav.removeClass("selected");
	clicked.addClass("selected");
	contentitems.hide();
	invitationinfo.hide();
	moreinfonav.hide();
};

var MoreInfoNavSelect = function (clicked) {
	var moreinfolink = $("#nav ul li#more-info-link");
	moreinfolink.click();
	moreinfonavlinks.removeClass("selected");
	clicked.addClass("selected");
	moreinfonav.show("drop", { direction: "up" }, 800);
	moreinfoitems.hide();
};

var SetButtons = function () {
	$("#btn-login").mouseover(function () {
		$(this).attr("src", "/splash/images/btn_login_over.png");
	});
	$("#btn-login").mouseout(function () {
		$(this).attr("src", "/splash/images/btn_login.png");
	});
	$("#btn-login").mousedown(function () {
		$(this).attr("src", "/splash/images/btn_login_down.png");
	});
	$("#btn-login").mouseup(function () {
		$(this).attr("src", "/splash/images/btn_login_over.png");
	});

	$("#btn-invitation").mouseover(function () {
		$(this).attr("src", "/splash/images/btn_invitation_over.png");
	});
	$("#btn-invitation").mouseout(function () {
		$(this).attr("src", "/splash/images/btn_invitation.png");
	});
	$("#btn-invitation").mousedown(function () {
		$(this).attr("src", "/splash/images/btn_invitation_down.png");
	});
	$("#btn-invitation").mouseup(function () {
		$(this).attr("src", "/splash/images/btn_invitation_over.png");
	});

	var invaddress = $("div#invitation-address");
	$("input#isartist").click(function () {
		if ($(this).is(':checked')) {
			invaddress.show("drop", { direction: "up" }, 800);
		} else {
			invaddress.hide();
		}
	});
$(function() {
		// run the currently selected effect
		function runEffect() {
			// get effect type from 
			var selectedEffect = $( "#effectTypes" ).val();

			// most effect types need no options passed by default
			var options = {};
			// some effects have required parameters
			if ( selectedEffect === "scale" ) {
				options = { percent: 100 };
			} else if ( selectedEffect === "size" ) {
				options = { to: { width: 280, height: 185 } };
			}

			// run the effect
			$( "#effect" ).show( selectedEffect, options, 500, callback );
		};

		//callback function to bring a hidden box back
		function callback() {
			setTimeout(function() {
				$( "#effect:visible" ).removeAttr( "style" ).fadeOut();
			}, 1000 );
		};

		// set effect from select menu value
		$( "#button" ).click(function() {
			runEffect();
			return false;
		});

		$( "#effect" ).hide();
	});
	$("form#form-invitation").submit(function () {
		var form = $(this);
		$.post('/signup/index',
			$(form).serialize(),
			function(result) {
				$(form).hide();
				$("div#invitation-confirm").show("drop", { direction: "up" }, 800);
			});
		return false;
	});
	
	$('form#member-login').submit(function() {
		$('.error.passWrong').show("drop", { direction: "up" }, 800);
		return false;
	});
};


/**
 * Make sure that background image always cover the entire window regardless of window height and width
 * Similar essentially to background-size: cover in CSS3
 * @return
 */

var bgimg;
var img_w;
var img_h;
var img_aspect;

var InitBackgroundImage = function () {
	img_w = bgimg.width();
	img_h = bgimg.height();
	img_aspect = img_w / img_h;
	SetBackgroundImage();
	bgimg.fadeIn("normal", function() {
            setHiringNotice();
        });
};

var SetBackgroundImage = function () {
	var window_w = $(window).width();
	var window_h = $(window).height();
	var window_aspect = window_w / window_h;

	if (window_aspect > img_aspect) {
		bgimg.width(window_w);
		bgimg.height(Math.round(window_w / img_aspect));
	} else {
		bgimg.width(Math.round(window_h * img_aspect));
		bgimg.height(window_h);
	}
};

/**
 * Scale content height to be somewhat smaller than the window height
 * @return
 */
var SetContentHeight = function() {
	var targetHeight = $(window).height() - 300;
	$("#more-info .form-content").css('max-height', targetHeight);
        $("#jobs-section .form-content").css('max-height', targetHeight);
};
