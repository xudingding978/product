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
 * Class FuzzyLikeThisField
 * @package Sherlock\components\queries
 */
class FuzzyLikeThisField extends BaseFuzzyLikeThis implements QueryInterface
{

    /**
     * @param string $value
     *
     * @return $this
     */
    public function field($value)
    {
        $this->params['field'] = $value;
        return $this;
    }

    /**
     * @return array
     */
    public function toArray()
    {
        $params = $this->convertParams(
            array(
                'like_text',
                'max_query_terms',
                'min_similarity',
                'prefix_length',
                'boost',
                'analyzer',
                'ignore_tf',
            )
        );


        $ret = array('fuzzy_like_this_field' => array(
                $this->params["field"] => $params
            ),
        );

        return $ret;
    }

}
