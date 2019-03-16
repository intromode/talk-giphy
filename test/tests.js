import { app } from '../src/firebase.js';
import './html-equal.js';
import './make-header.test.js';

QUnit.done(() => {
    app.delete();
});