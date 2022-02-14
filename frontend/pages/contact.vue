<template>
  <div>
    <div class="l-wrapper">
      <div class="l-main">
        <div class="l-container is-sm">
          <h1 class="c-post__title">お問い合わせ</h1>
          <div class="entry-content">
            <!-- ▼ メールフォーム : 開始-->
            <p>田中太郎へのお問い合わせは、下記メールフォームより送信してください。<br>
                ※当サイトにおける個人情報の取り扱いについては、「<a href="../privacy-policy/">プライバシーポリシー</a>」ページをご確認ください。</p>
            <p><strong>お名前 <span class="is-required">※必須</span></strong><br>
            <input name="name" type="text" placeholder="お名前をご入力ください"></p>
            <p><strong>メールアドレス <span class="is-required">※必須</span></strong><br>
            <input name="email" type="email" placeholder="メールアドレスをご入力ください"></p>
            <p><strong>お問い合わせ内容 <span class="is-required">※必須</span></strong><br>
            <textarea name="message" placeholder="お問い合わせ内容をご入力ください"></textarea></p>
            <p><strong>当サイトを知ったきっかけ <span class="is-required">※必須</span></strong><br>
              <label><input type="radio" name="where" value="検索エンジン"> 検索エンジン</label>
              <label><input type="radio" name="where" value="SNS"> SNS</label>
              <label><input type="radio" name="where" value="知人の紹介"> 知人の紹介</label>
              <label><input type="radio" name="where" value="その他"> その他</label></p>
            <p>
              <input type="submit" class="c-button" value="確認画面へ">
            </p>
            <!-- ▲ メールフォーム : 終了-->
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
      title: 'お問合せ',
    }
  },
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