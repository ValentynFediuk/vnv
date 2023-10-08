import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {WhyUs} from "./components/WhyUs";
import {Services} from "./components/Services";
import {Portfolio} from "./components/Portfolio";
import {ContactUs} from "./components/ContanctUs";
import {Brief} from "./components/Brief";
import {FAQ} from "./components/FAQ";
import {Footer} from "./components/Footer";
import {useEffect, useState} from "react";
import {Modal} from "./components/Modal";

function App() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false)

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight - windowHeight;
        const currentScroll = window.scrollY;
        const scrollPercentage = (currentScroll / scrollHeight) * 100;
        setScrollPercentage(scrollPercentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div
                className="h-1 bg-red-700 z-[999999999999999] fixed top-0"
                style={{ width: `${scrollPercentage}%` }}
            ></div>
            <Header/>
            <main>
                <Hero/>
                <WhyUs/>
                <Services/>
                <Portfolio/>
                <ContactUs/>
                <Brief />
                <FAQ />
            </main>
            <Footer />
            <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />

            <div onClick={() => setModalOpen(true)} className='cursor-pointer border border-red-700 rounded-xl p-2 sm:p-4 fixed z-40 right-10 bottom-10 text-red-700 text-center uppercase font-700 text-lg sm:text-2xl animate-pulse'>SPECIAL <br/> OFFER</div>
        </>
    );
}

export default App;
