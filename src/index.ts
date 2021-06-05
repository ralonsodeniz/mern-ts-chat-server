import express from 'express';
import {json} from 'body-parser';
import { PORT } from '@Config/variables';

const app = express();
app.use(json());

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
