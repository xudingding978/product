/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.Notification = DS.Model.extend({
    notification_id: DS.attr('string'),
    user_id: DS.attr('string'),
    type: DS.attr('string'),
    time: DS.attr('string'),
    content:DS.attr('string'),
    action_id:DS.attr('string'),
    isRead:false,
    isButton:false
});



