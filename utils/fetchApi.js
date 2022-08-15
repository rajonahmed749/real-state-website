import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key':'bef9dab5c5msh3a4dbc44a547a4fp1bbf06jsna5de2a045911'
            
        }
    })
    return data;
}