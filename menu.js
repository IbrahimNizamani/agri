/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addMenu() {
    var menu = ["Home", "News", "Contact", "About"];
    var text = "<ul>";
    var i;
    for (i=0; i < menu.length; i++) {
        text +="<li><a href='#'>" + menu[i] + "</a></li>";
    }
    text += "</ul>";
    document.getElementById("root").innerHTML = text;
    //document.write(text);
    //document.getElementById("root").insertAdjacentHTML("afterend", 
    //    "<h3>This is the text which has been inserted by JS</h3>");
}



