import {forwardRef} from 'react'
import classes from './Crok.module.scss';
import {motion} from 'framer-motion'
import { features } from './data';

const textAnimation = {
    hidden:{
        y:-100,
        opacity:0
    },
    visible:custom => ({
        y:0,
        opacity:1,
        transition:{delay:custom*0.3}
    }),
}

const featureAnimation = {
    hidden:{
        y:-100,
        opacity:0
    },
    visible:custom => ({
        y:0,
        opacity:1,
        transition:{delay:custom*0.3}
    }),
}

const Crok = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{amount:0.2 ,once:true}}
            className={classes.Features}>

            <div className={classes.container}>
                <motion.h2 custom={1} variants={textAnimation} className={classes.title}>{features.title}</motion.h2>
                <motion.p custom={2} variants={textAnimation} className={classes.description}>{features.description}</motion.p>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    className={classes.items}>
                    {features.items.map((item,index) => (
                        <MFeatureItem custom={index + 1} variants={featureAnimation} key={item.id} {...item} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

const FeatureItem = forwardRef (({title, body, icon},ref) => (
    <article className={classes.item} ref={ref}>
        <figure>
            <img src={icon} alt={title} />
        </figure>
        <h3>{title}</h3>
        <p>{body}</p>
    </article>
))

export const MFeatureItem = motion(FeatureItem)
export {Crok};