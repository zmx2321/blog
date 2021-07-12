// 设置console
let setConsole = ()=> {
    console.clear();

    // 3d文字
    /* console.log(
        "%c欢迎进入我的博客！！！",
        `
            text-shadow: 0 1px 0 #ccc, 
                0 1px 0 #c9c9c9,
                0 1px 0 #bbb,
                0 1px 0 #b9b9b9,
                0 1px 0 #aaa,
                0 1px 1px rgba(0,0,0,.1),
                0 0 1px rgba(0,0,0,.1),
                0 1px 1px rgba(0,0,0,.3),
                0 1px 1px rgba(0,0,0,.2),
                0 1px 1px rgba(0,0,0,.25),
                0 5px 3px rgba(0,0,0,.2),
                0 5px 5px rgba(0,0,0,.15);
            font-size: 2em;
            padding-left: 85px
        `
    ); */

    // 引入gif
    /* console.log("%c ", 
        `
            padding: 120px 215px 100px;
            line-height: 60px;
            background:url('https://zmx2321.github.io/blog/gif/console/congf.gif') top no-repeat;
        `
    ); */

    // 背景
    /* console.log('%cRainbow Text ', 
        `
            background-image:-webkit-gradient( 
                linear, left top, right top, 
                    color-stop(0, #f22), 
                    color-stop(0.15, #f2f), 
                    color-stop(0.3, #22f), 
                    color-stop(0.45, #2ff), 
                    color-stop(0.6, #2f2),
                    color-stop(0.75, #2f2), 
                    color-stop(0.9, #ff2), 
                    color-stop(1, #f22) );
            color:transparent;
            -webkit-background-clip: text;
            font-size: 5em;
            line-height: 43px
        `
    ); */

    console.log(`%c
                                       #    
                                 # # #  
         #                     #        
       # # # # # #             #        
     # # # # # # #               # #    
     #   #       #                 # #  
                 # #                 #  
                 #             # # #    
               # #           #          
           # # #             #          
       # # #                   # #      
       # #           # # # #     # #    
       # #         # # # # # #   # #    
       # #     # # #         # # #      
   # # # # # # # #           # # # #    
         # # #             #   # # #    
   # #                     # #   # # #  
                             #    
    `, `
    color: #48a6c0;
    `
    )
}

// 工具集 
export function consoleMethods() {
    setConsole();  // 设置console
}
