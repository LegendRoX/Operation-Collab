// Customer details array
const customerDetailsArray = [
    { id: 1, firstName: "John", lastName: "Doe", shippingAddress: "123 Main Street", postalCode: "10001" },
    { id: 2, firstName: "Alice", lastName: "Smith", shippingAddress: "456 Oak Avenue", postalCode: "20002" },
    { id: 3, firstName: "Bob", lastName: "Johnson", shippingAddress: "789 Pine Lane", postalCode: "30003" },
    { id: 4, firstName: "Emily", lastName: "Williams", shippingAddress: "101 Maple Drive", postalCode: "40004" },
    { id: 5, firstName: "David", lastName: "Jones", shippingAddress: "202 Cedar Road", postalCode: "50005" },
    { id: 6, firstName: "Sophia", lastName: "Brown", shippingAddress: "303 Birch Street", postalCode: "60006" },
    { id: 7, firstName: "Michael", lastName: "Miller", shippingAddress: "404 Elm Court", postalCode: "70007" },
    { id: 8, firstName: "Olivia", lastName: "Davis", shippingAddress: "505 Pineapple Lane", postalCode: "80008" },
    { id: 9, firstName: "Ethan", lastName: "Garcia", shippingAddress: "606 Oakwood Avenue", postalCode: "90009" },
    { id: 10, firstName: "Ava", lastName: "Taylor", shippingAddress: "707 Walnut Drive", postalCode: "10101" },
    { id: 11, firstName: "Daniel", lastName: "Wilson", shippingAddress: "808 Maple Road", postalCode: "20202" },
    { id: 12, firstName: "Sophie", lastName: "Smith", shippingAddress: "909 Cedar Street", postalCode: "30303" },
    { id: 13, firstName: "William", lastName: "Jones", shippingAddress: "121 Pine Lane", postalCode: "40404" },
    { id: 14, firstName: "Emma", lastName: "Davis", shippingAddress: "131 Oak Avenue", postalCode: "50505" },
    { id: 15, firstName: "Liam", lastName: "Garcia", shippingAddress: "141 Birch Court", postalCode: "60606" },
    { id: 16, firstName: "Mia", lastName: "Taylor", shippingAddress: "151 Elm Drive", postalCode: "70707" },
    { id: 17, firstName: "Noah", lastName: "Wilson", shippingAddress: "161 Cedar Road", postalCode: "80808" },
    { id: 18, firstName: "Isabella", lastName: "Brown", shippingAddress: "171 Oakwood Street", postalCode: "90909" },
    { id: 19, firstName: "Alexander", lastName: "Miller", shippingAddress: "181 Walnut Lane", postalCode: "12121" },
    { id: 20, firstName: "Grace", lastName: "Johnson", shippingAddress: "191 Maple Drive", postalCode: "23232" }
];

// Payments detail array
const paymentsDetailArray = [
    { id: 1, cardDetails: "4111 1111 1111 1111", fullName: "John Doe", expiryDate: "12/24", cvv: "123" },
    { id: 2, cardDetails: "5111 1111 1111 1111", fullName: "Alice Smith", expiryDate: "08/23", cvv: "456" },
    { id: 3, cardDetails: "6011 1111 1111 1111", fullName: "Bob Johnson", expiryDate: "05/22", cvv: "789" },
    { id: 4, cardDetails: "3711 1111 1111 1111", fullName: "Emily Williams", expiryDate: "11/25", cvv: "321" },
    { id: 5, cardDetails: "4511 1111 1111 1111", fullName: "David Jones", expiryDate: "09/26", cvv: "654" },
    { id: 6, cardDetails: "5411 1111 1111 1111", fullName: "Sophia Brown", expiryDate: "02/28", cvv: "987" },
    { id: 7, cardDetails: "6511 1111 1111 1111", fullName: "Michael Miller", expiryDate: "07/22", cvv: "234" },
    { id: 8, cardDetails: "3711 1111 1111 1111", fullName: "Olivia Davis", expiryDate: "03/23", cvv: "567" },
    { id: 9, cardDetails: "4811 1111 1111 1111", fullName: "Ethan Garcia", expiryDate: "06/24", cvv: "890" },
    { id: 10, cardDetails: "5511 1111 1111 1111", fullName: "Ava Taylor", expiryDate: "12/22", cvv: "123" },
    { id: 11, cardDetails: "4211 1111 1111 1111", fullName: "Daniel Wilson", expiryDate: "01/25", cvv: "234" },
    { id: 12, cardDetails: "3611 1111 1111 1111", fullName: "Sophie Smith", expiryDate: "09/23", cvv: "345" },
    { id: 13, cardDetails: "3411 1111 1111 1111", fullName: "William Jones", expiryDate: "04/24", cvv: "456" },
    { id: 14, cardDetails: "3011 1111 1111 1111", fullName: "Emma Davis", expiryDate: "11/26", cvv: "567" },
    { id: 15, cardDetails: "3811 1111 1111 1111", fullName: "Liam Garcia", expiryDate: "08/23", cvv: "678" },
    { id: 16, cardDetails: "4311 1111 1111 1111", fullName: "Mia Taylor", expiryDate: "02/25", cvv: "789" },
    { id: 17, cardDetails: "4911 1111 1111 1111", fullName: "Noah Wilson", expiryDate: "06/22", cvv: "890" },
    { id: 18, cardDetails: "5611 1111 1111 1111", fullName: "Isabella Brown", expiryDate: "12/24", cvv: "123" },
    { id: 19, cardDetails: "5911 1111 1111 1111", fullName: "Alexander Miller", expiryDate: "05/23", cvv: "234" },
    { id: 20, cardDetails: "3711 1111 1111 1111", fullName: "Grace Johnson", expiryDate: "10/22", cvv: "345" }
];

