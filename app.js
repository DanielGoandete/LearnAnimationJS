

const tl= gsap.timeline({defaults:{ease:"power1.out"}});

tl.to('.text',{y:'0%', duration:1, stagger:0.25});

tl.to('.slider',{y:'-100%', duration:1.5, delay:0.5});

//get from the positioin y with the duration 1 and start 1 sec before  
tl.to('.intro',{y:'-100%', duration:1}, "-=2");

//get the nav from opacity 0 to opacity 1 with the duration of 1
t1.fromto('nav',{opacity:0},{opacity:1, duration:1});

//get the class .big-text  from opacity 0 to opacity 1 with the duration of 1
t1.fromto('.big-text',{opacity:0},{opacity:1, duration:1}, "-=1");