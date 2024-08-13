<template>

    <div class="skeleton flex-center" v-for="i in 15" :key="i">
        <div class="avatar">
            <el-skeleton style="--el-skeleton-circle-size: 35px">
                <template #template>
                    <el-skeleton-item variant="circle" />
                </template>
            </el-skeleton>
        </div>
        <div class="content">
            <el-skeleton class="name" :rows="0"/>
            <el-skeleton class="info" :rows="0"/>
        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>

.skeleton {
    padding: 5px 10px;
    margin: 8px 0;
    .avatar {
        width: 50px;
    }
    .content {
        // 未掌握
        flex:auto
    }
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}


</style>
