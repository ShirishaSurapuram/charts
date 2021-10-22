import Head from 'next/head'
import ChartComponent from './charts_component';



export default function Home({ data }) {
 
  let chartsData = data.charts;

  { console.log(chartsData) }

  return (
    <div className="flex flex-row overflow-hidden">
       <div><ChartComponent {...chartsData}/></div>
    </div>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  const data = {
    "page_parameters": {
      "primary_color": "#007C9D",
      "secondary_color": "#FFC000",
      "teritary_colors": "#C3D3DF"
    },
    "charts": [
      {
        "chart_title": "Patients Registered - Gender wise",
        "chart_type": "pie",
        "chart_properties": {
          "show_toolbox": true
        },
        "data": {
          "labels": [
            "Female",
            "Male",
            "Transgender"
          ],
          "y_axis": [
            56.34,
            43.65,
            0.01
          ]
        }
      },
      {
        "chart_title": "Patients Registered - Center wise (Top 5)",
        "chart_type": "line",
        "chart_properties": {
          "show_toolbox": true
        },
        "data": {
          "x_axis": [
            "Sangipur",
            "Derapur",
            "Gopiganj",
            "Karnda",
            "Aurai_"
          ],
          "y_axis": [
            377,
            279,
            278,
            277,
            273
          ]
        }
      },
      {
        "chart_title": "Consultations' Visit Type Distribution",
        "chart_type": "bar",
        "chart_properties": {
          "show_toolbox": true
        },
        "data": {
          "x_axis": [
            "NEW",
            "REPEAT",
            "REVIEW"
          ],
          "y_axis": [
            69.04912407440852,
            21.094455481307566,
            9.85642044428391
          ]
        }
      },
      {
        "chart_title": "Top 10 Diagnosis",
        "chart_type": "bar",
        "chart_properties": {
          "show_toolbox": true
        },
        "data": {
          "x_axis": [
            "SCABIES",
            "TINEA CORPORIS",
            "TINEA",
            "LOW BACK STRAIN",
            "UPPER RESPIRATORY INFECTION",
            "UPPER RESPIRATORY TRACT INFECTION",
            "DIABETES MELLITUS",
            "ACNE",
            "TINEA CRURIS",
            "GASTRITIS"
          ],
          "y_axis": [
            5.83,
            4.72,
            3.86,
            2.66,
            2.32,
            1.82,
            1.8,
            1.59,
            1.58,
            1.52
          ]
        }
      },
      {
        "chart_title": "Top 5 Medications Prescribed",
        "chart_type": "bar",
        "chart_properties": {
          "show_toolbox": true
        },
        "data": {
          "x_axis": [
            "Cetirizine Dihydrochloride Tablet",
            "Omeprazole Capsule",
            "Paracetamol Tablet",
            "Clotrimazole Cream",
            "Aceclofinac Tablet"
          ],
          "y_axis": [
            12.02,
            9.48,
            7.12,
            6.36,
            5.19
          ]
        }
      },
      {
        "chart_title": "Top 5 Lab Investigations",
        "chart_type": "bar",
        "chart_properties": {
          "show_toolbox": true
        },
        "data": {
          "x_axis": [
            "Random Blood Glucose",
            "Fasting Blood Glucose",
            "Post Prandial Blood Glucose",
            "ECG",
            "Fetal heart Rate",
            "STETH"
          ],
          "y_axis": [
            42.97,
            19.39,
            17.31,
            15.56,
            4.67,
            0.1
          ]
        }
      },
      {
        "chart_title": "Specialitywise Consultations",
        "chart_type": "bar",
        "chart_properties": {
          "show_toolbox": true
        },
        "data": {
          "x_axis": [
            "Cardiology",
            "Dermatology",
            "Endocrinology",
            "Gastroenterology",
            "General Medicine",
            "Nephrology",
            "Neurology",
            "Obstetrics & Gynaecology",
            "Oncologist",
            "Orthopaedics",
            "Paediatrics",
            "Physical Medicine & Rehabilitation",
            "Urology"
          ],
          "y_axis": [
            1.06,
            29.15,
            2.62,
            1.03,
            23.36,
            0.21,
            1.03,
            12.8,
            0.09,
            14.25,
            13.23,
            0.7,
            0.47
          ]
        }
      },
      {
        "chart_title": "Districtwise Consultations",
        "chart_type": "bar",
        "chart_properties": {
          "show_toolbox": true
        },
        "data": {
          "x_axis": [
            "Allahabad",
            "Chandauli",
            "Chitrakoot",
            "Fatehpur",
            "Ghazipur",
            "HAMIRPUR",
            "Jaunpur",
            "Kanpur Dehat",
            "Kaushambi",
            "Mirzapur",
            "Pratapgarh",
            "Sant Ravidas Nagar (Bhadohi)",
            "Sonbhadra",
            "Varanasi"
          ],
          "y_axis": [
            3142,
            1147,
            974,
            1271,
            2028,
            921,
            2217,
            1604,
            1000,
            1153,
            2462,
            1043,
            756,
            1491
          ]
        }
      }
    ]
  }

  return { props: { data } }


}