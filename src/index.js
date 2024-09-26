
// console.log(data);

function cardloop() {
    data.map((d) => {
        // console.log(d)
        li = document.createElement("li")
        li.classList.add('card')

        h2 = document.createElement("h2")
        h2.classList.add('card--title')
        h2.innerHTML = d.name.charAt(0).toUpperCase() + d.name.slice(1)
        li.appendChild(h2)
        
        img = document.createElement("img")
        img.classList.add('card--img')
        img.style.cssText = 'width:256px;'
        img.src = d.sprites.front_default;
        li.appendChild(img)

        ul = document.createElement("ul")
        ul.classList.add('card--text')

        for (const specs of d.stats){
            console.log(specs)
            stat = document.createElement("li")
            stat.innerHTML = specs.base_stat + ' ' + specs.stat.name.toUpperCase()
            ul.appendChild(stat)
        }
        li.appendChild(ul)


        document.getElementById("cards").appendChild(li)
    });
}
// console.log(data[0]);
cardloop();
