/** 
 * EasyHTTP Library
 * Libray for making HTTP requests
 * 
 * @version 3.0.0
 * @author Patrick Nyeko
 * @license MIT
 * 
 * **/

class EasyHTTP{ 

    // Make an HTTP GET Request
    async get(url) {
        const resonse = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //Make HTTP POST Request
    async post(url, data) { 
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }


// Make an HTTP PUT Request
async put(url, data) { 
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;   
    }

    // Make an HTTP DELETE Request  
    async delete(url) { 
        
    const response = await fetch(url, {
        method: 'DELETE',
        
        headers: {
            'Content-type': 'application/json'
        }
    })

    const resData = await 'Resource Deleted...';
    return resData;  
    }
    

}
