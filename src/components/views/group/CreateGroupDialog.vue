<template>

    <el-dialog
        v-model="isCreateGroup"
        @close="closeGroupDialog"
    >

        <section class="el-container">

            <header class="el-header">
                <span>创建群聊</span>
            </header>

            <main class="el-main">
                <aside class="el-aside-left">

                    <header class="search-part">
                        <el-input 
                            :prefix-icon="Search"
                            placeholder="  输入用户名进行搜索"
                            v-model="friendName"
                            maxlength="20"
                        ></el-input>
                    </header>

                    <main class="results-part">

                        <header class="results-part-header">

                            <span>最近联系人</span>
                            <!-- <button>最近联系人</button> -->

                        </header>

                        <main class="results-part-main">
                            <div class="el-checkbox-wrapper me-scrollbar me-scrollbar-thumb">
                                <el-checkbox-group
                                    @change="handleCheckBoxChange"
                                    class="checkbox-group"
                                    v-model="checkedFridendList"
                                >
        
                                    <el-checkbox
                                        v-for="fd in friendsList"
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

                        
                    </main>

                </aside>
                <main class="el-main-right">
                    
                    <header class="el-main-right-header">

                        <el-form :model="form">
                            <el-form-item label="群聊名称">
                                <span style="color: red;">*</span>
                                <el-input 
                                    v-model="form.groupName"
                                    show-word-limit
                                    maxlength="30"
                                    type="text"
                                >
                                </el-input>
                            </el-form-item>
                        </el-form>
    
    
                    </header>

                    <main class="el-main-right-main"> 
                        <div class="span-div">
                            <span>已添加 {{groupMemCount}} 人</span>
                        </div>
                        <el-button type="danger" :icon="Delete" text @click="clearCheckedBox">全部清空</el-button>
                    </main>

                    <footer class="el-main-right-footer">

                            <div class="grid-wrapper">
                               
                                <div v-for="fd in checkedFridendList" class="info">
                                    <el-image :src="fd.userImgUrl"></el-image>
                                    <span class="name">{{fd.userName}}</span>
                                </div>
        
                            </div>
        
                    </footer>


                </main>
            </main>

            <footer class="el-footer">
                <el-button type="defult" size="small" @click="cancle">取消</el-button>
                <el-button type="primary" size="small">确认</el-button>
            </footer>

        </section>


    </el-dialog>

    
</template>

<script setup >
import { reactive, ref } from 'vue'
import { Search,Delete } from '@element-plus/icons-vue'


const isCreateGroup = ref(true)
const checkedFridendList = ref([])
const friendsList = reactive([
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

const closeGroupDialog = ()=> {
    // 点击x和点击空白地方都会关闭dialog对话框
    console.log("关闭对话框");
}

const form = reactive({
    "groupName":""
})

const groupMemCount = ref(0)


const handleCheckBoxChange = (value)=> {
    console.log("选中的是:",value);
    groupMemCount.value = checkedFridendList.value.length
}

const clearCheckedBox = ()=> {
    // 清空左边checkbox的选择状态标志
    // 清空checkedFridendList列表
    console.log("清空checkedFridendList");
    checkedFridendList.value = []
    groupMemCount.value = checkedFridendList.value.length
}

const friendName = ref("")

</script>

<style lang="scss" scoped>

.el-container {
    height: 850px;
    display: flex;
    flex-direction: column;
    .el-header {
        height: 30px;
        span {
            display: inline-block;
            font-size:15px;
            color: black;
        }
        padding: 0px;
    }
    .el-main {
        display: flex;
        width: 100%;
        padding: 10px;
        .checkbox-group {
            margin-left: 10px;
            margin-top: 10px;
            height: 70%;
        }
        .el-aside-left{
            width: 460px;
            // 增加右边框颜色和线条
            border-right:1px solid  #dedfe0;
            .search-part {
                height: 30px;
                margin-top: 10px;
                margin-bottom: 5px;
                padding: 5px 10px;
            }
            .results-part {
                height: 700px;
                .results-part-header {
                    height: 20px;
                    span {
                        display: inline-block;
                        margin-left: 10px;
                        margin-top: 10px;
                    }
                }

                .results-part-main {
                    height: 660px;
                    .el-checkbox-wrapper {
                        margin-top: 20px;
                        height:calc( 100% - 40px );
                        // 内容超过height,则自动出现滚动条
                        overflow: auto;
                        .el-checkbox-item {
                            margin-top: 20px;
                            display: flex;
                            // justify-content: flex-end;
                            .wrapper {
                                display: flex;
                                justify-content: flex-start;
                                width: 300px;
                                .name {
                                    font-size: 13px;
                                    line-height: 30px;
                                    margin-left: 15px;
                                }
    
                            }
                        }
                    }

                }
            }

        }
        .el-main-right {
            width: calc(100% - 460px);
            .el-main-right-header {
                height: 30px;
                margin-top: 10px;
                margin-bottom: 5px;
                padding: 5px 15px;
                :deep .el-form-item__content {
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: unset;
                }
                :deep .el-form-item__label {
                    padding: 0px;
                }
                span{
                    margin-right: 5px;
                }
            }
            .el-main-right-main {
                display: flex;
                height: 35px;
                justify-content:space-between ;
                .span-div {
                   text-align: center;
                   line-height: 35px;
                    margin-left: 15px;
                    span {
                        display: inline-block;
                        font-size: 13px;

                    }
                    :deep .el-button {
                        height: 35px;
                    }
                }

                border-bottom:1px solid  #dedfe0;
            }
            .el-main-right-footer {
                .grid-wrapper {
                    display: grid;
                    padding: 10px;
                    grid-template-columns: repeat(auto-fill, 80px);
                    justify-content: space-between;
                    .info {
                        width: 80px;
                        height: 80px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        margin-top: 10px;
                        :deep .el-image {
                            width: 60px;
                            height:60px;
                        }
                        .name {
                            color:black;
                            font-size: 12px;
                            text-align: center;
                            justify-self: center;
                            width: 60px;
                            height: 15px;
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
}

.avatar {
    height: 30px;
    width: 30px;
    border-radius: 30px;
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


</style>