import Tab from "./Tab";


const HeroSection = () => {
    const tabs = [
        { title: 'Analyse Tone', content: <div>Content for Tab 1</div> },
        { title: 'Generate Content', content: <div>Content for Tab 2</div> },
        { title: 'Review Content', content: <div>Content for Tab 3</div> },
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
