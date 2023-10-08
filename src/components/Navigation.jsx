export const Navigation = ({navigationItems}) => {

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav>
            <ul className='hidden gap-6 uppercase text-3xl xl:flex'>
                {navigationItems.map(({name, route}) => (
                    <li onClick={() => scrollToElement(route)} key={route} className='hover:scale-125 hover:text-zinc-50 transition'>
                        <a onClick={(event) => event.preventDefault()} href={route}>{name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}