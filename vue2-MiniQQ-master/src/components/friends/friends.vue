<template>
  <div class="friends">
    <div class="top">
      <div class="c">
        <mu-avatar :src="userData.avatar"
                   :size="96" />
        <span class="name">登录/注册</span>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <mu-text-field class="appbar-search-field"
                       slot="center"
                       hintText="姓名"
                       v-model="value"
                       @input="input" />
        <div class="gap"></div>
        <mu-text-field class="appbar-search-field"
                       slot="center"
                       hintText="邮件"
                       v-model="value"
                       @input="input" />
        <mu-list-item title="确定"/>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'personindex',
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
      }
    },
    methods: {
      ...mapMutations(['getActiveId', 'showPersonindex', 'showDialog']),
      handleTabChange(val) {
        this.activeTab = val
      },
      showPersonindex_x() {
        this.getActiveId({ activeId: 0 })
        this.showPersonindex()
      },
      showDialog_x() {
        // 判定打开的是不是自己的主页，如果是则无法点击对话
        if (this.activeId !== 0) {
          this.showDialog()
          this.showPersonindex()
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.icons
  color:#f00
.friends
  background: color-g
  .top
    position: relative
    height: 30vh
    // background-image: url('./avatar.jpg')
    background-size: cover
    .c
      position: absolute
      z-index: 1
      width: 100%
      text-align: center
      .name
        display: block
        margin-top: 4px
        font-size: 1.6em
        color: #fff
    &:after
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(0,0,88,.5)
      content: ''
  .content
    .item
      margin-top: 6px
      margin-left: 20px
</style>