const productDetailsArray = [
    {
        name: "RoboAssistant X1",
        productDetails: "The RoboAssistant X1 is your ultimate personal assistant. With voice recognition, task automation, and a sleek design, it simplifies your daily life. Whether it's managing your schedule or answering queries, this robot is always ready to assist.",
        specifications: ["Voice Recognition", "Task Automation", "Sleek Design"],
        price: 1499.99,
        quantity: 25
    },
    {
        name: "DroneGuardian 500",
        productDetails: "Introducing the DroneGuardian 500, a surveillance drone for your property. Equipped with HD cameras, real-time streaming, and autonomous patrolling, it ensures the security of your premises from the sky.",
        specifications: ["HD Cameras", "Real-time Streaming", "Autonomous Patrolling"],
        price: 1999.99,
        quantity: 20
    },
    {
        name: "PetPal Bot",
        productDetails: "PetPal Bot is a robotic companion for your pets. With treat dispensing, interactive play, and a built-in camera for remote monitoring, it keeps your furry friends entertained and happy.",
        specifications: ["Treat Dispensing", "Interactive Play", "Remote Monitoring"],
        price: 899.99,
        quantity: 40
    },
    {
        name: "AquaExplorer Pro",
        productDetails: "Dive into the future with the AquaExplorer Pro, an underwater exploration robot. With waterproof design, HD cameras, and depth sensors, it captures the mysteries of the ocean depths.",
        specifications: ["Waterproof Design", "HD Cameras", "Depth Sensors"],
        price: 2799.99,
        quantity: 15
    },
    {
        name: "AgriTech Helper",
        productDetails: "The AgriTech Helper revolutionizes farming. With soil analysis, automated planting, and weather monitoring, it maximizes crop yield and minimizes effort. Ideal for modern, efficient agriculture.",
        specifications: ["Soil Analysis", "Automated Planting", "Weather Monitoring"],
        price: 1899.99,
        quantity: 30
    },
    {
        name: "VR Gaming Buddy",
        productDetails: "Step into the virtual world with the VR Gaming Buddy. With immersive VR experiences, haptic feedback, and customizable game options, it transforms your gaming sessions into epic adventures.",
        specifications: ["Immersive VR", "Haptic Feedback", "Customizable Game Options"],
        price: 2199.99,
        quantity: 18
    },
    {
        name: "HealthCare Companion",
        productDetails: "Your health, your companion. The HealthCare Companion monitors vital signs, provides medication reminders, and connects with healthcare professionals. A proactive approach to personal well-being.",
        specifications: ["Vital Sign Monitoring", "Medication Reminders", "Connectivity with Healthcare Professionals"],
        price: 2499.99,
        quantity: 12
    },
    {
        name: "EduBot Genius",
        productDetails: "Meet EduBot Genius, an educational companion for children. With interactive lessons, language learning, and personalized tutoring, it makes learning fun and engaging for young minds.",
        specifications: ["Interactive Lessons", "Language Learning", "Personalized Tutoring"],
        price: 1299.99,
        quantity: 35
    },
    {
        name: "GreenThumb Gardener",
        productDetails: "GreenThumb Gardener is your smart gardening partner. With plant recognition, automated watering, and gardening tips, it transforms your outdoor space into a flourishing botanical haven.",
        specifications: ["Plant Recognition", "Automated Watering", "Gardening Tips"],
        price: 1599.99,
        quantity: 22
    },
    {
        name: "ArtBot Express",
        productDetails: "Unleash your creativity with ArtBot Express. This robotic artist creates unique artworks using AI algorithms. With paintbrush precision and limitless imagination, it's a masterpiece maker.",
      specifications: ["AI Art Algorithms", "Paintbrush Precision", "Limitless Imagination"],
        price: 1699.99,
        quantity: 28
    },
    {
        name: "DeliveryDrone Swift",
        productDetails: "Swift and efficient, the DeliveryDrone Swift is your aerial courier. With GPS navigation, secure compartments, and fast deliveries, it brings your packages to your doorstep in record time.",
        specifications: ["GPS Navigation", "Secure Compartments", "Fast Deliveries"],
        price: 1299.99,
        quantity: 25
    },
    {
        name: "SleepGuard Companion",
        productDetails: "Enhance your sleep with the SleepGuard Companion. With sleep tracking, ambient soundscapes, and smart lighting, it creates the ideal sleep environment for a restful night.",
        specifications: ["Sleep Tracking", "Ambient Soundscapes", "Smart Lighting"],
        price: 1499.99,
        quantity: 20
    },
    {
        name: "FitnessPal Trainer",
        productDetails: "Achieve your fitness goals with FitnessPal Trainer. With personalized workouts, health monitoring, and motivational coaching, it's your dedicated fitness companion on the journey to wellness.",
      specifications: ["Personalized Workouts", "Health Monitoring", "Motivational Coaching"],
        price: 1999.99,
        quantity: 15
    },
    {
        name: "RoboChef Gourmet",
        productDetails: "Elevate your culinary experience with RoboChef Gourmet. With recipe suggestions, precise ingredient dispensing, and cooking assistance, it transforms your kitchen into a gourmet haven.",
        specifications: ["Recipe Suggestions", "Precise Ingredient Dispensing", "Cooking Assistance"],
        price: 2299.99,
        quantity: 18
    },
    {
        name: "LanguageBot Pro",
        productDetails: "Master new languages effortlessly with LanguageBot Pro. With speech recognition, interactive lessons, and cultural insights, it's your passport to a world of languages.",
      specifications: ["Speech Recognition", "Interactive Lessons", "Cultural Insights"],
        price: 1799.99,
        quantity: 22
    },
    {
        name: "HandymanBot Elite",
        productDetails: "Meet HandymanBot Elite, your versatile home improvement assistant. With tool recognition, DIY tutorials, and precision craftsmanship, it tackles household projects with ease.",
        specifications: ["Tool Recognition", "DIY Tutorials", "Precision Craftsmanship"],
        price: 2499.99,
        quantity: 15
    },
    {
        name: "ZenZone Meditator",
        productDetails: "Escape to tranquility with ZenZone Meditator. With guided meditation sessions, calming visuals, and ambient sounds, it creates a serene space for relaxation and mindfulness.",
        specifications: ["Guided Meditation Sessions", "Calming Visuals", "Ambient Sounds"],
        price: 1599.99,
        quantity: 30
    },
    {
        name: "FashionistaBot Styler",
        productDetails: "Revamp your style with FashionistaBot Styler. With fashion trends analysis, personalized outfit suggestions, and virtual fitting, its your digital stylist for a trendy wardrobe.",
      specifications: ["Fashion Trends Analysis", "Personalized Outfit Suggestions", "Virtual Fitting"],
        price: 1899.99,
        quantity: 25
    },
    {
        name: "HomeGuard Sentry",
        productDetails: "Ensure your home\'s safety with HomeGuard Sentry.With facial recognition, intruder alerts, and smart home integration, it keeps your loved ones and belongings secure.",
      specifications: ["Facial Recognition", "Intruder Alerts", "Smart Home Integration"],
        price: 2799.99,
        quantity: 12
    },
];

// Exporting as an object with named properties
const customers = {
  customerDetailsArray,
  paymentsDetailArray,
  productDetailsArray
};

module.exports = customers;