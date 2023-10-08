import { Title } from "./ui/Title";
import { FiArrowDown } from 'react-icons/fi';
import { useState } from "react";
import cn from "classnames";
import { motion } from "framer-motion";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const handleItemClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };

    const FAQList = [
        {
            question: 'What does your IT company specialize in?',
            answer: 'We specialize in providing a wide range of IT services, including software development, cybersecurity, cloud computing solutions, IT consulting, and more. Our goal is to help businesses harness the power of technology to achieve their goals.'
        },
        {
            question: 'How experienced is your team?',
            answer: 'Our team consists of highly skilled professionals with years of experience in the IT industry. We have experts in various domains, ensuring that we can meet the diverse needs of our clients.'
        },
        {
            question: 'Can you handle projects of different sizes?',
            answer: 'Absolutely! We have experience working on projects of all sizes, from small businesses to large enterprises. Whether it\'s a simple website or a complex software application, we have the expertise to deliver.'
        },
        {
            question: 'Do you offer cybersecurity services?',
            answer: 'Yes, we offer comprehensive cybersecurity services to protect your organization from cyber threats. Our services include vulnerability assessments, penetration testing, threat detection, and security training.'
        },
        {
            question: 'What industries do you serve?',
            answer: 'We serve clients across various industries, including healthcare, finance, manufacturing, education, and more. Our adaptable solutions can be tailored to meet the specific needs of any industry.'
        },
        {
            question: 'Can you provide ongoing IT support?',
            answer: 'Yes, we offer ongoing IT support and maintenance services to ensure that your systems run smoothly. Our support team is available 24/7 to address any issues and provide assistance.'
        },
        {
            question: 'How do you ensure data security and privacy?',
            answer: 'We take data security and privacy seriously. Our team follows industry best practices and compliance standards to safeguard your data. We can also assist in implementing encryption and access controls.'
        },
        {
            question: 'What is your approach to project management?',
            answer: 'We follow a structured project management approach, including Agile and Scrum methodologies. We maintain transparent communication with clients, provide regular updates, and ensure that projects are delivered on time and within budget.'
        },
        {
            question: 'How can I request a quote for my project?',
            answer: 'You can request a quote by contacting our sales team through our website or by email. Please provide as much detail as possible about your project requirements, and we will get back to you with a customized quote.'
        },
        {
            question: 'What sets your IT company apart from others?',
            answer: 'Our commitment to excellence, a highly skilled team, a customer-centric approach, and a track record of successful projects set us apart. We focus on delivering innovative solutions that drive business success.'
        },
    ]

    return (
        <section id='faq' className="py-[8rem] border-b-4 border-white" itemScope itemType="https://schema.org/FAQPage">
            <div className="container">
                <Title>FAQ</Title>
                <div className="flex flex-col gap-16 mx-auto">
                    {FAQList.map(({ question, answer }, index) => (
                        <div key={index} itemScope itemType="https://schema.org/Question">
                            <div onClick={() => handleItemClick(index)} className="flex justify-between items-center cursor-pointer mb-4">
                                <h4 className="text-2xl sm:text-5xl pr-5" itemProp="name">{question}</h4>
                                <FiArrowDown className={cn(openIndex === index && 'rotate-180', 'transition')} size={45} color="white"/>
                            </div>
                            {openIndex === index && (
                                <motion.div
                                    className="text-lg sm:text-2xl"
                                    itemProp="acceptedAnswer"
                                    itemScope
                                    itemType="https://schema.org/Answer"
                                    initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
                                    animate={{ x: 0, opacity: 1 }}    // Target state (on-screen with full opacity)
                                    transition={{ duration: 0.5 }}    // Animation duration
                                >
                                    <span itemProp="text">{answer}</span>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
