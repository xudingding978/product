/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define('models/ResultstatusModel',
        ['ember', 'emberData'],
        function() {
            var Resultstatust = DS.Model.extend({
                hits: DS.attr('string'),
                search_string: DS.attr('string'),
            });
            return Resultstatust;
        }
);
