//lê as variaveis de ambientes no arquivo .env (que não é adc no git)
import * as dotenv from 'dotenv';

dotenv.config();

export const environment = process.env;
