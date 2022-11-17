<style>
.head_search {
  width: 100%;
  height: 15%;
  /* border: 1px solid #000; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head_search > div {
  margin-left: 2%;
}
.w-50 {
  width: 25%;
  margin-right: 2%;
}
/* 筛选 */
.screen {
  font-size: 14px;
  width: 100%;
  height: 10%;
  margin: 2% 0;
  /* border: 1px solid #000; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.pick {
  width: 80%;
}
/* 文章列表 */
.article_lst {
  width: 100%;
  height: 70%;
}
.aside {
  /* border: 1px solid #000; */
  background-color: #f4f5f9;
}
</style>
<template>
  <el-container>
    <el-main class="main">
      <!-- 搜索文章 -->
      <div class="head_search">
        <div><el-avatar :icon="UserFilled" /></div>
        <el-input
          v-model="input2"
          class="w-50 m-2"
          placeholder="Type something"
          :prefix-icon="Search"
        />
      </div>
      <!-- 筛选 -->
      <el-row class="screen">
        文章类别：<el-col :span="6">
          <el-select v-model="value" clearable placeholder="Category Search">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        发布时间：
        <el-col :span="8">
          <el-date-picker
            class="pick"
            v-model="value1"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :size="size"
          />
        </el-col>
        <el-col :span="6">
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>
      <div class="article_lst">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="ID" width="80" />
          <el-table-column prop="title" label="Title" width="180" />
          <el-table-column prop="cate_id" label="Sort" width="180" />
          <el-table-column prop="author_id" label="Author" />
          <el-table-column fixed="right" label="Operations">
            <template #default="scope">
              <el-button type="primary" @click="change" :icon="Edit" />
              <el-button type="danger" @click="deleteUser" :icon="Delete" />
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <el-pagination
            small
            layout="total, prev, pager, next"
            @size-change="handleSizeChange"
            :page-size="5"
            :total="2"
            class="page_u"
          />
      </div>
    </el-main>
    <el-aside class="aside">Aside</el-aside>
  </el-container>
</template>

<script>
import { UserFilled, Search, Edit, Delete } from "@element-plus/icons-vue";
import { getCurrentInstance, onMounted, ref } from "vue";

export default {
  setup() {
    const {proxy} = getCurrentInstance();

    /**
     *  获取文章列表
     */
    const tableData = ref([])
    const getArticleList = async()=>{
      const { code,data} = await proxy.$api.article.getArticleList();
      console.log(code,data,'three');
      if (code == 200) {
        tableData.value = data
        console.log(tableData);
      }
    }

    onMounted(() => {
      getArticleList()
    })
    


    return {
      tableData,
      getArticleList,
      UserFilled,
      Search,
      Edit, 
      Delete,
    };
  },
};
</script>
