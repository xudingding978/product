<?php
/**
 * User: Zachary Tong
 * Date: 2013-02-16
 * Time: 09:24 PM
 * Auto-generated by "generate.php"
 * @package Sherlock\components\queries
 */
namespace Sherlock\components\queries;

use Sherlock\components;

/**
 * @method \Sherlock\components\queries\ConstantScore filter() filter(\sherlock\components\FilterInterface $value)
 * @method \Sherlock\components\queries\ConstantScore boost() boost(\float $value) Default: 1.2

 */
class ConstantScore extends \Sherlock\components\BaseComponent implements \Sherlock\components\QueryInterface
{
    public function __construct($hashMap = null)
    {
        $this->params['boost'] = 1.2;

        parent::__construct($hashMap);
    }

    public function toArray()
    {
        $ret = array (
  'constant_score' =>
  array (
    'filter' => $this->params["filter"]->toArray(),
    'boost' => $this->params["boost"],
  ),
);

        return $ret;
    }

}
