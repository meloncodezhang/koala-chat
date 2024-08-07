<template>

    <section class="container flex-container">

        <section class="container-wrapper">
            <aside class="el-aside">
                <Menu />
            </aside>
            <main class="el-main">
                这是右边部分
                <router-view />
            </main>
        </section>

      
    </section>

</template>


<script setup>
import Menu from "./Menu.vue";

</script>

<style scoped lang="scss"> 

.container {
    height: 100vh;
    width:100vw;
    background: #FFFFFF;
    
}
.flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-wrapper {
    display: flex;
    flex-direction: row;
    // 知识点:未掌握
    flex:1;
    // 知识点:未掌握
    flex-basis: auto;
    // 知识点:未掌握
    box-sizing: border-box;
    min-width: 0;
}

.el-aside {
    width: 65px;
}

</style>