import React, { useEffect, useState, useRef } from 'react';
import { useWindowSize } from 'react-use';
import classNames from 'classnames';
import teaserVideo from '/teaser.mp4'; // Adjust the path as necessary

export default function Teaser() {
    const [isPlaying, setIsPlaying] = useState(true);
    const { width } = useWindowSize();
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPlaying(true);
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 5000);

        return () => {
            clearTimeout(timer);
            if (videoRef.current) {
                videoRef.current.pause();
            }
        };
    }, [isPlaying]);

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    const teaserClass = classNames('teaser', {
        'teaser--playing': isPlaying,
        'teaser--paused': !isPlaying,
        'teaser--small': width < 768,
        'teaser--medium': width >= 768 && width < 1024,
        'teaser--large': width >= 1024,
    });

    return (
        <div className={teaserClass}>
            <video ref={videoRef} className="teaser-video" muted loop>
                <source src={teaserVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="teaser-content">Teaser</div>
            <button className="teaser-toggle" onClick={handleTogglePlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
}