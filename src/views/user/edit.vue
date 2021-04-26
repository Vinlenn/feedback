<template>
    <div>
        <a-row justify="center" type="flex">
            <a-col :span="2">用户名:</a-col>
            <a-col :span="12">
                <a-col :span="10">
                    <a-input v-model="user.name" style=""/>
                </a-col>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                user: ''
            }
        },
        //钩子函数
        created() {
            axios.post("/user/edit").then((res) => {
                if (res.data.code === 200) {
                    this.user = res.data.data;
                } else {
                    this.$notification.open({
                        message: '反馈平台',
                        description: res.data.msg,
                        onClick: () => {

                        },
                    });
                }


            })
        },
        methods: {
            save: function () {
                axios.post("/user/save").then((res) => {
                    //回显
                    console.log(res)
                })
            }
        }
    }
</script>