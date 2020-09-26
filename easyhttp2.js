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
        const resData = await resonse.json();
        return resData;
        
        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //         .then(res => res.json())
                
        //         .then(data => resolve(data))
                 
        //         .catch(err => reject(err));
        // });
    }
    //Make HTTP POST Request
    post(url, data) { 
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                
                headers: {
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                
                .then(data => resolve(data))
                 
                .catch(err => reject(err));
        });
    }


 
// Make an HTTP PUT Request
put(url, data) { 
    
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            
            .then(data => resolve(data))
             
            .catch(err => reject(err));
    });
    }

    // Make an HTTP DELETE Request  
    delete(url) { 
        
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
               
                .then(() => resolve('Resource Deleted...'))
                 
                .catch(err => reject(err));
        });
        }
    

}
