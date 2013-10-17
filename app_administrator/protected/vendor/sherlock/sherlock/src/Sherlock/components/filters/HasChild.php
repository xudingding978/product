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
 * @method \Sherlock\components\filters\HasChild type() type(\string $value)
 * @method \Sherlock\components\filters\HasChild query() query(\sherlock\components\QueryInterface $value)

 */
class HasChild extends \Sherlock\components\BaseComponent implements \Sherlock\components\FilterInterface
{
    public function __construct($hashMap = null)
    {

        parent::__construct($hashMap);
    }


    public function toArray()
    {
        $ret = array(
            'has_child' =>
            array(
                'type'  => $this->params["type"],
                'query' => $this->params["query"]->toArray(),
                //'_cache' => $this->params["_cache"],
            ),
        );

        return $ret;
    }

}
