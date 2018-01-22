import * as functions from 'firebase-functions';
import * as express from 'express';

const eapp = express();

eapp.get('/', async (res, resp)=> {

    resp.json({name: 'ola2'});
});

export const app = functions.https.onRequest(eapp);