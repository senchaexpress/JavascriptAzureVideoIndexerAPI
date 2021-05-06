Ext.define('ViDemo.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  items: [{
      xtype: 'fieldset',
      items: [
      {
       xtype: 'textfield',
       label: 'ID of the video for insights widget',
       value: 'fcbe47da75',
       name: 'videoId',
       required: true,
       reference: 'videoId'
      },
      {
       xtype: 'button',
       text: 'Load Video Indexer Widget',
       handler: 'onLoadVI',
      },
      {
       xtype: "component",
       id: "my-div"
       }]
  }]
})


