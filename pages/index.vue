<template>
  <div class="test">
    <!-- Portfolio -->
    <HomeSection id="portfolio"
    :title="'Portfolio'"
    :body="'Browse my favourite personal projects.'">
      <HomePortfolio/>
    </HomeSection>
    <!-- Libraries -->
    <HomeSection id="libraries"
    :title="'Libraries'"
    :body="'Here are some libraries ive created.'">
      <HomeLibraries/>
    </HomeSection>
    <!-- Contact -->
    <HomeSection id="blogs"
    :title="'Blogs'"
    :body="'Checkout my latest blog posts.'">
      <HomeBlogs/>
    </HomeSection>
  </div>
</template>

<script>
export default {
  layout: 'main',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  height: 1000px;
}
</style>