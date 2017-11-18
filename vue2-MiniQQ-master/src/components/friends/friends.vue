<template>
  <div class="friends">
    <div class="top">
      <mu-avatar src="item.friend.avatar"
                   slot="leftAvatar" />
        <!--预览信息-->
      <mu-tabs :value="activeTab"
               @change="handleTabChange">
        <mu-tab value="tab1"
                title="TAB ONE" />
        <mu-tab value="tab2"
                title="TAB TWO" />
        <mu-tab value="tab3"
                title="TAB ACTIVE" />
      </mu-tabs>
    </div>
    <div class="content">
      <div class="item">
        <div v-if="activeTab === 'tab1'">
          <mu-list-item title="Phone"
                        :describeText="userData.phone"
                        disabled>
            <mu-icon value="voicemail"
                     color="#2e2c6b"
                     slot="left" />
          </mu-list-item>
        </div>
      </div>
  
      <div class="item">
        <div v-if="activeTab === 'tab1'">
          <mu-list-item title="Region"
                        :describeText="userData.address"
                        disabled>
            <mu-icon value="location_on"
                     color="#2e2c6b"
                     slot="left" />
          </mu-list-item>
        </div>
      </div>
  
      <div class="item">
        <div v-if="activeTab === 'tab1'">
          <mu-list-item title="Birthday"
                        :describeText="userData.birthday"
                        disabled>
            <mu-icon value="cake"
                     color="#2e2c6b"
                     slot="left" />
          </mu-list-item>
        </div>
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
      background:rgba(0,0,0,0)
  .content
    .item
      margin-top: 6px
      margin-left: 20px
</style>
