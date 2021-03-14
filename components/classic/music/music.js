import classicBeh from '../classic-beh'
let mMgr = wx.getBackgroundAudioManager()
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
  attached() {
    this._playingStatus()
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
        var src = this.properties.musicSrc
        mMgr.src = src
      } else {
        mMgr.pause()
        this.setData({
          playStatus: false
        })
      }
    },
    _playingStatus() {
      if (!mMgr.playStatus) {
        // 全局小程序只有一个mMgr对象
        this.setData({
          playStatus: false
        })
        return
      }
      if (mMgr.src === this.properties.musicSrc) {
        this.setData({
          playStatus: true
        })
      }
    }
  }
})
