<template>
  <div>
    <NLink to="/">Home</NLink>
    <h1>
      <span role="img" aria-label="wave">👋</span> Hi,
      <a href="https://healeycodes.com/">Andrew</a> here.
    </h1>
    <p>I wanted to learn more about Nuxt.js so I built this thing you're reading.</p>
    <p>It uses Netlify serverless functions, IP-API.com, and OpenWeatherMap.</p>
    <p>
      Check out the
      <a href="https://github.com/healeycodes/real-rainy-mood">source code</a>!
    </p>
  </div>
</template>

<script>
export default {
  head: {
    title: "Real Rainy Mood - About"
  }
};
</script>