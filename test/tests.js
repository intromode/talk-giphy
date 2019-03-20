import { app } from '../src/firebase.js';
import './html-equal.js';
import './make-header.test.js';
import './display-giphy-template.test.js';
import './hash-components.test.js';
import './make-api-url.test.js';
import './handle-guess.test.js';
import './object-to-array.test.js';
import './mad-lib.test.js';

QUnit.done(() => {
    app.delete();
});