import {Button} from "./ui/Button";
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section id='hero' className='py-[8rem] text-center'>
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }} // Initial state (invisible and slightly above)
                    animate={{ opacity: 1, y: 0 }} // Animation state (visible and in its original position)
                    transition={{ duration: 1 }} // Animation duration
                    className='text-5xl sm:text-9xl mb-8 sm:mb-16'
                >
                   VNV Solutions
                </motion.h1>
                <Button>Order</Button>
            </div>
        </section>
    )
}