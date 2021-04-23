<template>
    <div>
   <input v-model="username" placeholder="账号">
   <input v-model="password" placeholder="密码">
   <button v-on:click="login"></button>
    </div>
</template>
<script>
    import axios from 'axios'
export  default{
    data() {
        return{
            username:'',
            password:''
        }
    },
    methods:{
    login:function () {
       axios.post("http://127.0.0.1:82/test",{username:this.username,password:this.password}).then((res)=>{
          console.log(res)
       })
    }
}
}
</script>