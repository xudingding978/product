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
 * Class HasParent
 * @package Sherlock\components\queries
 */
class HasParent extends components\BaseComponent implements QueryInterface
{

    /**
     * @param string $value
     *
     * @return $this
     */
    public function parent_type($value)
    {
        $this->params['parent_type'] = $value;
        return $this;
    }

    /**
     * @param string $value
     *
     * @return $this
     */
    public function score_type($value)
    {
        $this->params['score_type'] = $value;
        return $this;
    }


    /**
     * @param QueryInterface $value
     *
     * @return $this
     */
    public function query(QueryInterface $value)
    {
        $this->params['query'] = $value->toArray();
        return $this;
    }


    /**
     * @return array
     */
    public function toArray()
    {
        $params = $this->convertParams(
            array(
                'parent_type',
                'score_type',
                'query',
            )
        );

        $ret = array('has_parent' => $params);

        return $ret;
    }

}
