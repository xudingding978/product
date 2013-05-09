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
 * @method \Sherlock\components\filters\Prefix field() field(\string $value)
 * @method \Sherlock\components\filters\Prefix prefix() prefix(\string $value)
 * @method \Sherlock\components\filters\Prefix _cache() _cache(\bool $value) Default: true

 */
class Prefix extends \Sherlock\components\BaseComponent implements \Sherlock\components\FilterInterface
{
    public function __construct($hashMap = null)
    {
        $this->params['_cache'] = true;

        parent::__construct($hashMap);
    }

    public function toArray()
    {
        $ret = array (
  'prefix' =>
  array (
    $this->params["field"] => $this->params["prefix"],
    '_cache' => $this->params["_cache"],
  ),
);

        return $ret;
    }

}
