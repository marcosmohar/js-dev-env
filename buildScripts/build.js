/* eslint-disable no-console */

import webpack from 'webpack';
import WebpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(WebpackConfig).run((err, stats) => {
  if(err){ // en caso de un error grave. Detenerse aquí
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarnings){
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // si llegamos hasta aqui nuestro bundle fue creado
  console.log(chalk.green('Your app has been built for production and written to /dist'));


  return 0;
});
