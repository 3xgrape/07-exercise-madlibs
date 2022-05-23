function makeMadLib() {
    var storyDiv = document.getElementById("story");
    var noun = document.getElementById("noun").value;
    var adjective = document.getElementById("adjective").value;
    var name = document.getElementById("name").value;
    storyDiv.innerHTML = `${name}  pet a ${adjective} ${noun} and her hand got covered in fur.`
}

var element = document.getElementById("lib-button");
element.addEventListener('click', makeMadLib);
