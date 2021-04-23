<template>
    <div>
        <h1></h1>
    </div>
</template>
<script>
    export default {
     created() {
     if(sessionStorage.getItem("token")==null){
         console.log("未登录")
         this.$router.push("/login")
     }
     }
    }
</script>