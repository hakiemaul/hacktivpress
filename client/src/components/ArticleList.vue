<template lang="html">
  <div>
    <b-list-group>
      <b-list-group-item>
        <b-form-input v-model="text" type="text" placeholder="Search"></b-form-input><br>
        <br>
        <b-form-radio v-model="selection":options="options" stacked="success">
        </b-form-radio>
        <b-button size="sm" variant="primary" href="" @click="doSearch">
          Search
        </b-button>
      </b-list-group-item>
      <b-list-group-item v-for="article in articles" :to="{ path: 'article', query: { id: article._id }}" :key="article._id">{{article.title}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      selection: '',
      options: [{
        text: 'Search by category',
        value: 'category'
      }, {
        text: 'Search by author',
        value: 'author'
      }]
    }
  },
  methods: {
    doSearch () {
      var self = this
      this.axios.get(`http://localhost:3000/api/articles/${self.selection}/${self.text}`)
      .then(response => {
        self.$store.commit('getSearches', response.data)
        self.$router.push('/searchresult')
      })
    }
  },
  computed: {
    articles () {
      return this.$store.getters.articles
    }
  }
}
</script>

<style lang="css" scoped>
</style>
