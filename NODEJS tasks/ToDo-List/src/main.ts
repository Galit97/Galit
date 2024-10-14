import './style.css'

import { TaskModel } from './model.ts';
import { TaskView } from './view.ts';
import { TaskController } from './controller.ts';

const model = new  TaskModel();
const view = new TaskView();
const controller = new TaskController(model, view);

controller.init();
