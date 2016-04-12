import * as gulp from 'gulp';
import * as runSequence from 'runSequence';
import {loadTasks} from '../tools/utils';
import {SEED_TASKS_DIR, PROJECT_TASKS_DIR} from './tools/config';

loadTasks(SEED_TASKS_DIR);
loadTasks(PROJECT_TASKS_DIR);
