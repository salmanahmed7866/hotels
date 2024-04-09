const mongoos = require('mongoose')

const menuItemSchema = new mongoos.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: [String],
        enum: ['sweet', 'tasty', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }

})

const MenuItem=mongoos.model('MenuItem',menuItemSchema);
module.exports=MenuItem;
