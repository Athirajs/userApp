<template>
  <div class="wrapper">
    <div class="navbar">
      <div class="logo">
        <router-link :to="{ path: '/' }"
          ><img src="../assets/logo.svg" width="40"
        /></router-link>

        <h2>Github Userboard</h2>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.wrapper {
  width: 100%;
  position: relative;
}
.wrapper .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 48px;
  background: #24292f;
  height: 80px;
}
.wrapper .navbar .logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper .navbar .logo h2 {
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
  line-height: 23px;
  margin-left: 16px;
}
.searchbar input[type="text"] {
  height: 32px;
  width: 231px;
  left: -3px;
  top: 0px;
  border-radius: 12px;
}
.wrapper .navbar .searchbar {
  position: relative;
}
.searchbar .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 100%;
}
.searchbar .icon img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
</style>
