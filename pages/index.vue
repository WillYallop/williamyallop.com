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
      ff
    </HomeSection>
    <!-- Contact -->
    <HomeSection id="contact"
    :title="'Contact'"
    :body="'Got a question or something on your mind?'">
      ff
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