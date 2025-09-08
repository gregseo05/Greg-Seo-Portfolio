import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const counterRef = useRef(null);

    useGSAP(() => {
        // No animation needed for static content
    }, []);

    return (
        <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
            <div className="flex flex-row max-w-7xl mx-auto w-full h-[36rem] gap-24">
                {/* Left half: Circular headshot centered */}
                <div className="w-1/2 flex items-center justify-center">
                    <div className="bg-zinc-900 rounded-full w-[32rem] h-[32rem] flex items-center justify-center overflow-hidden shadow-lg">
                        <img
                            src="/images/greg.jpg"
                            alt="Headshot"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                {/* Right half: About Me box centered */}
                <div className="w-1/2 flex items-center justify-center">
                    <div className="bg-zinc-900 rounded-b-3xl p-10 flex flex-col justify-center min-h-[36rem] shadow-lg w-full max-w-10xl">
                        <div className="text-white-50 text-4xl font-extrabold mb-3 text-center">
                            About Me
                        </div>
                        <div className="text-white-50 text-lg text-center mb-6">
                            Hi, I'm Greg, a graduate from the University of Washington’s Foster School of Business with a focus on Information Systems.
                            I bring a strong foundation in SQL querying, Python data analysis, Tableau and Power BI dashboards, and Excel modeling,
                            built through both academic projects and hands-on experience.
                        </div>
                        <div className="text-white-50 text-lg mb-3 text-center">
                            Thank you for visiting my portfolio! I’m actively pursuing opportunities in analyst roles where I can apply my skills to generate insights,
                            solve problems, and support data-driven decision making. I am growth-oriented, motivated by challenges,
                            nd always eager to learn new tools and approaches that can add value.
                            <br /><br />
                            I thrive in environments that encourage curiosity, critical thinking, and collaboration,
                            and I enjoy turning complex information into meaningful stories that drive impact.
                            My goal is to contribute to a team where I can make a positive difference!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedCounter;