/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.MegaCreateController = Ember.ArrayController.extend({
    createNewMega: function(ProfileMega, testID, collectionId, type)
    {
        
        var mega = HubStar.Mega.createRecord({
            "id": testID,
            "accessed": ProfileMega.get("accessed"),
            "boost": ProfileMega.get("boost"),
            "owner_type": "profiles",
            "is_active": false,
            "region": ProfileMega.get("profile_regoin"),
            "topic": null,
            "type": type,
            "category": ProfileMega.get("category"),
            "creator": localStorage.loginStatus,
            "country": ProfileMega.get("country"),
            "collection_id": collectionId,
            "deleted": null,
            "domains": getDomain(),
            "editors": "",
            "geography": ProfileMega.get("country"),
            "is_indexed": false,
            "object_image_url": ProfileMega.get("object_image_url"),
            "object_title": ProfileMega.get("object_title"),
            "object_description": ProfileMega.get("object_description"),
            "owner_profile_id": ProfileMega.get('id'),
            "owner_profile_pic": ProfileMega.get("profile_pic_url"),
            "owner_title": ProfileMega.get("profile_name"),
            "owner_url": ProfileMega.get("owner_url"),
            "owners": ProfileMega.get("owners"),
            "owner_id": ProfileMega.id,
            "owner_contact_email": ProfileMega.get("owner_contact_email"),
            "owner_contact_cc_emails": ProfileMega.get("owner_contact_cc_emails"),
            "owner_contact_bcc_emails": ProfileMega.get("owner_contact_bcc_emails"),
            "keywords": ProfileMega.get("profile_keywords"),
            "status_id": null,
            "uri_url": ProfileMega.get("uri_url"),
            "view_count": ProfileMega.get("view_count"),
            "share_count": ProfileMega.get("share_count"),
            "comment_count": ProfileMega.get("comment_count")
        });
        return mega;
    }
});