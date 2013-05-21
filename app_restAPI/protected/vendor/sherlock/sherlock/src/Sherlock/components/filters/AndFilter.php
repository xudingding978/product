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
 * @method \Sherlock\components\filters\AndFilter and() and(array $value)
 * @method \Sherlock\components\filters\AndFilter _cache() _cache(\bool $value) Default: false
 */
class AndFilter extends \Sherlock\components\BaseComponent implements \Sherlock\components\FilterInterface
{
    public function __construct($hashMap = null)
    {
        $this->params['_cache'] = false;

        parent::__construct($hashMap);
    }

    public function toArray()
    {
        $ret = array (
  'and' => $this->params["and"],
  '_cache' => $this->params["_cache"],
);

        return $ret;
    }

}
