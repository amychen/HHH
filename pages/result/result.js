// pages/result/result.js
Page({

  data: {
    hacker: 0,
    hipster: 0,
    hustler: 0,
    hackerKeywords: 'Focused\nProblem Solver\nSelf-driver\nTech-savvy',
    hipsterKeywords: 'Creative Genius\nAbsurd alternative lifestyles',
    hustlerKeywords: 'Possibilities\nConversationally gifted\nSelf-made millionaire',
  },

  onLoad: function (options) {
    this.setData({ hacker: Math.round(options.hacker * 100) });
    this.setData({ hipster: Math.round(options.hipster * 100) });
    this.setData({ hustler: Math.round(options.hustler * 100) });
  },

  onReady: function () {
    wx.loadFontFace({
      family: "Circular Black",
      source: 'url("https://cloud-minapp-13908.cloud.ifanrusercontent.com/1gqb9L1kfJbwLQAt.ttf")'
    });
  },

  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})