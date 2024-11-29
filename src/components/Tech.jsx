import { Icon } from '@iconify/react';
import React, { useEffect, useState, useRef } from 'react';

const Tech = () => {
    const techs = [
        { name: 'HTML', icon: 'skill-icons:html' },
        { name: 'CSS', icon: 'skill-icons:css' },
        { name: 'JavaScript', icon: 'skill-icons:javascript' },
        { name: 'ReactJS', icon: 'skill-icons:react-dark' },
        { name: 'AngularJS', icon: 'skill-icons:angular-dark' },
        { name: 'VueJS', icon: 'skill-icons:vuejs-dark' },
        { name: 'NextJS', icon: 'skill-icons:nextjs-dark' },
        { name: 'NodeJS', icon: 'skill-icons:nodejs-dark' },
        { name: 'PHP', icon: 'skill-icons:php-dark' },
        { name: 'Laravel', icon: 'skill-icons:laravel-dark' },
        { name: 'MongoDB', icon: 'skill-icons:mongodb' },
        { name: 'MySQL', icon: 'skill-icons:mysql-dark' },
        { name: 'Flutter', icon: 'skill-icons:flutter-dark' },
    ];

    const [animate, setAnimate] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col items-center justify-center gap-8 mx-24 overflow-hidden"
        >
            <h1 className="text-4xl font-bold">Technologies We Use</h1>
            <div
                className={`relative w-full gap-4 flex ${animate ? 'animate-move-left' : ''
                    }`}
            >
                {techs.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col  items-center justify-center gap-2 cursor-pointer hover:scale-125 transition-all duration-200"
                    >
                        <Icon className="text-7xl" icon={tech.icon} />
                        <h1 className="text-sm">{tech.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tech;
