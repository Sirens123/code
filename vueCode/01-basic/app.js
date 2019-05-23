let vm = new Vue({
    el:"#root",
    data:{
       /* product:"hello world!",
        products:[]*/
        greeting:"hello"

    },
    // 等到页面加载完毕
   /* mounted:()=>{
       fetch("/api/products")
            .then(response => response.json())
            .then(result => {
                console.log(0)
            })
    },*/
    // 计算属性
    computed:{
        newGreeting (){
            return this.greeting.split('').reverse().join('') + Math.random()
        }
    },
    // 方法
    methods:{
        change (){
            this.greeting = this.greeting.split('').reverse().join('')
        }
    },
    // 监听函数
    watch:{
        // 只有两个参数
        greeting (newValue,oldValue){
            console.log(newValue,oldValue)
        }
    }

})