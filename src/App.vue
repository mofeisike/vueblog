<template>
  <div id="app">
    <!--<AddBlog></AddBlog>-->
    <!--<ShowBlogs></ShowBlogs>-->
    <BlogHeader></BlogHeader>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'app',
  components: {
      AddBlog,
      ShowBlogs,
      BlogHeader,
  }
}
</script>

<style>

</style>
