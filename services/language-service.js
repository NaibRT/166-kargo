
export default function langService(){

    const setLocale = (locale)=>{
        
        if(locale){
            localStorage.setItem('Lang',locale)
        }else if(!localStorage.getItem('Lang')){
            localStorage.setItem('Lang','az')
        } 
    }
    const getLocale = ()=>{
     
       const lang = localStorage.getItem('Lang')

       return lang
    }
    
    return{
        setLocale,
        getLocale
    }

}