<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <!-- logo -->
        <div class="logo">logo</div>
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false"><el-icon><Expand /></el-icon></el-radio-button>
          <el-radio-button :label="true"><el-icon><Fold /></el-icon></el-radio-button>
        </el-radio-group> :collapse="isCollapse" -->
        <!-- 菜单 -->
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-sub-menu index="1">
            <template #title>
              <span>Users</span>
            </template>
            <el-menu-item index="1-1">
              <router-link to="/user">
                <el-icon><User /></el-icon>Users List
              </router-link>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>Article</span>
            </template>
            <el-menu-item index="2-1">
              <router-link to="/sorts">
                <el-icon><FolderOpened /></el-icon>Sorts List
              </router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/article">
                <el-icon><Tickets /></el-icon>Article List
              </router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link to="/publish">
                <el-icon><EditPen /></el-icon>Publish Article
              </router-link>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>Setting</span>
            </template>
            <el-menu-item index="3-1"
              ><el-icon><setting /></el-icon>Revise Data</el-menu-item
            >
            <el-menu-item index="3-2"
              ><el-icon><Edit /></el-icon>Reset Password</el-menu-item
            >
          </el-sub-menu>
        </el-menu>
        <!-- 小贴士 -->
        <el-card class="tips">
          <div>啊啊啊</div>
        </el-card>
      </el-aside>
      <!-- Main -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  User,
  FolderOpened,
  Tickets,
  EditPen,
  Edit,
  Setting,
  ChatLineSquare,
  Bell,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);
</script>

<style>
.common-layout {
  width: 100%;
  height: 100vh;
  /* border: 1px solid #000; */
}
.el-aside {
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.logo {
  width: 100%;
  height: 15%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 90%;
  max-height: 70%;
}
.tips {
  width: 80%;
  height: 15%;
  position: absolute;
  top: 100%;
  transform: translate(0, -110%);
}
</style>
