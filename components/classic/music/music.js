import classicBeh from '../classic-beh'
const gBgM = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    musicSrc: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playStatus: false, // 播放状态 ，默认是未播放状态
    pauseSrc: './images/player@pause.png',
    playSrc: './images/player@play.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(event) {
      if (!this.data.playStatus) {
        this.setData({
          playStatus: true
        })
        gBgM.src = this.properties.musicSrc
        console.log(gBgM.src)
        console.log(this.properties.musicSrc)
      } else {
        gBgM.pause()
        this.setData({
          playStatus: false
        })
      }
    }
  }
})
