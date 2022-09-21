<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="user-details">
        <div class="back">
          <router-link :to="{ name: 'UsersList' }"
            ><img src="../assets/back.svg"
          /></router-link>
        </div>
        <div class="user-image"><img :src="user.avatar_url" /></div>
        <div class="user-name">
          <h3>{{ user.name }}</h3>
        </div>
        <div class="user-repo" v-for="repo in userRepo" :key="repo.id">
          <div class="repo-name">
            <a :href="repo.html_url" target="_blank">
              {{ repo.name }}
            </a>
          </div>
          <div class="watcher-star">
            <div class="watcher">
              <span><img src="../assets/watchers.svg" /></span>
              {{ repo.watchers_count }}
            </div>
            <div class="star">
              <span><img src="../assets/star.svg" /></span>
              {{ repo.stargazers_count }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../views/Navbar.vue";
import Footer from "../views/Footer.vue";

export default {
  name: "SingleUser",
  components: {
    Navbar,
    Footer,
  },

  mounted() {
    this.$store.dispatch("getUser", this.$route.params.id);
    this.$store.dispatch("getUserRepo", this.$route.params.id);
  },

  computed: {
    user() {
      return this.$store.getters.singleUser;
    },
    userRepo() {
      return this.$store.getters.userRepository;
    },
  },
};
</script>
<style scoped>
.container {
  padding: 70px 48px;
  position: relative;
}
.user-details {
  padding: 0 124px;
}

.user-image {
  position: relative;
  margin: 0 auto;
  background: #54a3ff;
  height: 300px;
  width: 300px;
  border-radius: 50%;
}
.user-name {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 34px 0;
}
.user-image img {
  position: absolute;
  width: 240px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 20px;
}
.user-repo {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 8px;
}
.repo-name {
  width: 75%;
}
.repo-name a {
  color: #000000;
  font-size: 20px;
  font-weight: 400;
}
.repo-name a:hover {
  color: #54a3ff;
  text-decoration: underline;
}
.watcher-star {
  display: flex;
  width: 25%;

  align-items: center;
}
.watcher-star img {
  width: 23px;
}
.watcher,
.star {
  width: 50%;
  display: flex;
  align-items: center;
}
.watcher span,
.star span {
  margin-right: 10px;
}
</style>
