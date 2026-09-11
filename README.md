<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />



# FOOD FORENSIC 🎯


## Basic Details
### Team Name:USELESS


### Team Members
- Team Lead: ALEENA N - Government Engineering College Kozhikode
- Member 2: ESHA G -  Government Engineering College Kozhikode


### Project Description
Food Forensics is an interactive web app that uses computer vision to analyze everyday foods like bananas, chapatis etc... It checks things like ripeness, shape, and so on in a fun and simple way.

### The Problem (that doesn't exist)
We’re solving the extremely serious problem of people not knowing whether their chapati is round enough, their banana is ripe enough!!!

### The Solution (that nobody asked for)
We use computer vision and OpenCV to turn everyday food into a mini forensic investigation—checking banana ripeness, judging chapati shape

## Technical Details
### Technologies/Components Used
For Software:
Languages used: HTML, CSS, JavaScript
Frameworks used: Node.js
Libraries used: OpenCV.js
Tools used: Visual Studio Code, GitHub, Browser, remove.bg API

For Hardware:
Main components: Laptop/PC, Webcam/Camera
Specifications: Standard laptop/PC with internet connectivity
Tools required: Camera/phone for capturing food images

### Implementation
For Software:
# Installation
npm install

# Run
node server.js then open http://localhost:3000

### Project Documentation
For Software:

# Screenshots (Add at least 3)
<img width="1920" height="1200" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/f3b6ead1-46ba-42c2-8a96-c9a6b338d5e9" />
The Home page gives a simple introduction to Food Forensics with an option to Explore the Lab. Users can also directly select a food such as Banana or Chapati, which takes them straight to its respective analysis lab.

<img width="1920" height="1200" alt="Screenshot (9)" src="https://github.com/user-attachments/assets/438f0587-79aa-4d6e-a0e3-fd318aeed496" />
The Lab page allows users to manually choose the food they want to investigate. Users can select Banana, Chapati to enter the corresponding analysis lab and explore its specific computer-vision features.

<img width="1920" height="1200" alt="Screenshot (10)" src="https://github.com/user-attachments/assets/258b15db-bd36-4432-9f5e-95563f51b415" />
The third page displays the selected food's dedicated analysis lab. Based on the user's choice, it opens either the Banana Lab or Chapati Lab, where the food image can be analyzed using computer vision.


# Diagrams
🏠 HOME PAGE

       │
       ├────────------───────┐
       ↓                     ↓
       
 🔬 EXPLORE LAB        Direct Selection
 
       │                    │
       ↓                    ↓
       
   🧪 LAB PAGE      🍌 Banana / 🫓 Chapati
      
       │                       │
       └──────-----─┬─---──────┘
       
               ↓

               
        📷 UPLOAD IMAGE
               │
               
               ↓
      🔍 IMAGE PROCESSING
               │
               ↓
       👁️ OPENCV ANALYSIS
          │           │
          ↓           ↓
      🍌 Banana    🫓 Chapati
      Ripeness       Shape
          │           │
          └─────┬─────┘
                ↓
          📊 FINAL RESULTS
The diagram illustrates the Food Forensics workflow, starting from the Home page where users can explore the lab or directly select a food. The selected Banana or Chapati is then uploaded and processed using OpenCV-based computer vision, which analyzes its ripeness or shape and displays the final results.




### Project Demo
# Video

https://github.com/user-attachments/assets/baf14964-65f2-4c81-a4f3-ded16df0f345
This video demonstrates the complete working of Food Forensics, from selecting a food and uploading an image to processing it with computer vision and displaying the final analysis results. It showcases the Banana and Chapati labs and how users interact with each feature.




## Team Contributions
ALEENA N : Idea Research ,Lab page,Banana Analyser
ESHA G :  Idea Research ,Home page,Chapathi Analyser



---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)



