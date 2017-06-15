<template lang="html">
  <div>
    <div v-for="article in articles">
      <h2>{{ article.title }}</h2>
      <h4><small>By {{article.author.username }}</small></h4>
      <h4><small>Created on {{article.createdAt }}</small></h4>
      <p v-for="content in article.articleContent.split('\n')">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articles () {
      return this.$store.getters.articles
    }
  }
}
</script>

<style lang="css">
</style>
