# Css相关笔记
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. css实现从左往右渐变
`background: linear-gradient(to right,#2F76ED,#2451B1);`

## 2. 使用flex的几个应用场景
```html
<div class="time_box">
    <ul>
        <li>上班时间9:00</li>
        <li>下班时间18:00</li>
    </ul>
</div>
```
```css
.kq_main_bot .time_box {
    position: absolute;
    width: 50%;
    height: 90%;
    top: 5%;
    left: 20px;
}
```

> 2.1 使用flex上下对齐
```css
.time_box ul {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.time_box ul li:first-child {
    height: 93%;
}
```
> 2.2. 使用flex实现居中
```css
.time_box ul {
    display: flex;
    height: 100%;
    align-items: center;
}
```
> 2.3 使用flex实现居中,个别元素的对齐方式和其他的不一样
```css
.time_box ul {
    display: flex;
    height: 100%;
    align-items: center;
}
.time_box ul li:first-child {
    align-self: flex-end;
}
```

## 3. 浏览器下拉条样式
```css
/* sass/less */
.xxx {
    &::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(144,147,153,.3);
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(144,147,153,.5)
    }

    &::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
}
```

## 4. css p标签强制换行
```css
p {
    width: 100%;
    word-wrap: break-word;
    font-size: 13.5px;
}
```

## 5. css实现超出部分显示省略号
```css
/* 显示一行，省略号 */
p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
} 
    
 
/* 显示两行，省略号 */
p {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
} 
 
```

## 6. 清除浮动
```css
.f-cb:after,.f-cbli li:after{
    display:block;
    clear:both;
    visibility:hidden;
    height:0;
    overflow:hidden;
    content:".";
}
```

## 7. 文字渐变
```css
.font {
    background-image: linear-gradient(135deg,red,blue);
    -webkit-background-clip:text;
    color: transparent;
}
```