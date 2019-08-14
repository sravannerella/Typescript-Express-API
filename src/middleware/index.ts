import {handleCors, handleBodyParser} from './common';
import { handleLogger } from './logger';

export default [handleCors, handleBodyParser, handleLogger];