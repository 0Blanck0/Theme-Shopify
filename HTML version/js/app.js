
var lastVisitedBox = "none";

function showList()
{
    try {
        let list_container = document.getElementsByClassName('list_container')[0];
        list_container.hidden = false;
    } catch {
        console.error("Error on ShowList function (target not exist)");
    }
}

function showBox(X)
{
    let target = document.getElementsByClassName('hover_container');

    try {
        for (var i=0; i<target.length; i++) {
            target[i].style.display = "none";
        }
    } catch {
        console.error("Invalid element !");
    }

    if (X < target.length && X != lastVisitedBox) {

        target[X].style.display = "block";
        lastVisitedBox = X;

    } else if (X >= target.length)
        console.error("Invalid index - Max index for current element is " + target.length);
    else
        lastVisitedBox = "none";
}
