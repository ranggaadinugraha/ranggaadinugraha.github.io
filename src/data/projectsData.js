import AppIoT1 from "../assets/Project/iot1.png";
import Nv1 from "../assets/Project/nv1.png";
import Sp1 from "../assets/Project/sp1.png";
import Sls1 from "../assets/Project/sls1.png";
import I1 from "../assets/Project/image1.png";

export const projects = [
  {
    id: 1,
    title: "IoT-Based Smart Watering Mobile Application",
    desc: "IoT-based smart watering system with real-time monitoring and automated irrigation using Flutter and Firebase.",
    tech: [
      "Flutter",
      "Firebase",
      "Arduino IDE",
      "NodeMCU",
      "DHT22",
      "Soil Moisture Sensor",
      "DS18B20",
    ],
    image1: AppIoT1,
    live: "https://ranggaadinugraha.github.io/iot-flutter-dashboard/",
    publication:
      "https://jurnal.dharmawangsa.ac.id/index.php/djtechno/article/view/5243",
    github:
      "https://github.com/ranggaadinugraha/iot-flutter-dashboard",
  },

  {
    id: 2,
    title: "Water Quality Classification",
    desc: "Machine learning model using Naive Bayes to classify water quality as safe or unsafe based on chemical parameters.",
    tech: [
      "Python",
      "Google Colab",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Plotly",
    ],
    image1: Nv1,
    github:
      "https://github.com/ranggaadinugraha/water-quality-classification-naive-bayes.git",
  },

  {
    id: 3,
    title: "Stroke Risk Prediction",
    desc: "Machine learning project to predict stroke risk based on patient health indicators and medical data.",
    tech: [
      "Python",
      "Google Colab",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
    ],
    image1: Sp1,
    github:
      "https://github.com/ranggaadinugraha/stroke-prediction-using-machine-learning.git",
  },

  {
    id: 4,
    title: "BMW Sales Data Analysis",
    desc: "Exploratory data analysis and visualization of BMW sales data from 2010 to 2024 to identify trends and patterns.",
    tech: [
      "Python",
      "Google Colab",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    image1: Sls1,
    github:
      "https://github.com/ranggaadinugraha/bmw-sales-data-analysis.git",
  },

  {
    id: 5,
    title: "Sales Dashboard Visualization",
    desc: "Interactive sales dashboard built in Excel to analyze trends and performance using PivotTable and PivotChart.",
    tech: ["Microsoft Excel", "PivotTable", "PivotChart"],
    image1: I1,
    github:
      "https://github.com/ranggaadinugraha/project-excel-dashboard-pizza.git",
  },
];
