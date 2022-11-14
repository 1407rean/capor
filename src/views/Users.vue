<template>
  <el-container>
    <el-main class="sort_main">
      <!-- 用户展示 -->
      <div class="users_show">aaa</div>
      <!-- 用户数量变化 -->
      <div class="users_much">
        <b class="heads">Quantity</b>
        <div class="much_div">
          <el-card class="number_card">
            <b class="number_head">Total</b>
            <div class="number">12,212</div>
          </el-card>
          <el-card class="number_card">
            <b class="number_head">New Today</b>
            <div class="number">12</div>
          </el-card>
        </div>
      </div>
      <!-- 用户列表 -->
      <div class="users_list">
        <b class="heads">Users List</b>
        <el-card class="UserList">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="ID" label="ID" width="100" />
            <el-table-column prop="username" label="username" width="180" />
            <el-table-column prop="email" label="email" />
            <el-table-column prop="avatar" label="avatar" />
            <el-table-column fixed="right" label="Operations" width="210">
              <template #default="scope">
                <el-button type="primary" :icon="Edit" />
                <el-button type="danger" :icon="Delete" />
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页器 -->
          <el-pagination
            small
            background="#5bae23"
            layout="prev, pager, next"
            :total="50"
            class="mt-4"
          />
        </el-card>
      </div>
    </el-main>
    <!-- 个人信息 -->
    <el-aside class="sort_aside" width="200px">
      <el-card class="aside_card">
        <el-container>
          <el-header class="msg_head">
            <b>Hi!</b>
            <el-row :gutter="40">
              <el-col :span="4">
                <el-card style="width: 30px; height: 30px">
                  <ChatDotRound />
                </el-card>
              </el-col>
              <el-col :span="4">
                <el-card style="width: 30px; height: 30px">
                  <Bell />
                </el-card>
              </el-col>
            </el-row>
          </el-header>
          <el-main class="msg_main">
            <div class="msg_avatar">
              <el-avatar shape="square" :size="50" :src="squareUrl" />
              <b>rean</b>
              <span>hello~~</span>
              <div class="msg_works">
                <el-card class="works_card">
                  <b>Articles</b>
                  <span>32</span>
                </el-card>
                <el-card class="works_card">
                  <b>Sorts</b>
                  <span>2</span>
                </el-card>
              </div>
              <div class="msg_edit">
                <el-button type="success">Success</el-button>
                <el-button>Edit</el-button>
              </div>
            </div>
            <!-- 代表作品 -->
            <div>
              <el-card class="msg_show">
                <el-descriptions title="Classic" column="2">
                  <el-descriptions-item label="Title"
                    >koo</el-descriptions-item
                  >
                  <el-descriptions-item label="Email"
                    >18100000000</el-descriptions-item
                  >
                  <el-descriptions-item label="Sort">
                    <el-tag size="small">School</el-tag>
                  </el-descriptions-item>
                </el-descriptions>
                <el-timeline>
                  <el-timeline-item timestamp="2018/4/12" placement="top">
                    <el-card>
                      <p>Tom committed 2018/4/12 20:46</p>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item timestamp="2018/4/3" placement="top">
                    <el-card>
                      <p>Tom committed 2018/4/3 20:46</p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
              </el-card>
            </div>
          </el-main>
        </el-container>
      </el-card>
    </el-aside>
  </el-container>
</template>

<script>  
import { ChatDotRound, Bell, Edit, Delete } from "@element-plus/icons-vue";
import { getCurrentInstance, ref } from "vue";

export default {
  setup() {
    const tableData = [
      {
        author: ref(""),
        date: ref(""),
      },
    ];

    

    return {
      tableData,
      ChatDotRound,
      Bell,
      Edit,
      Delete
    };
  },
};
</script>

<style>
/* 个人信息 */
.aside_card {
  width: 99%;
  height: 100%;
}
.msg_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.msg_main {
  height: 80%;
}
/* 基本信息 */
.msg_avatar {
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.msg_avatar > b {
  margin: 2% 0;
}
.msg_avatar > span {
  margin-bottom: 4%;
}
/* 作品数量 */
.msg_works,
.msg_edit {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
}
.works_card {
  width: 30%;
  height: 80%;
}
.msg_show {
  display: flex;
  flex-wrap: wrap;
  width: 99%;
  height: 55vh;
  padding: 4% 4%;
}

.sort_main {
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 用户展示 */
.users_show {
  width: 90%;
  height: 15%;
}
/* 用户数量 */
.users_much {
  width: 90%;
  height: 20%;
  position: relative;
}
.heads {
  position: absolute;
  top: 2%;
  left: 2%;
}
.much_div {
  display: flex;
  height: 50%;
}
.number_card {
  width: 20%;
  height: 100%;
  margin: 5% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4%;
  background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
}
.number_head {
  color: rgb(122, 122, 122);
  font-size: 14px;
}
.number {
  color: #fafafa;
  font-weight: 500;
}
/* 用户列表 */
.users_list {
  width: 90%;
  height: 65%;
  position: relative;
}
.UserList {
  height: 85%;
  margin-top: 6%;
}

.sort_main,
.sort_aside {
  /* border: 1px solid #000; */
}
</style>
