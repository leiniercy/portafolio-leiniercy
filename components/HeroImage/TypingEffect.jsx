"use client"

import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
    const words = [ 'Engineer', 'Developer', 'Designer'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isDeleting) {
                setCurrentWord((prev) => prev.slice(0, -1));
            } else {
                setCurrentWord((prev) => words[currentWordIndex].substring(0, prev.length + 1));
            }

            if (!isDeleting && currentWord === words[currentWordIndex]) {
                setIsDeleting(true);
            } else if (isDeleting && currentWord === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [currentWord, currentWordIndex, isDeleting]);

    return  <div className="developer">{currentWord}</div>
};

export default TypingEffect;
