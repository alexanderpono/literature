import React from 'react';
import styles from './UI.scss';
import { Story, StoryType } from '@src/types';
import './UI.scss';

interface UIProps {
    stories: Story[];
}

export const UI: React.FC<UIProps> = ({ stories }) => {
    const items = stories.map((story: Story, index: number) => {
        switch (story.type) {
            case StoryType.HEADER1:
                return <h2 key={story.caption}>{story.caption}</h2>;
            case StoryType.HEADER2:
                return <h3 key={story.caption}>{story.caption}</h3>;
            case StoryType.HEADER3:
                return <h4 key={story.caption}>{story.caption}</h4>;
            case StoryType.SUBSTORY:
                return (
                    <article key={story.caption} className={styles.substory}>
                        <a href={story.url} target="player">
                            {story.caption}
                        </a>
                    </article>
                );
            default:
                return (
                    <article key={story.caption}>
                        <a href={story.url} target="player">
                            {story.caption}
                        </a>
                    </article>
                );
        }
    });

    return (
        <div>
            <h1>Список обязательной литературы на лето для 5 класса</h1>
            <section>{items}</section>
        </div>
    );
};
