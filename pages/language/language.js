// pages/language/language.js
Page({
  bindViewTap: function (event) {
    wx.navigateTo({
      url: '../questions/questions?language=' + event.currentTarget.dataset.variable
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
  },

  onReady: function() {
    wx.loadFontFace({
      family: "Circular Black",
      source: 'url("https://cloud-minapp-13908.cloud.ifanrusercontent.com/1gqb9L1kfJbwLQAt.ttf")'
    });
  }
})