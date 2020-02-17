const getFotos = async (setFotos) => {    
    try {
      const fotosHTTP = await fetch('http://10.0.2.2:3030/feed');
      const fotosJson = await fotosHTTP.json();   
      
      setFotos(fotosJson);
    }  
    catch(error) { console.log(error) }
  };  

  export default getFotos;