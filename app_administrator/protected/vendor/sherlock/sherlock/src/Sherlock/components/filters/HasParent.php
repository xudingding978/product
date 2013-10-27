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
 * @method \Sherlock\components\filters\HasParent parent_type() parent_type(\string $value)
 * @method \Sherlock\components\filters\HasParent query() query(\sherlock\components\QueryInterface $value)

 */
class HasParent extends \Sherlock\components\BaseComponent implements \Sherlock\components\FilterInterface
{
    public function __construct($hashMap = null)
    {

        parent::__construct($hashMap);
    }


    public function toArray()
    {
        $ret = array(
            'has_parent' =>
            array(
                'parent_type' => $this->params["parent_type"],
                'query'       => $this->params["query"]->toArray(),
                //'_cache' => $this->params["_cache"],
            ),
        );

        return $ret;
    }

}
