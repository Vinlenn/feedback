<template>
    <a-table :columns="columns" :data-source="data" rowKey="id" :pagination="pagination" @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
            <a v-on:click="onInfo(record.id)">查看</a>
        </span>
    </a-table>
</template>
<script>
    import axios from 'axios'

    const columns = [
        {
            dataIndex: 'title',
            title: '标题',
            key: 'title',
            slots: {title: 'customTitle'},
            scopedSlots: {customRender: 'title'},
            ellipsis: true,
        },
        {
            title: '所属分类',
            dataIndex: 'typeName',
            key: 'typeName',
            width: 110,
        },
        {
            title: '内容',
            dataIndex: 'content',
            key: 'content',
            ellipsis: true,
        },
        {
            title: '是否已阅读',
            dataIndex: 'reader',
            key: 'reader',
        },
        {
            title: '源地址',
            dataIndex: 'url',
            key: 'url',
            ellipsis: true,
        },
        {
            title: '操作',
            key: 'action',
            scopedSlots: {customRender: 'action'},
        },
    ];

    export default {
        data() {
            return {
                data: [],
                columns,
                pagination: {
                    total: 0,
                    current: 1,
                    pageSize: 10,
                    showTotal: total => `一共 ${total} 条`, // 显示总数
                }
            };
        },
        created() {
            axios.post("/article/list", {
                pageNumber: this.pagination.current,
                pageSize: this.pagination.pageSize,
                id: this.$route.query.id
            }).then((res) => {
                if (res.data.code === 200) {
                    const parse = JSON.parse(res.data.data);
                    console.log(parse);
                    this.data = parse.list;
                    this.pagination.total = parse.count;
                    console.log(this.pagination.total)
                } else {
                    this.$notification.open({
                        message: '服务器提醒',
                        description:
                        res.data.msg,
                        onClick: () => {

                        },
                    });
                }

            })
        },
        methods: {
            onInfo: function (id) {
                this.$router.push({path: '/zkh/article/info', query: {id: id}})
            },
            handleTableChange: function (pagination) {
                this.pagination = pagination;
                axios.post("/type/list", {
                    pageNumber: this.pagination.current,
                    pageSize: this.pagination.pageSize,
                    id: this.$route.query.id
                }).then((res) => {
                    if (res.data.code === 200) {
                        const parse = JSON.parse(res.data.data);
                        this.data = parse.list;
                        this.pagination.total = parse.count;
                    } else {
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

    };
</script>