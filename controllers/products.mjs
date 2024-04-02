import Product from "../models/product.mjs";

export const getAllProducts = async (req, res) => {

    const { company, name, featured, sort } = req.query; //destructuring  assignment to grab company query parameter IF it exists
    const queryObject = {};  //even if the object is a const, its properties can be reassigned

    if(company)        
    {
        queryObject.company = company;   //assign the company key of the object queryObject to the company name searched by the user
    }

    if(featured)
    {
        queryObject.featured = featured;
    }

    if(name)        
    {
        queryObject.name = {$regex : name , $options : 'i'};   //Brings in case insensitivity; if u search iphone, we get data having iphone10 as well
    }

    let page = req.query.page || 1;
    let limit = req.query.limit || 3; 

    let skip = (page-1) * limit;

    let apiData = Product.find(queryObject).skip(skip).limit(limit);  


    if(sort)
    {
        //console.log(typeof sort);
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);   //basically is sort query exists, code wont go to the next lines and this line would render the data
    }

    const myData = await apiData;  //find({}) means all the data

    //console.log(queryObject);
    //console.log(req.query);
    res.status(200).json({myData, nbHits : myData.length});
};

export const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query);  //find({}) means all the data
    res.status(200).json({myData});
    //res.status(200).json({msg: "I am getAllProductsTesting"});
};

//export {getAllProducts, getAllProductsTesting};
