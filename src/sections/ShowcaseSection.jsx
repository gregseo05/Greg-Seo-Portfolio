import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const seattleRef = useRef(null);
    const britishRef = useRef(null);
    const heartRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        const cards = [seattleRef.current, britishRef.current, heartRef.current];
        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout flex w-full gap-8">
                    {/* Left: First project */}
                    <div ref={seattleRef} className="first-project-wrapper w-1/2 flex items-center justify-center">
                        <div className="image-wrapper h-200 w-full overflow-hidden">
                            <img src="images/project1.jpg" alt="Seattle Housing" className="w-full h-full object-cover"/>
                        </div>
                        <div className="text-content mt-4">
                            <h2>
                                Showcasing Seattle's Housing Sales through Interactive Dashboard
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                Visual created using Tableau and Analysis conducted in SQL
                            </p>
                        </div>
                    </div>
                    {/* Right: Two stacked projects */}
                    <div className="project-list-wrapper w-1/2 flex flex-col gap-6 overflow-hidden">
                        <div className="project" ref={britishRef}>
                            <div className="image-wrapper h-100 w-full bg-[#FFEFDB] overflow-hidden">
                                <img
                                    src="images/project2.jpg"
                                    alt="British Airways"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="mt-2">British Airways Dashboard</h2>
                        </div>
                        <div className="project" ref={heartRef}>
                            <div className="image-wrapper h-100 w-full bg-[#FFE7EB] overflow-hidden">
                                <img
                                    src="images/project3.png"
                                    alt="Heart Disease Analysis"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="mt-2">Heart Disease Analysis</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;