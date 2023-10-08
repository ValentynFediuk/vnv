import {motion} from "framer-motion";
import { InView } from 'react-intersection-observer';
import cn from "classnames";

export const Title = ({children, className}) => {
    return (

        <InView>
            {({ inView, ref }) => (
                <motion.h2
                    className={cn(className, 'text-center mb-24 text-5xl sm:text-7xl')}
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1, transition: { duration: 1 }  } : { opacity: 0 }}
                >
                  {children}
                </motion.h2>
            )}
        </InView>
    )
}