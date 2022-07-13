var common_name = [], scientific_name = [], plant_id = [], prev_water = [], next_water = [];
var SaveData = [];

async function savedata(common_name, plant_id, prev_water, next_water) {
    var dict = { [common_name] : { "plant_id": plant_id, "prev_water": prev_water, "next_water": next_water }}

    try {
        SaveData = JSON.parse(localStorage.getItem("SaveData"))  
        SaveData.push(dict)
    }
    catch {
        if (SaveData == null) {
            SaveData = []
            console.log("caught")
        }
    }
    SaveData.push(dict)
    // console.log(SaveData)
    SaveData = JSON.stringify(SaveData)
    localStorage.setItem( "SaveData", SaveData)
}

async function clear_data() {
    window.localStorage.removeItem('SaveData');
    document.getElementById("Collection").innerHTML = '<h1>Plant Warnings</h1>';
}

function toUpper(str) { // Capatalises the first letter of each word of a string.
    return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
    }

function steralize(data) {
    var div = document.getElementById("container");
    data = JSON.parse(data);
    console.log("data", data);
    for (var plant of data) {
        str_upper = toUpper(plant['common_name']);
        common_name.push(str_upper);
        str_upper = toUpper(plant['scientific_name']);
        scientific_name.push(str_upper);
        plant_id.push(plant['id']);
    }
    // var len = common_name.length - 12 
    // if (common_name.length > 12) {
    //     for (i = 0; i < len; i++) {
    //         common_name.pop()
    //         console.log(i)
    //     }
    // }
    for (i = 0; i < common_name.length; i++) {
        var div = document.createElement("div");
        div.setAttribute('class', 'result');
        div.innerHTML = `
        <p id="common_name">` + common_name[i] + `</p> 
        <p id="scientific_name">` + scientific_name[i] + `</p>
        <button class="button add_to_home_btn" onclick="go_green(i=` + i + `)">
            <img src="/img/icons/plus.svg"></img>
        </button>`;
        document.getElementById("container").appendChild(div);
    }
}

function get_token() {
    var file = new XMLHttpRequest();
    file.open("GET", "./JWT_Token.txt", false);
    file.onreadystatechange = function (token) {
        if(file.readyState === 4) {
            if(file.status === 200 || file.status == 0) {}
        }
    }
    file.send(null);
    token = file.responseText
    return token
}

async function INPUT() {
    var div = document.getElementById("container");
    div.innerHTML = '';
    token = get_token();
    var data;
    var input = document.getElementById('Search_Input');
    input = input.value.toLowerCase();

    var xhttp = new XMLHttpRequest();
    var link = 'https://trefle.io/api/plants?token=' + token + '&common_name=' + input;
    xhttp.open("GET", link);
    xhttp.setRequestHeader("withCredentials", "true")
    xhttp.send(null);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = this.response;
            steralize(data);
        };
    };
}

// Settings Page switches and other scripts. 

async function check_if_ticked(id) {
    var checkbox = document.getElementById(id);
    if (checkbox.checked != false) { // Because the state is changed before this function is run when it checks if the thing is checked it says true when changed to unchecked. So we put if checked false.
        // Do something. Like check if the user has an email linked or something. 
    }
}

// Add buttons 
async function go_blue(button) {
    var button = document.getElementsByClassName("add_to_home_btn")[i];
    var svg = button.getElementsByTagName("img")[0];
    svg.setAttribute("src", "/img/icons/button.svg");
    button.style.background = "#46A0D3";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function add_to_home(i){
    // Add the specific plant to the home page. 
    var new_plant = document.createElement('div');
    new_plant.innerHTML = `
    <div class="card">
        <p>` + common_name[i] + `</p>
        <div class="click_arrow"></div>
        <div class="fill_bar">
            <div class="fill"></div>
        </div>
    </div>`
    var plant_card = document.getElementById('Collection');
    plant_card.appendChild(new_plant)
    
    var prev_water = Date.now()
    var next_water = ''
    console.log(common_name)
    savedata(common_name[i], plant_id[i], prev_water, next_water)
}

async function go_green(i) { 
    console.log(i)
    var button = document.getElementsByClassName("add_to_home_btn")[i];
    var svg = button.getElementsByTagName("img")[0];
    svg.setAttribute("src", "/img/icons/tick.svg");
    button.style.background = "#84DC00";
    add_to_home(i);
    await sleep(2000);
    slide_in_right();
    svg.setAttribute("src", "/img/icons/plus.svg");
    button.style.background = "#46A0D3";
}

async function clear_collection() {
    var collection = document.getElementById('Collection'); 
    collection.innerHTML = "<h1>Plant Warnings</h1>";
}

// ====================================================================================================================
// ======== Onload ========= //


async function onload() {
    var plants = JSON.parse(localStorage.getItem("SaveData"))
    if (plants == null) {
        plants = []
    }
    var plants_card = document.getElementById('Collection');
    plants_card.innerHTML = `<h1>Plant Warnings</h1>`; 

    plants.forEach(element => {
        console.log(element)
        var name     = Object.keys(element);  
        var element = document.createElement('div');
        element.innerHTML = 
        `<div class="card">
            <p>` + name + `</p>
            <div class="click_arrow"></div>
            <div class="fill_bar">
                <div class="fill"></div>
            </div>
        </div>`
        plants_card.appendChild(element)
    });
}

window.addEventListener("load", onload);

// ====================================================================================================================
// ======== Animations ========= //

function slide_in() {
    element = document.getElementById('search_overlay')
    element.classList.add('search_overlay_animate');
}

function slide_out() {
    element = document.getElementById('search_overlay')
    element.classList.remove('search_overlay_animate');
    window.onscroll = function() {};
}

function slide_in_right() {
    element = document.getElementById('info_overlay')
    element.classList.add('info_overlay_animate');
    element = document.getElementsByClassName('info_button')[0]
    element.classList.add('display');
}

