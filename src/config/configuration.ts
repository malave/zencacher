import { CAPACITY, PORT } from '../constants';

export interface ConfigOptions {
  port: number;
  capacity: number;
}

export default () => ({
  port: parseInt(process.env[PORT], 10) || 3000,
  capacity: parseInt(process.env[CAPACITY], 10) || 10,
});
