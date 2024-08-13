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

            <el-button :icon="Plus" circle @click="creatGroup" />
        
        </header>

        <!-- 头部内容-置顶列表 -->
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

        <!-- 头部内容-未读区域 -->
        <header 
            class="el-header header-badge"
            v-show="talkItems.length > 0"
        >
            <!-- 会话记录总条数 -->
            <p>会话记录({{talkItems.length}})</p>
            <p>
                <span class="badge unread" v-show="unreadNum">{{unreadNum}}条未读</span>
            </p>
            
        </header>

        <main class="el-main me-scrollbar me-scrollbar-thumb" id="talk-session-list">
            <!-- 根据会话列表加载状态,展示不同的内容 -->
            <template v-if="loadStatus==2"><Skeleton /></template>
        </main>
    </section>

    <div class="el-dialog-div">
        <el-dialog v-model="isCreateGroup" >
            <CreateGroupDialog />
        </el-dialog>
    </div>
   
    
  
</template>

<script setup>
import { Search,Tools,Plus} from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import Skeleton from './Skeleton.vue'
import CreateGroupDialog from '../group/CreateGroupDialog.vue'
const isCreateGroup = ref(false)
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

// 未读消息列表
const talkItems = reactive([
    {"message":"hello","id":"1"},{"message":"hi","id":"2"}
])
// 未读消息数量
const unreadNum = ref(1023)

// 会话列表加载状态 loadStatus:1-未加载,2-加载中,3-加载完成,4-加载失败
const loadStatus = ref(2)

// 创建群聊
const creatGroup = ()=>{
    isCreateGroup.value = true;
}


</script>

<style scoped lang="scss">

.el-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    // el-dialog外层必须包裹一个div,否则无法穿透修改样式
    .el-dialog-div {
        :deep .el-dialog {
            padding: 0px;
            .el-dialog__header {
                padding-bottom: 0px;
            }
        }
    }
    
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
    // 元素的高度由子元素确定
    height: auto;
}

.header-badge {
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    .unread {
        font-size: 11px;
        background-color: #ff4d4f;
        color: white;
        cursor: pointer;
        padding:4px;
    }
    // &.shadow {
    //     box-shadow: 0 2px 6px 0 rgb(31 35 41 / 5%);
    // }
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
            font-size: 12px;
        }

    }

// session-list设置滚动条样式
// 滚动条样式
.me-scrollbar {
  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: transparent;
  }

  &:hover {
    &::-webkit-scrollbar {
      background-color: var(--im-scrollbar);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--im-scrollbar-thumb);
    }
  }

  &.me-scrollbar-thumb {
    &::-webkit-scrollbar {
      background-color: unset;
    }
  }
}

</style>
