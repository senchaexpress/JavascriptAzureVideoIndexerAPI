Ext.define('ViDemo.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

 onLoadVI: function (button) {
     var videoId = this.lookupReference('videoId').getValue();
     var playerSourceUrl =  'https://www.videoindexer.ai/embed/player/00000000-0000-0000-0000-000000000000/'+videoId;
     var insightsSourceUrl =  'https://www.videoindexer.ai/embed/insights/00000000-0000-0000-0000-000000000000/'+videoId;
     var domHelper = Ext.DomHelper; 
     // specification object
     var spec = {
         id: 'iframe-container',
         tag: 'div',
         // append the two iframes for player and insights
         children: [     
             {tag: 'iframe', id: 'player-frame', width:'640', height:'640', src:playerSourceUrl },
             {tag: 'iframe', id: 'insights-frame', width:'640', height:'640', src:insightsSourceUrl },

         ]
     };
    var myDiv =  domHelper.overwrite('my-div', spec);
  }

})