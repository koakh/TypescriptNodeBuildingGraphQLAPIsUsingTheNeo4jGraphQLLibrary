// init dotenv
import {config} from 'dotenv';
const result = config();
if (result.error) {
  throw result.error
}

console.log(`environment variable MESSAGE: ${process.env.MESSAGE}...`);
