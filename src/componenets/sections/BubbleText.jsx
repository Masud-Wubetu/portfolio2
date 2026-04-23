import React from 'react';
import { motion } from 'framer-motion';

const BubbleText = ({ text, className = "" }) => {
    return (
        <span className={className}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    whileHover={{
                        scale: 2.5,
                        rotate: 12,
                        textShadow: "0 0 15px var(--bubble-shadow)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                    }}
                    className="inline-block cursor-default select-none"
                    style={{ display: "inline-block", transformOrigin: "center" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
};

export default BubbleText;
