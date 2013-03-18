//$('#container').isotope({
//    // options
//    itemSelector : '.element',
//    masonry: {
//        columnWidth: 120,
//        cornerStampSelector: '.corner-stamp'
//    }
//});


$.Isotope.prototype._masonryResizeChanged = function() {
    return true;
};

$.Isotope.prototype._masonryReset = function() {
    // layout-specific props
    this.masonry = {};
    this._getSegments();
    var i = this.masonry.cols;
    this.masonry.colYs = [];
    while (i--) {
        this.masonry.colYs.push(0);
    }

    if (this.options.masonry.cornerStampSelector) {
        var $cornerStamp = this.element.find(this.options.masonry.cornerStampSelector),
        stampWidth = $cornerStamp.outerWidth(true) - (this.element.width() % this.masonry.columnWidth),
        cornerCols = Math.ceil(stampWidth / this.masonry.columnWidth),
        cornerStampHeight = $cornerStamp.outerHeight(true);
        for (i = Math.max(this.masonry.cols - cornerCols, cornerCols); i < this.masonry.cols; i++) {
            this.masonry.colYs[i] = cornerStampHeight;
        }
    }
};


$(function() {

    var $container = $('#container');
    var $element= $('.element');

    // add randomish size classes
    $container.find('.element').each(function() {
        var $this = $(this),
        number = parseInt($this.find('.number').text(), 10);
        if (number % 7 % 2 === 1) {
            $this.addClass('width2');
        }
        if (number % 3 === 0) {
            $this.addClass('height2');
        }
    });

    $container.isotope({
        itemSelector: '.element',
        masonry: {
            columnWidth: 120,
            cornerStampSelector: '.corner-stamp'
        },
        getSortData: {
            symbol: function($elem) {
                return $elem.attr('data-symbol');
            },
            category: function($elem) {
                return $elem.attr('data-category');
            },
            number: function($elem) {
                return parseInt($elem.find('.number').text(), 10);
            },
            weight: function($elem) {
                return parseFloat($elem.find('.weight').text().replace(/[\(\)]/g, ''));
            },
            name: function($elem) {
                return $elem.find('.name').text();
            }
        }
    });


    var $optionSets = $('#options .option-set'),
    $optionLinks = $optionSets.find('a');

    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options);
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }

        return false;
    });



    $('#insert a').click(function() {
        var $newEls = $(fakeElement.getGroup());
        $container.isotope('insert', $newEls);

        return false;
    });

    $('#append a').click(function() {
        var $newEls = $(fakeElement.getGroup());
        $container.append($newEls).isotope('appended', $newEls);

        return false;
    });

//    var check;
//    $element.click(function(){
//        var p=$(this).offset();
//        var $this = $(this);
//        // nothing to change if this already has large class
//        if ( $this.hasClass('large') ) {
//            $this.removeClass('large');
//            
//            $this.attr('.gold img').animate({
//                
//                top:'+=-25',
//
//                left:'+=-20',
//                height:"365px"
//            }, "fast");
//
//            $('.description_title_gold').animate({
//
//                opacity: 1
//            },1);
//            $('.comment_title_gold').animate({
//
//                opacity: 1
//            },1);
//            $('.description_title_bronze').animate({
//
//                opacity: 1
//            },1);
//            $('.comment_title_bronze').animate({
//
//                opacity: 1
//            },1);
//            $container.isotope('reLayout');
//            if(check==="true"){
//                $("html, body").animate({
//                    scrollTop: 0
//                }, 600);
//            
//                check="false";
//            }else{
//                $("html, body").animate({
//                    scrollTop: Math.round(p.top)-150
//                }, 600);
//                check="true";
//            }    
//            return;
//        }
//        var $previousLargeItem = $element.filter('.large');
//    
//        $previousLargeItem.removeClass('large');
//
//        
//        $this.addClass('large');
//        $('.gold img').animate({
//            height:"380px",
//            top:'+=25',
//            width:"500px",
//            left:'+=20'
//        },1);
//
//
//        $('.description_title_gold').animate({
//
//            opacity: 0
//        },10);
//        $('.comment_title_gold').animate({
//
//            opacity: 0
//        },10);
//        
//        $('.description_title_bronze').animate({
//
//            opacity: 0
//        },10);
//        $('.comment_title_bronze').animate({
//
//            opacity: 0
//        },10);
// 
//        if(check==="true"){
//            $("html, body").animate({
//                scrollTop: 0
//            }, 600);
//            
//            check="false";
//        }else{
//            $("html, body").animate({
//                scrollTop: Math.round(p.top)-150
//            }, 600);
//            check="true";
//        }    
//        $container
//        // update sort data on changed items
//        .isotope('updateSortData', $this )
//        .isotope('updateSortData', $previousLargeItem )
//        // trigger layout and sort
//        .isotope();
//    });



    // toggle variable sizes of all elements
    $('#toggle-sizes').find('a').click(function() {
        $container
        .toggleClass('variable-sizes')
        .isotope('reLayout');
        return false;
    });

    var $sortBy = $('#sort-by');
    $('#shuffle a').click(function() {
        $container.isotope('shuffle');
        $sortBy.find('.selected').removeClass('selected');
        $sortBy.find('[data-option-value="random"]').addClass('selected');
        return false;
    });
});

