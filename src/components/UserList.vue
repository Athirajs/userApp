<template>
  <div>
    <Navbar>
      <div class="searchbar">
        <input type="text" v-model="search" />
        <div class="icon">
          <img src="../assets/search.svg" />
        </div>
      </div>
    </Navbar>
    <div class="container">
      <div class="heading">
        <h1>Top Users</h1>
      </div>

      <div class="cards">
        <div class="card" v-for="user in filteredUser" :key="user.id">
          <div class="card-top">
            <div class="card-img">
              <img
                :src="user.avatar_url"
                @error="replaceByDefault"
                width="100"
              />
            </div>
          </div>
          <div class="content">
            <div class="github-name">
              <h5>
                <router-link
                  :to="{ name: 'User', params: { id: user.login } }"
                  >{{ user.login }}</router-link
                >
              </h5>
            </div>

            <div class="github">
              <a :href="user.html_url" target="_blank">
                <span><img src="../assets/github.svg" /> </span> Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="search && !filteredUser.length">
        <div class="user-not-found">
          <p>Users not found</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../views/Navbar.vue";
import Footer from "../views/Footer.vue";
import { mapActions, mapGetters } from "vuex";
//import defaultImg from "../assets/rubber-duck.svg";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      defaultImg: "../assets/rubber-duck.svg",
      search: "",

      userList: [],
    };
  },
  methods: {
    ...mapActions(["fetchUsers"]),
    replaceByDefault(e) {
      console.log(e);
      e.target.src = defaultImg;
    },
  },
  computed: {
    ...mapGetters(["allUsers"]),

    filteredUser() {
      if (this.search) {
        return this.$store.getters.allUsers.filter((item) => {
          return item.login.startsWith(this.search);
        });
      } else {
        return this.$store.getters.allUsers;
      }
    },
  },

  mounted() {
    this.fetchUsers();
  },
};
</script>
<style scoped>
.container {
  padding: 57px 87px;
}
.container .heading {
  display: flex;
  justify-content: center;
}
.user-not-found {
  display: flex;
  justify-content: center;
  font-size: 20px;
  height: calc(100vh - 350px);
}
.container .heading h1 {
  font-size: 48px;
  font-weight: 800;
  color: #000;
  margin-bottom: 65px;
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 97px;
}
.card {
  display: flex;
  justify-content: center;

  position: relative;
}

.card-top {
  position: relative;
  background-color: #54a3ff;

  width: 140px;
  height: 140px;
  border-radius: 50%;
}
.card-img img {
  position: absolute;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.card .content {
  position: absolute;
  width: 100%;
  padding: 30px;
  padding-top: 150px;
  text-align: center;
}
.card h5 a {
  margin-top: 12px;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  color: #000;
}

.card .content .github {
  color: #54a3ff;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card .content .github img {
  width: 14px;
}
</style>
