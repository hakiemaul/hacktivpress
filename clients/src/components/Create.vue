<template lang="html">
  <div class="container">
    <div class="row prime">
      <div class="col-md-9">
        <h2>Create New Thread</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 needpad">
        <form class="form-horizontal col-md-10">
          <div class="form-group">
            <label class="col-sm-2 control-label">Title</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="article.title">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">Content</label>
            <div class="col-sm-10">
              <textarea class="form-control"rows="15" v-model="article.articleContent"></textarea>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">Category</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Separate multiple categories by commas" v-model="article.category">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-success btn-circle text-uppercase" type="button" @click="doPost"><span class="glyphicon glyphicon-send"></span> Post Article</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {
        title: '',
        articleContent: '',
        category: []
      }
    }
  },
  methods: {
    doPost () {
      var self = this
      self.article.category = self.article.category.split(',')
      let separated = []
      self.article.category.forEach(cat => {
        separated.push(cat.trim())
      })
      self.article.category = separated
      this.axios.post('http://localhost:3000/api/articles', {
        token: localStorage.getItem('token'),
        title: self.article.title,
        articleContent: self.article.articleContent,
        category: self.article.category
      })
      .then(response => {
        console.log(response.data)
        self.$store.dispatch('getArticles')
        self.$router.push({path: '/article', query: { id: response.data._id }})
      })
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style lang="css">
</style>
