import { app } from '../src/firebase.js';
import './html-equal.js';
import './make-header.test.js';
import './display-giphy-template.test.js';
import './hash-components.test.js';

QUnit.done(() => {
    app.delete();
});