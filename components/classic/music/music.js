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
    this._recoverStatus()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    playMusic(event) {
      if (!this.data.playStatus) {
        this.setData({
          playStatus: true
        })
        mMgr.src = this.properties.musicSrc
        mMgr.title = 'need title' // 这个问题困扰了很久 不设置title 就无法给音乐播放管理器实例src赋值并播放音乐！！！
      } else {
        mMgr.pause()
        this.setData({
          playStatus: false
        })
      }
    },
    _recoverStatus() {
      if (mMgr.paused) {
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
    },
    _asda() {
      mMgr.onPlay(() => {
        this._recoverStatus()
      })
      mMgr.onStop(() => {
        this._recoverStatus()
      })
      mMgr.onEnded(() => {
        this._recoverStatus()
      })
      mMgr.onPause(() => {
        this._recoverStatus()
      })
    }
  }
})
