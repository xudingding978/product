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
use Sherlock\components\QueryInterface;

/**
 * Class Boosting
 * @package Sherlock\components\queries
 */
class Boosting extends \Sherlock\components\BaseComponent implements \Sherlock\components\QueryInterface
{
    /**
     * @param QueryInterface $value
     * @return $this
     */
    public function positive(QueryInterface $value)
    {
        $this->params["positive"] = $value->toArray();
        return $this;
    }


    /**
     * @param QueryInterface $value
     * @return $this
     */
    public function negative(QueryInterface $value)
    {
        $this->params["negative"] = $value->toArray();
        return $this;
    }


    /**
     * @param float $value
     * @return $this
     */
    public function negative_boost($value)
    {
        $this->params["negative_boost"] = $value;
        return $this;
    }


    /**
     * @return array
     */
    public function toArray()
    {
        $params = $this->convertParams(
            array(
                'positive',
                'negative',
                'negative_boost',
            )
        );

        $ret = array('boosting' => $params);

        return $ret;
    }

}
