import { motion, AnimatePresence } from 'framer-motion';
import {Title} from "./ui/Title";

export const Modal = ({setModalOpen, modalOpen}) => {

    const backdropVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modalVariants = {
        hidden: {
            y: "-100%",
            opacity: 0,
        },
        visible: {
            y: "0%",
            opacity: 1,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 500,
            },
        },
    };

    return (
        <div>
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className='fixed z-[999999] left-0 right-0 top-0 bottom-0'
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.div
                            className='absolute left-0 z-40 right-0 top-0 bottom-0 opacity-0 bg-black'
                            variants={backdropVariants}
                            onClick={() => setModalOpen(false)}
                        />
                        <motion.div
                            className='m-8 sm:m-[5rem] border border-white rounded-3xl p-10 sm:p-[5rem] bg-black relative top-0 bottom-0 z-50'
                            variants={modalVariants}
                        >
                            <div onClick={() => setModalOpen(false)} className='cursor-pointer absolute right-10 top-10 uppercase text-2xl text-right'>X</div>
                            <Title className='mb-12 text-lg hidden sm:block'>Special Offer</Title>
                            <p className='text-center text-lg sm:text-3xl pt-10 sm:pt-0 mb-4'>
                                Leave your phone number and you'll get free consultation
                            </p>
                            <form className='text-sm sm:text-xl flex flex-col gap-4 max-w-3xl mx-auto'>
                                <input
                                    className='bg-black border border-white p-4'
                                    type="tel"
                                    placeholder='Enter your phone number'
                                />
                                <textarea
                                    placeholder='What would you like to talk about'
                                    className='bg-black border border-white p-4'
                                    cols="30"
                                    rows="10"
                                ></textarea>
                                <button
                                    className='bg-black border border-white p-4 hover:bg-white hover:text-black hover:border-black uppercase'
                                    type='submit'
                                >
                                    Submit
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}