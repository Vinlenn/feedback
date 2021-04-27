<template>
  <div id="app" style="height: 100%;width: 100%">
    <a-layout id="components-layout-demo-top-side" v-if="$route.meta.keepAlive">
      <a-layout-header class="header" >
        <a-menu
                theme="dark"
                :style="{ lineHeight: '64px',fontSize:'30px'}"
        >
          test
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <a-layout style="padding: 24px 0; background: #fff">
          <a-layout-sider width="200" style="background: #fff">
            <a-menu
                    mode="inline"
                    style="height: 100%"
                    @click="change"
            >
              <a-sub-menu key="user">
                <span slot="title"><a-icon type="solution" />用户管理</span>
                <a-menu-item key="/user/edit">
                  修改信息
                </a-menu-item>
                <a-menu-item key="2">
                  添加用户
                </a-menu-item>
                <a-menu-item key="3">
                  用户列表
                </a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="feedback">
                <span slot="title"><a-icon type="bars" />反馈列表</span>
                <a-menu-item key="/feedback/list">
                  列表
                </a-menu-item>
                <a-menu-item key="/feedback/add">
                  添加
                </a-menu-item>
                <a-menu-item key="7">
                  option7
                </a-menu-item>
                <a-menu-item key="8">
                  option8
                </a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="system">
                <span slot="title"><a-icon type="bars" />系统管理</span>
                <a-menu-item key="/user/logout">
                  退出
                </a-menu-item>
                <a-menu-item key="6">
                  option6
                </a-menu-item>
                <a-menu-item key="7">
                  option7
                </a-menu-item>
                <a-menu-item key="8">
                  option8
                </a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="zkh">
                <span slot="title"><a-icon type="bars" />zkh</span>
                <a-menu-item key="/zkh/category/list">
                  类别列表
                </a-menu-item>
                <a-menu-item key="/zkh/type/list">
                  品种列表
                </a-menu-item>
                <a-menu-item key="/zkh/article/list">
                  文章列表
                </a-menu-item>
              </a-sub-menu>
            </a-menu>
          </a-layout-sider>
          <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
         Created by @Vinlen
      </a-layout-footer>
    </a-layout>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {

      };
    },
    created(){
      axios.defaults.headers.common['token'] = sessionStorage.getItem("token");
    },
    methods: {
      change:function (e) {
        if(e.key==='/user/logout'){
          sessionStorage.removeItem("token");
          this.$router.push("/login")
        }else{
          this.$router.push(e.key);
        }
      }
    },
  };
</script>