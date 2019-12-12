//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: "ARE YOU\n A HIPSTER, \nA HUSTLER,\n OR A HACKER?",
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../language/language'
    })
  },
  onLoad: function () {
    wx.loadFontFace({
      family: "Circular Black",
      source: 'url("https://cloud-minapp-13908.cloud.ifanrusercontent.com/1gqb9L1kfJbwLQAt.ttf")',
    });
  }
})
