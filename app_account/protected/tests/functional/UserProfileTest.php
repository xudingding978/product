<?php

class UserProfileTest extends WebTestCase
{
	public $fixtures=array(
		'userProfiles'=>'UserProfile',
	);

	public function testShow()
	{
		$this->open('?r=userProfile/view&id=1');
	}

	public function testCreate()
	{
		$this->open('?r=userProfile/create');
	}

	public function testUpdate()
	{
		$this->open('?r=userProfile/update&id=1');
	}

	public function testDelete()
	{
		$this->open('?r=userProfile/view&id=1');
	}

	public function testList()
	{
		$this->open('?r=userProfile/index');
	}

	public function testAdmin()
	{
		$this->open('?r=userProfile/admin');
	}
}
