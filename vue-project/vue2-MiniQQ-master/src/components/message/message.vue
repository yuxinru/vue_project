<template>
  <div class="message">
    <div class="top"
         :style="{backgroundImage: `url(${userData.avatar})`}">
      <mu-tabs :value="activeTab"
               @change="handleTabChange">
        <mu-tab value="tab1"
                title="最新" />
        <mu-tab value="tab2"
                title="最热" />
        <mu-tab value="tab3"
                title="推荐" />
      </mu-tabs>
    </div>
    <div class="content">
      <div v-if="activeTab === 'tab1'">
        <h1>敬请期待....</h1>
      </div>

      <div v-if="activeTab === 'tab2'">
        <h1>制作中....</h1>
      </div>
      <div v-if="activeTab === 'tab3'">
        <h1>未完待续....</h1>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'friend',
    data() {
      return {
        activeTab: 'tab1'
      }
    },
    computed: {
      ...mapState(['activeId', 'data']),
      ...mapGetters(['friend']),
      userData() {
        // 判断是否有当前活跃的friend，没有的话就获取自己的数据，展示个人页面，有的话就展示当前活跃朋友的页面
        if (this.activeId === 0) {
          return this.data.self
        } else {
          return this.friend
        }
      },
      // 获取全部好友
      friends() {
        return this.$store.state.data.friends
      }
    },
    methods: {
      ...mapMutations(['getActiveId', 'showPersonindex', 'showDialog']),
      handleTabChange(val) {
        this.activeTab = val
      },
      showPersonindex_x() {
        this.getActiveId({activeId: 0})
        this.showPersonindex()
      },
      showDialog_x() {
        // 判定打开的是不是自己的主页，如果是则无法点击对话
        if (this.activeId !== 0) {
          this.showDialog()
          this.showPersonindex()
        }
      },
      // 点击展示个人主页
      showPersonindex(e) {
        this.$store.commit('getActiveId', {activeId: e})
        this.$store.commit('showPersonindex')
      }
    }
  }

</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.icons
  color:#f00
.message
  background color-w
  .top
    position: relative
    height: 38vh
    // background-image: url('./avatar.jpg')
    background-size: cover
    .mu-tabs
      position: absolute
      bottom: 0
      left: 0
      z-index: 1
      background:rgba(0,0,0,4)
  .content
    .item
      margin-top: 6px
      margin-left: 20px
</style>

