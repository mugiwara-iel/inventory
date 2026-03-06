//SQL
const connection=require('../config/db');

//Get all products
exports.getAllProduct=(req,res)=>{
    connection.query('SELECT * FROM inventory', (err,rows,fields)=>{
        if(err) throw err;
            res.json(rows);
    });
};

//Search a user by id
//CRUD - Read
exports.getProductById=(req,res)=>{
    const id=req.params.id;
    
    connection.query('SELECT * FROM inventory WHERE id=?', [id], (err,rows,fields)=>{
        if(err) throw err;
        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json({message: 'Product not found'});
    });
};

//Create a new product
//CRUD - Create
exports.createProduct=(req,res)=>{
    const {productName,category,stockCount,locationCode,lastUpdated}=req.body;
    connection.query('INSERT INTO inventory (productName, category, stockCount, locationCode,lastUpdated) VALUES (?,?,?,?,?)', [productName,category,stockCount,locationCode,lastUpdated],(err,result)=>{
        if(err) throw err;
        res.json({message:'Product created successfully', userId:result.insertId})
    })
}



