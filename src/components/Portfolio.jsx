import {SimpleSlider} from "./Slider";
import {Title} from "./ui/Title";

export const Portfolio = () => (
    <section id='portfolio' className='border-white border-y-4 py-[8rem]'>
        <div className="container">
            <Title>Portfolio</Title>
            <SimpleSlider>
                <div>
                    <img className='w-[50rem] mx-auto' src="/blonde.jpeg" alt="Blonde"/>
                </div>
                <div>
                    <img className='w-[50rem] mx-auto' src="/brunette.jpeg" alt="Brunette"/>
                </div>
                <div>
                    <img className='w-[50rem] mx-auto' src="/big-tits.jpeg" alt="Big Tits"/>
                </div>
            </SimpleSlider>
        </div>
    </section>
)