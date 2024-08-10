

<template>

    <section class="el-container">
        <!-- v-dropsize:拖拽组件暂时未实现-->
        <aside 
            class="el-aside"
            v-show="isShowSideBar"
        >
            <SideBar/>
        </aside>

        <main class="el-main">
            <div>el-main</div>
            <el-button @click="showSidebar">面包屑</el-button>
        </main>

    </section>

  
</template>

<script setup>
import SideBar from '/src/components/views/message/SideBar.vue'
import { ref }from 'vue'

const isShowSideBar = ref(true)
const showSidebar = ()=> {
    isShowSideBar.value = !isShowSideBar.value
}
</script>

<style scoped>

.el-container {
    height: 100%;
}

.el-main {
    padding: 0px;
    margin: 0px;
}

.el-aside {
    width: 320px;
    /* background-color: aquamarine; */
    position: relative;
    user-select: none;
    /* 添加右边框 */
    box-shadow: 2px 0 8px 0 #CFD3DC;
}

</style>
