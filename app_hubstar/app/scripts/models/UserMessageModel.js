/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


DS.RESTAdapter.map('HubStar.UserMessage', {

    replyMessageCollection: {embedded: 'load'}
});


HubStar.UserMessage = DS.Model.extend({
    message_id: DS.attr('string'),
    replyMessageCollection: DS.hasMany('HubStar.Message')
        
});



