<template>
  <header class="l-header">
    <div class="c-header-description">田中太郎のポートフォリオサイト</div>
    <a class="c-logo" href="./">
      <div class="c-logo__image">
        <img src="@/assets/images/logo.png" alt="MY PORTFOLIO">
      </div>
      <div class="c-logo__text">MY PORTFOLIO</div>
    </a>
    <div class="c-global-nav">
      <ul>
        <li>
          <NuxtLink to="/">HOME</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profile">PROFILE</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs">BLOG</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">CONTACT</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>