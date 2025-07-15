import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText);

const Hero = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
    const isMobile = useMediaQuery({maxWidth : 767})

useGSAP(() => {
    gsap.from('.title' , {
        y:100 , 
        duration : 1,
        ease : 'power1.inOut', 
        opacity : 0
    })
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines",
	});

	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	 delay: 1,
	});
	
	gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
	 },
	})
	.to(".right-leaf", { y: 200 }, 0)
	.to(".left-leaf", { y: -200 }, 0)
	.to(".arrow", { y: 100 }, 0);
	
	const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";
	
	const tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
	if (videoRef.current) {
		videoRef.current.onloadedmetadata = () => {
			tl.to(videoRef.current, {
				currentTime: videoRef.current!.duration,
			});
		};
	}
 }, []);

  return (
  <> <section id="hero" className="noisy">
    <h1 className="title">موهیتولند</h1>
    <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf"/>
    <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf"/>

    <div className="body">
  <div className="content">
        <div className="space-y-5 hidden md:block">
            <p className="hidden lg:block lg:mt-0">خنک. نوستالژی. کلاسیک.</p>
            <p className="subtitle">
               با عمو سعید <br/> تابستون خنکه!
            </p>
        </div>
        <div className="view-cocktails">
            <p className="subtitle mt-10 md:mt-0">
                بر سه راه آذری همه روزه بیا پیش عمو سعید - جیگرت حال بیاد
            </p>
            <button className="border p-2 px-4 rounded-xl border-gray-700 hover:scale-105 transition-all duration-300">
            <a href="#cocktails">کوکتل های عموسعید</a>
            </button>
        </div>
    </div>
    </div>
   </section>

   <div className="video absolute inset-0">
    <video src="/videos/output.mp4" muted
    playsInline
    ref={videoRef}
    preload="auto"/>
   </div>
</>
  )
}

export default Hero