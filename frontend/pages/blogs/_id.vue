<template>
  <div>
    <div class="l-wrapper">
      <div class="l-main">
        <div class="l-container is-flex">
          <div class="l-contents">
            <article class="hentry">
              <header class="c-post__header">
                <div class="c-post__meta">
                  <span class="posted-on">
                    <time class="entry-date published">
                      {{ $formatDateToString(blog.attributes.publishedAt) }}
                    </time>
                  </span>
                  <span class="entry-author">
                    投稿者: 田中 太郎
                  </span>
                </div>
                <h1 class="c-post__title">
                  {{ blog.attributes.title }}
                </h1>
              </header>
              <div class="c-post__content">
                <client-only>
                  <p v-html="$md.render(blog.attributes.content)"></p>
                </client-only>
              </div>
              <footer class="c-post__footer">
                <span class="cat-tags-links">
                  <span class="cat-links">
                    <NuxtLink v-for="(category, index) in blog.attributes.categories.data" :key="index" :to="`/blogs/${blog.id}`" rel="category">
                      {{ category.attributes.name }}
                    </NuxtLink>
                  </span>
                </span>
              </footer>
            </article>
            <nav class="navigation post-navigation" role="navigation">
              <div class="nav-links">
                <div v-show="prevId" class="nav-previous">
                  <NuxtLink :to="`/blogs/${prevId}`" rel="prev">前の投稿</NuxtLink>
                </div>
                <div v-show="nextId" class="nav-next">
                  <NuxtLink :to="`/blogs/${nextId}`" rel="next">次の投稿</NuxtLink>
                </div>
              </div>
            </nav>
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
export default {
  head() {
    return {
      title: 'ブログ',
    }
  },  
  async asyncData(context) {
    return await context.$strapi.findOne('blogs', context.params.id, { populate: 'categories' })
      .then(res => {
        return {
          blog: res.data,
          prevId: res.meta.prevId,
          nextId: res.meta.nextId,
        }
      }).catch(err => {
        console.log(err)
      });
  }
}
</script>