import Axios from 'axios';

class ApiCaller {
  async getBrands() {
    Axios.get('http://localhost:3000/brand.json').then(response => {
      console.log(response.data);
    });
  }
}

export default ApiCaller;
