import {Logo} from "./ui/Logo";
import {Navigation} from "./Navigation";
const navigationItems = [
    {name: 'Hero', route: 'hero'},
    {name: 'Why Us', route: 'whyus'},
    {name: 'Services', route: 'services'},
    {name: 'Portfolio', route: 'portfolio'},
    {name: 'Contact Us', route: 'contactus'},
    {name: 'Brief', route: 'brief'},
    {name: 'FAQ', route: 'faq'},

]

export const Header = () => {
    return (
        <header className='sticky top-0 z-[100] bg-black border-b-4'>
            <div className='container'>
                <div className='flex justify-center xl:justify-between items-center'>
                    <Logo />
                    <Navigation navigationItems={navigationItems} />
                </div>
            </div>
        </header>
    )
}

