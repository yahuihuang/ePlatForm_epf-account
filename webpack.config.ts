import { Configuration, container } from 'webpack';
import * as webpack from 'webpack';
import dep from 'package.json';

export const webpackConfig: Configuration = {
  output: {
    publicPath: (process.env['publicpath'] == undefined) ? "http://testepf.test.com.tw:4202/" : process.env['publicpath'],
    uniqueName: 'restaurant',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        remoteEntry_Rootapp: JSON.stringify((process.env['remoteEntry_rootapp'] == undefined) ? "http://testepf.test.com.tw:4200/remoteRootapp.js" : process.env['remoteEntry_rootapp']),
        remoteEntry_Orders: JSON.stringify((process.env['remoteentry_orders'] == undefined) ? "http://testepf.test.com.tw:4201/remoteOrders.js" : process.env['remoteentry_orders']),
        remoteEntry_Restaurant: JSON.stringify((process.env['remoteentry_restaurant'] == undefined) ? "http://testepf.test.com.tw:4202/remoteRestaurant.js" : process.env['remoteentry_restaurant']),
      }
    }),
    new container.ModuleFederationPlugin({
      name: 'restaurant',
      library: { type: 'var', name: 'restaurant', },
      filename: 'remoteRestaurant.js',
      exposes: {
        RestaurantModule: './src/app/restaurant/restaurant.module.ts'
      },
      shared: {
        '@angular/core': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies["@angular/router"]
        },
        '@angular/common': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies["@angular/common"]
        },
        '@angular/router': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies["@angular/router"]
        }
      }
    })
  ]
};

export default webpackConfig;
