function calcHeight()
{
    var doc = 'contentDocument' in  document.getElementById('content_target') ? document.getElementById('content_target').contentDocument : document.getElementById('content_target').contentWindow.document;
    tempHeight = doc.body.offsetHeight;
    if (tempHeight > 1001) {
        document.getElementById('content_target').style.height =  tempHeight + "px";
    }
    else
    {
        document.getElementById('content_target').style.height = "1000px";
    }
}

