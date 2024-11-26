/**
 * Template Name: Mamba - v2.0.1
 * Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: "50",
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on(
    "click",
    ".nav-menu a, .mobile-nav a, .scrollto",
    function (e) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
          var scrollto = target.offset().top;
          var scrolled = 2;

          if ($("#header-sticky-wrapper").length) {
            scrollto -= $("#header-sticky-wrapper").outerHeight() - scrolled;
          }

          if ($(this).attr("href") == "#header") {
            scrollto = 0;
          }

          $("html, body").animate(
            {
              scrollTop: scrollto,
            },
            1500,
            "easeInOutExpo"
          );

          if ($(this).parents(".nav-menu, .mobile-nav").length) {
            $(".nav-menu .active, .mobile-nav .active").removeClass("active");
            $(this).closest("li").addClass("active");
          }

          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
              "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").fadeOut();
          }
          return false;
        }
      }
    }
  );

  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").toggle();
    });

    $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass("active");
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel
    .find(".carousel-inner")
    .children(".carousel-item")
    .each(function (index) {
      index === 0
        ? heroCarouselIndicators.append(
            "<li data-target='#heroCarousel' data-slide-to='" +
              index +
              "' class='active'></li>"
          )
        : heroCarouselIndicators.append(
            "<li data-target='#heroCarousel' data-slide-to='" +
              index +
              "'></li>"
          );
    });

  heroCarousel.on("slid.bs.carousel", function (e) {
    $(this).find("h2").addClass("animated fadeInDown");
    $(this).find("p").addClass("animated fadeInUp");
    $(this).find(".btn-get-started").addClass("animated fadeInUp");
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Initiate the venobox plugin
  $(window).on("load", function () {
    $(".venobox").venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });
})(jQuery);






// AJAX submission for WordCloud form
document
  .querySelector("#wordcloud-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // 收集表单数据
    const formData = new FormData(this);

    // 发送表单数据到服务器
    fetch("/WordCloudTool", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("生成词云失败！");
        }
        return response.blob(); // 期望服务器返回图片
      })
      .then((blob) => {
        // 显示生成的词云
        const imgElement = document.querySelector("#generated-wordcloud");
        imgElement.src = URL.createObjectURL(blob);
        imgElement.style.display = "block"; // 确保图片可见
        document.querySelector("#wordcloud-image").style.display = "block"; // 显示图片区域
      })
      .catch((error) => {
        alert(error.message); // 显示错误信息
      });
  });


