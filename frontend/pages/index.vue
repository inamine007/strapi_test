<template>
  <div>
    <div class="l-wrapper">
      <div class="l-main">
        <div class="c-front-visual">
          <div class="c-front-visual__text">HELLO WORLD.</div>
        </div>
        <div class="l-container is-sm">
          <div class="c-front-text">
            <p>
              名古屋を中心として活動している田中太郎のポートフォリオサイトです。<br>
              WebデザインやHTMLコーディングを勉強しています。<br>
              このサイトでは日々の学習の記録や、これまで作成した作品を掲載しています。<br>
              ご連絡やお問い合わせは<NuxtLink to="/contact">こちら</NuxtLink>からお願いします。
            </p>
            <h2 class="c-post-list__title">LATEST POSTS</h2>
            <ul class="wp-block-latest-posts has-dates">
              <li v-for="(blog, index) in blogs" :key="index">
                <a href="#">{{ blog.attributes.title }}</a>
                <time class="wp-block-latest-posts__post-date">{{ $formatDateToString(blog.attributes.createdAt) }}</time>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  head() {
    return {
      title: 'MY PORTFOLIO',
      titleTemplate: ''
    }
  },
  async asyncData(context) {
    return await context.$strapi.find('blogs')
      .then(res => {
        console.log(res.data);
        return {
          blogs: res.data
        }
      }).catch(err => {
        console.log(err)
      });
  }
}
</script>
