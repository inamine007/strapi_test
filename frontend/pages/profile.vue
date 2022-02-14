<template>
  <div>
    <div class="l-wrapper">
      <div class="l-main">
        <div class="l-container is-sm">
          <article>
            <h1 class="c-post__title">
              プロフィール
            </h1>
            <div class="entry-content">
              <img src="@/assets/images/img-visual.jpg" alt="">
              <h2>Tarou Tanaka</h2>
              <p>
                子供の頃からものづくりとパソコンが好きで、Web制作を勉強中です。<br>
                HTML, CSS, PHP, WordPressを使った個人サイト制作も行なっています。
              </p>
              <h3>名前</h3>
              <p>田中太郎（たなかたろう）</p>
              <h3>生年月日</h3>
              <p>1998年10月30日</p>
              <h3>出身校</h3>
              <ul>
                <li>私立翔泳社高等学校</li>
                <li>サンプルデザイン専門学校 Web学科</li>
              </ul>
              <h3>お問い合わせ</h3>
              <p>
                お問い合わせは<a href="../contact/">›メールフォーム</a>からお願いします。
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  head() {
    return {
      title: 'プロフィール',
    }
  }
  // async asyncData(context) {
  //   return await context.$strapi.findOne('articles', 1)
  //     .then(res => {
  //       console.log(res);
  //       return {
  //         name: res.data.attributes.name,
  //         content: res.data.attributes.content
  //       }
  //     }).catch(err => {
  //       console.log(err)
  //     });
  // }
}
</script>