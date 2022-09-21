import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    user: [],
    userRepo: [],
  },
  getters: {
    allUsers: (state) => state.users,
    singleUser: (state) => state.user,
    userRepository: (state) => state.userRepo,
  },
  mutations: {
    setUsers: (state, users) => (state.users = users),
    setUser: (state, user) => (state.user = user),
    setUserRepo: (state, userRepo) => (state.userRepo = userRepo),
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await axios.get(
        `https://api.github.com/users?per_page=`
      );

      console.log(response.data, "response");
      commit("setUsers", response.data);
    },
    async getUser({ commit }, id) {
      console.log(id, "id");
      const response = await axios.get(`https://api.github.com/users/${id}`);
      console.log(response.data, "response");
      commit("setUser", response.data);
    },
    async getUserRepo({ commit }, id) {
      console.log(id, "id");
      const response = await axios.get(
        `https://api.github.com/users/${id}/repos`
      );
      console.log(response.data, "repo");
      commit("setUserRepo", response.data);
    },
  },
});
