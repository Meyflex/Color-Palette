
let urlinfo = `https://www.thecolorapi.com/scheme?hex=00000&mode=monochrome&count=5`;
getColors(urlinfo);
document.getElementById("form").addEventListener('submit', function(event) {
    event.preventDefault();
    let scheme = document.getElementById("scheme-select").value
    let color = document.getElementById("color").value.replace("#", "");
    urlinfo = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`;
    console.log(urlinfo);
    getColors(urlinfo);

});
console.log(urlinfo)

    function getColors(urlinfo) {
        console.log(urlinfo)

        fetch (urlinfo)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let colors = data.colors;
        let color1 = colors[0].hex.value;
        let color2 = colors[1].hex.value;
        let color3 = colors[2].hex.value;
        let color4 = colors[3].hex.value;
        let color5 = colors[4].hex.value;
        document.getElementById("color1").style.backgroundColor = color1;
        document.getElementById("color2").style.backgroundColor = color2;
        document.getElementById("color3").style.backgroundColor = color3;
        document.getElementById("color4").style.backgroundColor = color4;
        document.getElementById("color5").style.backgroundColor = color5;
    
        document.getElementById("color1-text").innerText = color1;
        document.getElementById("color2-text").innerText = color2;
        document.getElementById("color3-text").innerText = color3;
        document.getElementById("color4-text").innerText = color4;
        document.getElementById("color5-text").innerText = color5;
    
     
    
    });
    }


    function myFunction(input) {
        // Get the text field
        var copyText = input;
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    }
