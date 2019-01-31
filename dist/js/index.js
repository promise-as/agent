"use strict";

/*代理商 首页*/
var app = new Vue({
  el: '#app',
  data: {
    sidebarNavList: [{
      icon: "icon-match",
      text: "兑入订单管理",
      href: "match.html"
    }, {
      icon: "icon-cash-out",
      text: "兑出订单管理",
      href: "cash_out.html"
    }, {
      icon: "icon-gathering",
      text: "收款订单管理",
      href: "gathering.html"
    }, {
      icon: "icon-bill",
      text: "账单管理",
      href: "bill.html"
    }, {
      icon: "icon-rebate",
      text: "返佣管理",
      href: "rebate.html"
    }, {
      icon: "icon-users",
      text: "用户管理",
      href: "users.html"
    }, {
      icon: "icon-config-manage",
      text: "配置管理",
      href: "config_manage.html"
    }],
    userName: '张三',

    order: 35461244321245,
    isHasOrder: false, // 是否有订单
    confirmOrPay: [{ value: '客户已确认转账!' }, { value: '已支付!' }],
    msgRemindIndex: 0 // 0是已确认，1是已支付
  },
  // 组件已经挂载
  mounted: function mounted() {

    var that = this;
    // 1秒之后消息框显示
    if (this.isHasOrder === false) {
      setTimeout(function () {
        that.isHasOrder = true;
      }, 1000);
    }
  },
  // 组件已更新
  updated: function updated() {
    var that = this;
    // 2秒之后消息框隐藏
    if (this.isHasOrder === true) {
      setTimeout(function () {
        that.isHasOrder = false;
      }, 2000);
    }
  }
});