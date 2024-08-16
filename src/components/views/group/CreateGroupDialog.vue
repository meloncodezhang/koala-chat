<template>

    <section class="el-container">

        <header class="el-header">
            <span>创建群聊</span>
        </header>
        <main class="el-main">

            <aside class="el-aside-left">
                <header class="search-part">
                    <el-input 
                        :prefix-icon="Search"
                        placeholder="搜索"
                    ></el-input>
                </header>

                <main class="radio-part">
                    <div class="el-checkbox-wrapper me-scrollbar me-scrollbar-thumb">
                        <el-checkbox-group
                            @change="handleCheckBoxChange"
                            class="checkbox-group"
                            v-model="checkedFridend"
                        >

                            <el-checkbox
                                v-for="fd in fridends"
                                :label="fd.userName"
                                :key="fd.userId"
                                :value="fd"
                                class="el-checkbox-item"
                            >
                                <div class="wrapper">
                                    <el-image class="avatar" :src="fd.userImgUrl"></el-image>
                                    <span class="name">{{fd.userName}}</span>
                                </div>
                            </el-checkbox>

                        </el-checkbox-group>
                    </div>
                    
                </main>
            </aside>
            
            <main class="el-main-right">

                <header class="name-header">

                    <el-form :model="form">
                        <el-form-item label="群聊名称">
                            <span style="color: red;">*</span>
                            <el-input 
                                v-model="form.groupName"
                                show-word-limit
                                maxlength="20"
                                type="text"
                            >
                            </el-input>
                        </el-form-item>
                    </el-form>


                </header>

                <div class="count">
                    <span>邀请成员数量({{groupMemCount}})</span>
                </div>

                <main class="grid-main">

                    <div class="grid-wrapper">
                       
                        <div v-for="fd in checkedFridend" class="info">
                            <el-image :src="fd.userImgUrl"></el-image>
                            <span class="name">{{fd.userName}}</span>
                        </div>

                    </div>

                </main>

            </main>


        </main>
        <footer class="el-footer">
            <el-button type="defult" size="small">取消</el-button>
            <el-button type="primary" size="small">确认</el-button>
        </footer>
    </section>
    
</template>

<script setup >
import { reactive,ref } from "vue";
import { Search,Delete } from '@element-plus/icons-vue'

const checkedFridend = ref([])
const fridends = reactive([
                {
                    userId : "6481596",
                    userName : "三咲智子",
                    userImgUrl : "https://avatars.githubusercontent.com/u/6481596?v=4&size=64",
                    isShow:true
                },{
                    userId : "20987775",
                    userName : "云游君",
                    userImgUrl : "https://avatars.githubusercontent.com/u/20987775?v=4&size=64",
                    isShow:true
                },{
                    userId : "293591",
                    userName : "Jeremy",
                    userImgUrl : "https://avatars.githubusercontent.com/u/293591?v=4&size=64",
                    isShow:true
                },{
                    userId : "44761321",
                    userName : "xiaoming",
                    userImgUrl : "https://avatars.githubusercontent.com/u/44761321?v=4&size=64",
                    isShow:true
                },{
                    userId : "20052395",
                    userName : "神楽坂みずき",
                    userImgUrl : "https://avatars.githubusercontent.com/u/20052395?v=4&size=64",
                    isShow:true
                },{
                    userId : "30518686",
                    userName : "justwiner",
                    userImgUrl : "https://avatars.githubusercontent.com/u/30518686?v=4&size=64",
                    isShow:true
                },{
                    userId : "30335393",
                    userName : "Jianjun Yu",
                    userImgUrl : "https://avatars.githubusercontent.com/u/30335393?v=4&size=64",
                    isShow:true
                },{
                    userId : "32354856",
                    userName : "YangLGggggggggg",
                    userImgUrl : "https://avatars.githubusercontent.com/u/32354856?v=4&size=64",
                    isShow:true
                },{
                    userId : "12124478",
                    userName : "Hades-li",
                    userImgUrl : "https://avatars.githubusercontent.com/u/12124478?v=4&size=64",
                    isShow:true
                },{
                    userId : "23313167",
                    userName : "류한경",
                    userImgUrl : "https://avatars.githubusercontent.com/u/23313167?v=4&size=64",
                    isShow:true
                },{
                    userId : "28420052",
                    userName : "张仕春",
                    userImgUrl : "https://avatars.githubusercontent.com/u/28420052?v=4&size=64",
                    isShow:true
                },{
                    userId : "46318880",
                    userName : "Delyan Haralanov",
                    userImgUrl : "https://avatars.githubusercontent.com/u/46318880?v=4&size=64",
                    isShow:true
                },{
                    userId : "839559",
                    userName : "zazzaz",
                    userImgUrl : "https://avatars.githubusercontent.com/u/839559?v=4&size=64",
                    isShow:true
                },{
                    userId : "42139754",
                    userName : "C.Y.Kun",
                    userImgUrl : "https://avatars.githubusercontent.com/u/42139754?v=4&size=64",
                    isShow:true
                },{
                    userId : "21104054",
                    userName : "一只前端汪",
                    userImgUrl : "https://avatars.githubusercontent.com/u/21104054?v=4&size=64",
                    isShow:true
                }
])
const handleCheckBoxChange = (value)=> {
    console.log("选中的是:",value);
    groupMemCount.value = checkedFridend.value.length
}
const groupName = ref("")
const form = reactive({
    "groupName":""
})
const groupMemCount = ref(0)

