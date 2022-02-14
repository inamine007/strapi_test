<template>
  <nav class="navigation pagination" role="navigation">
    <h2 class="screen-reader-text">投稿ナビゲーション</h2>
    <div class="nav-links">
      <NuxtLink v-show="isPrevShow" @click.native="clickHandle" :to="`${path}?page=${currentPage - 1}`" class="next page-numbers">前ページへ</NuxtLink>
      <template v-if="totalPage <= 6">
        <NuxtLink 
          v-for="(page, index) in totalPage" 
          :key="index" 
          :class="['page-numbers', { 'current': isCurrentPage(page) }]"
          @click.native="clickHandle"
          :to="`${path}?page=${page}`">
            {{ page }}
        </NuxtLink>
      </template>
      <template v-else>
        <template v-if="currentPage <= 4">
          <NuxtLink 
            v-for="(page, index) in 5"
            :key="index" 
            :class="['page-numbers', { 'current': isCurrentPage(page) }]"
            @click.native="clickHandle"
            :to="`${path}?page=${page}`">
              {{ page }}
          </NuxtLink>
          ...
          <NuxtLink             
            :class="['page-numbers', { 'current': isCurrentPage(totalPage) }]"
            @click.native="clickHandle"
            :to="`${path}?page=${totalPage}`">
              {{ totalPage }}
          </NuxtLink>
        </template>
        <template v-else-if="currentPage >= (totalPage - 2)">
          <NuxtLink             
            :class="['page-numbers', { 'current': isCurrentPage(1) }]"
            @click.native="clickHandle"
            :to="`${path}?page=1`">
              1
          </NuxtLink>
          ...
          <NuxtLink 
            v-for="(page, index) in endPageArr"
            :key="index" 
            :class="['page-numbers', { 'current': isCurrentPage(page) }]"
            @click.native="clickHandle"
            :to="`${path}?page=${page}`">
              {{ page }}
          </NuxtLink>
        </template>
        <template v-else>
          <NuxtLink             
            :class="['page-numbers', { 'current': isCurrentPage(1) }]"
            @click.native="clickHandle"
            :to="`${path}?page=1`">
              1
          </NuxtLink>
          ...
          <NuxtLink 
            v-for="(page, index) in mediamPageArr"
            :key="index" 
            :class="['page-numbers', { 'current': isCurrentPage(page) }]"
            @click.native="clickHandle"
            :to="`${path}?page=${page}`">
              {{ page }}
          </NuxtLink>
          ...
          <NuxtLink             
            :class="['page-numbers', { 'current': isCurrentPage(totalPage) }]"
            @click.native="clickHandle"
            :to="`${path}?page=${totalPage}`">
              {{ totalPage }}
          </NuxtLink>
        </template>
      </template>
      <NuxtLink v-show="isNextShow" @click.native="clickHandle" :to="`${path}?page=${currentPage + 1}`" class="next page-numbers">次ページへ</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    action: {
      type: Function,
      required: true
    }
  },
  computed: {
    isPrevShow() {
      return this.currentPage === 1 ? false : true;
    },
    isNextShow() {
      return this.currentPage === this.totalPage ? false : true;
    },
    isCurrentPage() {
      return function(page) {
        return this.currentPage === page ? true : false;
      };
    },
    endPageArr() {
      let arr = [];
      let range = 5;
      for(let i=0; i < range; i++) {
        arr.unshift(this.totalPage - i);
      }
      return arr;
    },
    mediamPageArr() {
      let arr = [];
      let range = 2;
      for(let i=1; i <= range; i++) {
        arr.unshift(this.currentPage + i);
      }
      arr.unshift(this.currentPage);
      for(let i=1; i <= range; i++) {
        arr.unshift(this.currentPage - i);
      }
      return arr;
    }
  },
  methods: {
    clickHandle() {
      this.action();
    }
  }
}
</script>