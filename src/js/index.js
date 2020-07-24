import '../styles/styles.scss'
import axios from 'axios'

const data = {
   "amount": 15000,
	"installments": 3,
	"mdr": 4
}

const api = axios.create({
   baseURL: 'https://hash-front-test.herokuapp.com/',
})

async function connect(){
   try{
      const requestedDatas = await api.post( 'https://hash-front-test.herokuapp.com/', data, {
         headers: {
            header: 'content-type: application/json',
         }
      })

      console.log(requestedDatas.data)

   }catch(err){
      alert('something wrong happened')
   }
}

connect()