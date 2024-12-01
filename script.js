document.getElementById("calculate").addEventListener("click", function() {
    let band1 = parseInt(document.getElementById("band1").value);
    let band2 = parseInt(document.getElementById("band2").value);
    let band3 = parseInt(document.getElementById("band3").value);
    let band4 = parseFloat(document.getElementById("band4").value);

    let resistance = (band1 * 10 + band2) * Math.pow(10, band3);
    let tolerance = band4;
    
    let resultText = `${resistance} Ω ± ${tolerance}%`;
    document.getElementById("resistance").innerText = resultText;
});
