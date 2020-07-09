export const state = () => ({
  profile: {},
  authorised: false,
});
export const mutations = {
  AUTH(state, value) {
    state.authorised = value;
  },
  PROFILE(state, profile) {
    state.profile = profile;
  },
};
export const actions = {
  async login({ commit }, credential) {
    try {
      const user = await this.$api.user.login(credential);
      await commit("AUTH", true);
      await commit("PROFILE", user);
    } catch (err) {
      const res = err.response;
      if (res) {
        if (res.status === 404) throw new HttpError("Страница не найдена", res.status);
      } else throw err;
    }
  },
  async logout({commit}) {
    await commit("AUTH", false);
    await commit("PROFILE", {});
  }
};