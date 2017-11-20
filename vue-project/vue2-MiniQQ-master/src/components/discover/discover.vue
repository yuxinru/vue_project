<template>
  <div class="friend">

    <div class="gap"></div>

    <div class="gap-1"></div>
    <mu-list>
      <div class="item">
      <mu-list-item title="直播">
        <mu-icon slot="left"
                 value="videocam"
                 color="#64dd17" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item title="小视频">
        <mu-icon slot="left"
                 value="video_library"
                 color="#d84315" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item title="轻音">
        <mu-icon slot="left"
                 value="headset"
                 color="#1976d2" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      </div>
    </mu-list>

    <mu-list>
      <div class="item">
      <mu-list-item title="漫画">
        <mu-icon slot="left"
                 value="book"
                 color="#1e88e5" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item title="热闻">
        <mu-icon slot="left"
                 value="whatshot"
                 color="#ef6c00" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item title="游戏">
        <mu-icon slot="left"
                 value="videogame_asset"
                 color="#00e5ff" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      </div>
    </mu-list>
    <mu-list>
      <div class="item">
      <mu-list-item title="收藏">
        <mu-icon slot="left"
                 value="shopping_cart"
                 color="#1e88e5" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      </div>
    </mu-list>

  </div>
</template>
<script>
export default({
  name: 'discover'
})
</script>
<style lang="stylus"  scoped>
@import '../../common/stylus/mixin.styl'
.friend
  .item
    background: color-w
  .gap
    position:relative
    height: 2vh
  .gap-1
    height: 1vh

</style>
