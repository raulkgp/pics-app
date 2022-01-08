import axios from 'axios';

export default axios.create( {
    baseURL : 'https://api.unsplash.com/',
    headers : {
        Authorization: 'Client-ID gACdn6WOEWVBZb0qUUqB54XVMj-DlsXoHJVRkfeHi_I' 
    }
})