import React from 'react';
import bitcoin from '../assets/bitcoin-removebg.png';

const Service = () => {
    const features = [
        { id: 1, title: 'Website Development', image: bitcoin },
        { id: 2, title: 'Mobile App Development', image: bitcoin },
        { id: 3, title: 'Software Development', image: bitcoin },
        { id: 4, title: 'Digital Marketing', image: bitcoin },
        { id: 5, title: 'Branding and Promotion', image: bitcoin },
        { id: 6, title: 'Content Development', image: bitcoin },
        { id: 7, title: 'Graphics Design', image: bitcoin },
    ];

    return (
        <div className="p-10 flex flex-col gap-4 absolute top-[85vh] items-center w-full h-full">
            <div className="grid grid-cols-7 gap-4  w-[80%]">
                {features.map((feature) => (
                    <div key={feature.id} className="p-4 bg-gray-300  rounded-xl">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img className="size-16 " src={feature.image} alt={feature.title} />
                            <h1 className="text-sm text-center">
                                {feature.title.split(' ').map((word, index) => (
                                    <React.Fragment key={index}>
                                        {word}
                                        {index !== feature.title.split(' ').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
