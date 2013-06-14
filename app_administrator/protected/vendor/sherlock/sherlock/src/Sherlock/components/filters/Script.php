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
 * @method \Sherlock\components\filters\Script script() script(\string $value)
 * @method \Sherlock\components\filters\Script params() params(array $value) Default: array()
 * @method \Sherlock\components\filters\Script _cache() _cache(\bool $value) Default: false

 */
class Script extends \Sherlock\components\BaseComponent implements \Sherlock\components\FilterInterface
{
    public function __construct($hashMap = null)
    {
        $this->params['params'] = array();
        $this->params['_cache'] = false;

        parent::__construct($hashMap);
    }

    public function toArray()
    {
        $ret = array (
  'script' =>
  array (
    'script' => $this->params["script"],
    'params' => $this->params["params"],
    '_cache' => $this->params["_cache"],
  ),
);

        return $ret;
    }

}
