let searchBtn = document.getElementById("search-btn")
let resultbox = document.getElementById('result')
let colorbox = document.getElementById('colorbox')
searchBtn.addEventListener("click", () => {
    //let nameInp = data.value;
    async function color() {
        
        var url="https://www.colr.org/json/colors/random/7";
        //window.history.replaceState(url,"Page","./index.html");
       // url.document.location.reload(true);
        let data = await fetch(url);
        let result = await data.json()
        console.log(result);
      
    resultbox.innerHTML =`<table><tr>
    <td>${result.matching_colors[0]}<button style='background-color:#${result.matching_colors[0]};width:50px;height:50px'></button></td>
    <td>${result.matching_colors[1]}<button style='background-color:#${result.matching_colors[1]};width:50px;height:50px'></button></td>
    <td>${result.matching_colors[2]}<button style='background-color:#${result.matching_colors[2]};width:50px;height:50px'></button></td>
    <td>${result.matching_colors[3]}<button style='background-color:#${result.matching_colors[3]};width:50px;height:50px'></button></td>
    <td>${result.matching_colors[4]}<button style='background-color:#${result.matching_colors[4]};width:50px;height:50px'></button></td>
    <td>${result.matching_colors[5]}<button style='background-color:#${result.matching_colors[5]};width:50px;height:50px'></button></td>
    <td>${result.matching_colors[6]}<button style='background-color:#${result.matching_colors[6]};width:50px;height:50px'></button></td>
   
    </table>`
      }

    color();

})
