import ContentInput from "./ContentInput";
import ContentOutput from "./ContentOutput";
import Tab from "./Tab";
import ToneAnalyser from "./ToneAnalyser";


const HeroSection = () => {
    const tabs = [
        { title: 'Analyse Tone', content: <ToneAnalyser />},
        { title: 'Generate Content', content: <ContentInput />},
        { title: 'Review Content', content: <ContentOutput />},
    ];
    return (
        <section className=" text-white p-8 ">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold mb-12 text-center">Bloryter Simple Easy Fast</h1>
                <p className="text-lg mb-4 text-center">Get blogs written in your own tone within seconds</p>
            </div>
            <div className="w-full mx-auto">
                <Tab tabs={tabs} />
            </div>
        </section>
    );
};

export default HeroSection;
