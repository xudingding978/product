/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.Tag = DS.Model.extend({
    tag_id: DS.attr('string'),
    profile_id: DS.attr('string'),
    product_name: DS.attr('string'),
    desc: DS.attr('string'),
    pic_x: DS.attr('string'),
    pic_y: DS.attr('string'),
    linkto: DS.attr('string'),
    link_to_click_count: DS.attr('number'),
    tag_time: DS.attr('string'),
    tag_approved: false
});



