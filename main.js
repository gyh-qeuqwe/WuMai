const vm = Vue.createApp({
    data() {
        return {
            message: 'hello world!',
            a:3,b:5,
            name: '',
            url: 'https://img0.baidu.com/it/u=2352820308,1253399368&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
            textRed: 'color: red',
            textBold:{'font-weight': 'bold'},
            red:'red',
            redBold: ['red', 'bold'],
            isRed:false,
        }
    },
    methods: {
        clickEventHandle(){
            alert('Clicked')
        },
        onSubmit(){
            alert('Input:' + this.name)
        }
    }
})

vm.mount('#app')