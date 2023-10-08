import {Button} from "./ui/Button";
import {Title} from "./ui/Title";

export const WhyUs = () => (
    <section id='whyus' className='py-[8rem] border-y-4 border-white'>
        <div className="container">
            <Title>Why Us</Title>
            <ul className='grid grid-cols-1 sm:grid-cols-3 text-2xl text-center items-center mb-36 gap-16 uppercase'>
                <li className='animate-bounce hover:animate-ping'>Cutting-Edge Technology</li>
                <li className='animate-pulse hover:animate-ping'>Experienced Team</li>
                <li className='animate-bounce hover:animate-ping'>Customized Solutions</li>
                <li className='animate-pulse hover:animate-ping'>Security First Approach</li>
                <li className='animate-bounce hover:animate-ping'>24/7 Support</li>
                <li className='animate-pulse hover:animate-ping'>Cost-Effective Solutions</li>
            </ul>
            <Button className=''>Order</Button>
        </div>
    </section>
)