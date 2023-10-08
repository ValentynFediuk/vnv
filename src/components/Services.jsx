import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { motion } from "framer-motion";
import {Title} from "./ui/Title";


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

export const Services = () => {
    return (
        <section id='services' className='py-[8rem]'>
            <Title>Services</Title>
            <div className="container">
                <Tabs className='text-center'>
                    <TabList className='text-2xl'>
                        <Tab>Landing Page</Tab>
                        <Tab>Multi page</Tab>
                        <Tab>Internet shop</Tab>
                        <Tab>Website audit</Tab>
                    </TabList>
                    <TabPanel>
                        <motion.div
                            className='py-8'
                            initial='initial'
                            animate='whileInView'
                            variants={appearFromBottom}
                        >
                            <h3 className='text-4xl mb-4'>Landing Page</h3>
                            <p className='max-w-5xl text-2xl mx-auto'>
                                A landing page is a standalone web page designed with a specific purpose in mind, typically related to marketing or advertising campaigns. Its primary goal is to persuade visitors to take a particular action, such as signing up for a newsletter, downloading an e-book, making a purchase, or filling out a contact form. Landing pages are often used in digital marketing campaigns to convert traffic into leads or customers.
                            </p>
                        </motion.div>
                    </TabPanel>
                    <TabPanel>
                        <motion.div
                            className='py-8'
                            initial='initial'
                            animate='whileInView'
                            variants={appearFromBottom}
                        >
                            <h3 className='text-4xl mb-4'>Multi page website</h3>
                            <p className='max-w-5xl text-2xl mx-auto'>
                                A multi page website, also known as a multi-page website, is a type of website that consists of multiple interconnected web pages. Each web page typically serves a different purpose or contains different content, and users can navigate between these pages to access various information or features. Multipage websites are the most common type of websites on the internet and are often used for businesses, blogs, e-commerce sites, informational sites, and more.
                            </p>
                        </motion.div>
                    </TabPanel>
                    <TabPanel>
                        <motion.div
                            className='py-8'
                            initial='initial'
                            animate='whileInView'
                            variants={appearFromBottom}
                        >
                            <h3 className='text-4xl mb-4'>Internet shop</h3>
                            <p className='max-w-5xl text-2xl mx-auto'>
                                An internet shop, also known as an online store or e-commerce website, is a website where businesses or individuals sell products or services to customers over the internet. Internet shops have become increasingly popular due to their convenience and accessibility, allowing people to browse, shop, and make purchases from the comfort of their homes or on the go.
                            </p>
                        </motion.div>
                    </TabPanel>
                    <TabPanel>
                        <motion.div
                            className='py-8'
                            initial='initial'
                            animate='whileInView'
                            variants={appearFromBottom}
                        >
                            <h3 className='text-4xl mb-4'>Website audit</h3>
                            <p className='max-w-5xl text-2xl mx-auto'>
                                A site audit, also known as a website audit, is a comprehensive analysis of a website's performance, structure, content, and overall health. The purpose of a site audit is to identify issues, areas for improvement, and opportunities to enhance a website's effectiveness in terms of user experience, search engine optimization (SEO), security, and more.
                            </p>
                        </motion.div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    )
}