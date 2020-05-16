<template>
  <div>
    <h1>Welcome!</h1>
    <NLink to="/about">About Page</NLink>

    <client-only placeholder="Loading...">
      <!-- this component will only be rendered on client-side -->
      Here we'll make a call to the Netlify function.
    </client-only>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home page"
  }

};
</script>