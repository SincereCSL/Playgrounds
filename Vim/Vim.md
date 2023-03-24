## Vim
[vim历史:来源维基百科](https://zh.wikipedia.org/wiki/Vim#Vim%E5%8E%86%E5%8F%B2)

## 关于仓库

笔者记录自己学习使用Vim的一些小技巧，如果有错误，欢迎小伙伴提出改进建议~

### Vim 学习

- YouTube视频： [Lecture 3: Editors (vim) (2020)](https://missing.csail.mit.edu/2020/editors)
- 慕课网免费视频：[玩转Vim 从放弃到爱不释手](https://www.imooc.com/learn/1129)
- 酷壳-CoolShell：[简明Vim练级攻略](https://coolshell.cn/articles/5426.html)
- 极客时间：[Vim 实用技巧必知必会](https://time.geekbang.org/column/intro/100055801)

### Vim 进阶

- [Vim 从入门到精通](https://github.com/wsdjeg/vim-galore-zh_cn)
- [笨方法学 Vimscript](https://learnvimscriptthehardway.stevelosh.com)

### 目录

1、保存退出

    :wq  保存推出
    :q   退出
    :q!  退出不保存
    :qa! 强行退出所有的正在编辑的文件，就算别的文件有更改

2、各种插入 

    a  在光标后插入
    i  Insert 模式，按 ESC 回到 Normal 模式.
    o  在当前行后插入一个新行

    A  在光标后插入
    I  到行首插入
    O  在当前行前插入一个新行

    cw  替换从光标所在位置后到一个单词结尾的字符

3、移动

    0  数字0 移动到行首的第一个字符
    ^  移动到第一个非空白字符的位置
    $  移动到本行行尾
    g_ 移动到本行最后一个不是非空白字符的位置

    gg 跳到第一行
    G  跳到最后一行

    ^ 跳到该行第一个字
    $ 跳到该行最后一个字

4、各种删除

    x  删当前光标所在的一个字符。
    d  删除
    dd 删除当前行，并把删除的行存到剪贴板里


5、各种查询
        
    / or ? 搜索 匹配的字符串 如果搜索出多个匹配
    使用 n 或者 N 跳转到下一个或者上一个匹配
    
6、 复制
    
    yy 复制一行，前面加数字就是复制n行，例如：3yy（复制三行）

7、 粘贴

    p 粘贴剪贴板

8、撤销/重做

    u undo 撤销
    ctrl+r 重做 Redo

9、分屏

    :split  创建分屏 
    :vsplit 创建垂直分屏

10 其他

    ctrl + f 往回一页（Page Up）
    ctrl + b 往下一页（Page Down）
    ctrl + h 在插入模式下，删除上一个字符
    ctrl + w 在插入模式下，删除上一个单词
    ctrl + u 在插入模式下，删除当前行
        
                






