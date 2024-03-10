const mongoose = require('mongoose');


const productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    }
}, );

// Define schema for Product Inventory
const productInventorySchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
     createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    }
});

// Define schema for Product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory', // Reference to the Product Category model
        required: true
    },
    inventory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductInventory', // Reference to the Product Category model
        required: true
    },
    discount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discount', // Reference to the Product Category model
        required: true
    },
    price: {
        type: Number,
        required: true
    },
     createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    }
});

// Define schema for Discount
const discountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    discountPercent: {
        type: Number,
        required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    }
});

// Create models based on the schemas
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Product = mongoose.model('Product', productSchema);
const Discount = mongoose.model('Discount', discountSchema);

module.exports = { ProductCategory, ProductInventory, Product, Discount };
