let func = async () => {
    let res = await fetch('https://data.covid19india.org/data.json')
    let jsonres = await res.json()
    let data = jsonres.statewise;
    let tableData = document.getElementsByTagName('tbody')[0].innerHTML;
    let state=[];
    let active = [];
    let recovered = [];
    let deaths = [];
    data.map((data) => {
        tableData = tableData +
            `<tr>
                <th>${data.state}</th>
                <td>${data.active}</td>
                <td>${data.deaths}</td>
                <td>${data.recovered}</td>
              </tr>`

              active.push(data.active)
              recovered.push(data.recovered)
              deaths.push(data.deaths)
              state.push(data.state)
    })
    document.getElementsByTagName('tbody')[0].innerHTML = tableData;
    active.shift()
    recovered.shift()
    deaths.shift()
    state.shift()
    
    console.log(active,"active");

    let mychart = document.getElementById("chartCanvas").getContext('2d');
    var chart = new Chart(mychart,{
        type:"line",
        data:{
            labels:state,
            datasets:[
                {
                    label:"Active Cases",
                    data:active,
                    backgroundColor:"black",
                    minBarLength:100
                },
                {
                    label:"Recovered Cases",
                    data:recovered,
                    backgroundColor:"green",
                    minBarLength:100
                },
                {
                    label:"Death Cases",
                    data:deaths,
                    backgroundColor:"red",
                    minBarLength:100
                }
            ]
        },
        options:{}

    }

    )
}
func()