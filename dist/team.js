!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("team",[],t):"object"==typeof exports?exports.team=t():e.team=t()}(this,(()=>(gsap.utils.toArray(".team-member").forEach((e=>{gsap.fromTo(member,{y:100,autoAlpha},{autoAlpha:1,y:0,scrollTrigger:{trigger:e,start:"center bottom"}})})),{})));