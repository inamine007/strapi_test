<template>
  <div>
    <div class="l-wrapper">
      <div class="l-main">
        <div class="l-container is-flex">
          <div class="l-contents">
            <h1 class="archive-title">BLOG</h1>
            <div class="c-post-archive">
              <!-- ▼ 投稿 : 開始-->
              <article v-for="(blog, index) in blogs" :key="index" class="hentry">
                <div class="hentry-thumbnail">
                  <NuxtLink :to="`/blogs/${blog.id}`">
                    <img :src="baseUrl + blog.attributes.image.data.attributes.formats.thumbnail.url" alt="">
                  </NuxtLink>
                </div>
                <div class="hentry-content">
                  <header class="entry-header">
                    <div class="entry-meta">
                      <NuxtLink :to="`/blogs/${blog.id}`">
                        <time class="entry-date published">
                          {{ $formatDateToString(blog.attributes.createdAt) }}
                        </time>
                      </NuxtLink>
                    </div>
                    <h2 class="entry-title">
                      <NuxtLink :to="`/blogs/${blog.id}`">
                        {{ blog.attributes.title }}
                      </NuxtLink>
                    </h2>
                  </header>
                  <div class="entry-content">
                    <p>{{ blog.attributes.description }}</p>
                  </div>
                  <footer class="entry-footer">
                    <span class="cat-tags-links">
                      <span class="cat-links">
                        <NuxtLink v-for="(category, index) in blog.attributes.categories.data" :key="index" :to="`/blogs/${blog.id}`" rel="category">
                          {{ category.attributes.name }}
                        </NuxtLink>
                      </span>
                    </span>
                  </footer>
                </div>
              </article>
              <!--▼ ページネーション : 開始-->
              <Pagination 
                :totalPage="totalPage"
                :currentPage="currentPage"
                :action="clickCallback"
                path="/blogs"
              />
              <!--▲ ページネーション : 終了-->
            </div>
          </div>
          <!-- ▼ サイドバー : 開始-->
          <div class="l-aside">
            <div class="c-widget">
              <h2 class="c-widget__title">CATEGORIES</h2>
              <ul>
                <li>
                  <a href="#">学習記録</a>
                </li>
                <li>
                  <a href="#">作品集</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import Pagination from '@/components/Pagination.vue';
export default {
  components: { Pagination },
  head() {
    return {
      title: 'ブログ',
    }
  },
  async asyncData(context) {
    let currentPage = context.route.query.page ? Number(context.route.query.page) : 1;
    let pageSize = 5;
    const blogs = await context.$strapi.find('blogs', { populate: '*', 'pagination[page]': currentPage, 'pagination[pageSize]': pageSize } );
    return {
      blogs: blogs.data,
      baseUrl: context.$config.baseUrl,
      totalPage: blogs.meta.pagination.pageCount,
      currentPage,
      pageSize
    }
  },
  methods: {
    async clickCallback() {
      this.currentPage = Number(this.$route.query.page);
      const blogs = await this.$strapi.find('blogs', { populate: '*', 'pagination[page]': this.currentPage, 'pagination[pageSize]': this.pageSize } );
      this.blogs = blogs.data;
    }
   },
}
</script>

<style scoped>

</style>