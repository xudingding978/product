
<br/>
<br/>
<br/>
<br/>
<br/>
<?php
echo 'Welcome to CouchBase';

function actionCurl($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    $data = curl_exec($curl);
    curl_close($curl);
    return json_encode($data);
}

$user = actionCurl('http://cb1.hubsrv.com:8092/test/user');

echo '<br/>';
echo '<br/>';

echo 'JSON from Couchbase: ' . var_dump(CJSON::decode($user));

$schema = CJSON::encode(array('Name' => 'Jason', array('image_url' => 'blah')));

//var_dump($schema);

$cb = new Couchbase("cb1.hubsrv.com:8091", "Administrator", "Pa55word", "schema", true);
$cb->set("user", $schema);
$result_json = $cb->get("user");

//var_dump($result_json);

$result_arr = CJSON::decode($result_json);

$form = $this->beginWidget('bootstrap.widgets.TbActiveForm', array(
    'id' => 'verticalForm',
    'htmlOptions' => array('class' => 'well',),
        ));

//echo $form->textFieldRow($result_arr, 'textField', array('class'=>'span3'));
//echo $form->passwordFieldRow($result_arr, 'password', array('class'=>'span3'));
//echo $form->checkboxRow($result_arr, 'checkbox');
$this->widget('bootstrap.widgets.TbButton', array('buttonType' => 'submit', 'label' => 'Login'));

$this->endWidget();

$this->widget('zii.widgets.jui.CJuiButton', array(
    'id' => 'myCustomID',
    'name' => 'submit',
    'caption' => 'Save',
    // you can easily change the look of the button by providing the correct class
    // ui-button-error, ui-button-primary, ui-button-success
    'htmlOptions' => array('class' => 'ui-button-error'),
    'onclick' => new CJavaScriptExpression('function(){alert("Yes");}'),
));

//foreach($result_arr as $key => $value){
//     echo '<br/> Label:  '.$key. 'value:'.$value;  
//}

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
