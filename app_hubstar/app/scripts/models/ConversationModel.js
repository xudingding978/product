/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


DS.RESTAdapter.map('HubStar.Conversation', {

    ConversationCollection: {embedded: 'load'}
});


HubStar.Conversation = DS.Model.extend({
     conversation_id: DS.attr('string'),
     participation_ids: DS.attr('string'),
    ConversationCollection: DS.hasMany('HubStar.ConversationItem')
        
});



