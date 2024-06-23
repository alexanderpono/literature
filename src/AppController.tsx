import React from 'react';
import { render } from 'react-dom';
import { UI } from './components/UI';
import { Story } from './types';

const stories: Story[] = [
    {
        caption: 'В.А. Жуковский. Сказка «Спящая царевна». Баллады (на выбор 2-3 баллады)',
        url: 'https://audioskazki-online.ru/podborki/raznoe/kubok?ysclid=lxkw2gvdd0532708158'
    }
];
export class AppController {
    constructor() {}

    go = () => {
        this.renderUI();
    };

    renderUI = () => {
        render(<UI stories={stories} />, document.getElementById('literature'));
    };
}
