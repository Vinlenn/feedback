<template>
    <a-table :columns="columns" :data-source="data" rowKey="id" :pagination="pagination" @change="handleTableChange" >
        <a slot="name" slot-scope="text,record" v-on:click="toArticle(record.id)">{{text}}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> 名称</span>
        <span slot="action" slot-scope="text, record" >
            <a v-on:click="onDelete(record.id)">删除</a>
        </span>
    </a-table>
</template>
<script>
    import axios from 'axios'

    const columns = [
        {
            dataIndex: 'name',
            key: 'name',
            slots: { title: 'customTitle' },
            scopedSlots: { customRender: 'name' },
        },
        {
            title: '所属分类',
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: '爬虫关键字',
            dataIndex: 'anotherName',
            key: 'anotherName',
        },
        {
            title: '操作',
            key: 'action',
            scopedSlots: { customRender: 'action' },
        },
    ];

    export default {
        data() {
            return {
                data:[],
                columns,
                pagination:{
                    total:0,
                    current:1,
                    pageSize:10,
                    showTotal: total => `一共 ${total} 条`, // 显示总数
                }
            };
        },
        created(){
            axios.post("/type/list",{
                pageNumber:this.pagination.current,
                pageSize:this.pagination.pageSize,
                id:this.$route.query.id
            }).then((res)=>{
                if(res.data.code===200){
                    const parse = JSON.parse(res.data.data);
                    console.log(parse);
                    this.data=parse.list;
                    this.pagination.total=parse.count;
                    console.log(this.pagination.total)
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
        },
        methods:{
            onDelete:function (id) {
            console.log(id);
            },
            toArticle:function(id){
                this.$router.push({path: '/zkh/article/list', query: {id: id}})
            },
            handleTableChange:function (pagination) {
                this.pagination=pagination;
                axios.post("/type/list",{
                    pageNumber:this.pagination.current,
                    pageSize:this.pagination.pageSize,
                    id:this.$route.query.id
                }).then((res)=>{
                    if(res.data.code===200){
                        const parse = JSON.parse(res.data.data);
                        this.data=parse.list;
                        this.pagination.total=parse.count;
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
        },
        watch:{

            $route(){
                axios.post("/type/list",{
                    pageNumber:this.pagination.current,
                    pageSize:this.pagination.pageSize,
                    id:this.$route.query.id
                }).then((res)=>{
                    if(res.data.code===200){
                        const parse = JSON.parse(res.data.data);
                        console.log(parse);
                        this.data=parse.list;
                        this.pagination.total=parse.count;
                        console.log(this.pagination.total)
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

        },

    };
</script>