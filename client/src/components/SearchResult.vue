<template lang="html">
  <div class="container">
    <div class="row">
      <div v-for="article in searches">
        <h2>{{ article.title }}</h2>
        <h4 class="small"><small>By {{article.author.username }}</small></h4>
        <h4 class="small"><small>Created on {{article.createdAt }}</small></h4>
        <p class="content" v-for="content in article.articleContent.split('\n')">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    searches () {
      return this.$store.getters.searches
    }
  }
}
</script>

<style lang="css" scoped>
h4 > small {
  padding: 0;
  margin: 0;
  line-height: 0.7em;
}
small {
  font-size: 12px;
}

.content {
  margin-top: 20px;
}
</style>
