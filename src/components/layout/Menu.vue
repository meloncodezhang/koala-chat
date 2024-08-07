<template>

    <section class="menu-layout">
        <header class="menu-header">
            <el-popover
                placement="right"
                title="Title"
                :width="200"
                trigger="hover"
                content="this is content, this is content, this is content"
            >
                <template #reference>
                    <el-image
                        src="https://avatars.githubusercontent.com/u/30114549?v=4&size=64"
                        class="avatar"
                    >
                    </el-image>
                </template>

                <!-- 悬停时显示的内容 -->
                <div>我是张三</div>
            </el-popover>
            <span class="online-status online">
                在线
            </span>
        </header>

        <main class="menu-main">
            菜单-中部
        </main>

        <footer class="menu-footer">
            菜单-底部
        </footer>

    </section>

</template>


<script setup>
</script>

<style scoped lang="scss">

.avatar {
    width: 35px;
    height: 35px;
    border-radius: 25px;
}
.menu-layout {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .menu-header {
        height: 90px;
        width: 100%;
        // 宽度不够是不进行收缩
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        padding-top: 18px;
        box-sizing: border-box;
        align-items: center;
        cursor: pointer;
        .online-status {
            margin-top: 5px;
            font-size: 13px;
            color: rgb(185, 181, 181);
        
        }
        .online {
                color: #65c468;
        }

    }
}

</style>