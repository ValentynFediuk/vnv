import cn from "classnames";

export const Button = ({children, className}) => {
    return (
        <button className={cn(className, 'block mx-auto uppercase bg-red-700  border-4 hover:scale-125 hover:rounded-2xl' +
            'border-white hover:border-red-700 hover:bg-white hover:text-red-700 transition rounded-3xl text-3xl sm:text-5xl py-2 sm:py-5 px-8 sm:px-16')}
        >{children}</button>
    )
}