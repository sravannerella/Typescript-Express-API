import {handleCors, handleBodyParser, handleLusca} from './common';
import { handleLogger } from './logger';

export default [handleCors, handleBodyParser, handleLusca, handleLogger];