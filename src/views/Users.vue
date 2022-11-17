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
.msg_i{
  width: 30px; 
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  overflow: scroll;
}
.page_u {
  position: absolute;
  top: 85%;
  z-index: 3;
}

.sort_main,
.sort_aside {
  /* border: 1px solid #000; */
}
</style>

<template>
  <el-container>
    <el-main class="sort_main">
      <!-- 用户展示 -->
      <button @click="getUserlist">aaaa</button>
      <div class="users_show">aaa</div>
      <!-- 用户数量变化 -->
      <div class="users_much">
        <b class="heads">Quantity</b>
        <div class="much_div">
          <el-card class="number_card">
            <b class="number_head">Total</b>
            <div class="number">{{ user_total }}人</div>
          </el-card>
          <el-card class="number_card">
            <b class="number_head">New Today</b>
            <div class="number">12人</div>
          </el-card>
        </div>
      </div>
      <!-- 用户列表 -->
      <div class="users_list">
        <b class="heads">Users List</b>
        <el-card class="UserList">
          <!-- <el-table :data="tableData" stripe style="width: 100%" @cell-click="handlerDelete" :page-seize="5">
            <el-table-column prop="id" label="ID" width="100" />
            <el-table-column prop="username" label="Username" width="180" />
            <el-table-column prop="email" label="E-mail" />
            <el-table-column prop="user_pic" label="Avatar" />
            <el-table-column fixed="right" label="Operations" width="210">
              <template #default="scope">
                <el-button type="primary" @click="change" :icon="Edit" />
                <el-button type="danger" @click="deleteUser" :icon="Delete" />
              </template>
            </el-table-column>
          </el-table> -->
          <!-- 分页器 -->
          <el-pagination
            small
            layout="total, sizes, prev, pager, next"
            @size-change="handleSizeChange"
            :page-size="5"
            :page-sizes="[3,5]"
            :total="pagesize"
            class="page_u"
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
            <el-row :gutter="40" style="display: flex;justify-content: flex-end;margin:0;">
              <el-col :span="4">
                <el-card class="msg_i">
                  <el-icon><ChatDotRound /></el-icon>
                </el-card>
              </el-col>
              <el-col :span="4">
                <el-card class="msg_i">
                  <el-icon><Bell /></el-icon>
                </el-card>
              </el-col>
            </el-row>
          </el-header>
          <el-main class="msg_main">
            <div class="msg_avatar">
              <el-avatar shape="square" :size="50"  />
              <b>{{ myname }}</b>
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
                <el-descriptions title="Classic" :column="2">
                  <el-descriptions-item label="Title">koo</el-descriptions-item>
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
import { useRouter } from 'vue-router';
import { ChatDotRound, Bell, Edit, Delete } from "@element-plus/icons-vue";
import { getCurrentInstance, ref } from "vue";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const router = useRouter()

    /**
     *  删除用户
     */
    let user_id = ref('')
    const handlerDelete = (row) =>{
      user_id = row.id; 
    }
    const deleteUser = async ()=>{
      const data = await proxy.$api.userInfo.deleteUser({id:user_id});
      getUserlist()   // 刷新列表
    }

    /**
     *  修改信息
     */
    const change = () => {
      router.push('/change')
    };

    /**
     *  个人信息
     */
    let myname = ref("");
    let avatar = ref("");
    const getUser = async () => {
      const data = await proxy.$api.userInfo.getUserinfo();
      myname.value = data.data.username;
    };

    /**
     *  用户列表
     */
    let size = ref('')
    let pagesize = ref(0);
    // 分页器数据
    function handleSizeChange(val) {
      console.log('??');
      size.value = val;
    }
    const handleCurrentChange = (val) =>{
      pagesize.value = val;
      getUserlist()
    }

    let tableData = ref([]);
    let user_total = ref("");
    const getUserlist = async () => {
      const data = await proxy.$api.userInfo.getUserlist();
      if (data.code == 200) {
        tableData.value = [...data.data];
        user_total.value = tableData.value.length;
        pagesize.value =
          tableData.value.length
      }
      console.log(pagesize.value,tableData.value.length%5,"12");
    };

    onMounted(() => {
      getUser();
      getUserlist();
    });

    return {
      change,
      handlerDelete,
      deleteUser,
      user_id,
      getUser,
      myname,
      getUserlist,
      tableData,
      pagesize,
      handleSizeChange,
      handleCurrentChange,
      size,
      user_total,
      ChatDotRound,
      Bell,
      Edit,
      Delete,
    };
  },
};
</script>
