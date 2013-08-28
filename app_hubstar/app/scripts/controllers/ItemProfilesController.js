
       
        HubStar.ItemProfilesController = Ember.Controller.extend({
        profiles: null,
        partnerRemove: "",
        profile_partner_ids: null,
        collections: [],
        itemProfileCollectionStatistics:"",
        itemProfilePartnerStatistics:"",
          needs: ['profile'],
        
        
        init: function() {
          this.set("profiles", HubStar.Mega.find());
         //  this.set("profiles", HubStar.Mega.find());
          //console.log(HubStar.Mega.find());
         // this.partnerStatistic();
         //  this.collectionStatistic();
      
 
        },
                
   
        toProfilePage: function(model) {
    
     HubStar.set("scrollPartenerPosition",$(window).scrollTop());
           this.transitionToRoute('profile', model);
           $(window).scrollTop(0); 
        },
        setPartnerRemove: function() {
            this.set('partnerRemove', false);
        },
        
        collectionStatistic: function(){
          
         
          if (this.get("collections").get("length") !== 0) {
            this.set('itemProfileCollectionStatistics', this.get("collections").get("length"));
        }
        else
        {
            this.set('itemProfileCollectionStatistics', 0);
        }
         

        },
                
         partnerStatistic:function(){
         
             
          //  this.set("profile_partner_ids", profile.get("profile_partner_ids"));
          
           if (this.get('profile_partner_ids') !== null) {         
                var ids = this.get('profile_partner_ids').split(",");
               this.set('itemProfilePartnerStatistics', ids.get('length'));
            }
            else
            {
                this.set('itemProfilePartnerStatistics', 0);
            }

        }
               
        
    });
