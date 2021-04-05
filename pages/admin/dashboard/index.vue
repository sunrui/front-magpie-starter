<template>
  <div class="sun-body">
    <!-- 顶部卡片 -->
    <el-card shadow="never" >
      <div class="sun-elip-box">
        <el-avatar :size="68" :src="loginUser.avatar"/>
         <div style="margin-left: 10px;">
            <h4 class="sun-elip">你好，开始你新的一天的工作吧！</h4>
            <div class="sun-text-tip">
               <i class="el-icon-heavy-rain"></i>
              <span>和煦的春风唤醒了城市里的花儿,吹绿了草儿、树叶儿,也撩动了年轻人躁动不安的心儿。</span>
            </div>
          </div>
      </div>
    </el-card>
    <el-row :gutter="15">
      <el-col :md="3" :sm="6" :xs="12">
        <el-card shadow="hover" body-style="padding: 0;">
          <nuxt-link to="admin/order/paystack" class="app-link-block">
            <i class="app-link-icon el-icon-tickets" style="color: #b37feb;"></i>
            <div class="app-link-title">订单</div>
          </nuxt-link>
        </el-card>
      </el-col>
      <el-col :md="3" :sm="6" :xs="12">
        <el-card shadow="hover" body-style="padding: 0;">
          <nuxt-link to="/admin/config/paystack" class="app-link-block">
            <i class="app-link-icon el-icon-bank-card" style="color: #ffd666;"></i>
            <div class="app-link-title">通道</div>
          </nuxt-link>
        </el-card>
      </el-col>
      <el-col :md="3" :sm="6" :xs="12">
        <el-card shadow="hover" body-style="padding: 0;">
          <nuxt-link to="/admin/developer/user" class="app-link-block">
            <i class="app-link-icon el-icon-user"></i>
            <div class="app-link-title">用户</div>
          </nuxt-link>
        </el-card>
      </el-col>
      <el-col :md="3" :sm="6" :xs="12">
        <el-card shadow="hover" body-style="padding: 0;">
          <nuxt-link to="/admin/system/password" class="app-link-block">
            <i class="app-link-icon el-icon-s-operation" style="color: #ffc069;"></i>
            <div class="app-link-title">系统</div>
          </nuxt-link>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      // 小组成员数据
      userList: [
        {
          name: 'SunSmile',
          desc: 'UI设计师、交互专家',
          state: 0,
          avatar: '/imgs/avatar_01.jpg'
        },
        {
          name: '你的名字很好听',
          desc: '前端工程师',
          state: 0,
          avatar: '/imgs/avatar_02.jpg'
        },
        {
          name: '全村人的希望',
          desc: '前端工程师',
          state: 0,
          avatar: '/imgs/avatar_03.jpg'
        },
        {
          name: 'Jasmine',
          desc: '产品经理、项目经理',
          state: 1,
          avatar: '/imgs/avatar_04.jpg'
        },
        {
          name: '酷酷的大叔',
          desc: '组长、后端工程师',
          state: 1,
          avatar: '/imgs/avatar_05.jpg'
        }
      ]
    }
  },
  computed: {
    // 当前登录用户信息
    loginUser() {
      return this.$store.state.userInfo;
    }
  }
}
</script>

<style scoped>
/* 顶部用户信息卡片 */

/* 快捷方式 */
.app-link-block {
  display: block;
  color: inherit;
  padding: 15px 0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.app-link-block .app-link-icon {
  color: #69c0ff;
  font-size: 30px;
  margin-top: 5px;
}

.app-link-block .app-link-title {
  margin-top: 8px;
}


/* 本月目标 */
.workplace-goal-group {
  text-align: center;
  position: relative;
  padding: 48px 0;
}

.workplace-goal-group .workplace-goal-content {
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
}

.workplace-goal-group .workplace-goal-num {
  font-size: 40px;
  margin-top: 15px;
}

/* 小组成员 */
.sun-elip-box {
  display: flex;
  align-items: center;
}
.sun-elip {
  font-weight: normal;
  font-size: 20px;
}
.sun-user-list {
  display: flex;
  justify-content: space-between;
  padding: 13px 18px;
  border-bottom: 1px solid #eee;
}
.sun-user-list:last-child {
  border: 0;
}
.sun-user-info {
  display: flex;
}
</style>
