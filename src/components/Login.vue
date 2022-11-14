<template>
  <div class="main">
    <el-card class="box-card">
      <el-row>
        <!-- 左 -- 登录信息 -->
        <el-col :span="12" class="log_left">
          <img src="../assets/login/leaf.png" class="leaf" />
          <el-card class="login_msg">
            <!-- logo -->
            <div class="logo">
              <h2>logo</h2>
            </div>
            <!-- 用户信息 -->
            <el-input
              v-model="username"
              placeholder="Please input username"
              clearable
            />
            <el-input
              v-model="password"
              type="password"
              placeholder="Please input password"
              show-password
            />
            <!-- 登录按钮 -->
            <el-button class="login_btn" @click="toLogin"
              >Login In</el-button
            >
            <el-row class="log_un">
              <!-- 记住密码 -->
              <el-col :span="12">
                <el-checkbox
                  v-model="remember"
                  label="Remember Me"
                  size="small"
                />
              </el-col>
              <!-- 忘记密码 -->
              <el-col :span="12">
                <el-link class="forgot">Forgot Password?</el-link>
              </el-col>
            </el-row>
            <div class="line">
              <el-divider />
            </div>
            <span class="cap">Welcome Caption's Orders</span>
          </el-card>
        </el-col>
        <!-- 右 -- 注册 -->
        <el-col :span="12" class="log_right">
          <div class="back">
            <img src="../assets/login/girl.png" class="girl" />
            <div class="inner">
              <span>Welcome to <b>Caption's Orders</b></span>
              <el-divider />
              <span>
                I think you want to register an account !
                <el-link :underline="false"> Register User >>></el-link>
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { getCurrentInstance, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const username = ref("");
    const password = ref("");
    const remember = ref("");

    const login = (url) => {
      router.push(url);
    };

    const {proxy}  = getCurrentInstance();
    const toLogin = async ()=>{
      let res = await proxy.$api.user.toLogin({
        username: 'admin',
        password: '123456',
      })
      console.log(res,'--');
    }

    return {
      username,
      password,
      remember,
      login,
      toLogin
    };
  },
};
</script>

<style>
.main {
  width: 100vh;
  height: 100%;
  position: relative;
}
.box-card {
  width: 200vh;
  height: 95vh;
  position: absolute;
  left: 55%;
  top: 50%;
  transform: translate(-26.5%, -50%);
  border-radius: 15px;
}
/* 登录信息 */

.log_left {
  position: relative;
}
.leaf {
  z-index: 1;
  width: 40%;
  position: absolute;
  left: 68%;
}
.login_msg {
  width: 70%;
  height: 60%;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -10%);
}
/* logo */
.logo {
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-input {
  width: 80%;
  margin: 2% 0;
}
/* login_btn */
.login_btn {
  width: 80%;
  border: none;
  color: #fff;
  background: rgba(37, 61, 36, 0.902);
  box-shadow: 0 10px 20px 1px #253d24e6;
}
.log_un {
  margin: 4% 0 0;
  font-size: 8px;
}
.forgot {
  font-size: 8px;
  color: #46a0fc;
}
/* line */
.line {
  height: 0;
  margin: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-divider {
  width: 80%;
}
.cap {
  font-size: 4px;
  font-weight: 500;
  color: #46a0fc;
}
.log_right {
  z-index: 1;
  margin: 0;
  padding: 0;
  width: 50vh;
  height: 100vh;
  /* background-image: url("../assets/login/back.jpeg"); */
  background-size: 100% 100%;
}
.girl {
  width: 40%;
  position: absolute;
  top: 100%;
  right: 100%;
  transform: translate(120%, -115%);
}
.back {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(91, 174, 35, 0.5);
  border-radius: 100% 0% 16% 84% / 0% 100% 0% 100%;
}
.inner {
  width: 70%;
  color: #fff;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-25%, -50%);
}
.el-link {
  color: #46a0fc;
}
</style>
