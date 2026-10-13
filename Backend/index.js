import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDb from './connectDb.js';
import { LoginUsers } from "./LoginSchema.js";
import { SignupUsers } from "./SignupSchema.js";
import {Cart} from "./cartSchema.js";
import { Wishlist } from "./WishlistSchema.js";
import {Order} from './orderSchema.js';
const app= express();
const PORT = 4200;

const urlencoded=bodyParser.urlencoded({extended:true})
app.use(express.json());
app.use(cors());

app.post('/Login',urlencoded,async(req,res)=>{      
    const{email,loginPassword}=req.body;
    console.log(req.body);
     connectDb();
    console.log(email+loginPassword)
    let dbuser = await LoginUsers.findOne({email});

    if(!dbuser)
    {   
    const users=new LoginUsers({
        email,
        loginPassword
    });
      await users.save(); 
    }
    
    if(dbuser.loginPassword !== loginPassword)
    {
        return res.json("invaild password");

    }
  
    res.json("login successfull!");

    // const response=await LoginUsers.find();
    //  res.json(response);
    
})
app.post('/Registration',urlencoded,async(req,res)=>{       
    const{Fname,Lname,signupPassword,confirmPassword,phoneNo,address}=req.body;
    console.log(req.body);
     connectDb();
    console.log(Fname+Lname+signupPassword+confirmPassword+phoneNo+address)
    const users=new SignupUsers({
        Fname,Lname,signupPassword,confirmPassword,phoneNo,address
    });
    await users.save();
    const response=await SignupUsers.find();
     res.json(users);
    
});

app.get('/user/:id',async(req,res)=>{
  const {id}= req.params;
  connectDb();
  const user =  await SignupUsers.findById(id);
  res.json(user);
})


app.post('/addToCart', urlencoded,async(req,res)=>{
    const { email, id, title, quantity, image, star, reviews, prevPrice, newPrice, company, category, sustainability } = req.body;
    try {
        // Find cart for this user
        connectDb();
        let cart = await Cart.findOne({ email });
        const newProduct = { id, title, quantity, image, star, reviews, prevPrice, newPrice, company, category, sustainability };

        if (cart) {
            // Check if product exists in cart
            const existingIndex = cart.products.findIndex(p => p.id === id);

            if (existingIndex > -1) {
                return res.json("Product already added to cart")
              } 
            else {
                cart.products.push({...newProduct});
              }
              await cart.save();
              return res.json("Product added to cart")
            } else {
              // Create new cart for user
              cart = new Cart({
                email,
                products: [newProduct],
              });
              await cart.save();
              return res.json("Product  added to cart")
            }
            res.json("data added");
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to add product to cart" });
          }
 });


app.get('/Cart', async (req, res) => {
    const  email = req.query.email;
    console.log(email);
    try {
      connectDb();
      const cart = await Cart.findOne({email});
      console.log(cart.products)
      res.json(cart.products);
      
    } catch (err) {
      res.status(500).json({ message: 'no data for fetching cart' });
    }
  });
 app.post('/addToWishlist', urlencoded,async(req,res)=>{
    const { email, id, title, quantity, image, star, reviews, prevPrice, newPrice, company, category, sustainability } = req.body;
    try {
       
        connectDb();
        let wishlist = await Wishlist.findOne({ email });
        const newProduct = { id, title, quantity, image, star, reviews, prevPrice, newPrice, company, category, sustainability };

        if (wishlist) {
            const existingIndex = wishlist.products.findIndex(p => p.id === id);

            if (existingIndex > -1) {
                return res.json("Product already added to wishlist")
              } 
            else {
              wishlist.products.push({...newProduct});
              }
              await wishlist.save();
              return res.json("Product added to wishlist")
            } else {
              wishlist = new Wishlist({
                email,
                products: [newProduct],
              });
              await wishlist.save();
              return res.json("Product  added to wishlist")
            }
           
        } catch (err) {
            console.error(err);
            res.json( "Failed to add product to wishlist" );
          }
 });
app.get('/wishlist', async (req, res) => {
    const  email = req.query.email;
    console.log(email);
    try {
      connectDb();
      const wishlist = await Wishlist.findOne({email});
      console.log( wishlist.products)
      res.json( wishlist.products);
      
    } catch (err) {
      res.status(500).json({ message: 'no data in wishlist' });
    }
  });


  app.post('/cartclear',urlencoded,async(req,res)=>{
    try{
      const{email} = req.body;
      connectDb();
      // const cart = await Cart.findOne({email});
      if(!email) return res.status(400).json({error:'email is required!'});
      await Cart.updateOne({email:email},{$set :{products:[]}});
      return res.json("order placed successfully and cart cleared!");
    }catch(error)
    {
      console.log(error);
    }
  });

  app.post('/orderplaced',urlencoded,async(req,res)=>{
    try{
      const { email,fullName,phone,address,cart}=  req.body;
      const products = cart.map(item =>(
        {name:item.title,
          price:item.newPrice
        }
      )
  )
  const newOrder = new Order({
    email,fullName,phone,address,products
  });

  connectDb();
  await newOrder.save();
  return res.json("order saved successfully");
  }
  catch(error)
  {
    console.log(error);
  }

});

app.listen(PORT ,()=>{
    console.log("Server is running");
    console.log(`http://localhost:${PORT}`);
});