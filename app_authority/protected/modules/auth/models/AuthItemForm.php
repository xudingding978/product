<?php
/**
 * AuthItemForm class file.
 * @author Christoffer Niska <ChristofferNiska@gmail.com>
 * @copyright Copyright &copy; Christoffer Niska 2012-
 * @license http://www.opensource.org/licenses/bsd-license.php New BSD License
 * @package auth.models
 */

/**
 * Form model for updating an authorization item.
 */
class AuthItemForm extends CFormModel
{
	/**
	 * @var string item name.
	 */
	public $name;
	/**
	 * @var string item description.
	 */
	public $description;
	/**
	 * @var string business rule associated with the item.
	 */
	public $biz_rule;
	/**
	 * @var string additional data for the item.
	 */
	public $data;
	/**
	 * @var string the item type (0=operation, 1=task, 2=role).
	 */
	public $type;

	/**
	 * Returns the attribute labels.
	 * @return array attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'NAME' => Yii::t('AuthModule.main', 'System name'),
			'DESCRIPTION' => Yii::t('AuthModule.main', 'Description'),
			'BIZ_RULE' => Yii::t('AuthModule.main', 'Business rule'),
			'DATA' => Yii::t('AuthModule.main', 'Data'),
			'TYPE' => Yii::t('AuthModule.main', 'Type'),
		);
	}

	/**
	 * Returns the validation rules for attributes.
	 * @return array validation rules.
	 */
	public function rules()
	{
		return array(
			array('description, type', 'required'),
			array('name', 'required', 'on' => 'create'),
			array('name', 'length', 'max' => 64),
		);
	}
}
