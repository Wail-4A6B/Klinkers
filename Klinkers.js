function calculeer() {
    var text = document.getElementById("input_veld").value;
    
    for(var i = 0; i < text.length; i++) {
        text = text.replace("a", "!").replace("e", "@")
            .replace("o", "#").replace("u", "$").replace("i", "%");
    }
    
    document.getElementById("resultaat").innerHTML = text;
}