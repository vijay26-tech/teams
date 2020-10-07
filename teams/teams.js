//jshint esversion:6
gsap.registerPlugin(ScrollTrigger);
gsap.from(".gsec .l-card", {x:-300,y:100, duration: 2,opacity:0.2});
gsap.from(".gsec .r-card", {x:300,y:100, duration: 2,opacity:0.2});
gsap.from(".co .l-card", {scrollTrigger:".co .l-card",x:-300,y:100, duration: 2,opacity:0.2});
gsap.from(".co .r-card", {scrollTrigger:".co .l-card",x:300,y:100, duration: 2,opacity:0.2});
gsap.from(".gsec",{scrollTrigger:{trigger:".gsec",start:"top top",pin:true } });
gsap.from(".co",{scrollTrigger:{trigger:".co",start:"top top",pin:true } });
