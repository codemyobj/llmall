<template>
  <div class="login">
    <div class="usr-pic">
      <van-image :src="defaultPic" class="user-pic-img" fit="cover" />
    </div>
    <div class="usr-info">
      <p>登录/注册</p>
      <div class="phone-num">
        <img class="icon-phone" src="@/assets/img/profile/phone.png" alt="" />
        <p>暂未绑定手机号</p>
      </div>
    </div>
    <div class="profile-arrow-right">
      <img src="@/assets/img/profile/arrow_right.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {
      defaultPic: require("@/assets/img/profile/user.png"),
    };
  },
};
</script>
<style scoped>
.login {
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 20px;
  background-color: #ff8198;
}

.usr-pic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
}

.usr-pic .user-pic-img {
  display: block;
  width: 60px;
  height: 60px;
}

.usr-info {
  font-size: 16px;
  margin-left: 20px;
  color: #fff;
}

.usr-info p:last-child {
  margin-left: 3px;
}

.usr-info .phone-num {
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.icon-phone {
  display: inline-block;
  width: 16px;
  height: 16px;
}

.profile-arrow-right {
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
}

.profile-arrow-right img {
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>