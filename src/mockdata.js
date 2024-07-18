const vehicleListings = [
    {
      product_name: "Toyota Camry",
      price: "1200000",
      place: "New York",
      year_of_registration: "2018",
      kilometor_run: "30000",
      small_description: "Well-maintained sedan",
      brief_description: "This Toyota Camry is in excellent condition with low mileage and regular maintenance.",
      imageid: "https://cdni.autocarindia.com/ExtraImages/20210406124218_Toyota_Camry_LT_1.jpg"
    },
    {
      product_name: "Honda Civic",
      price: "1100000",
      place: "Los Angeles",
      year_of_registration: "2017",
      kilometor_run: "45000",
      small_description: "Reliable and fuel-efficient",
      brief_description: "A reliable Honda Civic with great fuel efficiency and a comfortable ride.",
      imageid: "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/02/13/73961-honda-civic1.JPG?itok=RRZyBgT4"
    },
    {
      product_name: "Ford Mustang",
      price: "2500000",
      place: "Chicago",
      year_of_registration: "2019",
      kilometor_run: "15000",
      small_description: "Sporty and powerful",
      brief_description: "This Ford Mustang offers thrilling performance with its powerful engine and sleek design.",
      imageid: "https://upload.wikimedia.org/wikipedia/commons/d/d1/2018_Ford_Mustang_GT_5.0.jpg"
    },
    {
      product_name: "Chevrolet Silverado",
      price: "2800000",
      place: "Houston",
      year_of_registration: "2020",
      kilometor_run: "20000",
      small_description: "Strong and durable",
      brief_description: "A robust Chevrolet Silverado with excellent towing capacity and modern features.",
      imageid: "https://www.usatoday.com/gcdn/-mm-/5299a862b74784a8523215276b45839d61388885/c=844-716-2442-1917/local/-/media/2015/02/12/USATODAY/USATODAY/635592971319418457-13-2015-Chevrolet-Silverado-1500-Custom-032.jpg"
    },
    {
      product_name: "Nissan Altima",
      price: "1300000",
      place: "Phoenix",
      year_of_registration: "2018",
      kilometor_run: "35000",
      small_description: "Smooth and comfortable",
      brief_description: "This Nissan Altima provides a smooth and comfortable driving experience with advanced safety features.",
      imageid: "https://hips.hearstapps.com/hmg-prod/images/2019-nissan-altima-12-source-1200x699-1562955653.jpg?crop=0.760xw:0.798xh;0.218xw,0&resize=980:*"
    },
    {
      product_name: "BMW 3 Series",
      price: "2700000",
      place: "Philadelphia",
      year_of_registration: "2019",
      kilometor_run: "25000",
      small_description: "Luxury and performance",
      brief_description: "A luxurious BMW 3 Series with impressive performance and top-notch technology.",
      imageid: "https://cdni.autocarindia.com/ExtraImages/20220518115449_BMW%203%20Series%20facelift%209.jpg"
    },
    {
      product_name: "Audi A4",
      price: "2900000",
      place: "San Antonio",
      year_of_registration: "2020",
      kilometor_run: "18000",
      small_description: "Elegant and efficient",
      brief_description: "An elegant Audi A4 offering a perfect balance of efficiency and sophisticated design.",
      imageid: "https://hips.hearstapps.com/hmg-prod/images/2024-audi-a4-103-64aefe768be8e.jpg?crop=0.395xw:0.296xh;0.304xw,0.375xh&resize=1200:*"
    },
    {
      product_name: "Jeep Wrangler",
      price: "3200000",
      place: "San Diego",
      year_of_registration: "2021",
      kilometor_run: "10000",
      small_description: "Adventure-ready",
      brief_description: "This Jeep Wrangler is ready for any adventure with its rugged build and off-road capabilities.",
      imageid: "https://www.financialexpress.com/wp-content/uploads/2023/04/2024-Jeep-Wrangler-3.jpg"
    },
    {
      product_name: "Hyundai Elantra",
      price: "1400000",
      place: "Dallas",
      year_of_registration: "2018",
      kilometor_run: "40000",
      small_description: "Affordable and reliable",
      brief_description: "A reliable Hyundai Elantra offering great value with its affordable price and reliable performance.",
      imageid: "https://static01.nyt.com/images/2016/04/27/automobiles/autoreviews/driven-hyundai-elantra/driven-hyundai-elantra-superJumbo.jpg"
    },
    {
      product_name: "Kia Optima",
      price: "1600000",
      place: "San Jose",
      year_of_registration: "2019",
      kilometor_run: "30000",
      small_description: "Stylish and efficient",
      brief_description: "This Kia Optima combines style and efficiency with its sleek design and fuel-efficient engine.",
      imageid: "https://npr.brightspotcdn.com/legacy/sites/wuwm/files/201904/optima1.jpg"
    },
    {
      product_name: "Mercedes-Benz C-Class",
      price: "3500000",
      place: "Austin",
      year_of_registration: "2020",
      kilometor_run: "22000",
      small_description: "Luxury and comfort",
      brief_description: "A luxurious Mercedes-Benz C-Class offering unmatched comfort and advanced technology.",
      imageid: "https://img.indianautosblog.com/2022/11/10/2022-23-mercedes-benz-c-class-front-left-28b0.jpg"
    },
    {
      product_name: "Volkswagen Jetta",
      price: "1500000",
      place: "Jacksonville",
      year_of_registration: "2018",
      kilometor_run: "38000",
      small_description: "Reliable and efficient",
      brief_description: "This Volkswagen Jetta is known for its reliability and fuel efficiency, making it a great daily driver.",
      imageid: "https://stimg2.cardekho.com/images/roadTestimages/userimages/307/Volkswagen.jpg?tr=w-360?tr=w-300"
    },
    {
      product_name: "Mazda CX-5",
      price: "2200000",
      place: "Fort Worth",
      year_of_registration: "2019",
      kilometor_run: "27000",
      small_description: "Versatile and stylish",
      brief_description: "A versatile Mazda CX-5 offering a stylish design and practical features for all your needs.",
      imageid: "https://www.usnews.com/object/image/0000018d-9eee-d45f-a3ad-beff0d3d0000/24-mazda-cx-5-ext1.jpg?update-time=1707768554670&size=responsive640"
    },
    {
      product_name: "Subaru Outback",
      price: "2500000",
      place: "Columbus",
      year_of_registration: "2020",
      kilometor_run: "21000",
      small_description: "Adventure-ready",
      brief_description: "This Subaru Outback is perfect for outdoor adventures with its all-wheel drive and spacious interior.",
      imageid: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/subaru-outback-review-2023-01-cornering-front.jpg?itok=3hMVk59q"
    },
    {
      product_name: "Tesla Model 3",
      price: "4000000",
      place: "Charlotte",
      year_of_registration: "2021",
      kilometor_run: "12000",
      small_description: "Electric and innovative",
      brief_description: "An innovative Tesla Model 3 with cutting-edge technology and impressive electric range.",
      imageid: "https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg"
    },
    {
      product_name: "Volvo XC60",
      price: "3700000",
      place: "San Francisco",
      year_of_registration: "2020",
      kilometor_run: "19000",
      small_description: "Safe and luxurious",
      brief_description: "A luxurious Volvo XC60 offering top-notch safety features and a premium driving experience.",
      imageid: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fb48cc922-64de-11ed-99af-970c46e2b975.jpg?crop=2808%2C1579%2C524%2C1328&resize=1200"
    },
    {
      product_name: "Lexus RX",
      price: "3800000",
      place: "Indianapolis",
      year_of_registration: "2021",
      kilometor_run: "16000",
      small_description: "Luxury SUV",
      brief_description: "This Lexus RX provides a luxurious SUV experience with a smooth ride and advanced technology.",
      imageid: "https://www.lexusindia.co.in/content/dam/lexus-v3-blueprint/models/suv/rx/rx-500h-fsport-performance/my23/gallery/unused/gallery-ext-03-d.jpg"
    },
    {
      product_name: "Chevrolet Equinox",
      price: "180000",
      place: "Seattle",
      year_of_registration: "2018",
      kilometor_run: "35000",
      small_description: "Compact and versatile",
      brief_description: "A compact Chevrolet Equinox offering versatility and modern features for everyday use.",
      imageid: "https://www.cnet.com/a/img/resize/7184b8f215b2af308278e6fc26712b55bd544272/hub/2019/04/25/d417947b-fdea-4285-9f3a-87d8fbdfa25a/2019-chevrolet-equinox-ogi.jpg?auto=webp&fit=crop&height=900&width=1200"
    },
    {
      product_name: "Toyota RAV4",
      price: "2400000",
      place: "Denver",
      year_of_registration: "2019",
      kilometor_run: "26000",
      small_description: "Reliable and spacious",
      brief_description: "This Toyota RAV4 is known for its reliability and spacious interior, perfect for families.",
      imageid: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1699892239/Toyota%20RAV4-7.jpg"
    },
    {
      product_name: "Ford F-150",
      price: "3000000",
      place: "Washington",
      year_of_registration: "2020",
      kilometor_run: "24000",
      small_description: "Powerful and durable",
      brief_description: "A powerful Ford F-150 offering excellent performance and durability for all your needs.",
      imageid: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/48389/left-front-three-quarter1.jpeg"
    }
  ];
  
  export default vehicleListings;
  