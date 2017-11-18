<template>
  <mu-drawer :open="sidebar.open"
             :docked="sidebar.docked"
             @close="showSidebar()">

    <div class="content">

      <div class="top">
        <mu-avatar :src="self.avatar"
                    :size="96"
                    @click="showPersonindex_x"/>
          <span class="name">筛选</span>
      </div>
      <div class="bottom">
        <span>-----对以下给出的选项做出你的选择，以便查找更方便-----</span>
      </div>

    </div>

    <mu-list-item title="类型">
      <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .5)">少女   儿童   恋爱   热血</span>
        </span>
    </mu-list-item>
    <mu-list-item title="年龄">
      <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .5)">0-6   6-15   15+</span>
        </span>
    </mu-list-item>
    <mu-list-item title="地区">
      <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .5)">中国   美国   韩国   日本</span>
        </span>
    </mu-list-item>
    <mu-list-item title="日期">
      <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .5)">2004以前   2005-2012   2012+</span>
        </span>
    </mu-list-item>

    <mu-list-item title="确定"
                  @click.native="showSidebar">
      <mu-icon slot="left"
               value="close"
               color="#2e2c6b" />
    </mu-list-item>
  </mu-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'sidebar',
  computed: mapState({
    sidebar: 'sidebar',
    self: state => state.data.self
  }),
  methods: {
    ...mapMutations(['showSidebar', 'showPersonindex']),
    showPersonindex_x() {
      this.showSidebar()
      this.showPersonindex()
    }
  }
}

</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.mu-drawer
  color: color-b
  .content
    position: relative
    height: 30vh
    padding-top: 1px
    margin-bottom: 50px
    .top
      padding: 20px
      .name
        position: absolute
        display: inline-block
        top: 5vh/*偏移*/
        left: 56% /*偏移*/
        font-size: 1.8em
    .bottom
      padding: 20px
      padding-left: 40px

</style>