</script>

<style lang="scss" scoped>

.el-container {
    height: 550px;
    display: flex;
    .el-header {
        height: 60px;
        // background-color: aqua;
        border-bottom: 1px solid gainsboro;
        span {
            display: inline-block;
            // (48px - 16px)/2
            margin-top: 16px;
            font-size:15px;
            font-weight: 500;
            color: black;
        }
    }
    .el-main {
        background-color: beige;
        padding: 0;
        margin: 0;
        display: flex;
        width: 100%;
        .el-aside-left {
            width: 360px;
            height: 100%;
            .search-part {
                height: 30px;
                margin-top: 10px;
                margin-bottom: 5px;
                padding: 5px 16px;
            }
            .radio-part {
                height: calc(100% - 30px);
                .el-checkbox-wrapper {
                    // 不能用100%,必须用确定的高度,否则滚动条出现在外边
                    height:410px;
                    // 内容超过height,则自动出现滚动条
                    overflow: auto;
                    .el-checkbox-item {
                        margin-top: 20px;
                        display: flex;
                        // justify-content: flex-end;
                        .wrapper {
                            display: flex;
                            justify-content: flex-start;
                            width: 280px;
                            .name {
                                font-size: 13px;
                                line-height: 30px;
                                margin-left: 15px;
                            }

                        }
                    }
                }
            }
            // 增加右边框
            border-right: 1px solid gainsboro;
        }
        .el-main-right {
            width: calc(100% - 360px);
            
            .name-header {
                height: 30px;
                margin-top: 10px;
                margin-bottom: 5px;
                padding: 5px 16px;
                :deep .el-form-item__content {
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: unset;
                }
                span{
                    margin-right: 5px;
                }
                
            }
            .count {
                margin-left: 16px;
                margin-top: 20px;
                font-size: 16px;

            }
            .grid-main {
                .grid-wrapper {
                    display: grid;
                    padding: 10px;
                    grid-template-columns: repeat(auto-fill, 60px);
                    justify-content: space-between;
                    .info {
                        width: 60px;
                        height: 60px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        :deep .el-image {
                            width: 40px;
                            height:40px;
                        }
                        .name {
                            color:red;
                            font-size: 10px;
                            text-align: center;
                            justify-self: center;
                            width: 40px;
                            height: 12px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            
                        }
                    }
                }
            }
        }
        
    }
    .el-footer {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-top: 1px solid gainsboro;
    }
    .radio-part {
        // 样式调整 label和复选框调换位置
        :deep .el-checkbox__input {
            order:2
        }
        :deep .el-checkbox__label {
            order: 1;
            margin-right: 10px;
        }
        :deep .el-checkbox {
            display: flex;
        }
        .checkbox-group {
            margin-left: 20px;
            margin-top: 10px;
            height: 70%;
        }
        :deep .el-checkbox:last-of-type {
            margin-right: 0px;
        }
    }

}

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

.avatar {
    height: 30px;
    width: 30px;
    border-radius: 30px;
}

</style>