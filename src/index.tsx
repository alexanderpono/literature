import React from 'react';
import { render } from 'react-dom';

export class AppController {
    constructor() {}

    renderUI = () => {
        render(<div>Literature react app!</div>, document.getElementById('literature'));
    };
}

const ctrl = new AppController();
ctrl.renderUI();
