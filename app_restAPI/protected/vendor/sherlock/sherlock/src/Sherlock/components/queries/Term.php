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
 * @method \Sherlock\components\queries\Term field() field(\string $value)
 * @method \Sherlock\components\queries\Term term() term(\string $value)

 */
class Term extends \Sherlock\components\BaseComponent implements \Sherlock\components\QueryInterface
{
    public function __construct($hashMap = null)
    {

        parent::__construct($hashMap);
    }

    public function toArray()
    {
        $ret = array (
  'term' =>
  array (
    $this->params["field"] =>
    array (
      'value' => $this->params["term"],
    ),
  ),
);

        return $ret;
    }

}
