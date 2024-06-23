import React from 'react';
import { render } from 'react-dom';
import { UI } from './components/UI';
import { stories } from './stories';

export class AppController {
    constructor() {}

    go = () => {
        this.renderUI();
    };

    renderUI = () => {
        render(<UI stories={stories} />, document.getElementById('literature'));
    };
}
