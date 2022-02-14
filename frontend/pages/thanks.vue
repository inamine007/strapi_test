<template>
  <div>
    <div class="l-wrapper">
      <div class="l-main">
        <div class="l-container is-sm">
          <h1 class="c-post__title">お問い合わせ</h1>
          <div class="entry-content">
            <!-- ▼ 完了画面メッセージ : 開始-->
            <h2>送信完了しました</h2>
            <p>お問い合わせありがとうございました。<br />
              内容を確認のうえ、改めてご連絡いたします。<br />
              今しばらくお待ちください。</p>
            <p>&raquo;<a href="/">トップページへ戻る</a></p>
            <!-- ▲ 完了画面メッセージ : 終了-->
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
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