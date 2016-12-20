/* Este script genera datos falso para desarrollo local.
  De esta forma no tenemos que apuntar a una API existente,
  pero puedes sacar provecho de datos reales pero aleatorios
  y cargas rápidas de páginas gracias a datos locales y estáticos
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';


const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err){
  if(err){
    return console.log(chalk.red(err));
  }else{
    console.log(chalk.green("Mock data generated"));
  }
});
