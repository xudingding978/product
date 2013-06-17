<?php
/**
 * User: Zachary Tong
 * Date: 2013-02-19
 * Time: 08:26 PM
 * Auto-generated by "generate.filters.php"
 * @package Sherlock\components\filters
 */
namespace Sherlock\components\filters;

use Sherlock\components;

/**
 * @method \Sherlock\components\filters\GeoDistanceRange from() from(\string $value)
 * @method \Sherlock\components\filters\GeoDistanceRange to() to(\string $value)
 * @method \Sherlock\components\filters\GeoDistanceRange lat() lat(\float $value)
 * @method \Sherlock\components\filters\GeoDistanceRange lon() lon(\float $value)
 * @method \Sherlock\components\filters\GeoDistanceRange _cache() _cache(\bool $value) Default: false

 */
class GeoDistanceRange extends \Sherlock\components\BaseComponent implements \Sherlock\components\FilterInterface
{
    public function __construct($hashMap = null)
    {
        $this->params['_cache'] = false;

        parent::__construct($hashMap);
    }

    public function toArray()
    {
        $ret = array (
            'geo_distance_range' =>
            array (
                'from' => $this->params["from"],
                'to' => $this->params["to"],
                'pin.location' =>
                array (
                    'lat' => $this->params["lat"],
                    'lon' => $this->params["lon"],
                ),
                '_cache' => $this->params["_cache"],
            ),
        );

        return $ret;
    }

}