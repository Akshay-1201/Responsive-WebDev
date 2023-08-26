function loco (){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

gsap.to(".page video", {
    scrollTrigger:{
        trigger:`.page video`,
        start:`1% top`,
        end: `bottom top`,
        // markers:true,
        scroller:`.main`
        },
        onStart:()=>{
            document.querySelector(".page video").play()
        }
})
gsap.to(".page", {
    scrollTrigger:{
        trigger:`.page`,
        start:`top top`,
        end:`bottom top`,
        scroller:`.main`,
        pin:true
    }
})
gsap.to(".page-bootom", {
    scrollTrigger:{
        trigger:`.page-bootom`,
        start:`5% top`,
        end:`bottom top`,
        scroller:`.main`,
      
    },
    opacity:0
})


let tl = gsap.timeline({
  scrollTrigger:{
    trigger:`.page1`,
    start:`top top`,
    scrub:1,
    scroller:`.main`,
    // markers:true,
    pin:true
  }
})
tl.to(".page1 h1",{
  top:`-50%`
})

let tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:`.page2`,
    start:`top top`,
    scrub:1,
    scroller:`.main`,
    // markers:true,
    pin:true
  }
})
tl1.to(".page2 h1",{
  top:`-50%`
})

let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:`.page3`,
    start:`top top`,
    scrub:1,
    scroller:`.main`,
    // markers:true,
    pin:true
  }
})
tl2.to(".page3 h1",{
  top:`-50%`
})

let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:`.page4`,
    start:`top top`,
    scrub:1,
    scroller:`.main`,
    // markers:true,
    pin:true
  }
})
tl3.to(".page4 h1",{
  top:`-50%`
})

let tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:`.page6`,
    start:`top top`,
    scrub:1,
    scroller:`.main`,
    // markers:true,
    pin:true
  }
})
tl4.to(".page6 h1",{
  top:`-50%`
})


