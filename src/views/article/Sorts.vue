<template>
  <el-container>
    <!-- 标题行 -->
    <el-header class="head">
      <el-row>
        <el-col :span="8"><b>Welcome Caption's Orders</b></el-col>
        <el-col :span="8"></el-col>
        <el-col :span="8">
          <!-- 展示用户 -->
          <div class="avator">
            <el-row :gutter="40">
              <el-col :span="4">
                <el-card class="a_icon">
                  <el-icon><ChatLineSquare /></el-icon>
                </el-card>
              </el-col>
              <el-col :span="4">
                <el-card class="a_icon">
                  <el-icon><Bell /></el-icon>
                </el-card>
              </el-col>
              <el-col :span="4">
                <el-card class="a_icon">
                  <el-icon><Bell /></el-icon>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="user_main">
      <div class="main_left">
        <!-- 新增分类 -->
        <el-card class="sort_add">
          <div>
            <b>
              If you think there is no category you want, you can try to create
              it here
            </b>
          </div>
          <el-button type="success" plain class="success">Add Sort</el-button>
        </el-card>
        <b class="SortList">Sort List</b>
        <!-- 分类列表 -->
        <el-card class="sort_list">
          <el-table :data="tableData" style="width: 100%" max-height="250">
            <el-table-column fixed prop="sort_id" label="Sort ID" width="185" />
            <el-table-column prop="name" label="Name" width="160" />
            <el-table-column prop="author" label="Author" width="160" />
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
      <div class="main_right">
        <img src="../../assets/login/tree.png" class="tree" />
        <el-card class="sort_num">
          <div class="num">
            <b>All Sorts</b>
            <div>
              <div>
                <span>Today</span>
                <span>2 Orders</span>
              </div>
              <div>
                <span>All</span>
                <span>2 Orders</span>
              </div>
            </div>
          </div>
        </el-card>
        <!-- 发布用户 -->
        <b class="SortAuthors">Sort Authors</b>
        <el-card class="sort_author">
          <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="author" label="Author" width="150%" />
            <el-table-column prop="date" label="Date" width="155%" />
          </el-table>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { ChatLineSquare, Bell, Edit, Delete } from "@element-plus/icons-vue";
import { ref } from "vue";
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
      ChatLineSquare,
      Bell,
      Edit,
      Delete,
    };
  },
};
</script>

<style>
/* Main */
/* .head{
    display: flex;
    justify-content: space-around;
} */
.avator {
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.a_icon{
  width: 30px; 
  height: 30px;
  display: flex;
  justify-content: center;
  align-items:center;
}
.user_main {
  height: 90vh;
  display: flex;
  justify-content: space-between;
}
.main_left {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.sort_add {
  width: 90%;
  height: 25%;
  color: #c1f39e;
  margin-bottom: 8%;
  background-image: url("../../assets/login/leaf_add.jpeg");
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.success {
  position: absolute;
  top: 80%;
  left: 20%;
  transform: translate(-20%, -80%);
}
.sort_list,
.sort_author {
  width: 90%;
  height: 60%;
}
.SortList,
.SortAuthors {
  font-size: 20px;
  color: #5bae23;
  position: absolute;
  top: 32%;
  left: 5%;
  transform: translate(0, 0);
}
.main_right {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.tree {
  width: 50%;
  position: absolute;
  top: 12.5%;
  left: 50%;
}
.sort_num {
  width: 90%;
  height: 25%;
  margin-bottom: 18%;
  background: #c1f497;
}
.num {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.num > b {
  font-size: 20px;
}
.num > div {
  font-weight: 500;
  font-size: 14px;
}
.num > div > div > span {
  margin: 0 20px;
}
</style>
