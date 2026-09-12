const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
    dest: "uploads/"
});

app.use(express.static("."));

app.post("/remove-background", upload.single("image"), async (req, res) => {

    try {

        console.log("Image received!");

        const formData = new FormData();

        const imageFile = new Blob([
            require("fs").readFileSync(req.file.path)
        ]);

        formData.append(
            "image_file",
            imageFile,
            req.file.originalname
        );

        formData.append("size", "auto");

        const response = await fetch(
            "https://api.remove.bg/v1.0/removebg",
            {
                method: "POST",

                headers: {
                    "X-Api-Key": "3LYQ3xsbHEQwNY6Y9bi3ncZd"
                },

                body: formData
            }
        );

        if (!response.ok) {

            const errorText = await response.text();

            console.error("remove.bg error:", errorText);

            return res.status(response.status).send(errorText);
        }

        const result = await response.arrayBuffer();

        res.set(
            "Content-Type",
            "image/png"
        );

        res.send(
            Buffer.from(result)
        );

    } catch (error) {

        console.error(error);

        res.status(500).send(
            "Background removal failed"
        );
    }
});

app.listen(3000, () => {

    console.log("Food Forensics server running!");
    console.log("Open http://localhost:3000");
});