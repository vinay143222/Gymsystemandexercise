export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fb1459ada6mshe205b1f3769f96ap1e517ajsn0dae85c5a395',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }

}
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fb1459ada6mshe205b1f3769f96ap1e517ajsn0dae85c5a395',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};
export const fetchdata = async(url, options) => {
    const response = await fetch(url, options);
    //if we dont use axios we have to extract the data in the form of json
    const data = await response.json();
    return data;
}