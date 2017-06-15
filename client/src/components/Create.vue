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
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">Content</label>
            <div class="col-sm-10">
              <textarea class="form-control"rows="15"></textarea>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-success btn-circle text-uppercase" type="button"><span class="glyphicon glyphicon-send"></span> Edit Thread</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
