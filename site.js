var people = [];
var results = [];

populatePeople();
pageResults();
createLinks();

function populatePeople() {
    for (var i=1;i<=55;i++) {
        people.push("Person"+i);
    }
}

function pageResults() {
    var pages = Math.ceil(people.length/10);
    for (var i=0;i<pages;i++) {
        var row = [];
        for (var j=i*10;j<(i+1)*10;j++) {
            if (people[j] != null) {
                row.push(people[j]);
            }
        }
        results.push(row);
    }
}

function createLinks() {
    var navigation = document.getElementById("navigation");
    for (var i=0;i<results.length;i++) {
        var anchor_tag = document.createElement("a");
        anchor_tag.innerHTML = i+1;
        anchor_tag.onclick = function() { clickPage(this) } ;
        navigation.appendChild(anchor_tag);
    }
}

function showPage(page) {
    var list = document.getElementById("results");
    if (results[page-1] != null) {
        for (var i=0;i<results[page-1].length;i++) {
            var li = document.createElement("li");
            li.innerHTML = results[page-1][i];
            list.appendChild(li);
        }
    }
}

function clickPage(element) {
    clearPage();
    var page_number = element.innerHTML;
    showPage(page_number);
}

function clearPage() {
    var list = document.getElementById("results");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}