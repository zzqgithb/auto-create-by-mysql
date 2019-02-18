# autoCreateByMysql
## 前言
这是一个基于nodejs开发的，根据数据库自动生成model,api,view的反向生成工具；

**此工具的开发只是单纯的为了减少重复model的开发而写**

**如果该工具对你有帮助，还请star支持**

## 如何使用

    1、修改 lib/mysql/connection_mysql中的数据库连接地址；
    2、根目录下运行 node index，即可反向生成model,api,view

## 目录结构

│—api                               // 接口层生成文件夹

│—entity                            // model层生成文件夹，生成的所有class都继承自Model

│—views                             // 生成的视图层

│—lib                               // 依赖库

│ │─ class                          // 构造函数

│ │─ mysql                          // 数据库连接文件

│ │─ template                       // 生成文件

│ │─ utils                          // 工具类