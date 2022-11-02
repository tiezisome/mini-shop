// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        swipers: [],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500
    },
    onLoad() {
        let that = this
        wx.request({
          url: 'http://localhost:3000',
          success (res) {
            console.log('data',res.data)
            that.setData({swipers:res.data})
          }
        })
    },
      changeIndicatorDots() {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        })
      },
    
      changeAutoplay() {
        this.setData({
          autoplay: !this.data.autoplay
        })
      },
    
      intervalChange(e) {
        this.setData({
          interval: e.detail.value
        })
      },
    
      durationChange(e) {
        this.setData({
          duration: e.detail.value
        })
      },
      onShareAppMessage() {
        return {
          title: 'swiper',
          path: 'page/component/pages/swiper/swiper'
        }
      },
  
 
})
