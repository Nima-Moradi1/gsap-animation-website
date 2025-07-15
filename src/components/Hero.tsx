import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

gsap.registerPlugin(SplitText);

const Hero = () => {

    useGSAP(() => {
    gsap.from('.title' , {
        y:100, 
        opacity:0,
        duration: 1,
        ease: 'power1.inOut'
    })
            const paragraphSplit = new SplitText('.subtitle', {
            type: 'lines'});
            gsap.from(paragraphSplit.lines, {
                opacity: 0,
                yPercent : 100,
                duration : 1.8,
                ease: 'expo.out' ,
                stagger : 0.09,
                delay : 0.5
            });

            gsap.timeline({
                scrollTrigger : {
                    trigger : '#hero',
                    start : 'top top',
                    end : 'bottom top',
                    scrub : true,
                }
            })
            .to('.right-leaf', {y:300} , 0)
            .to('.left-leaf', {y:-300} , 0)
            
    },[])

  return (
   <section id="hero" className="noisy">
    <h1 className="title">موهیتولند</h1>
    <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf"/>
    <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf"/>

    <div className="body">
  <div className="content">
        <div className="space-y-5 hidden md:block">
            <p>خنک. نوستالژی. کلاسیک.</p>
            <p className="subtitle">
               با عمو سعید <br/> تابستون خنکه!
            </p>
        </div>
        <div className="view-cocktails">
            <p className="subtitle mt-10 md:mt-0">
                بر سه راه آذری همه روزه بیا پیش عمو سعید - جیگرت حال بیاد
            </p>
            <a href="#cocktails">کوکتل های عموسعید</a>
        </div>
    </div>
    </div>
  
   </section>
  )
}

export default Hero