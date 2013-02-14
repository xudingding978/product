<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>


<?php

//
// Get the data
//
	include_once("functions.php");
	include_once("../config.php");
	include_once("../include/debuglog.php");
	include_once("../include/tpldb_class.php");

	$results_categories = tpldb::GetDirectoryCategories(6, 3626);


		print implode(ArrayFunctions::toString($results_categories));
//
// Load all the results into the row array
//
while ($row = pg_fetch_array($results_categories, NULL, PGSQL_ASSOC))
{
  //
  // Wrap the row array in a parent array, using the id as they key
  // Load the row values into the new parent array
  //
  $categories[$row['id']] = array(
    'id' => $row['id'], 
    'description' => $row['description'], 
    'parent_id' => $row['parent_id']
  );
}


// print '<pre>';
// print_r($category_array);

// ----------------------------------------------------------------

//
// Create a function to generate a nested view of an array (looping through each array item)
//
function generate_tree_list($array, $parent = 0, $level = 0)
{

  //
  // Reset the flag each time the function is called
  //
  $has_children = false;

  //
  // Loop through each item of the list array
  //
  foreach($array as $key => $value)
  {
    //
    // For the first run, get the first item with a parent_id of 0 (= root category)
    // (or whatever id is passed to the function)
    //
    // For every subsequent run, look for items with a parent_id matching the current item's key (id)
    // (eg. get all items with a parent_id of 2)
    //
    // This will return false (stop) when it find no more matching items/children
    //
    // If this array item's parent_id value is the same as that passed to the function
    // eg. [parent_id] => 0   == $parent = 0 (true)
    // eg. [parent_id] => 20  == $parent = 0 (false)
    //
    if ($value['parent_id'] == $parent) 
    {                   

      //
      // Only print the wrapper ('<ul>') if this is the first child (otherwise just print the item)      
      // Will be false each time the function is called again
      //
      if ($has_children === false)
      {
        //
        // Switch the flag, start the list wrapper, increase the level count
        //
        $has_children = true;  

        echo '<ul class="level-' . $level . '">';

        $level++;
      }

      //
      // Print the list item
      //
      echo '<li><a href="?id=' . $value['id'] . '">' . $value['description'] . '</a>';

      //
      // Repeat function, using the current item's key (id) as the parent_id argument
      // Gives us a nested list of subcategories
      //
      generate_tree_list($array, $key, $level); 

      //
      // Close the item
      //
      echo '</li>';


    }

  }

  //
  // If we opened the wrapper above, close it.
  //
  if ($has_children === true) echo '</ul>';


}

// ----------------------------------------------------------------

//
// generate list
//
generate_tree_list($categories);


//-----------------------------------------------------------------

function expand($array)
{
	$newArray = array();

	foreach($array as $key=>$value)	{
		$current = &$newArray;
		//$stack = look up subcategories
		
		// iterate down the array, leaving $current as the leaf
		foreach($stack as $item) {
			// clobber leafs, replace this for baseval support
			if(isset($current[$item]) && !is_array($current[$item])) {
				$current[$item] = array();
			}
			$current =& $current[$item];
		}

		// don't overwrite existing branches
		if(!is_array($current) || count($current) == 0)
		{
			$current = $value;
		}
	}
	return $newArray;
} 


?>

<body>
</body>
</html>