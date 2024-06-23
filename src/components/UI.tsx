import React from 'react';
import styles from './UI.scss';
import { Story } from '@src/types';

interface UIProps {
    stories: Story[];
}

export const UI: React.FC<UIProps> = ({ stories }) => {
    const items = stories.map((story: Story, index: number) => {
        return (
            <div key={index}>
                <a href={story.url} target="player">
                    {story.caption}
                </a>
            </div>
        );
    });

    return <div>{items}</div>;
};
