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
 * Class QueryString
 * @package Sherlock\components\queries
 */
class QueryString extends components\BaseComponent implements QueryInterface
{
    /**
     * @param float $value
     *
     * @return $this
     */
    public function boost($value)
    {
        $this->params['boost'] = $value;
        return $this;
    }


    /**
     * @param int $value
     *
     * @return $this
     */
    public function enable_position_increments($value)
    {
        $this->params['enable_position_increments'] = $value;
        return $this;
    }

    /**
     * @param string $value
     *
     * @return $this
     */
    public function default_operator($value)
    {
        $this->params['default_operator'] = $value;
        return $this;
    }

    /**
     * @param string $value
     *
     * @return $this
     */
    public function analyzer($value)
    {
        $this->params['analyzer'] = $value;
        return $this;
    }

    /**
     * @param bool $value
     *
     * @return $this
     */
    public function allow_leading_wildcards($value)
    {
        $this->params['allow_leading_wildcards'] = $value;
        return $this;
    }


    /**
     * @param int $value
     *
     * @return $this
     */
    public function lowercase_expanded_terms($value)
    {
        $this->params['lowercase_expanded_terms'] = $value;
        return $this;
    }

    /**
     * @param float $value
     *
     * @return $this
     */
    public function fuzzy_prefix_length($value)
    {
        $this->params['fuzzy_prefix_length'] = $value;
        return $this;
    }

    /**
     * @param float $value
     *
     * @return $this
     */
    public function fuzzy_min_sim($value)
    {
        $this->params['fuzzy_min_sim'] = $value;
        return $this;
    }

    /**
     * @param int $value
     *
     * @return $this
     */
    public function phrase_slop($value)
    {
        $this->params['phrase_slop'] = $value;
        return $this;
    }

    /**
     * @param bool $value
     *
     * @return $this
     */
    public function analyze_wildcard($value)
    {
        $this->params['analyze_wildcard'] = $value;
        return $this;
    }

    /**
     * @param int $value
     *
     * @return $this
     */
    public function auto_generate_phrase_queries($value)
    {
        $this->params['auto_generate_phrase_queries'] = $value;
        return $this;
    }

    /**
     * @param string $value
     *
     * @return $this
     */
    public function quote_analyzer($value)
    {
        $this->params['quote_analyzer'] = $value;
        return $this;
    }

    /**
     * @param string $value
     *
     * @return $this
     */
    public function quote_field_suffix($value)
    {
        $this->params['quote_field_suffix'] = $value;
        return $this;
    }

    /**
     * @param string $value
     *
     * @return $this
     */
    public function rewrite($value)
    {
        $this->params['rewrite'] = $value;
        return $this;
    }


    public function toArray()
    {
        $this->params['query_string'] = $this->convertParams(
            array(
                'query',
                'default_field',
                'boost',
                'enable_position_increments',
                'default_operator',
                'analyzer',
                'allow_leading_wildcard',
                'lowercase_expanded_terms',
                'fuzzy_min_sim',
                'fuzzy_prefix_length',
                'lenient',
                'phrase_slop',
                'analyze_wildcard',
                'auto_generate_phrase_queries',
                'quote_analyzer',
                'quote_field_suffix',
            )
        );

        $ret = $this->convertParams(
            array(
            'query_string',
            'rewrite',
            )
        );

        return $ret;
    }

}
