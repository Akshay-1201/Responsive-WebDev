// const scroll = new LocomotiveScroll({
//     el:document.querySelector('#main'),
//     smooth: true
// });
let timeout ;
function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}
circleMouseFollower();
function firstPageAnim(){
    let tl = gsap.timeline();
    tl.from(".nav", {
        y: '10',
        opacity:0,
        duration: 1,
        ease: Expo
    })
    .to(".boundingelem", {
        y:0,
        ease:Expo.easeInout,
        duration:1,
        stagger:.2,
        delay:-1
    })
    .from(".hero-footer", {
        y: '-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInout,
        delay:-1
    })
}
firstPageAnim();
 function flatCircle(){
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);
        
        yprev = dets.clientY;
        xprev = dets.clientX;

        circleMouseFollower(xscale,yscale);

        timeout = setTimeout(() => {
            document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        }, 100);
        
    })
 }
 flatCircle();

 document.querySelectorAll(".elem").forEach(function(elem){

    let rotate = 0;
    let diffrot = 0;

    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,

        })
    })

    elem.addEventListener("mousemove", function (dets){
        // console.log(dets)

        let diff = elem.getBoundingClientRect().top - dets.clientY;

        diffrot = dets.clientX-rotate;
        rotate = dets.clientX;
        

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power2,
            top:diff * 0.2,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot)
        });
    });
 });
 function bigcircleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector(".biscircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
        
    })
}
bigcircleMouseFollower();