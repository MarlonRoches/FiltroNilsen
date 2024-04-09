
import { useState } from 'react';
import './App.css'
import Select from 'react-select' // https://react-select.com/home
import CompanyData from "./Data.json"
function App() {

  const [filterSettings, setfilterSettings] = useState([])
  const modelo = {
    "_id": "650dd64b242e65bfe62591f8",
    "available": null,
    "brand": null,
    "category": "Coadyuvante y Regulador de PH",
    "created_at": "2024-02-05T21:02:57.070Z",
    "crops": null,
    "custom_attributes": [
      {
        "presentation": "100 ml",
        "tipo_aplicacion": null,
        "precio": 20.56,
        "image": "0d31aea7330eeb85d3a00fdffdff7d7903601df7a07bbcb515a05a2b54edbec4.jpeg"
      }
    ],
    "customerSAP": null,
    "description": null,
    "factor": null,
    "filters": [
      "sfa"
    ],
    "groupby": null,
    "image": "0d31aea7330eeb85d3a00fdffdff7d7903601df7a07bbcb515a05a2b54edbec4.jpeg",
    "ismodel": 0,
    "name": "Disawett® Max ",
    "prices": null,
    "reserveinventory": 0,
    "salesorg": "5001",
    "sector": "PPC",
    "service": "sfa",
    "short_description": null,
    "sku": "1103000712",
    "skumodel": "1103000713",
    "status": 1,
    "stock": 0,
    "stockbysource": [
      {
        "OrgVentas": "5001",
        "Centro": "50C1",
        "Sku": "1103000712",
        "Stock": 60,
        "VirtualStock": 60,
        "ClaseAprovisionamiento": "F",
        "Client": "201129"
      },
      {
        "OrgVentas": "5001",
        "Centro": "50C1",
        "Sku": "1103000712",
        "Stock": 60,
        "VirtualStock": 60,
        "ClaseAprovisionamiento": "F",
        "Client": "205202"
      },
      {
        "OrgVentas": "5001",
        "Centro": "50C1",
        "Sku": "1103000712",
        "Stock": 60,
        "VirtualStock": 60,
        "ClaseAprovisionamiento": "F",
        "Client": "202793"
      },
      {
        "OrgVentas": "5001",
        "Centro": "50C1",
        "Sku": "1103000712",
        "Stock": 60,
        "VirtualStock": 60,
        "ClaseAprovisionamiento": "F",
        "Client": "203993"
      },
      {
        "OrgVentas": "5001",
        "Centro": "50C1",
        "Sku": "1103000712",
        "Stock": 60,
        "VirtualStock": 60,
        "ClaseAprovisionamiento": "F",
        "Client": "203323"
      },
      {
        "OrgVentas": "5001",
        "Centro": "50C1",
        "Sku": "1103000712",
        "Stock": 60,
        "VirtualStock": 60,
        "ClaseAprovisionamiento": "F",
        "Client": "200824"
      },
      {
        "OrgVentas": "5001",
        "Centro": "50C1",
        "Sku": "1103000712",
        "Stock": 60,
        "VirtualStock": 60,
        "ClaseAprovisionamiento": "F",
        "Client": "201032"
      }
    ],
    "totalstock": 0,
    "type": null,
    "umb": null,
    "unitperbox": null,
    "unitprice": null,
    "unitprices": null,
    "updated_at": "2024-02-05T21:02:57.070Z",
    "validity_date": null,
    "virtualstock": 0,
    "visibility": null
  }

  const keys = Object.keys(modelo);

  const filterObject = (): Array<any> => {
    let result: any = []
    CompanyData.forEach((el) => {
      let buildedObjectel = {}
      filterSettings.forEach(({ value }) => {
        // alert(value)
        buildedObjectel[value] = el[value]
      })
      result.push(buildedObjectel)
      buildedObjectel = {}
    });
    return result;

  }

  function chooseToExport() {
    if (filterSettings.length) { 
      // si filterSettings.length > 0
      // devolveme el array de objetos filtrados
      filterObject().map((el) => {
        return (
          <li>
            {
              JSON.stringify(el)
            }
          </li>
        )
      })
    } else {
      //devolveme la data sin filtrar
      return CompanyData.map((el) => <li>{JSON.stringify(el)}</li>)
    }
  }
  return (
    <main>
      <Select
        isMulti
        onChange={setfilterSettings}
        options={keys.map((filterElement) => {
          return {
            value: filterElement,
            label: filterElement.toUpperCase()
          }
        })} />
      { }
      <div>
        <h3>Filtros Activos</h3>
        {filterSettings.map(el => <p>{el.value}</p>)}
      </div>
      <hr />
      <ul>
        {
          chooseToExport()
        }
      </ul>
    </main>
  )
}

export default App
