<template>
    <div>
        <a-form>
            <a-form-item  label="用户名">
                <a-input v-model="user.username"/>
            </a-form-item>
        </a-form>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
             user:''
            }
        },
        //钩子函数
        created(){
          axios.post("/user/edit").then((res)=>{
              this.user=res.data;
          })
        },
        methods(){
        }
    }
</script>