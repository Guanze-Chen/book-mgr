<template>
  <div class="auth">
    <div class="title-info">
      <img
        src="https://www.scu.edu.cn/__local/B/67/25/DFAF986CCD6529E52D7830F180D_C37C7DEE_4340.png"
        alt="logo"
      />
      <h2 class="title">图书管理系统 后台</h2>
    </div>

    <div class="taps">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
        <div class="item">
            <a-input
            placeholder="账号"
            v-model:value="loginForm.account"
            >
              <template #prefix>
                <user-outlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input-password
            placeholder="密码"
            v-model:value="loginForm.password"
            >
                <template #prefix>
                     <key-outlined />
                </template>
            </a-input-password>
          </div>

          <div class="item">
            <a href="#">忘记密码</a>
          </div>

          <div class="item">
            <a-button @click="login" type="primary">登录</a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input
            placeholder="账号"
            v-model:value="regForm.account"
            >
              <template #prefix>
                <user-outlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input-password
            placeholder="密码"
            v-model:value="regForm.password"
            >
                <template #prefix>
                     <key-outlined />
                </template>
            </a-input-password>
          </div>

          <div class="item">
            <a-input
            placeholder="邀请码"
            v-model:value="regForm.inviteCode"
            >
                <template #prefix>
                   <gift-outlined />
                </template>
            </a-input>
          </div>

          <div class="item">
            <a href="#">忘记密码</a>
          </div>

          <div class="item">
            <a-button
            @click="register"
            type="primary"
            >注册</a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>


<script src="./index.js">
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>