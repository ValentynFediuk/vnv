import {FaEnvelope, FaLinkedin, FaTelegram} from "react-icons/fa";

export const Footer = () => {
    const getYear = () => {
        const date = new Date()
        return date.getFullYear()
    }
    return (
        <footer className='py-8'>
            <div className="container">
                <div className="flex justify-between flex-col gap-8 md:flex-row items-center">
                    <ul className='flex gap-4'>
                        <li>
                            <a href="https://t.me/vnv_solutions">
                                <FaTelegram size={50}/>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:team@vnv.solutions">
                                <FaEnvelope size={50}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/vnv-tech/">
                                <FaLinkedin size={50}/>
                            </a>
                        </li>
                    </ul>
                    <p className='text-lg md:text-3xl'>Karla Miklʹosha, 7
                        Lviv, Ukraine - &copy; {getYear()}</p>
                </div>
            </div>
        </footer>
    )
}