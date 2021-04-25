<template>
    <div>
        <h1>这是index</h1>
    </div>
</template>
<script>
    export default {
     created() {
     if(sessionStorage.getItem("token")==null){
         this.$router.push("/login")
     }
     }
    }
</script>