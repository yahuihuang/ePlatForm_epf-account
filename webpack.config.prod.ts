import webpackConfig from './webpack.config';
import { Configuration } from 'webpack';

export const prodWebpackConfig: Configuration = {
  ...webpackConfig,
  output: {
    publicPath: 'http://testepf.test.com.tw:82/', // production server,
    uniqueName: 'epfaccount',
  },
};

export default prodWebpackConfig;
