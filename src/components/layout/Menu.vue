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
            <div
                v-for="nav in menus"
                :key="nav.link"
                @click="onClickMenu(nav)"
                :class="{
                    'menu-items':true,
                }"
            >
            
                <!-- 是否显示消息提示小红点 -->
                <div class="hotspot" v-if="nav.hotspot"></div>

                <!-- 动态渲染icon图标 -->
                <el-icon>
                      <component 
                        :is="nav.icon"
                    >
                    </component>
                </el-icon>
                
                <span>{{ nav.title }}</span>


            </div>
        </main>

        <footer class="menu-footer">
            <div class="quite" @click="quitSys">
                <span>退出</span>
            </div>
            <button @click="changeCount">测试红点</button>
        </footer>

    </section>

</template>


<script setup>
import { reactive, markRaw, computed, ref } from "vue";
import { ChatLineRound,UserFilled,Tools } from '@element-plus/icons-vue'

const unReadCount = ref(0);
const isFriendApply = ref(true);
const isGroupApply = ref(true);
const menuList = ref(["message", "contact", "settings"])

const menus = reactive([
    {
        link:'/message',
        // markRaw方法
        icon:markRaw(ChatLineRound),
        title:'消息',
        // 计算属性,unReadCount的结果发生变化,则会重新计算unReadCount>0的结果并返回赋值给hotspot
        // 监控:是否有未读的消息
        hotspot: computed(()=> unReadCount.value % 3 == 0 )
    },
    {
        link:'/contact',
        icon:markRaw(UserFilled),
        title:'通讯录',
        // 监控是好友申请还是入群申请
        hotspot:computed(()=> isFriendApply.value && isGroupApply.value )
    },
    {
        link:'/settings',
        icon:markRaw(Tools),
        title:'设置',
    }])

const isActive = (menu) => {
    return true
}

const changeCount = () => {
    unReadCount.value += 1
    console.log("count+1", unReadCount.value , unReadCount.value > 5);
    if(unReadCount.value % 12 == 0){
        isFriendApply.value = false
    }
}

const quitSys = () => {
    unReadCount.value = 1;
    isFriendApply.value = false;
    isGroupApply.value = false;
}

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
    .menu-main {
        :deep .el-icon {
            font-size: 25px;
        }
        flex:auto;
        overflow: hidden;
        width: 100%;
    }
    .menu-footer {
        height: 90px;
        width: 100%;
        div{
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        span {
            display: inline-block;
            font-weight: 500;
        }
       
    }
}

.menu-items {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    border-radius: 10px;
    font-size:12px;
    width: 54px;
    height: 54px;
    // auto自动占据剩余空间达到居中的效果
    margin: 8px auto;
}

.hotspot {
    width: 8px;
    height: 8px;
    --hotspot: #ff1e1e;
    background: var(--hotspot);
    display: inline-block;
    position: absolute;
    border-radius: 5px;
    right: 5px;
    top: 9px;
    // 添加动画效果
    animation: notifymove 3s infinite;
    animation-direction: alternate;
    -webkit-animation: notifymove 3s infinite;
}

@keyframes notifymove {
  0% {
    background: var(--hotspot);
  }

  25% {
    background: transparent;
  }

  50% {
    background: var(--hotspot);
  }

  75% {
    background: transparent;
  }

  100% {
    background: var(--hotspot);
  }
}

@-webkit-keyframes notifymove {
  0% {
    background: #ff1e1e;
  }

  25% {
    background: transparent;
  }

  50% {
    background: #ff1e1e;
  }

  75% {
    background: transparent;
  }

  100% {
    background: #ff1e1e;
  }
}

</style>