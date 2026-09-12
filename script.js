let selectedFood = "";

function selectFood(food) {

    selectedFood = food;

    const detectionSection =
        document.getElementById("detectionSection");

    const selectedFoodText =
        document.getElementById("selectedFood");


    if (food === "banana") {

        selectedFoodText.innerText =
            "🍌 Banana selected — let's investigate its ripeness.";

    }

    else if (food === "chapati") {

        selectedFoodText.innerText =
            "🫓 Chapati selected — let's investigate its shape.";

    }

    else if (food === "rice") {

        selectedFoodText.innerText =
            "🍚 Rice selected — let's count those grains.";

    }


    detectionSection.scrollIntoView({
        behavior: "smooth"
    });
}


/* IMAGE PREVIEW */

const imageInput =
    document.getElementById("imageInput");

const previewImage =
    document.getElementById("previewImage");


imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const imageURL =
            URL.createObjectURL(file);

        previewImage.src = imageURL;

        previewImage.style.display = "block";
    }

});