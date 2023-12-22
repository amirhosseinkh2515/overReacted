import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/redux/slices/themeSlice';
import styles from '../styles/styles.module.css'

const ToggleButton = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector((state: any) => state.theme.darkTheme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    useEffect(() => {
        document.body.className = darkTheme ? styles.darkBackground : styles.lightBackground
    }, [darkTheme]);

    return (
        <button onClick={handleToggle} className={`${styles.toggleButton} absolute right-0 -top-8`}>
            {darkTheme ? (
                <span role="img" aria-label="Light Theme" className="text-yellow-500">
                    ☀️
                </span>
            ) : (
                <span role="img" aria-label="Dark Theme" className="text-gray-500">
                    🌙
                </span>
            )}
        </button>
    );
};

export default ToggleButton;
