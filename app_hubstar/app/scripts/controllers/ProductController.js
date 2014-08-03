
HubStar.ProductController = Ember.Controller.extend({
    needs: ['application'],
    productContent: [],
    decs: "",
    isEdit: false,
    clickCount: 0,
    supplierItem: [],
    isSupplyDisplay: false,
    Guid: "",
    actions: {
        clickerJudge: function(product) {
            this.set("clickCount", this.get("clickCount") + 1);
            if (this.get("clickCount") === 1) {
                var that = this;
                singleClickTimer = setTimeout(function() {
                    that.set("clickCount", 0);
                    that.supplier(product);
                }, 400);
            } else if (this.get("clickCount") === 2) {
                clearTimeout(singleClickTimer);
                this.set("clickCount", 0);
                this.update(product);
            }
        },
        decline: function() {
            this.set("clickCount", 0);
            this.set("isEdit", false);
            this.set("Guid", "");
            this.set("decs", "");
            $("#input").css("display", "none");
        },
        accept: function() {
            var decs = this.get("decs");
            var data = [this.get("Guid"), this.get('decs')];
            data = JSON.stringify(data);
            var that = this;
            requiredBackEnd('products', 'setProductDecs', data, 'POST', function(params) {
                var product = $.parseJSON(params);
                if (product.ProductDescription !== undefined) {
                    for (var i = 0; i < that.get("model").get("length"); i++)
                    {
                        if (that.get("Guid") === that.get("model").objectAt(i).Guid) {
                            $("#decs_" + that.get("model").objectAt(i).Guid).text(product.ProductDescription);
                            that.get("model").objectAt(i).ProductDescription = product.ProductDescription;
                        }
                        $("#input").css("display", "none");
                    }
                    that.set("clickCount", 0);
                    that.set("isEdit", false);
                    that.set("Guid", "");
                    that.set("decs", "");
                }
            });
        },
        canelSupply: function() {
            this.set("supplierItem", []);
            this.set("isSupplyDisplay", false);
        }
    },
    init: function()
    {

    },
    supplier: function(product)
    {
        var that = this;
        requiredBackEnd('products', 'getSupplier', product.Supplier.Guid, 'POST', function(params) {
            that.set("supplierItem", params);
            console.log(that.get("supplierItem"));
            that.set("isSupplyDisplay", true);
        });
    },
    update: function(product)
    {
        for (var i = 0; i < this.get("model").get("length"); i++)
        {
            if (product.Guid === this.get("model").objectAt(i).Guid)
            {
                var top = $("#decs_" + product.Guid).offset().top - $(".product").offset().top;
                var left = $("#decs_" + product.Guid).offset().left -$(".product").offset().left;
                $("#input").css({"display": "block", "top": top, "left": left});
                $(".size").focus();
            }
        }
        this.set("clickCount", 3);
        this.set("isEdit", true);
        this.set("Guid", product.Guid);
    }
}
);
