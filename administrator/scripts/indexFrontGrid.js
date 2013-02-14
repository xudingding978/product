

var rowArray = new Array();
var rowPerPage = 9;
var currentPageNumber = 1;
var maxPageNumber;
var tableLocation = "";
var titleList;

$(document).ready(function() {
    getGridData();
});
function next() {
    currentPageNumber++;
    validationPageNumber();


}
function previous() {
    currentPageNumber--;
    validationPageNumber();

}
function first() {
    currentPageNumber = 1;
    validationPageNumber();

}
function last() {
    currentPageNumber = maxPageNumber;
    validationPageNumber();
}

function validationPageNumber() {
    initialization();
    console.log("tableLocation " + tableLocation);
    if (currentPageNumber < 0 || currentPageNumber > maxPageNumber)
    {
        currentPageNumber = 1;
    }

     reflash();
}


function reflash()
{

    getGridData();


}
function doubleClick()
{
    console.log("double click");
    return false;
}



function removeTableContent()
{
    var Node1 = document.getElementById(tableLocation);


    for (var i = 1; i <= rowPerPage; i++)
    {
        if (Node1.childNodes[i] !== null)
        {
            Node1.deleteRow(1);
        }
    }
}


function setCurrentPageNumber(currentPageNumber)
{
    var numberOfPage = tableLocation + "CurrentPageNumber";
    $("#" + numberOfPage).val(currentPageNumber);

}

function getGridData()
{
    $.ajax({
        type: "POST",
        url: "/administrator/view.php",
        dataType: "json",
        data: {"rowsPage": rowPerPage,
            "pageNum": currentPageNumber,
            "tableLocation": tableLocation},
        success: function(reply) {
            var tempList = reply.dataGrid;
            titleList = reply.col_headers;
            tableLocation = reply.tableLocation;
            console.log("tableLocation   " + tableLocation);
            setRowArray(tempList);
            setCurrentPageNumber(reply.currentPageNumber);
            setMaxPageNum(reply.MaxPageNumber);
        }
    });
    return false;
}
function setMaxPageNum(MaxPageNum)
{
    var numberOfPage = tableLocation + "MaxPageNumber";
    maxPageNumber = MaxPageNum;
    $("#" + numberOfPage).html(maxPageNumber);
}

function initialization()
{
    var tablediv = document.getElementById(tableLocation);
    while (tablediv.firstChild) {
        tablediv.removeChild(tablediv.firstChild);
    }
}
function checkCurrentPage(currentPage) {
    if (currentPage === null || currentPage < 1)
    {
        currentPage = 1;
    }

    return currentPage;
}



function setRowArray(tempList)
{
    rowArray[0] = titleList;
    for (var i = 0; i < tempList.length; i++)
    {
        rowArray[i + 1] = tempList[i] + "&nbsp";
    }
    buildGUI();
}


function buildGUI()
{
    drawGUI();
    pageNavigationSettle();
    // drawTitle(titleList);
    //  drawGrid();
}
function  drawGUI() {
    var tablediv = document.getElementById(tableLocation);
    var t = document.createElement('table');
    //create the caption 
    var caption = t.createCaption();
    caption.className = "datagrid_caption ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";
    caption.innerHTML = "<span>23 Clients found, Page 2 of 3</span>";

    t.cellSpacing = "0";
    t.className = "datagrid_table";
    for (var i = 0; i < rowArray.length; i++)
    {
        var header;
        var row = t.insertRow(i);
        var headerRow;
        if (i === 0) {
            header = t.createTHead();
            headerRow = header.insertRow(i);
        }
        var numberOfCols = rowArray[i].split(",");

        createTableContent(numberOfCols, headerRow, row, i);

    }

    addControllerRow(t, i);
    tablediv.appendChild(t);
}

function RowAddclickFunction(row, username) {
    row.ondblclick = function()
    {
        $.ajax({
            type: "POST",
            url: "/dashboard/initialize-callbacks.php",
            dataType: "json",
            data: {action: "login", u: username},
            success: function(reply) {
                if (reply === "SUCCESS")
                {
                    new_window = window.open("/dashboard/");
                }
                else
                {
                    alert("something goes wrong");
                }
            }
        });
    };

}

