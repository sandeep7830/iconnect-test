const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const { find } = require('../model/Data');
const Data = require('../model/Data');


router.post('/',[
    check('companyname','enter the car nameor model').not().isEmpty(),
    check('description','enter the description').not().isEmpty(),
    check('city','enter the city').not().isEmpty(),
    check('state','enter the state').not().isEmpty(),
    check('email','enter the email').not().isEmpty(),
    check('number','enter the number').not().isEmpty(),
    ],async(req,res)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
      
        try {
            const matchemail= await Data.findOne({email:req.body.email});
            if (matchemail) {
                return res.status(400).json({errors:[{msg:'email already existed'}]});
            }
            
         const data = new Data({
             companyname:req.body.companyname,
             description:req.body.description,
             city:req.body.city,
             state:req.body.state,
             email:req.body.email,
             number:req.body.number,
         })

        await data.save();

         res.send(data);

        } catch (error) {
            console.log(error);
            res.status(400).send('error in the server')
        }


    }
    );
    

    router.get('/',async(req,res)=>{
        try {
            let data= await Data.find();
            res.send(data);
        } catch (error) {
            console.log(error);
            res.status(400).send('sever error')
        } 
        })  

          
        router.get('/name',[
            check('companyname','enter the company name').not().isEmpty(),
            ],async(req,res)=>{
        
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                  return res.status(400).json({ errors: errors.array() });
                }
              
                try {
                    const matchname= await Data.find({companyname:req.body.companyname});
                    if (!matchname) {
                        return res.status(404).json({errors:[{msg:'name not found'}]});
                    };

                    res.send(matchname);
                    
              
             
        
               
        
                } catch (error) {
                    console.log(error);
                    res.status(400).send('error in the server')
                }
        
            }
            );

    module.exports=router;