import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer NS00zrjwH8I82UG44h6CqHKoB-qiYD9aX2e9o5OhZjUwGHEN1NY34Oz1cqy_nf9hxo1xGp_F2T5rnhB0tNfabiY5py-OJDa3q94ZeQ_CTe83c-DFNm08nKLRu4H6XnYx'
    }
});
