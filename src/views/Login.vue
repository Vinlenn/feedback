<template>
    <div style="background-image:url(https://bywave-mainsite.oss-cn-shenzhen.aliyuncs.com/photo-1542931287-023b922fa89b.jpg);
    background-color:#e8eaf2;
    background-size: cover;
    height: 100%;
    background-position: 50% 50%;
    justify-content: center;
    align-items: center;
    display: flex">
       <span style="width: 100%">
           <a-row type="flex" justify="center">
            <a-col :span="4">
                <a-form-item>
                    <a-input placeholder="Username" v-model="name">
                        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="4">

                <a-form-item>
                    <a-input type="password" placeholder="Password" v-model="password">
                        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
            </a-col>
        </a-row>

        <a-row type="flex" justify="center">
            <a-col :span="4">

                <a-form-item>
                    <a-button type="primary" html-type="submit" v-on:click="login" style="width: 100%">
                        登录
                    </a-button>
                </a-form-item>
            </a-col>
        </a-row>
       </span>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                name: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                axios.post("/user/login", {
                    name: this.name,
                    password: this.password
                }).then((res) => {
                    if(res.data.code===200){
                        axios.defaults.headers.common['token'] = res.data.data;
                        sessionStorage.setItem("token", res.data.data);
                        this.$router.push("/")
                    }else{
                        this.$notification.open({
                            message: '反馈平台',
                            description:
                                res.data.msg,
                            onClick: () => {

                            },
                        });
                    }

                }).catch(()=>{
                    this.$notification.open({
                        message: '反馈平台',
                        description:
                            '服务器开了点小差，请稍后再试',
                        onClick: () => {

                        },
                    });
                })
            }

        }
    }
</script>