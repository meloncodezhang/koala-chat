<template>
    <section class="el-container">
        <!-- 显示搜索框+添加按钮 -->
        <header class="el-header header-tools">
            <el-input
                v-model="inputValue"
                size="middle"
                placeholder="搜索好友/群聊"
                :prefix-icon="Search"
            >
            </el-input>

             <el-button :icon="Plus" circle />
        
        </header>

        <!-- 显示置顶列表 -->
        <header class="el-header header-top">
            <!-- 每个置顶元素绑定Popover气泡卡片 -->
            <el-popover
                placement="bottom"
                trigger="hover"
                v-for="item in topItems"
                :key="item.index_name"
                teleported="false"
            >
                <template #reference>
                    <div 
                        class="top-item"
                        @click="onLabelTalk(item, true)"
                        :class="{
                            'active': isActive(item)
                        }"

                    >
                        <el-image 
                            :src="item.avatar" 
                            :username="item.name"
                            class="avatar"
                        >
                        </el-image>
                        <span class="icon-mark robot" v-show="item.is_robot == 1">助</span>
                        <span class="icon-mark group" v-show="item.talk_type == 2 && item.is_robot == 0">
                            群
                        </span>
                        <!-- <span class="text">{{ item.remark || item.name}}</span> -->
                        <span class="text">{{ item.name}}</span>

                    </div>
                </template>

                <div class="card-sidebar">
                    <span>
                         {{item.name}}
                    </span>
                </div>


            </el-popover>

        </header>

        <header class="el-header header-badge">
            <!-- <div>头部内容-未读区域</div> -->
        </header>

        <main class="el-main">
            <!-- <div>会话列表</div> -->
        </main>
    </section>
  
</template>

<script setup>
import { Search,Tools,Plus} from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
const inputValue = ref("")
const topItems = reactive([
    {
        "index_name":"1","name":"藤井树","avatar":"https://avatars.githubusercontent.com/u/32354856?v=4&size=64",
        "is_robot":0, "talk_type":1,"remark":"藤"
    },
    {
        "index_name":"2","name":"钓鱼佬基地","avatar":"https://avatars.githubusercontent.com/u/20987775?v=4&size=64",
        "is_robot":0, "talk_type":2,"remark":"购"
    },
    {
        "index_name":"3","name":"客服","avatar":"https://avatars.githubusercontent.com/u/293591?v=4&size=64",
        "is_robot":1, "talk_type":3,"remark":"官"
    },
    {
        "index_name":"1","name":"藤井树1","avatar":"https://avatars.githubusercontent.com/u/32354856?v=4&size=64",
        "is_robot":0, "talk_type":1,"remark":"藤"
    },
    {
        "index_name":"2","name":"藤井树2","avatar":"https://avatars.githubusercontent.com/u/32354856?v=4&size=64",
        "is_robot":0, "talk_type":1,"remark":"藤"
    },
    {
        "index_name":"3","name":"藤井树3","avatar":"https://avatars.githubusercontent.com/u/32354856?v=4&size=64",
        "is_robot":0, "talk_type":1,"remark":"藤"
    },
    {
        "index_name":"2","name":"钓鱼佬基地1","avatar":"https://avatars.githubusercontent.com/u/20987775?v=4&size=64",
        "is_robot":0, "talk_type":2,"remark":"购"
    },
    {
        "index_name":"1","name":"钓鱼佬基地2","avatar":"https://avatars.githubusercontent.com/u/20987775?v=4&size=64",
        "is_robot":0, "talk_type":2,"remark":"购"
    },
])

const onLabelTalk = (item, flag)=> {
    activeTab.value = item.name
    console.log(activeTab.value);
    console.log(item.name);
}
// tab是否被选中
const activeTab = ref("")
const isActive = (item) => {
    return activeTab.value == item.name
}
</script>

<style scoped lang="scss">

.el-container {
    display: flex;
    flex-direction: column;
}

.el-header {
    padding: 0px;
}
.header-tools {
    flex-shrink: 0;
    display: flex;
    height: 60px;
    padding: 0 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    :deep .el-input {
        width: 80%;
        .el-input__wrapper {
            border-radius: 95px;
        }
    }
    
}
.header-top {
    justify-content: space-between;
    padding: 5px 8px;
    grid-gap: 0 14px;
    display: grid;
    // 未掌握
    grid-template-columns: repeat(auto-fill, 40px);
    box-sizing: border-box;
    .top-item {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: space-between;
        flex-basis: 50px;
        flex-shrink: 0;
        height: 60px;
        margin: 3px 2px 3px 2px;
        cursor: pointer;
        .avatar {
            width: 35px;
            height: 35px;
            // 图片变圆
            border-radius: 35px;
        }
        .icon-mark {
            display: inline-block;
            height: 15px;
            width: 15px;
            background-color: #66b1ff;
            border-radius: 15px;
            font-size: 10px;
            color: black;
            line-height: 15px;
            text-align: center;
            position: absolute;
            top:20px;
            left: 25px;
            &.group {
                color: red;
            }
            &.robot {
                color: greenyellow;
            }

        }
        .text {
            display: inline-block;
            height: 15px;
            font-size: 12px;
            // 显示四个字
            width:48px;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
            margin-top: 8px;
            // 换行规则
            word-break: break-all;
        }
    }
    .active {
        .text {
            color: green;
        }
    }
}
.el-main {
    padding: 0px;
    margin: 0px;
}

</style>

<style lang="scss">
    // 气泡格式
    .card-sidebar {
        height: 35px;
        span {
            display: inline-block;
            line-height: 35px;
            text-align: center;
            width: 100%;
        }

    }

</style>
