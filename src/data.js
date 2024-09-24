const data = [
    // Electronics
    {
      "id": 1,
      "img": "https://cellbuddy.in/buddy/wp-content/uploads/2023/09/iphone-15-2.jpg",
      "name": "Smartphone",
      "price": 699.99,
      "category": "electronics"
    },
    {
      "id": 2,
      "img": "https://www.dpreview.com/files/p/articles/6269402639/canon_eosr8.jpeg",
      "name": "Camera",
      "price": 599.99,
      "category": "electronics"
    },
    {
      "id": 3,
      "img": "https://www.techtarget.com/rms/onlineimages/hp_elitebook_mobile.jpg",
      "name": "Laptop",
      "price": 999.99,
      "category": "electronics"
    },
    {
      "id": 4,
      "img": "https://avstore.in/cdn/shop/files/1.AVStore-Bose-QuietComfort-45-Noise-Front-View-Hero.jpg?v=1685695623",
      "name": "Wireless Headphones",
      "price": 699.99,
      "category": "electronics"
    },
    {
      "id": 5,
      "img": "https://regen.pk/cdn/shop/products/REGEN-iPad-Pro-12.9-2021-SG.jpg?v=1674906883",
      "name": "Tablet",
      "price": 549.99,
      "category": "electronics"
    },
    
    // Women's Clothing
    {
      "id": 6,
      "img": "https://5.imimg.com/data5/PI/OP/MY-45315691/ladies-blazer.jpg",
      "name": "Women's Jacket",
      "price": 599.99,
      "category": "women"
    },
    {
      "id": 7,
      "img": "https://www.alamodelabel.in/cdn/shop/files/0B2A436C-FBCF-4074-8E90-3BEA98FCB7B2_600x.jpg?v=1717503287",
      "name": "Women's Dress",
      "price": 599.99,
      "category": "women"
    },
    {
      "id": 8,
      "img": "https://5.imimg.com/data5/SELLER/Default/2022/10/CS/AR/OM/157706429/hercraft-women-handbag-5-color--500x500.jpg",
      "name": "Women's Handbag",
      "price": 549.99,
      "category": "women"
    },
    {
      "id": 9,
      "img": "https://i0.wp.com/seematti.com/wp-content/uploads/2024/07/13705275-5.jpg?fit=1280%2C1920&ssl=1",
      "name": "Women's Saree",
      "price": 519.99,
      "category": "women"
    },
    {
      "id": 10,
      "img": "https://5.imimg.com/data5/SELLER/Default/2021/2/OF/HF/UY/34556/new-product-500x500.jpeg",
      "name": "Women's Skirt",
      "price": 509.99,
      "category": "women"
    },
  
    // Jewelry
    {
      "id": 11,
      "img": "https://justintime.in/cdn/shop/products/DZ4590.jpg?v=1682019874",
      "name": "Gold Watch",
      "price": 599.99,
      "category": "jewelry"
    },
    {
      "id": 12,
      "img": "https://paksha.in/cdn/shop/files/CCE0663X_1600x.jpg?v=1707469414",
      "name": "Silver Earrings",
      "price": 509.99,
      "category": "jewelry"
    },
    {
      "id": 13,
      "img": "https://www.joyalukkas.in/media/catalog/product/d/s/ds1400026693_1.jpg?width=800",
      "name": "Gold Necklace",
      "price": 599.99,
      "category": "jewelry"
    },
    {
      "id": 14,
      "img": "https://jewelrydesigns.com/wp-content/uploads/ER1-Shop-Diamond-Engagement-Rings-1080X1080.jpg",
      "name": "Diamond Ring",
      "price": 999.99,
      "category": "jewelry"
    },
    {
      "id": 15,
      "img": "https://cdn.shopaccino.com/jewellery/categories/am001wgp-717609_s.jpg",
      "name": "Gemstone Ring",
      "price": 559.99,
      "category": "jewelry"
    },
  
    // Men's Clothing
    {
      "id": 16,
      "img": "https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/D/E/138730_1669993731.jpg",
      "name": "Men's Hoodie",
      "price": 599.99,
      "category": "men"
    },
    {
      "id": 17,
      "img": "https://teestheday.com/wp-content/uploads/2020/03/Black-min-8.jpg",
      "name": "Men's T-Shirt",
      "price": 509.99,
      "category": "men"
    },
    {
      "id": 18,
      "img": "https://m.media-amazon.com/images/I/41LQtEPc8iL.jpg",
      "name": "Men's Sneakers",
      "price": 699.99,
      "category": "men"
    },
    {
      "id": 19,
      "img": "https://5.imimg.com/data5/SELLER/Default/2022/2/WC/AP/UD/148088711/61nghbz2z8l-ux569-.jpg",
      "name": "Men's Jacket",
      "price": 629.99,
      "category": "men"
    },
    {
      "id": 20,
      "img": "https://5.imimg.com/data5/ANDROID/Default/2022/8/TO/AX/KE/53905424/product-jpeg-500x500.jpg",
      "name": "Men's Jeans",
      "price": 509.99,
      "category": "men"
    },
  
    // More Electronics
    {
      "id": 21,
      "img": "https://firemallonline.com/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/4/7/4734927345d2f563db0f44.jpg",
      "name": "Bluetooth Speaker",
      "price": 1599.99,
      "category": "electronics"
    },
    {
      "id": 22,
      "img": "https://www.khoslaonline.com/wp-content/uploads/2023/07/FIRE-BOLTT-SMART-WATCH-BSW018-GREYSILVER-GREY-1.79.png",
      "name": "Smartwatch",
      "price": 1999.99,
      "category": "electronics"
    },
    {
      "id": 23,
      "img": "https://www.phoneprice.co.ke/wp-content/uploads/2024/01/PlayStation-5-Slim-Standard-Console1.jpg",
      "name": "Game Console",
      "price": 699.99,
      "category": "electronics"
    },
    {
      "id": 24,
      "img": "https://vasanthandco.in/images/productimages/17cf1a9-70layer1_9b7cc11c-0360-4d50-bc9c-2a7b7bd6e057_600x.jpg",
      "name": "4K TV",
      "price": 1599.99,
      "category": "electronics"
    },
    {
      "id": 25,
      "img": "https://www.dlink.com.vn/wp-content/uploads/2020/06/DIR-2150.jpg",
      "name": "Wireless Router",
      "price": 599.99,
      "category": "electronics"
    },
  
    // More Women's Clothing
    {
      "id": 26,
      "img": "https://m.media-amazon.com/images/I/61ZWNAsFdoL._SY695_.jpg",
      "name": "Women's Sneakers",
      "price": 549.99,
      "category": "women"
    },
    {
      "id": 27,
      "img": "https://i.ebayimg.com/images/g/6KcAAOSw5c5ki8R2/s-l400.jpg",
      "name": "Women's Pants",
      "price": 599.99,
      "category": "women"
    },
    {
      "id": 28,
      "img": "https://i.ebayimg.com/images/g/b8gAAOSw~9xlt0~L/s-l400.jpg",
      "name": "Women's Cardigan",
      "price": 509.99,
      "category": "women"
    },
    {
      "id": 29,
      "img": "https://5.imimg.com/data5/ANDROID/Default/2022/9/JX/ET/HT/156750740/product-jpeg-500x500.jpg",
      "name": "Women's Leggings",
      "price": 519.99,
      "category": "women"
    },
    {
      "id": 30,
      "img": "https://assets.ajio.com/medias/sys_master/root/20231202/Owc5/656a3e34afa4cf41f5af18dc/-473Wx593H-466845743-white-MODEL.jpg",
      "name": "Women's Sweater",
      "price": 529.99,
      "category": "women"
    },
  
    // More Jewelry
    {
      "id": 31,
      "img": "https://kinclimg9.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BISA0255N23_YAA18PRWHXXXXXXXX_ABCD00-PICS-00003-1024-9327.png",
      "name": "Pearl Necklace",
      "price": 599.99,
      "category": "jewelry"
    },
    {
      "id": 32,
      "img": "https://images.jdmagicbox.com/quickquotes/images_main/modern-gold-earring-purity-22k-2221258555-r4ov6c6d.jpg",
      "name": "Gold Earrings",
      "price": 579.99,
      "category": "jewelry"
    },
    {
      "id": 33,
      "img": "https://images-cdn.ubuy.co.id/63b8ca2714f4f73504768e48-baronyka-handmade-thick-silver-bracelet.jpg",
      "name": "Silver Bracelet",
      "price": 509.99,
      "category": "jewelry"
    },
    {
      "id": 34,
      "img": "https://images-cdn.ubuy.co.in/634d3aa1c2dd12229d1af8a2-accents-kingdom-2-8mm-titanium.jpg",
      "name": "Titanium Necklace",
      "price": 699.99,
      "category": "jewelry"
    },
    {
      "id": 35,
      "img": "https://5.imimg.com/data5/WE/OA/VF/SELLER-38574030/men-s-silver-leather-bracelet.jpg",
      "name": "Leather Bracelet",
      "price": 599.99,
      "category": "jewelry"
    },
  
    // Final Electronics
    {
      "id": 36,
      "img": "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/08/99dc580e-a135-4f34-9c58-e619b078a21d.jpg",
      "name": "Buds",
      "price": 699.99,
      "category": "electronics"
    },
    {
      "id": 37,
      "img": "https://images-cdn.ubuy.co.in/633b12488d2edc65997f4c20-smart-watch-bluetooth-smartwatch-touch.jpg",
      "name": "Smartwatch",
      "price": 549.99,
      "category": "electronics"
    },
    {
      "id": 38,
      "img": "https://images-cdn.ubuy.co.in/64f572af95ca090ca377b2d5-onn-10-4-tablet-pro-android-13-64.jpg",
      "name": "Tablet",
      "price": 549.99,
      "category": "electronics"
    },
    {
      "id": 39,
      "img": "https://cdn.mos.cms.futurecdn.net/zpcbWdeixPCoXSrCpefAxb-320-80.jpg",
      "name": "Bluetooth Speaker",
      "price": 599.99,
      "category": "electronics"
    },
    {
      "id": 40,
      "img": "https://image.made-in-china.com/202f0j00iUJqkFYgEcbo/80-85-100-120-Inch-4K-UHD-Curved-Flat-Smart-LED-OLED-TV-HDTV.jpg",
      "name": "4K TV",
      "price": 999.99,
      "category": "electronics"
    }
];


export default data;