function createTableContent(numberOfCols, headerRow, row, i)
{
    for (var j = 0; j < numberOfCols.length; j++) {
        if (i === 0)
        {// build header row
            var headerCell = headerRow.insertCell(j);
            headerCell.innerHTML = numberOfCols[j].toString() + "&nbsp;";
            headerCell.className = "datagrid_header_row";
        }
        else {
            row.className = 'datagrid_row hoverClass';
            RowAddclickFunction(row, numberOfCols[4]);
            var cell = row.insertCell(j);
            cell.innerHTML = "<a class=datagrid_link href=#>" + numberOfCols[j].toString() + "&nbsp;</a>";
            cell.className = "datagrid_cell";

            if (j === (numberOfCols.length - 1)) {//add Action column
                var cAction = row.insertCell(j + 1);
                cAction.innerHTML = "<a  class='enlarge' href='#'  > <i class='icon-edit'></i></a>&nbsp;<a  class='enlarge' href='#'><i class='icon-trash'></i></a>";
                cAction.className = "tableContext";
            }
        }

    }
}

function addControllerRow(table, rowNum) {
    var row = table.insertRow(rowNum);
    row.className = 'datagrid_footer';
    var controller = row.insertCell(0);
    controller.colSpan = table.rows[0].cells.length;
    controller.innerHTML = "<a id='" + tableLocation + "first'  class = 'enlarge' href = '#' onclick = 'first();' > <i class = 'icon-fast-backward  ' > </i></a>&nbsp; \n\
                <a id='" + tableLocation + "previous' class = 'enlarge' href = '#'  onclick = 'previous();' > <i class = 'icon-step-backward  ' > </i></a>&nbsp;<span>\n\
                <input id='" + tableLocation + "CurrentPageNumber' type = 'text'  size = '2'>&nbsp; of &nbsp;</span> \n\
                <span id='" + tableLocation + "MaxPageNumber'></span>\n\ \n\
                <a id='" + tableLocation + "next' class ='enlarge' href = '#' onclick = ' next();'><i class = 'icon-step-forward  ' > </i></a> &nbsp;\n\
                <a id='" + tableLocation + "last'  class = 'enlarge' href = '#'  onclick = 'last();' > <i class = 'icon-fast-forward  ' > </i></a >";

}

function pageNavigationSettle() {
    if (currentPageNumber === 1)
    {
        disableFirstAndPrevious();
        releaseNextAndLast();
    }
    else if (currentPageNumber === maxPageNumber)
    {
        disableNextAndLast();
        releaseFirstAndPrevious();
    }
    else {
        releaseFirstAndPrevious();
        releaseNextAndLast();
    }
}
function  disableFirstAndPrevious() {
    var button_first = document.getElementById(tableLocation + 'first');
    var button_previous = document.getElementById(tableLocation + 'previous');
    button_first.className = "disabled";
    button_first.disable = true;
    button_first.onclick = "";
    button_previous.className = "disabled";
    button_previous.disable = true;
    button_previous.onclick = "";
}

function  disableNextAndLast() {
    var button_next = document.getElementById(tableLocation + 'next');
    var button_last = document.getElementById(tableLocation + 'last');
    button_next.className = "disabled";
    button_next.disable = true;
    button_next.onclick = "";
    button_last.className = "disabled";
    button_last.disable = true;
    button_next.onclick = "";
}
function releaseFirstAndPrevious()
{
    var button_first = document.getElementById(tableLocation + 'first');
    var button_previous = document.getElementById(tableLocation + 'previous');
    button_first.className = "enlarge";
    button_first.disable = false;
    button_previous.className = "enlarge";
    button_previous.disable = false;
}

function releaseNextAndLast()
{

    var button_next = document.getElementById(tableLocation + 'next');
    var button_last = document.getElementById(tableLocation + 'last');
    button_next.className = "enlarge";
    button_next.disable = false;
    button_last.className = "enlarge";
    button_last.disable = false;
}

function setRowClickFunction(row, username, password) {
    row.ondblclick = function()
    {
        $.ajax({
            type: "POST",
            url: "/dashboard/initialize-callbacks.php",
            dataType: "json",
            data: {action: "login", u: username, p: password},
            success: function(reply) {
                if (reply === "SUCCESS")
                {
                    new_window = window.open("/dashboard/");
                }
                else
                {
                    alert("something goes wrong");
                }
            }
        });
    };
}



