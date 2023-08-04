import { getFirestore,doc,setDoc, projectFirestore } from "./config";
const district_tables=["Gangtok","Mangan","Pakyong","Namchi","Soreng"]

export default async function addData(collection,id,data)
{
    let result = null; 
    let error = null;
    console.log(data)
    try {
        for(x of district_tables)
        {
            const docRef = doc(db, x, data["voter_id"]);

        // Get a document, forcing the SDK to fetch from the offline cache.
        try {
            const doc = await getDocFromCache(docRef);

             // Document was found in the cache. If no cached document exists,
            // an error will be returned to the 'catch' block below.
            error=doc
            
            }      
         catch (e) {
                
            console.log("Yay")
        }
        }

        
         if (data['age']< 18)
        {
            error= "You are less than 18 years old "
        }

        else{
        result = await setDoc(doc(projectFirestore,collection,id),data,{
            merge:true
        });
    }
    }
    catch(e)
    {
        error = e
    }

    return {result,error};
}
