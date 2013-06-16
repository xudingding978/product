/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define('models/Product',
        ['ember', 'emberData'],
        function() {

            var Product = DS.Model.extend({
                name: DS.attr('string'),
                isAdded: DS.attr('string'),
            });

            return Product;
        }
);
