function createCard(title, cName, views, monthsOld, duration, thumbnail){


    let viewStr
    if(views< 1000){
        viewStr = views
    }else if(views>1000000){
        viewStr = views/1000000 + "M";
    }else{
    viewStr = views / 1000 + "K";
    }
    let html = ` <div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="thumbnail" class="img">
            <div class="duration">${duration}</div>
        </div>
        <div class="text">
        <h1>${title} </h1>
        <p>${cName} . ${viewStr} . ${monthsOld}</p>
        </div>
        
    </div>`
    document.querySelector(".container").innerHTML =  html /*.querySelector(".container").innerHTML +*/
}
createCard("Installing VS Code in Computer | Sigma web dev video #1", "CodeWithHarry", 56000, "1 year old", "10:40", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")