# cache-store-indexdb

缓存、本地存储、离线数据库以及远程 API 的持久化处理问题，向外暴露统一 API 的接口（结合 pwa支持Offline）

- cache 内存缓存存储 lru-cache
- store 本地缓存 localStorage sessionStorage
- indexDB 离线数据库
- API 远程 API

## 以上思路，本质上即service worker的实现

请移步参见：[service-worker](https://github.com/webcoding/service-worker)实现

https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers

实现思路就是，利用service worker，另起一个线程，用来监听所有网络请求，讲已经请求过的数据放入cache，在断网的情况下，直接取用cache里面的资源。为请求过的页面和图片，展示一个默认值。当有网络的时候，再重新从服务器更新。

```shell
service worker
 |
监听
 |           /=> store
api => cache
             ∖=> indexDB
```
