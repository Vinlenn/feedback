<template>
    <div>
        <a-form layout="inline" >
            <a-form-item>
                <a-input placeholder="Username" v-model="username">
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input type="password" placeholder="Password" v-model="username">
                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button  type="primary" html-type="submit" v-on:click="login">
                    登录
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                axios.post("/user/login", {
                    username: this.username,
                    password: this.password
                }).then((res) => {
                    console.log(res)
                    axios.defaults.headers.common['token'] = res.data;
                    sessionStorage.setItem("token", res.data);
                    this.$router.push("/")
                })
            }

        }
    }
</script>