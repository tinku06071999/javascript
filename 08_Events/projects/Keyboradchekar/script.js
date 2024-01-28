const insert = document.querySelector('#insert')
console.log(insert)
window.addEventListener('keydown',(e) =>{
    insert.innerHTML =`
    <div class = 'color' style = "border:0.2px solid red; color:green; max-width:auto">
        <table >
            <tr >
                <th style = "border:0.2px solid red">key</th>
                <th style = "border:0.2px solid red">keyCode</th>
                <th style = "border:0.2px solid red">code</th>
            </tr>
            <tr >
                <td style = "border:0.2px solid red">${e.key === " " ? "Space":e.key}</td>
                <td style = "border:0.2px solid red">${e.keyCode}</td>
                <td style = "border:0.2px solid red">${e.code}</td>
            </tr>
    
        </table>
    </div>
    `
})