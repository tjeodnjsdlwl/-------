$(function(){

    /**스크롤이벤트*/ 
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        if(curr > 10){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
   });
   $(window).trigger('scroll'); //스크롤 강제실행



   /**
    * @visual
    * 
    * 
    */
   visualMotion = gsap.timeline({})
   visualMotion.from('.sc-visual .text-box',{ opacity:0, yPercent:30 })
   visualMotion.from('.sc-visual .img-box img:nth-child(3)',{ opacity:0, yPercent:30 })
   visualMotion.addLabel('a')
   visualMotion.from('.sc-visual .img-box img:nth-child(2)',{ opacity:0, xPercent:30 },'a')
   visualMotion.from('.sc-visual .img-box img:nth-child(4)',{ opacity:0, xPercent:-30 },'a')
   visualMotion.from('.sc-visual .img-box img:nth-child(1)',{ opacity:0, xPercent:30 },'a+=0.3')
   visualMotion.from('.sc-visual .img-box img:nth-child(5)',{ opacity:0, xPercent:-30 },'a+=0.3')
   visualMotion.to('.sc-visual .text-box button',{ opacity:1, })

   /**
    * @intro
    * 
    * 
    */
   introMotion = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-intro",
      start:"0% 50%",
      end:"100% 0%",
      // markers:true,
    }
   })
   introMotion.from('.sc-intro h2',{opacity:0,xPercent:-5})
   introMotion.from('.sc-intro strong',{opacity:0,xPercent:-5})
   introMotion.from('.sc-intro .text-box',{opacity:0})



   /**
    * 
    * @intro2
    * 
    */

   intro2Motion = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-intro .group-motion",
      start:"0% 50%",
      end:"100% 0%",
      // markers:true,
    }
   })

   intro2Motion
   .to('.sc-intro .group-motion span i',{
    display:'block',
    stagger:0.1,
   })





     /**
    * 
    * @info
    * 
    */
     infoMotion = gsap.timeline({
      scrollTrigger:{
        trigger:".sc-info",
        start:"0% 50%",
        end:"100% 0%",
      }
     })
     infoMotion
     .from('.sc-info .info-box',{ opacity:0,xPercent:-5})
     .from('.sc-info .img-wrap .line',{opacity:0,xPercent:20, stagger:1 })

    const visualSlide1 = new Swiper(".visual-slide1", {
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        speed:1000,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
      });
      visualSlide1.on('slideChange',function(){
        if(this.realIndex === 1){
          $('.sc-slide1 .slide2-motion').addClass('on')
        }
      })





      $('.sc-slide1 .flex-area button').click(function(){
        idx=$(this).index(); //태그의 순서
        tabName = $(this).data('tab');

        $(this).addClass('active').siblings().removeClass('active');
        
        $('.sc-slide1 .text-box').removeClass('on');
        $(tabName).addClass('on')

        visualSlide1.slideTo(idx)
      })


      /**
       * onEnter
       * onLeave
       * onEnterBack
       * onLeaveBack
       * 
       */
      // 스크롤이벤트만 만들어주세요
      ScrollTrigger.create({
        trigger:".sc-slide1",
        start:"0% 50%",
        end:"100% 0%",
        // markers:true,
        onEnter:function(){
          $('.sc-slide1 .slide1-motion').addClass('on')
        },
      })

     




    const recommSlide = new Swiper(".recomm-slide", {
        slidesPerView:'auto',
        spaceBetween:40,
        centeredSlides:true,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        // pagination: {
        //   el: ".swiper-pagination",
         
        // },
      });

      recommSlide.on('slideChange',function(){
        if(this.realIndex === 1){
          $('.sc-slide2 .slide2-motion').addClass('on')
        }
      })


      function numberCounter(target_frame, target_number) {
        this.count = 0; this.diff = 0;
        this.target_count = parseInt(target_number);
        this.target_frame = document.getElementById(target_frame);
        this.timer = null;
        this.counter();
      };
      numberCounter.prototype.counter = function() {
        var self = this;
        this.diff = this.target_count - this.count;
         
        if(this.diff > 0) {
            self.count += Math.ceil(this.diff / 5);
        }
        //정규식
        this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
         
        if(this.count < this.target_count) {
            this.timer = setTimeout(function() { self.counter(); }, 20);
        } else {
            clearTimeout(this.timer);
        }
      };
      

        // 스크롤이벤트만 만들어주세요
        ScrollTrigger.create({
          trigger:".sc-slide2",
          start:"0% 30%",
          end:"100% 0%",
          // markers:true,
          onEnter:function(){
            $('.sc-slide2 .slide1-motion').addClass('on');
            setTimeout(() => {
              new numberCounter("num1", 33073490);
              new numberCounter("num2", 38442345);
            }, 3000);
          },
        })
  



     
       
/**
* @intro
* 
*/
// gsap.from('.sc-visual .title .parent span',1,{ /**1초동안 0.1초 간격으로 실행 */
//    yPercent:100,
//    stagger:0.1 /**0.1.초 간격으로 실행 */
//     })





















})//지우지말것 