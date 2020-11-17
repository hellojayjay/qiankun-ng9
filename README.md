# qiankun-ng9

## 更详细配置请参考：[从零开始qiankun+Angular](https://github.com/hellojayjay/qiankun-ng-demo)

## 项目介绍

这是一个基于qiankun的微前端项目，基座系统(`mf-main`)使用angular9创建，子项目也使用angular9

项目在[官方例子](https://github.com/umijs/qiankun/tree/master/examples)基础上做了以下更改以使得可以使用angular9作为基座系统：

① 基座项目的更改：

- 重新创建基座系统（原来为main，现使用`ng n mf-main`创建`mf-main`项目）
- 安装qiankun（`npm i qiankun -S`）
- 子项目配置基本和官方例子相同（ `mf-main/src/app/app.component.ts`）
- 在`app.component.html`中，添加子项目路由链接、路由出口、子项目html容器
- 创建空组件（`mf-main/src/empty.component.ts`），避免路由找不到时的报错
- 配置基座项目路由，避免找不到路由时的报错（`mf/main/src/app-routing.module.ts`）

② 子项目的更改

- 更改子项目根组件选择器（不更改的话，加载子项目时，会将基座项目的`app-root`作为跟组件，加载完后，基座组件就消失了）

  index.html: `<app-root></app-root>` => `<angular9-root></angular9-root>`

  qiankun.main.ts: `template: '<app-root />',` => `template: '<angular9-root />',`

  app.component.ts: `selector: 'app-root'` => `selector: 'angular9-root',`

- 更改子项目路由配置（添加当前子项目的默认路由`angular9/src/app/app-routing.module.ts`），不配这个路由的话，加载子项目后页面会一直闪

  ```
  const routes: Routes = [
    {
      path: '**',
      component: AppComponent
    },
  ];
  ```
  
- 没有升级`single-spa-angular`的话，解决子项目加载报错[参考](https://github.com/umijs/qiankun/issues/618)

## 项目启动

子项目：`npm i` => `npm run serve:qiankun`

主项目：`npm i ` => `npm start`

主项目启动后在浏览器打开`http://localhost:4200/`即可
