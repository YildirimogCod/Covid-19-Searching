import { useState,useEffect} from 'react'
import React from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [veri,setVeri] = useState("");
  const [tarih,setTarih] = useState("");
  
  //Anlık bir değişim istediğimiz için useEffect yapısını kullanıyoruz.
  useEffect(()=> {
    axios.get('https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json')
    .then(res=>setVeri(res.data[tarih])).catch(err=>console.log(err))
  },[veri,tarih])


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className='text-center text-white display-2'>TÜRKİYE COVID-19 ARAMA MOTORU</h2>
            <input className='form-control' type="text" placeholder='GG/AA/YY' onChange={(e)=>setTarih(e.target.value)}/>
            <table className="table table-striped text-white">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Test Sayısı</th>
                    <th scope="col">Hasta Sayısı</th>
                    <th scope="col">Vefat Sayısı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-white'>
                    <th scope="row" className={veri===undefined ? 'bg-danger' : 'bg-success'}>{veri===undefined ? "Veri bekleniyor" : veri.date}</th>
                    <td className={veri===undefined ? 'bg-danger' : 'bg-success'}>{veri===undefined ? "Veri bekleniyor" : veri.totalTests}</td>
                    <td className={veri===undefined ? 'bg-danger' : 'bg-success'}>{veri===undefined ? "Veri bekleniyor" : veri.totalPatients}</td>
                    <td className={veri===undefined ? 'bg-danger' : 'bg-success'}>{veri===undefined ? "Veri bekleniyor" : veri.totalDeaths}</td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
