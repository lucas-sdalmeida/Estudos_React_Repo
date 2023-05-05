async function apiRequest(url='', optionsObj=null, errorMsg=null) {
    try {
        const response = await fetch(url, optionsObj);
        
        if (!response.ok)
            throw new Error('Por favor, recarregue a página!'); 
    }
    catch(error) {
        errorMsg = error.message;
    }
    finally {
        return errorMsg;
    }
}

export default apiRequest;
