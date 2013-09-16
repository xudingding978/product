$(document).ready(function() {
    var tresult = JSON.parse(koolajax.callback(CB_getRootAndchildrenNode()));
    buildCategoryList(tresult);
});

function buildCategoryList(tresult)
{
    for (i in tresult) {
        var rootDiv = document.createElement("div");
        rootName = tresult[i]['NAME'];
        rootID = tresult[i]['REC_ID'];
        imgSRC = tresult[i]['REC_ID'];
        rootDiv.id = rootName;
        rootDiv.className = 'element alkaline-earth metal height2 width2 isotope-item';
        var innerDiv = document.createElement("div");
        innerDiv.className = 'category-container';
        rootDiv.appendChild(innerDiv);
        var rootCatDiv = document.createElement("div");
        rootCatDiv.className = 'category-level0';
        innerDiv.appendChild(rootCatDiv);
        var a = document.createElement('a');
        a.className = 'category-level0';
        a.innerHTML = '<h2 class="category-level0">' + rootName + '</h2>';
        a.href = "view.php?key=c," + rootID + ",tree";
        rootCatDiv.appendChild(a);
        innerHTML = "";
        for (j in tresult[i]['childrenList'])
        {
            var innerChildDiv = document.createElement("div");
            innerChildDiv.className = 'category-level1';
            innerDiv.appendChild(innerChildDiv);
            childName = tresult[i]['childrenList'][j]['NAME'];
            childID = tresult[i]['childrenList'][j]['REC_ID'];
            var childLink = document.createElement('a');
            childLink.className = 'category-level1';
            childLink.innerHTML = '<h3 class="category-level1">' + childName + '</h3>';
            childLink.href = "view.php?key=c," + childID + ",tree";
            innerChildDiv.appendChild(childLink);
        }
        document.getElementById("container").appendChild(rootDiv);
    }
}



