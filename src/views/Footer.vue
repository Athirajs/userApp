<template>
  <div class="wrapper">
    <div class="footer">
      <div class="logo">
        <a href="https://github.com" target="_blank">
          <img src="../assets/logo.svg" width="40" />
        </a>
      </div>
      <div class="copy">
        <h2>© All rights reserved, 2022</h2>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  width: 100%;
  height: 120px;
  padding: 20px;
  background: #24292f;
  box-shadow: 0px -12px 36px rgba(0, 0, 0, 0.25);
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.footer .logo img {
  width: 40px;
  padding-bottom: 20px;
}
.footer .copy h2 {
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
}
</style>
