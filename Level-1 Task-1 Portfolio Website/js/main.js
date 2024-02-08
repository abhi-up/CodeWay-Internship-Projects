;(function ($) {
  "use strict"
  console.clear()

  let device_width = window.innerWidth

  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
      navigator.userAgent
    )
      ? true
      : false

  var petrix = {
    /* petrix init */
    init() {
      petrix.textAnimation(),
        petrix.marquee(),
        petrix.buttonHover(),
        petrix.normalHover(),
        petrix.headingAnimation(),
        petrix.animation(),
        petrix.magnificPopup(),
        petrix.menuFix(),
        petrix.counter(),
        petrix.stickSidebar(),
        petrix.testimonialSlider(),
        petrix.toggle(),
        petrix.customMouse()
    },

    /** Text animation */
    textAnimation() {
      if (device_width > 767) {
        var hasAnim = $(".text_hover_animaiton")
        if (hasAnim.length !== 0) {
          hasAnim.each(function () {
            var $this = $(this)
            var splitType = "words,chars"
            new SplitText($this, {
              type: splitType,
              wordsClass: "menu-text",
            })
          })
        }
      }
    },
    marquee() {
      $(".section_heading h2").marquee({
        speed: 70,
        gap: 0,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
      })
    },
    /** Mouse */
    customMouse() {
      var mouse = { x: 0, y: 0 } // Cursor position
      var pos = { x: 0, y: 0 } // Cursor position
      var ratio = 0.15 // delay follow cursor
      var active = false
      var ball = $("#ball")

      /** default */
      const defaultValue = {
        duration: 0.3,
        opacity: 0.5,
        width: "30px",
        height: "30px",
        backgroundColor: "transparent",
        border: "2px solid #555",
      }
      const hoverBall = {
        duration: 0.3,
        css: {
          borderWidth: 0,
          opacity: "1!important",
          width: "120px!important",
          height: "120px!important",
          backgroundColor: "#010101",
        },
      }
      gsap.set(ball, {
        // scale from middle and style ball
        xPercent: -50,
        yPercent: -50,
      })
      document.addEventListener("mousemove", mouseMove)
      function mouseMove(e) {
        mouse.x = e.clientX
        mouse.y = e.clientY
      }
      gsap.ticker.add(updatePosition)
      function updatePosition() {
        if (!active) {
          pos.x += (mouse.x - pos.x) * ratio
          pos.y += (mouse.y - pos.y) * ratio

          gsap.set(ball, { x: pos.x, y: pos.y })
        }
      }
      // link
      $("a,.c-pointer,button,.progress")
        .not(".project_slider a") // omit from selection.
        .on("mouseenter", function () {
          gsap.to(ball, {
            duration: 0.3,
            borderWidth: 0,
            opacity: 0.5,
            backgroundColor: "#CCC",
            width: "80px",
            height: "80px",
          })
        })
        .on("mouseleave", function () {
          gsap.to(ball, defaultValue)
        })

      // Data cursor
      if ($("[data-cursor]")) {
        $("[data-cursor]").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append('<div class="ball-view"></div>')
              $(".ball-view").append($(this).attr("data-cursor"))
              gsap.to(ball, hoverBall)
            })
            .on("mouseleave", function () {
              ball.find(".ball-view").remove()
              gsap.to(ball, defaultValue)
            })
        })
      }

      // Slider
      if ($(".cursor-arrow")) {
        $(".cursor-arrow").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append(
                '<div class="ball-arrow"><i class="fx-icon-long-next-arrow"></i></div>'
              )
              // $(".ball-drag").append("read more");
              gsap.to(ball, hoverBall)
            })
            .on("mouseleave", function () {
              ball.find(".ball-arrow").remove()
              gsap.to(ball, defaultValue)
            })
        })
      }

      if ($(".image-view")) {
        $(".image-view").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append('<div class="ball-image-view"></div>')
              $(".ball-image-view").append($(this).attr("data-img-cursor"))
              gsap.to(ball, {
                duration: 0.3,
                css: {
                  borderWidth: 0,
                  opacity: "1!important",
                  width: "250px!important",
                  height: "250px!important",
                  borderRadius: "50%",
                },
              })
            })
            .on("mouseleave", function () {
              ball.find(".ball-image-view").remove()
              gsap.to(ball, defaultValue)
            })
        })
      }

      // Gallery
      if ($(".gallery")) {
        $(".gallery").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append(
                '<div class="ball-gallery"><i class="fa-sharp fa-solid fa-eye"></i></div>'
              )
              // $(".ball-drag").append("read more");
              gsap.to(ball, hoverBall)
            })
            .on("mouseleave", function () {
              ball.find(".ball-gallery").remove()
              gsap.to(ball, defaultValue)
            })
        })
      }
    },
    /** Btn hover */
    buttonHover() {
      class Magnet {
        constructor(target, magnetism = 0.2) {
          this.target = target
          this.magnetism = magnetism
          this.interval
          this.hover = false
          this.bubble
          this.content
          this.initX
          this.initY
          this.cursorX = 0
          this.cursorY = 0
          this.buttonX = 0
          this.buttonY = 0
          this.contentX = 0
          this.contentY = 0
          this.bubbleX = 0
          this.bubbleY = 0
          this.init()
        }

        init() {
          this.initX =
            this.target.getBoundingClientRect().left +
            this.target.offsetWidth / 2
          this.initY =
            this.target.getBoundingClientRect().top +
            this.target.offsetHeight / 2

          let inner = this.target.innerHTML
          inner = `<span class="js-magnet-content magnet-content">${inner}</span>`
          inner = `<i class="js-magner-bubble magnet-bubble"></i>${inner}`
          this.target.innerHTML = inner
          this.bubble = this.target.querySelector(".js-magner-bubble")
          this.content = this.target.querySelector(".js-magnet-content")

          let timelineBubble = gsap
            .timeline({ paused: true })
            .to(this.bubble, {
              duration: 0,
              opacity: 1,
            })
            .to(this.bubble, {
              duration: 0.6,
              scaleX: "15000%",
              scaleY: "15000%",
            })
          var ball = $("#ball")
          this.target.addEventListener("mouseenter", (e) => {
            this.hover = true
            this.moveBubble(e)
            timelineBubble.play()
            let that = this
            this.interval = setInterval(this.magnetize, 30, that)
            ball.removeClass("d-block")
            ball.addClass("d-none")
          })

          this.target.addEventListener("mouseleave", (e) => {
            this.moveBubble(e)
            timelineBubble.reverse()
            this.hover = false
            this.cursorX = 0
            this.cursorY = 0
            ball.removeClass("d-none")
            ball.addClass("d-block")
          })

          this.target.addEventListener("mousemove", (e) => {
            let targetX =
              this.target.getBoundingClientRect().left +
              this.target.offsetWidth / 2
            let targetY =
              this.target.getBoundingClientRect().top +
              this.target.offsetHeight / 2
            this.cursorX =
              ((e.clientX - targetX) * 100) / (this.target.offsetWidth / 2)
            this.cursorY =
              ((e.clientY - targetY) * 100) / (this.target.offsetHeight / 2)
          })
        }

        moveBubble(e) {
          this.bubbleX = (e.layerX * 100) / this.target.offsetWidth
          this.bubbleY = (e.layerY * 100) / this.target.offsetHeight
          this.bubble.style.left = this.bubbleX + "%"
          this.bubble.style.top = this.bubbleY + "%"
        }

        magnetize(that) {
          let distance = Math.sqrt(
            (that.initX - that.buttonX) ** 2 + (that.initY - that.buttonY) ** 2
          )
          let magnetized = distance > 0.01 && that.hover ? true : false

          if (magnetized) {
            that.buttonX += (that.cursorX - that.buttonX) * 0.2
            that.buttonY += (that.cursorY - that.buttonY) * 0.2
            that.contentX += (that.cursorX - that.contentX) * 0.2
            that.contentY += (that.cursorY - that.contentY) * 0.2
            let buttonTranslateX = `translateX(${
              that.buttonX * that.magnetism
            }%)`
            let buttonTranslateY = `translateY(${
              that.buttonY * that.magnetism
            }%)`
            let contentTranslateX = `translateX(${
              (-that.contentX * that.magnetism) / 2
            }%)`
            let contentTranslateY = `translateY(${
              (-that.contentY * that.magnetism) / 2
            }%)`
            that.target.style.transform =
              buttonTranslateX + " " + buttonTranslateY
            that.content.style.transform =
              contentTranslateX + " " + contentTranslateY
          } else {
            that.target.style.transform = "translateX(0%) translateY(0%)"
            that.content.style.transform = "translateX(0%) translateY(0%)"
            clearInterval(that.interval)
          }
        }
      }

      let magnets = document.querySelectorAll(".circle_btn")
      magnets.forEach((magnet) => {
        new Magnet(magnet)
      })
    },
    /** Hover */
    normalHover() {
      class Magnet {
        constructor(target, magnetism = 0.2) {
          this.target = target
          this.magnetism = magnetism
          this.interval
          this.hover = false
          this.bubble
          this.content
          this.initX
          this.initY
          this.cursorX = 0
          this.cursorY = 0
          this.buttonX = 0
          this.buttonY = 0
          this.contentX = 0
          this.contentY = 0
          this.bubbleX = 0
          this.bubbleY = 0
          this.init()
        }

        init() {
          this.initX =
            this.target.getBoundingClientRect().left +
            this.target.offsetWidth / 2
          this.initY =
            this.target.getBoundingClientRect().top +
            this.target.offsetHeight / 2

          let inner = this.target.innerHTML
          inner = `<span class="js-magnet-content magnet-content">${inner}</span>`
          inner = `<i class="js-magner-bubble magnet-bubble"></i>${inner}`
          this.target.innerHTML = inner
          this.bubble = this.target.querySelector(".js-magner-bubble")
          this.content = this.target.querySelector(".js-magnet-content")

          let timelineBubble = gsap
            .timeline({ paused: true })
            .to(this.bubble, {
              duration: 0,
              opacity: 1,
            })
            .to(this.bubble, {
              duration: 0.6,
              scaleX: "15000%",
              scaleY: "15000%",
            })
          var ball = $("#ball")
          this.target.addEventListener("mouseenter", (e) => {
            this.hover = true
            this.moveBubble(e)
            timelineBubble.play()
            let that = this
            this.interval = setInterval(this.magnetize, 30, that)
            ball.removeClass("d-block")
            ball.addClass("d-none")
          })

          this.target.addEventListener("mouseleave", (e) => {
            this.moveBubble(e)
            timelineBubble.reverse()
            this.hover = false
            this.cursorX = 0
            this.cursorY = 0
            ball.removeClass("d-none")
            ball.addClass("d-block")
          })

          this.target.addEventListener("mousemove", (e) => {
            let targetX =
              this.target.getBoundingClientRect().left +
              this.target.offsetWidth / 2
            let targetY =
              this.target.getBoundingClientRect().top +
              this.target.offsetHeight / 2
            this.cursorX =
              ((e.clientX - targetX) * 100) / (this.target.offsetWidth / 2)
            this.cursorY =
              ((e.clientY - targetY) * 100) / (this.target.offsetHeight / 2)
          })
        }

        moveBubble(e) {
          this.bubbleX = (e.layerX * 100) / this.target.offsetWidth
          this.bubbleY = (e.layerY * 100) / this.target.offsetHeight
          this.bubble.style.left = this.bubbleX + "%"
          this.bubble.style.top = this.bubbleY + "%"
        }

        magnetize(that) {
          let distance = Math.sqrt(
            (that.initX - that.buttonX) ** 2 + (that.initY - that.buttonY) ** 2
          )
          let magnetized = distance > 0.01 && that.hover ? true : false

          if (magnetized) {
            that.buttonX += (that.cursorX - that.buttonX) * 0.2
            that.buttonY += (that.cursorY - that.buttonY) * 0.2
            that.contentX += (that.cursorX - that.contentX) * 0.2
            that.contentY += (that.cursorY - that.contentY) * 0.2
            let buttonTranslateX = `translateX(${
              that.buttonX * that.magnetism
            }%)`
            let buttonTranslateY = `translateY(${
              that.buttonY * that.magnetism
            }%)`
            let contentTranslateX = `translateX(${
              (-that.contentX * that.magnetism) / 2
            }%)`
            let contentTranslateY = `translateY(${
              (-that.contentY * that.magnetism) / 2
            }%)`
            //   that.target.style.transform =
            //     buttonTranslateX + " " + buttonTranslateY;
            //   that.content.style.transform =
            //     contentTranslateX + " " + contentTranslateY;
          } else {
            that.target.style.transform = "translateX(0%) translateY(0%)"
            that.content.style.transform = "translateX(0%) translateY(0%)"
            clearInterval(that.interval)
          }
        }
      }

      let magnets = document.querySelectorAll(".btn_hover")
      magnets.forEach((magnet) => {
        new Magnet(magnet)
      })
    },
    /** Heading animation */
    headingAnimation() {
      if (device_width > 767) {
        var hasAnim = $(".has-animation")
        hasAnim.each(function () {
          var $this = $(this)
          var splitType = "lines, chars"
          var splitto = new SplitText($this, {
            type: splitType,
            linesClass: "anim_line",
            charsClass: "anim_char",
            wordsClass: "anim_word",
          })
          var lines = $this.find(".anim_line"),
            words = $this.find(".anim_word"),
            chars = $this.find(".anim_char")
          gsap.fromTo(
            chars,
            { y: "100%" },
            {
              y: "0%",
              duration: 0.8,
              stagger: 0.01,
              ease: "power2.out",
              scrollTrigger: {
                trigger: $(this).parent("div"),
                start: "top center+=300",
                toggleActions: "play none none none",
              },
            }
          )
        })
      }

      if (device_width > 767) {
        let splitTextLines = gsap.utils.toArray(".text-anim")
        splitTextLines.forEach((splitTextLine) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 90%",
              duration: 0.5,
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          })

          const itemSplitted = new SplitText(splitTextLine, { type: "lines" })
          gsap.set(splitTextLine, { perspective: 400 })
          itemSplitted.split({ type: "lines" })
          tl.from(itemSplitted.lines, {
            duration: 1,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          })
        })
      }
    },
    /** animation */
    animation() {
      /** Fade Left */
      let fade_left = gsap.utils.toArray(".fade_left")
      gsap.set(fade_left, {
        opacity: 0,
        x: -30,
      })

      if (fade_left) {
        if (device_width < 1023) {
          fade_left.forEach((item, i) => {
            gsap.to(item, {
              scrollTrigger: {
                trigger: item,
                start: "top center+=150",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            })
          })
        } else {
          fade_left.forEach((item, i) => {
            const containerID = `#${item.getAttribute("data-trigerId")}`
            gsap.to(
              `${containerID !== "#null" ? containerID : ""} .fade_left`,
              {
                scrollTrigger: {
                  trigger: containerID !== "#null" ? containerID : ".fade_left",
                  start: "top center+=150",
                  markers: false,
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              }
            )
          })
        }
      }

      /** Fade Right */
      let fade_right = gsap.utils.toArray(".fade_right")
      gsap.set(fade_right, {
        opacity: 0,
        x: +30,
      })

      if (fade_right) {
        if (device_width < 1023) {
          fade_right.forEach((item, i) => {
            gsap.to(item, {
              scrollTrigger: {
                trigger: item,
                start: "top center+=150",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            })
          })
        } else {
          fade_right.forEach((item, i) => {
            const containerID = `#${item.getAttribute("data-trigerId")}`
            const stagger = item.getAttribute("data-stagger")
            gsap.to(`${containerID} .fade_right`, {
              scrollTrigger: {
                trigger: containerID,
                start: "top center+=150",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: stagger ? stagger : 0.4,
              },
            })
          })
        }
      }

      /** Fade Bottom */
      let fade_bottom = gsap.utils.toArray(".fade_bottom")
      if (device_width < 1023) {
        fade_bottom.forEach((item, i) => {
          gsap.set(item, { opacity: 0, y: 60 })
          let featured2Timeline = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top center+=200",
            },
          })
          featured2Timeline.to(item, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out",
          })
        })
      } else {
        fade_bottom.forEach((item, i) => {
          const containerID = `#${item.getAttribute("data-trigerId")}`
          const stagger = item.getAttribute("data-stagger")
          const duration = item.getAttribute("data-duration")
          const defaultValue = item.getAttribute("data-default-value")
          gsap.set(
            `${containerID !== "#null" ? containerID : ""} .fade_bottom`,
            {
              opacity: 0,
              y: defaultValue ? defaultValue : 30,
            }
          )
          gsap.to(
            `${containerID !== "#null" ? containerID : ""} .fade_bottom`,
            {
              scrollTrigger: {
                trigger: containerID !== "#null" ? containerID : ".fade_bottom",
                start: "top center+=100",
              },
              opacity: 1,
              y: 0,
              duration: duration ? duration : 2,
              ease: "power4.out",
              stagger: stagger ? stagger : 0.3,
            }
          )
        })
      }
      const appearance = document.querySelectorAll(".fade_up")

      appearance.forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
            ease: "sine",
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              toggleActions: "play none none none",
            },
          }
        )
      })
    },
    /** Preloader */
    preloader() {
      const svg = document.getElementById("svg")
      const tl = gsap.timeline()
      const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z"
      const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"

      tl.to(".preloader-text", {
        delay: 0.5,
        y: -100,
        opacity: 0,
        onComplete: function () {
          setTimeout(() => {
            var hasAnim = $(".banner_text_center h1,.breadcrumb h1")
            hasAnim.each(function () {
              var $this = $(this)
              var splitType = "lines, chars"
              var splitto = new SplitText($this, {
                type: splitType,
                linesClass: "anim_line",
                charsClass: "anim_char",
                wordsClass: "anim_word",
              })
              var lines = $this.find(".anim_line"),
                words = $this.find(".anim_word"),
                chars = $this.find(".anim_char")
              gsap.fromTo(
                chars,
                { y: "100%" },
                {
                  y: "0%",
                  duration: 0.8,
                  stagger: 0.01,
                  ease: "power2.out",
                }
              )
            })
          }, 230)
        },
      })
      tl.to(svg, {
        duration: 0.1,
        // attr: { d: curve },
        ease: "power2.easeIn",
      }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
      })
      tl.to(".preloader", {
        y: -1500,
      })
      tl.to(".preloader", {
        zIndex: -1,
        display: "none",
      })
    },
    /** popup */
    magnificPopup() {
      $(".play_btn").each(function () {
        $(this).magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          preloader: false,
          fixedContentPos: true,
        })
      })
      $(".image_popup,.gallery_popup a").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
        mainClass: "mfp-fade",
      })
      $(".details").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: true,
        mainClass: "mfp-fade petrix-popup",
      })
    },
    /** Menu fix */
    menuFix() {
      if ($(".main_menu").offset() != undefined) {
        $(window).bind("scroll", function () {
          if ($(window).scrollTop() > 40) {
            $(".main_menu").addClass("menu_fix")
          } else {
            $(".main_menu").removeClass("menu_fix")
          }
        })
      }
    },
    /** counter up */
    counter() {
      $(".counter").countUp()
    },
    /** Sticky sidebar */
    stickSidebar() {
      $("#sticky_sidebar").stickit({
        top: 90,
      })
    },
    /** toggle */
    toggle() {
      $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show")
      })
    },
    testimonialSlider() {
      $(".testi_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              arrows: false,
            },
          },
        ],
      })
    },
  }
  window.onload = function () {
    petrix.preloader()
  }
  $(document).ready(function () {
    petrix.init()
  })
})(jQuery)
