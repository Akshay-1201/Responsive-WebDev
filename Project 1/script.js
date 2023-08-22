// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
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