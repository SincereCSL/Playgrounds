### 前端全链路性能优化

### 关于仓库

这个仓库是笔者整理收集的一些前端性能优化相关的知识、帮助自己学习和复习。

欢迎大家提交对本仓库的改进建议~

#### 1、图片优化：
图片格式和应用场景的介绍：
- JPEG (joint Photographic Experts Group)

  联合图像专家小组是一种针对彩色照片而广泛使用的有损压缩图形格式。

  介绍:栅格图形。常用文件扩展名为 .jpg，也有.jpeg、.jpe。JPEG 在互联网上常被应用于存储和传输照片。

  不适合:线条图形和文字、图标图形，因为它的压缩算法不太这些类型的图形;并且不支持透明度。

  非常适合:颜色丰富的照片、彩色图大焦点图、通栏 banner 图;结构不规则的图形,

#### 2、HTML：精简优化HTML代码结构
#### 3、CSS：CSS的优化应该遵循哪些原则
- 1、提升CSS的渲染性能:
    - 谨慎使用expensive属性：如：nth-child伪类、  position:fixed定位
    - 尽量减少样式层级数：如：div p ul li span i{color:red}
    - 尽量避免使用占用过多CPU和内存的属性： 如：text-indent:-99999px
    - 尽量避免使用耗电量大的属性： 如：CSS3 3d transform、CSS3 transition、opacity
- 2、


#### 28 页面加载：加载策略有哪些：
- 1、懒加载
- 2、预加载
- 3、预渲染




