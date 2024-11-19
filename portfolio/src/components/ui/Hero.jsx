import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';
import { HERO_CONTENT } from '../../constants';
import Button from './button';

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div>
            <div className="flex flex-wrap ml-14">
                <div className="text-left">
                    <h2 className="text-2xl font-thin tracking-tight lg:text-4xl text-white mb-4">
                        Hello, I'm
                    </h2>
                    {isMounted && (
                        <h1 className="text-2xl font-thin tracking-tight lg:text-8xl text-white mb-4">
                            <span>
                                <Typewriter
                                    words={['Kim Hong Zhang']}
                                    loop={true}
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    cursor={true} // Adds a blinking cursor
                                    cursorStyle="|" // Customizes cursor style to a vertical bar
                                />
                            </span>
                        </h1>
                    )}
                    <span className="gradient-text bg-clip-text text-3xl tracking-light text-transparent mt-6 block">
                        AI and ML Developer
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-white leading-8">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <Button/>
            </div>
        </div>

    );
}

export default Hero;
