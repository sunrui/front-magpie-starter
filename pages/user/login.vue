<template>
  <div class="login">
    <div class="header">
      <div class="sun-left-box">
        <img src="@/assets/imgs/logo.png" alt="">
        <h1 class="sun-text">{{ ui.title }}</h1>
      </div>
    </div>

    <div class="login-box login-box-center">
      <div class="form-item">
        <h2>用户登录</h2>
      </div>
      <div class="form-item">
        <el-input v-model="model.userName" placeholder="请输入用户名" prefix-icon="el-icon-user"/>
      </div>
      <div class="form-item">
        <el-input v-model="model.password" type="password" placeholder="请输入密码" prefix-icon="el-icon-lock"/>
      </div>
      <div class="form-item">
        <el-button type="primary" :style="{width:'100%'}" @click="btnLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {httpUserApi} from "~/api/httpUserApi";

export default {
  layout: 'login-layout',
  data() {
    return {
      ui: {
        title: '勇哥聚合支付管理后台',
      },
      model: {
        userName: 'zhouyong',
        password: '123456',
      }
    }
  },
  methods: {
    btnLogin() {
      if (!this.model.userName) {
        return this.$message.error('用户名不能为空')
      }

      if (!this.model.password) {
        return this.$message.error('密码不能为空')
      }

      httpUserApi.postLoginPassword(this.model.userName, this.model.password).then(res => {
        if (res.directInvitorUserIdNotExists) {
          return this.$message.error('直推用户 ID 不存在。')
        } else if (res.userNameNotExists) {
          return this.$message.error('用户名不存在。')
        } else if (res.passwordLocked) {
          return this.$message.error('密码被锁定。')
        } else if (res.passwordVerifyError) {
          return this.$message.error('密码校验错误。')
        } else if (res.user) {
          this.$message.success('登录成功')
          this.$router.replace('/admin/dashboard')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #30c7b4;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  width: 100vw;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.3);

  .sun-text {
    font-size: 28px;
    color: #fff;
    padding-left: 12px;
  }
}

.sun-left-box {
  display: flex;
  align-items: center;

  img {
    width: 60px;
  }
}

.login-box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 320px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;

  .form-item {
    display: flex;
    align-items: center;
    margin-top: 20px;

    h2 {
      width: 100%;
      font-size: 30px;
      text-align: center;
      margin-bottom: 10px;
    }
  }

  .code-img {
    width: 100px;
  }
}

.login-box-center {
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-box-left {
  left: 10%;
}

.login-box-right {
  right: 10%;
}
</style>