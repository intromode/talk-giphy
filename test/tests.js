import { app } from '../src/firebase.js';
import './html-equal.js';

QUnit.done(() => {
    app.delete();
});