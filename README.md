# 清风DJ音乐网收藏歌曲批量下载
不知道为什么单纯想找点开车听听的歌而已，百度看到清风网，研究了一下发现资源和质量都挺不错滴。本来是想下载的，只是可能大概也许是职业病吧（最多也就是懒而已），就写个这鬼东西。本来是想用pyhon来写的，然后高估了我筑基期的实力，最后还是用回nodejs，花了一大晚上，算是能用吧！音质的话，不是什么高端音响外加木耳应该听不出区别吧。有大神能破解音质的求告知！

![](http://ww1.sinaimg.cn/large/005Ee4Bigy1g796cdvx93j313v0o1q43.jpg)
![](http://ww1.sinaimg.cn/large/005Ee4Bigy1g796cljqozj30el0cfaap.jpg)

### 环境要求
需要 NodeJS 8.12+ 环境

### 相关
[清风网](http://www.vvvdj.com/)

### 使用
1. [点击下载本项目](https://github.com/982991084/vvvdj-batch-download)解压
![](http://ww1.sinaimg.cn/large/005Ee4Bigy1g7abjmhuprj30vv0nfac6.jpg)
2. 下载[node](http://nodejs.cn/download/)安装
3. 在本项目根目录下打开cmd，运行`npm i`安装依赖，等待几分钟，慢的话就看集斗罗大陆再回来。如果实在下载不了，[手动下载chromium包，解压放到项目根目录](https://download-chromium.appspot.com/)
4. 打开清风网获取自己收藏的列表
![](http://ww1.sinaimg.cn/large/005Ee4Bigy1g78ptidenvj313v0l1agb.jpg)
5. 修改本项目`index.js`文件下的ids和boxid为上面所获取到的值
6. 在cmd里执行`node index`，记得全屏显示，不然有点小小小小的bug
7. 等待是漫长的，歌曲多的话，该干嘛就干嘛去呗
8. 下载后的歌曲在download文件下
9. 完毕，就这么简单！
