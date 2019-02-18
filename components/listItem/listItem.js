// components/list-item/list-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object,
    del: {
      type: 'String',
      value: 'true'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(e) {
      this.setData({
        flag: !this.data.flag
      })
      this.triggerEvent('myeventadd', {
        val: e.currentTarget.dataset.val,
        flag: this.data.flag
      })
    },
    del(e) {
      this.triggerEvent('myeventdel', {
        val: e.currentTarget.dataset.val
      })
    }
  }
})