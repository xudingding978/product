

var rowArray = new Array();
var rowPerPage = 0;
var currentPageNumber = 1;
var maxPageNumber = 0;

$(document).ready(function() {
    getGridData();

});
function next() {
    removeTableContent();
    console.log("rowPerPage");
    currentPageNumber++;
    drawGrid();
    setCurrentPageNumber();

}
function previous() {
    removeTableContent();
    console.log("rowPerPage");
    currentPageNumber--;
    drawGrid();
    setCurrentPageNumber();

}
function first() {

}
function last() {

}

function doubleClick()
{
    console.log("double click");
    return false;
}

function oneClick()
{
    console.log("one click");
    return false;
}

function removeTableContent()
{
    var Node1 = document.getElementById('grid');

    for (var i = 1; i <= rowPerPage; i++)
    {
        if (Node1.childNodes[i] !== null)
        {
            Node1.deleteRow(1);
        }
    }
}

function setMaxPageNumber()
{

    console.log("rowArray   " + rowArray.length);
    tmpMaxPageNumber = rowArray.length / rowPerPage;
    console.log("tmpMaxPageNumber   " + tmpMaxPageNumber);
    maxPageNumber = parseInt(tmpMaxPageNumber);
    console.log("maxPageNumber  " + maxPageNumber);
    if (tmpMaxPageNumber > maxPageNumber)
    {
        maxPageNumber += 1;
    }
    $("#maxPageNumber").html(maxPageNumber);

}

function setCurrentPageNumber()
{
    $("#currentPageNumber").val(currentPageNumber);


}
function setRowPerpage(number)
{
    rowPerPage = number;
}

function getGridData()
{

    if (typeof rowArray[0] === 'undefined')
    {
        $.ajax({
            type: "POST",
            url: "/test/frontGrid.php",
            dataType: "json",
            data: {action: "next"},
            success: function(reply) {
                var tempList = reply.dataGrid;
                setRowArray(tempList);
                var titleList = reply.col_headers;
                setRowPerpage(reply.rowPerPage);
                console.log("reply.rowPerPage" + reply.rowPerPage);
                setMaxPageNumber();
                drawTitle(titleList);
                drawGrid();
            }
        });

    }

}


function drawTitle(titleList)
{
    var table = document.getElementById('grid');
    var row = table.insertRow(0);
    row.className = " tableContext hoverClass eventr";
    for (var j = 0; j < titleList.length; j++)
    {
        var cTitle = row.insertCell(j);
        cTitle.className = " tableContext";
        cTitle.innerHTML = titleList[j];
    }
    var cAction = row.insertCell(j);
    cAction.className = " tableContext";
    cAction.innerHTML = "Action";
}


function setRowArray(tempList)
{
    for (var i = 0; i < tempList.length; i++)
    {
        tempRow = new Object();
        tempRow.name = tempList[i].name + "&nbsp";
        tempRow.trading_as_name = tempList[i].trading_as_name + "&nbsp";
        tempRow.telephone_no = tempList[i].telephone_no + "&nbsp";
        tempRow.email_address = tempList[i].email_address + "&nbsp";
        rowArray[i] = tempRow;
    }

}

function drawGrid()
{
    var table = document.getElementById('grid');
    for (var i = 1; i <= rowPerPage; i++)
    {
        var row = table.insertRow(i);
        row.className = " tableContext hoverClass";
        if (i % 2 === 0)
        {
            row.className = " tableContext hoverClass eventr";

        } else
        {
            row.className = " tableContext hoverClass oddtr";
        }
//        var dblclick =
//                function()
//                {
//                    return function() {
//                        console.log("two click");
//                    };
//                };
//                row.ondblclick = dblclick();

        var tempRowNumber = currentPageNumber - 1;
        tempRowNumber *= rowPerPage;
        tempRowNumber += i - 1;
        console.log("tempRowNumber  " + tempRowNumber);
        if (tempRowNumber < rowArray.length) {
            var cName = row.insertCell(0);
            var cTrading_as_name = row.insertCell(1);
            var cTelephone_no = row.insertCell(2);
            var cEmail_address = row.insertCell(3);
            var cAction = row.insertCell(4);
            cName.innerHTML = rowArray[tempRowNumber].name;
            cName.className = " tableContext";
            cTrading_as_name.innerHTML = rowArray[tempRowNumber].trading_as_name;
            cTrading_as_name.className = " tableContext";
            cTelephone_no.innerHTML = rowArray[tempRowNumber].telephone_no;
            cTelephone_no.className = " tableContext";
            cEmail_address.innerHTML = rowArray[tempRowNumber].email_address;
            cEmail_address.className = " tableContext";
            cAction.innerHTML = "<a  class='enlarge' href='#'  > <i class='icon-edit'></i></a>&nbsp;<a  class='enlarge' href='#'><i class='icon-trash'></i></a>";
            cAction.className = "tableContext";
        }
    }
}



