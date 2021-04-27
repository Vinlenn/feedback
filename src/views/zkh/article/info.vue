<template>
    <div>
        <a-row type="flex" justify="center">
            <a-col>
                <h2>
                    {{title}}
                </h2>
            </a-col>
        </a-row>

        <br>
        <br>
        <p style="text-align: justify; text-justify: inter-ideograph; text-indent: 3em;">
            {{content}}
        </p>
        <br>
        <p>
            类别：{{categoryName}}
        </p>

        <p>
            品种：{{typeName}}
        </p>
        <p>
            爬虫关键字：{{anotherName}}
        </p>


        <h6>源地址：{{url}}</h6>

        <p>
            <a-button type="primary" v-if="reader==='否'" v-on:click="onReader">已阅读</a-button>
        </p>


    </div>

</template>
<script>
    import axios from "axios";

    export default {
        data() {
            return {
                title: "",
                content: "",
                url: "",
                categoryName: "",
                typeName: "",
                anotherName: "",
                reader: ""
            };
        },
        created() {
            axios.post("/article/edit", {
                id: this.$route.query.id
            }).then((res) => {
                this.title = res.data.data.title;
                this.content = res.data.data.content;
                this.url = res.data.data.url;
                this.categoryName = res.data.data.categoryName;
                this.typeName = res.data.data.typeName;
                this.anotherName = res.data.data.anotherName;
                this.reader = res.data.data.reader;
            })
        },
        methods:{
            onReader:function () {
             axios.post("/article/reader",{
                 id: this.$route.query.id
             }).then((res)=>{
                 if(res.data.code===200){
                     this.$notification.open({
                         message: '来自服务器的提醒',
                         description:
                             '该文章已被标记为已读',
                         onClick: () => {

                         },
                     });
                 }else{
                     this.$notification.open({
                         message: '反馈平台',
                         description:
                         res.data.msg,
                         onClick: () => {

                         },
                     });
                 }
             })
            }
        }
    }
</script>