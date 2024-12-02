import { motion } from "motion/react";
import React from 'react';
import app from '../assets/services/app.png';
import branding from '../assets/services/branding.png';
import content from '../assets/services/content.png';
import graphics from '../assets/services/graphics.png';
import marketing from '../assets/services/marketing.png';
import website from '../assets/services/web.png';

const Service = () => {
    const features = [
        { id: 1, title: 'Website Development', image: website },
        { id: 2, title: 'Mobile App Development', image: app },
        { id: 4, title: 'Digital Marketing', image: marketing },
        { id: 5, title: 'Branding and Promotion', image: branding },
        { id: 6, title: 'Content Development', image: content },
        { id: 7, title: 'Graphics Design', image: graphics },
    ];

    return (
        <div className="p-10 mt-4 flex flex-col gap-4 absolute top-[85vh] items-center w-full h-full">
            <div className="grid grid-cols-6 gap-4    w-[80%]">
                {features.map((feature, index) => (
                    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: index * 0.2 }} key={feature.id} className={`p-4 bg-slate-500  rounded-xl`} >
                        <div className={`flex flex-col justify-center items-center gap-4 `} >
                            <div>
                                <img className="size-14 " src={feature.image} alt={feature.title} />
                            </div>
                            <div className="">
                                <h1 className="text-sm  text-slate-200 font-poppins text-center">
                                    {feature.title}
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div >
    );
};

export default Service;
