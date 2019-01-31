'use strict';

$(function () {
  layui.config({
    // version: '1545041465443' //为了更新 js 缓存，可忽略
  });

  layui.use(['laydate', 'laypage', 'layer', 'table', 'element'], function () {
    var laypage = layui.laypage,
        //分页
    layer = layui.layer,
        //弹层
    table = layui.table; //表格

    //执行一个 table 实例
    table.render({
      elem: '#demo',
      url: './json/gathering.json', // 数据接口,
      title: '订单表',
      page: true, //开启分页,
      toolbar: 'default', //开启工具栏，此处显示默认图标，可以自定义模板，详见文档,
      totalRow: true, //开启合计行,
      cols: [// 列数目
      [//表头
      {
        field: 'gatheringOrder',
        title: '订单账号',
        width: '170',
        align: 'center'
      }, {
        field: 'matchOrder',
        title: '日期',
        width: '150',
        align: 'center'
      }, {
        field: 'gatheringCompany',
        title: '服务商',
        width: '115',
        align: 'center'
      }, {
        field: 'payCompany',
        title: '经纪商',
        width: '115',
        align: 'center'
      }, {
        field: 'product',
        title: '介绍人',
        width: '60',
        align: 'center'
      }, {
        field: 'sum',
        title: '介绍人电话',
        width: '105',
        align: 'center'
      }, {
        field: 'time',
        title: '手续费获 比（%）',
        width: '72',
        align: 'center'
      }, {
        field: 'status',
        title: '手续费佣金 （USST）',
        width: '92',
        align: 'center'
      }]]
    });

    //监听行工具事件
    //注：tool 是工具条事件名，order 是 table 原始容器的属性 lay-filter="对应的值"
    table.on('tool(order)', function (obj) {
      var layEvent = obj.event; //获得 lay-event 对应的值
    });

    //分页
    laypage.render({
      elem: 'pageDemo', //分页容器的id
      count: 10, //总页数
      skin: '#FBCD6C', //自定义选中色值
      skip: true, //开启跳页
      jump: function jump(obj, first) {
        if (!first) {
          layer.msg('第' + obj.curr + '页', { offset: 'b' });
        }
      }
    });
  });
}());