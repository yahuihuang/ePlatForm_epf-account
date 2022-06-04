# EpfAccount

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://127.0.0.1:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### 本機安裝
npm install ..\angular-lib\dist\@ddggroup\angular-lib\ddggroup-angular-lib-0.0.3.tgz
### 從GitLab下載
#### 編輯 C:\Users\[user]\.npmrc
#### 新增
//gitlab.xxxx.com.tw:8088/api/v4/projects/31/packages/npm/:_authToken=[GitLab Token]
//gitlab.xxxx.com.tw:8088/api/v4/packages/npm/:_authToken=[GitLab Token]
@ddggroup:registry=http://gitlab.xxxx.com.tw:8088/api/v4/packages/npm/
#### 執行
npm install --save @ddggroup/angular-lib

## 設定環境變數
$Env:publicpath = "http://127.0.0.1:4202/"
$Env:remoteEntry_rootapp = "http://127.0.0.1:4200/remoteRootapp.js"
$Env:remoteentry_orders = "http://127.0.0.1:4201/remoteOrders.js"
$Env:remoteentry_restaurant = "http://127.0.0.1:4202/remoteRestaurant.js"
ng serve --host 127.0.0.1 --live-reload false --configuration development

或指定domain
$Env:publicpath = "http://testepf.test.com.tw:4202/"
$Env:remoteEntry_rootapp = "http://testepf.test.com.tw:4200/remoteRootapp.js"
$Env:remoteentry_orders = "http://testepf.test.com.tw:4201/remoteOrders.js"
$Env:remoteentry_restaurant = "http://testepf.test.com.tw:4202/remoteRestaurant.js"
ng serve --host testepf.test.com.tw --live-reload false --configuration development --disable-host-check
Ref. https://codinglatte.com/posts/angular/using-os-environment-variables-in-angular-with-docker/

## 佈署Firebase hosting
npm i -g firebase-tools
npm audit fix
firebase login

firebase init

firebase deploy
