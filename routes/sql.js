const express = require('express')
const router = express.Router()

const customers = require('./customer')

// Extracting arrays from the customers object
const { customerDetailsArray, paymentsDetailArray, productDetailsArray } = customers;

//Route Handlers

router.get("/customers", async(req,res)=>{
    res.render('customers', { title: 'Customers', customerDetailsArray });
})

router.get("/products", (req, res) => {
    res.render("products", { title: 'Products', productDetailsArray });
  });   
  
router.get("/payments", async (req, res) => {
    res.render("payments", { title: 'Payments', paymentsDetailArray });
  });

module.exports = router
