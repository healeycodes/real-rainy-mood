<template>
  <div>
    <NLink to="/about">What is this website?</NLink>
    <h1>
      Thanks for
      <span role="img" aria-label="surfer emoji">🏄</span> surfing by.
    </h1>
    <div v-if="!ready">
      <h2>Loading..</h2>
    </div>
    <div v-if="ready && raining">
      <h2>It is raining in {{ location }}.</h2>
      <p>Enjoy some comfy music on me.</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/6zvIxD4FUTA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div v-if="ready && !raining">
      <h2>It is not raining in {{ location }}.</h2>
      <p>So you can't come in.</p>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home page"
  },
  data() {
    return {
      ready: false,
      raining: false,
      location: ""
    };
  },
  methods: {
    async fetchRaining() {
      const res = await this.$http.$get(
        "/.netlify/functions/weather"
      );
      this.raining = res.raining;
      this.location = res.prettyLocation;
      this.ready = true;
    }
  },
  mounted() {
    this.fetchRaining();
  }
};
</script>
