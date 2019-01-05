import axios from 'axios';

//customised instance for axios 
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 96dfe8eecd39c471b1e47949aeb4731b59ffe7330c4444d584956e19b5cb5081"
    }


});

