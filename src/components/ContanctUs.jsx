import {Title} from "./ui/Title";
import {FaTelegram, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {motion} from "framer-motion";
import {useState} from "react";


const appearFromBottom = {
    initial: {
        opacity: 0,
        y: 30, // Adjust the value to control the distance from which it appears
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5, // Adjust the duration as needed
        },
    },
};

export const ContactUs = () => {
    const [social, setSocial] = useState('Telegram')

    return (
        <section id='contactus' className="py-[8rem] border-b-4 border-white">
            <div className="container">
                <Title>Contact Us</Title>

                <Tabs className="text-center">
                    <TabList>
                        <Tab onClick={() => setSocial('Telegram')}>
                            <FaTelegram size={50}/>
                        </Tab>
                        <Tab onClick={() => setSocial('E-mail')}>
                            <FaEnvelope size={50}/>
                        </Tab>
                        <Tab onClick={() => setSocial('LinkedIn')}>
                            <FaLinkedin size={50}/>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <motion.div
                            className="py-8"
                            initial="initial"
                            animate="whileInView"
                            variants={appearFromBottom}
                        >

                            <form className="flex text-2xl flex-col gap-4">
                                <input className="bg-black border border-white p-4" type="text" placeholder="Name"/>
                                <input className="bg-black border border-white p-4" type="text" placeholder={`Your ${social}`}/>
                                <textarea placeholder="Describe your question" className="bg-black border border-white p-4" cols="30" rows="10"></textarea>
                                <button className="uppercase border border-white p-4 hover:text-black hover:bg-white hover:border-black" type="submit">Submit</button>
                            </form>
                        </motion.div>
                    </TabPanel>
                    <TabPanel>
                        <motion.div
                            className="py-8"
                            initial="initial"
                            animate="whileInView"
                            variants={appearFromBottom}
                        >
                            <form className="flex flex-col gap-4 text-2xl">
                                <input className="bg-black border border-white p-4" type="text" placeholder="Name"/>
                                <input className="bg-black border border-white p-4" type="text" placeholder={`Your ${social}`}/>
                                <textarea placeholder="Describe your question" className="bg-black border border-white p-4" cols="30" rows="10"></textarea>
                                <button className="uppercase border border-white p-4 hover:text-black hover:bg-white hover:border-black" type="submit">Submit</button>
                            </form>
                        </motion.div>
                    </TabPanel>
                    <TabPanel>
                        <motion.div
                            className="py-8"
                            initial="initial"
                            animate="whileInView"
                            variants={appearFromBottom}
                        >
                            <form className="flex flex-col gap-4 text-2xl">
                                <input className="bg-black border border-white p-4" type="text" placeholder="Name"/>
                                <input className="bg-black border border-white p-4" type="text" placeholder={`Your ${social}`}/>
                                <textarea placeholder="Describe your question" className="bg-black border border-white p-4" cols="30" rows="10"></textarea>
                                <button className="uppercase border border-white p-4 hover:text-black hover:bg-white hover:border-black" type="submit">Submit</button>
                            </form>
                        </motion.div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    )
}