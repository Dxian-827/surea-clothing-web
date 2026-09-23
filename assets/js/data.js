/* SUREA — catalogue and editorial content.
   Single source of truth for the storefront. Prices in USD.
   When Stripe is wired up, the checkout function will mirror this list
   server-side so amounts are never taken from the browser. */
window.SUREA = (function () {
  var DOG_SIZES = ["XXS", "XS", "S", "M", "L", "XL"];
  var WALK_SIZES = ["S", "M", "L"];
  var ONE = ["One size"];

  var categories = [
    { id: "clothing", label: "Dog Clothing", sub: "Timeless style", image: "assets/img/cat-clothing.jpg" },
    { id: "walk", label: "Walk Set", sub: "Everyday elegance", image: "assets/img/cat-walk.jpg" },
    { id: "travel", label: "Travel Carrier", sub: "For life's journeys", image: "assets/img/cat-travel.jpg" },
    { id: "home", label: "Home & Beds", sub: "A cosy place to be", image: "assets/img/cat-home.jpg" },
    { id: "foryou", label: "For You", sub: "Match with your dog", image: "assets/img/cat-clothing.jpg" },
    { id: "bundles", label: "Bundles", sub: "The complete look", image: "assets/img/cat-walk.jpg" }
  ];

  var products = [
    /* ---------------------------------------------------------------- 1. Dog clothing */
    {
      id: "duchess-coat",
      name: "The Duchess Coat",
      material: "Tartan wool blend",
      category: "clothing",
      collection: "royal-walk",
      price: 89,
      sizes: DOG_SIZES,
      image: "assets/img/prod-duchess-coat.jpg",
      gallery: ["assets/img/prod-duchess-coat.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 124, rating: 5 },
      featured: true,
      badge: "Bestseller",
      description:
        "Our house tartan, cut short and clean so it sits well over the shoulders and leaves the legs free. Brass buttons, a storm flap at the neck, and a lining warm enough for a December walk but light enough to forget.",
      details: [
        "Wool-blend tartan woven in a British mill, dry clean only",
        "Antique brass buttons and a checked cotton lining",
        "Opens fully across the back — no legs to thread through",
        "Reinforced loop for a harness or collar lead"
      ]
    },
    {
      id: "lady-dress",
      name: "The Lady Dress",
      material: "Velvet & lace",
      category: "clothing",
      collection: "garden-party",
      price: 79,
      sizes: DOG_SIZES,
      image: "assets/img/prod-lady-dress.jpg",
      gallery: ["assets/img/prod-lady-dress.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 98, rating: 5 },
      featured: true,
      badge: "Bestseller",
      description:
        "Burgundy velvet with an ivory lace collar and a bow cut from the same cloth. The piece we are photographed in most, and the one customers tell us they wear to their own weddings.",
      details: [
        "Cotton velvet with a scalloped cotton-lace collar",
        "Hand-tied velvet bow, removable",
        "Hidden press-studs along the spine",
        "Fully lined in soft cotton"
      ]
    },
    {
      id: "heirloom-sweater",
      name: "The Heirloom Sweater",
      material: "Knit with embroidered crest",
      category: "clothing",
      collection: "royal-walk",
      price: 69,
      sizes: DOG_SIZES,
      image: "assets/img/prod-heirloom-sweater.jpg",
      gallery: ["assets/img/prod-heirloom-sweater.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 76, rating: 5 },
      featured: true,
      badge: "Bestseller",
      description:
        "A ribbed lambswool roll-neck in forest green, with the SUREA crest chained across the chest in gold thread. The easiest thing in the wardrobe to put on a dog.",
      details: [
        "Lambswool blend, machine wash cold, dry flat",
        "Embroidered crest in antique gold thread",
        "Contrast ivory rib at neck and cuff",
        "No fastenings — pulls on over the head"
      ]
    },
    {
      id: "classic-jacket",
      name: "The Classic Jacket",
      material: "Houndstooth tweed",
      category: "clothing",
      collection: "royal-walk",
      price: 79,
      sizes: DOG_SIZES,
      image: "assets/img/prod-classic-jacket.jpg",
      gallery: ["assets/img/prod-classic-jacket.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 54, rating: 5 },
      description:
        "Houndstooth tweed with a corduroy collar, cut like a shooting jacket and finished with the same details: flap pockets, horn buttons, a lined back.",
      details: [
        "Houndstooth tweed with a brown corduroy collar",
        "Two decorative flap pockets",
        "Adjustable at the waist",
        "Dry clean only"
      ]
    },
    {
      id: "garden-dress",
      name: "The Garden Dress",
      material: "Toile de Jouy print",
      category: "clothing",
      collection: "garden-party",
      price: 75,
      sizes: DOG_SIZES,
      image: "assets/img/prod-garden-dress.jpg",
      gallery: ["assets/img/prod-garden-dress.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 61, rating: 5 },
      description:
        "Toile de Jouy in faded rose on cream, gathered into a ruffled skirt and closed at the neck with an oxblood velvet bow. Made for long lunches in the garden.",
      details: [
        "Printed cotton toile, garment washed for softness",
        "Double ruffle at the hem",
        "Velvet bow at the collar, removable",
        "Machine wash cold, hang to dry"
      ]
    },
    {
      id: "gentleman-jacket",
      name: "The Gentleman Jacket",
      material: "Houndstooth tweed",
      category: "clothing",
      collection: "royal-walk",
      price: 85,
      sizes: DOG_SIZES,
      image: "assets/img/prod-gentleman-jacket.jpg",
      gallery: ["assets/img/prod-gentleman-jacket.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 33, rating: 5 },
      description:
        "The smarter half of the country wardrobe — a tailored tweed jacket with notch lapels and a gold chain button, cut for a wider chest.",
      details: [
        "Houndstooth tweed, fully lined",
        "Notch lapels with a gold anchor button",
        "Wider cut through the chest for hounds and terriers",
        "Dry clean only"
      ]
    },
    {
      id: "heritage-cape",
      name: "The Heritage Cape",
      material: "Tartan wool with velvet bow",
      category: "clothing",
      collection: "heritage-evening",
      price: 95,
      sizes: DOG_SIZES,
      image: "assets/img/prod-heritage-cape.jpg",
      gallery: ["assets/img/prod-heritage-cape.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 41, rating: 5 },
      description:
        "A short cape in the house tartan that falls over the shoulders like something left in a country hall. Fastens at the throat with an oxblood velvet bow.",
      details: [
        "Heavyweight tartan wool with a silk-touch lining",
        "Velvet bow and hidden hook at the neck",
        "Leaves the hind legs entirely free",
        "Our warmest piece for cold mornings"
      ]
    },
    {
      id: "velvet-dress",
      name: "The Velvet Dress",
      material: "Burgundy velvet",
      category: "clothing",
      collection: "heritage-evening",
      price: 99,
      sizes: DOG_SIZES,
      image: "assets/img/prod-velvet-dress.jpg",
      gallery: ["assets/img/prod-velvet-dress.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 27, rating: 5 },
      description:
        "Full-length burgundy velvet with an ivory lace frill and three gold buttons at the chest. The evening wear of the collection.",
      details: [
        "Cotton velvet, ivory lace frill",
        "Antique gold buttons, hand finished",
        "Concealed side zip",
        "Dry clean only"
      ]
    },
    {
      id: "ruffle-blouse",
      name: "The Ruffle Blouse",
      material: "Cotton lace",
      category: "clothing",
      collection: "garden-party",
      price: 59,
      sizes: DOG_SIZES,
      image: "assets/img/prod-ruffle-blouse.jpg",
      gallery: ["assets/img/prod-ruffle-blouse.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 38, rating: 4 },
      description:
        "A light cotton-lace blouse for spring — tiered ruffles down the front, small enough to wear under a coat when the weather turns.",
      details: [
        "Washed cotton lace, unlined",
        "Three tiers of ruffle",
        "Pearl press-studs at the spine",
        "Machine wash cold"
      ]
    },
    {
      id: "dinner-jacket",
      name: "The Dinner Jacket",
      material: "Velvet with gold trim",
      category: "clothing",
      collection: "heritage-evening",
      price: 109,
      sizes: DOG_SIZES,
      image: "assets/img/prod-dinner-jacket.jpg",
      gallery: ["assets/img/prod-dinner-jacket.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 19, rating: 5 },
      description:
        "Forest-green velvet with gold frogging across the chest and a quilted satin collar. Cut for the occasions that deserve a photograph.",
      details: [
        "Velvet with gold braid detailing",
        "Quilted satin lapel",
        "Fully lined, hidden fastenings",
        "Dry clean only"
      ]
    },
    {
      id: "festive-cape",
      name: "The Festive Cape",
      material: "Faux fur collar",
      category: "clothing",
      collection: "heritage-evening",
      price: 119,
      sizes: DOG_SIZES,
      image: "assets/img/prod-festive-cape.jpg",
      gallery: ["assets/img/prod-festive-cape.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 14, rating: 5 },
      description:
        "The winter piece: oxblood velvet, a full ivory faux-fur collar, and a gold crest at the back. Warm enough for a December shoot.",
      details: [
        "Velvet body with removable faux-fur collar",
        "Embroidered crest at the back panel",
        "Full-length lining in brushed cotton",
        "Spot clean; fur collar hand wash"
      ]
    },

    /* ---------------------------------------------------------------- 2. Walk set */
    {
      id: "collar",
      name: "Heritage Collar",
      material: "Tartan with signature charm",
      category: "walk",
      collection: "royal-walk",
      price: 39,
      sizes: WALK_SIZES,
      image: "assets/img/prod-collar.jpg",
      gallery: ["assets/img/prod-collar.jpg", "assets/img/cat-walk.jpg"],
      reviews: { count: 88, rating: 5 },
      featured: true,
      badge: "Bestseller",
      description:
        "The house tartan on a strong cotton webbing with brass hardware, and a small oval S charm that catches the light on every walk.",
      details: [
        "Woven tartan over cotton webbing",
        "Solid brass buckle and D-ring",
        "Engraved SUREA charm included",
        "Hand wash, air dry"
      ]
    },
    {
      id: "leash",
      name: "Heritage Leash",
      material: "Everyday & adjustable",
      category: "walk",
      collection: "royal-walk",
      price: 49,
      sizes: WALK_SIZES,
      image: "assets/img/prod-leash.jpg",
      gallery: ["assets/img/prod-leash.jpg", "assets/img/cat-walk.jpg"],
      reviews: { count: 88, rating: 5 },
      featured: true,
      badge: "Bestseller",
      description:
        "Matching lead, adjustable to three lengths so the same walk works on a pavement and in a field. Padded where it sits in the hand.",
      details: [
        "1.5m, three adjustment points",
        "Brass snap hook and hardware",
        "Padded tartan handle",
        "Pairs with the Heritage Collar"
      ]
    },
    {
      id: "harness",
      name: "Heritage Harness",
      material: "Comfort meets style",
      category: "walk",
      collection: "royal-walk",
      price: 59,
      sizes: WALK_SIZES,
      image: "assets/img/prod-harness-photo.jpg",
      gallery: ["assets/img/prod-harness-photo.jpg", "assets/img/cat-walk.jpg", "assets/img/prod-harness.jpg"],
      reviews: { count: 112, rating: 5 },
      featured: true,
      badge: "Bestseller",
      description:
        "A padded vest in the house tartan with a velvet bow at the chest and a brass ring on the back. Soft enough to leave on all day.",
      details: [
        "Padded chest and back panels",
        "Two points of attachment",
        "Removable velvet bow",
        "Adjustable at neck and girth"
      ]
    },
    {
      id: "bow-tie",
      name: "Velvet Bow Tie",
      material: "A little extra charm",
      category: "walk",
      collection: "heritage-evening",
      price: 25,
      sizes: ONE,
      image: "assets/img/prod-bow-tie.jpg",
      gallery: ["assets/img/prod-bow-tie.jpg", "assets/img/cat-walk.jpg"],
      reviews: { count: 46, rating: 5 },
      description:
        "A small oxblood velvet bow on an elasticated, adjustable band — thirty seconds to dress a dog for a photograph.",
      details: [
        "Cotton velvet, hand tied",
        "Elasticated band with a sliding adjuster",
        "Fits most necks from 25cm to 42cm",
        "Not a replacement for a collar"
      ]
    },
    {
      id: "bandana",
      name: "Heritage Bandana",
      material: "For sunny days",
      category: "walk",
      collection: "garden-party",
      price: 29,
      sizes: WALK_SIZES,
      image: "assets/img/prod-bandana.jpg",
      gallery: ["assets/img/prod-bandana.jpg", "assets/img/cat-walk.jpg"],
      reviews: { count: 52, rating: 5 },
      description:
        "The triangular neckerchief in the house tartan, finished with a gold crest and a rolled edge that survives being dragged through bracken.",
      details: [
        "Tartan cotton with a rolled hem",
        "Gold embroidered crest at the point",
        "Snaps at the back of the neck",
        "Machine wash cold"
      ]
    },
    {
      id: "poop-bag-holder",
      name: "Poop Bag Holder",
      material: "Small detail, big difference",
      category: "walk",
      collection: "royal-walk",
      price: 24,
      sizes: ONE,
      image: "assets/img/prod-poop-bag-holder.jpg",
      gallery: ["assets/img/prod-poop-bag-holder.jpg", "assets/img/cat-walk.jpg"],
      reviews: { count: 37, rating: 4 },
      description:
        "A round tartan case on a brass clip, holding a full roll of bags. The smallest thing in the collection and the one people ask about.",
      details: [
        "Tartan wool with a leather tab",
        "Brass lobster clip for a belt loop or bag",
        "Fits one standard bag roll",
        "Refill rolls available"
      ]
    },

    /* ---------------------------------------------------------------- 3. Travel */
    {
      id: "travel-carrier",
      name: "The Travel Carrier",
      material: "Tartan & leather trim",
      category: "travel",
      collection: "royal-walk",
      price: 189,
      sizes: ONE,
      image: "assets/img/prod-travel-carrier.jpg",
      gallery: ["assets/img/prod-travel-carrier.jpg", "assets/img/cat-travel.jpg"],
      reviews: { count: 102, rating: 5 },
      featured: true,
      badge: "Bestseller",
      description:
        "An under-seat carrier built like a weekend holdall: house tartan, vegetable-tanned leather handles, a fleece-lined base and a mesh panel that rolls open.",
      details: [
        "Fits most airline under-seat dimensions — check before you fly",
        "Vegetable-tanned leather handles and feet",
        "Removable, washable fleece liner",
        "Three-sided opening and a mesh ventilation panel"
      ]
    },
    {
      id: "car-seat",
      name: "Car Seat",
      material: "Tartan wool, safe and stylish",
      category: "travel",
      price: 129,
      sizes: WALK_SIZES,
      image: "assets/img/prod-car-seat.jpg",
      gallery: ["assets/img/prod-car-seat.jpg", "assets/img/cat-travel.jpg"],
      reviews: { count: 29, rating: 5 },
      description:
        "A booster seat for the passenger seat, in the house tartan with a removable cover and a tether that clips to the belt.",
      details: [
        "Removable, machine-washable cover",
        "Internal safety tether with belt clip",
        "Raised sides for a view out of the window",
        "Not a crash-tested restraint for vehicles over 20kg"
      ]
    },
    {
      id: "blanket",
      name: "Heritage Blanket",
      material: "Warmth wherever home is",
      category: "travel",
      collection: "royal-walk",
      price: 59,
      sizes: ONE,
      image: "assets/img/prod-blanket.jpg",
      gallery: ["assets/img/prod-blanket.jpg", "assets/img/cat-home.jpg"],
      reviews: { count: 64, rating: 5 },
      description:
        "A light wool throw in the house tartan with a fringed edge — small enough for a bag, warm enough for a stand on a cold sideline.",
      details: [
        "Wool-blend throw, 100 x 75cm",
        "Hand-knotted fringe",
        "Leather SUREA tag",
        "Dry clean, or wash cold and dry flat"
      ]
    },

    /* ---------------------------------------------------------------- 4. Home */
    {
      id: "dog-bed",
      name: "The Dog Bed",
      material: "Tartan wool blend",
      category: "home",
      price: 99,
      sizes: WALK_SIZES,
      image: "assets/img/prod-dog-bed.jpg",
      gallery: ["assets/img/prod-dog-bed.jpg", "assets/img/cat-home.jpg"],
      reviews: { count: 73, rating: 5 },
      description:
        "A rolled-arm bed upholstered in the house tartan, with a deep chaise cushion that keeps its shape. It belongs in a living room, not a corner.",
      details: [
        "Tartan wool-blend cover, fully removable",
        "High-resilience foam base and bolster",
        "Non-slip base",
        "Cover machine washes cold; foam spot clean"
      ]
    },
    {
      id: "cushion-mat",
      name: "Cushion Mat",
      material: "For home or travel",
      category: "home",
      price: 69,
      sizes: WALK_SIZES,
      image: "assets/img/prod-cushion-mat.jpg",
      gallery: ["assets/img/prod-cushion-mat.jpg", "assets/img/cat-home.jpg"],
      reviews: { count: 31, rating: 5 },
      description:
        "A low mat for the foot of the bed or the back seat, quilted in tartan with a frilled edge in cream.",
      details: [
        "Quilted tartan with a cotton frill",
        "Reversible — plain cream reverse",
        "Non-slip base",
        "Machine washable"
      ]
    },
    {
      id: "bowls",
      name: "The Bowls",
      material: "Simple pleasures",
      category: "home",
      price: 45,
      sizes: ONE,
      image: "assets/img/prod-bowls.jpg",
      gallery: ["assets/img/prod-bowls.jpg", "assets/img/cat-home.jpg"],
      reviews: { count: 44, rating: 5 },
      description:
        "Stoneware bowls, one cream and one forest green, each with the crown stamped in gold. Heavy enough not to slide across the floor.",
      details: [
        "Set of two: 350ml and 600ml",
        "Glazed stoneware, gold crown detail",
        "Dishwasher and microwave safe",
        "Weighted base"
      ]
    },
    {
      id: "throw-pillow",
      name: "The Cushion",
      material: "Because they're family too",
      category: "home",
      price: 55,
      sizes: ONE,
      image: "assets/img/prod-throw-pillow.jpg",
      gallery: ["assets/img/prod-throw-pillow.jpg", "assets/img/cat-home.jpg"],
      reviews: { count: 26, rating: 5 },
      description:
        "A tapestry cushion of a hunting dog among flowers, made for the sofa you would rather not let the dog on.",
      details: [
        "Woven tapestry face, brushed cotton reverse",
        "Feather-pad insert included",
        "Hidden zip",
        "Cover dry clean only"
      ]
    },

    /* ---------------------------------------------------------------- 5. For you */
    {
      id: "silk-scarf",
      name: "Silk Scarf",
      material: "Tartan or floral, for the human",
      category: "foryou",
      collection: "garden-party",
      price: 65,
      sizes: ONE,
      image: "assets/img/prod-silk-scarf.jpg",
      gallery: ["assets/img/prod-silk-scarf.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 58, rating: 5 },
      description:
        "The same house tartan, printed on silk twill and rolled by hand. Tied at the throat, on a bag handle, or around the neck of a dog.",
      details: [
        "100% silk twill, 65 x 65cm",
        "Hand-rolled hem",
        "Printed from the original tartan scan",
        "Dry clean"
      ]
    },
    {
      id: "hair-bow",
      name: "Hair Bow",
      material: "Match with your dog",
      category: "foryou",
      collection: "garden-party",
      price: 29,
      sizes: ONE,
      image: "assets/img/prod-hair-bow.jpg",
      gallery: ["assets/img/prod-hair-bow.jpg", "assets/img/cat-clothing.jpg"],
      reviews: { count: 49, rating: 5 },
      description:
        "The velvet bow from The Lady Dress, made small enough for a headband clip — so the photograph matches.",
      details: [
        "Cotton velvet on a metal clip",
        "Two per pack",
        "Matches the Lady Dress and Velvet Dress",
        "Keep away from direct heat"
      ]
    },

    /* ---------------------------------------------------------------- 6. Bundles */
    {
      id: "duchess-look",
      name: "The Duchess Look",
      material: "Coat, harness & lead — save 10%",
      category: "bundles",
      collection: "royal-walk",
      price: 177,
      compareAt: 197,
      sizes: DOG_SIZES,
      image: "assets/img/prod-duchess-look.jpg",
      gallery: ["assets/img/prod-duchess-look.jpg", "assets/img/cat-walk.jpg"],
      reviews: { count: 34, rating: 5 },
      badge: "Save 10%",
      bundle: ["duchess-coat", "harness", "leash"],
      description:
        "The three pieces we are most asked to photograph together — the Duchess Coat, the Heritage Harness and the Heritage Leash — in one box, at ten per cent off.",
      details: [
        "Includes The Duchess Coat, Heritage Harness and Heritage Leash",
        "One size across all three pieces",
        "Presented in a tartan gift box",
        "Save $20 against buying separately"
      ]
    }
  ];

  /* ------------------------------------------------------------------ collections */
  var collections = [
    {
      id: "royal-walk",
      name: "British Royal Walk",
      motto: "Classic. Confident. Everyday elegance.",
      copy:
        "The pieces that leave the house most often. Tartan, tweed and brass, cut for a pavement walk that turns into a longer one.",
      image: "assets/img/cat-clothing.jpg"
    },
    {
      id: "garden-party",
      name: "English Garden Party",
      motto: "Romantic. Playful. Full of character.",
      copy:
        "Toile de Jouy, washed cotton lace and ruffles in faded rose. Made for afternoons that last longer than they should.",
      image: "assets/img/cat-walk.jpg"
    },
    {
      id: "heritage-evening",
      name: "Heritage Evening",
      motto: "Refined. Special. Unforgettable.",
      copy:
        "Velvet, gold trim and faux fur. The occasion wear of the collection — for the photographs you keep on the shelf.",
      image: "assets/img/cat-home.jpg"
    }
  ];

  /* ------------------------------------------------------------------ journal */
  var journal = [
    {
      id: "city-walks",
      title: "City Walks",
      kicker: "The SUREA Journal",
      excerpt: "New horizons together — what to pack for a first weekend in London with a small dog.",
      image: "assets/img/journal-city.jpg",
      read: "4 min",
      body: [
        "A city walk is a different discipline to a country one. There are puddles, and pavement, and a shopkeeper who will absolutely want to photograph the dog. So the coat has to be warm but not bulky, and it has to come off in ten seconds when the afternoon turns mild.",
        "We take the Duchess Coat over the Heirloom Sweater for this — the wool-blend tartan shrugs off a drizzle, and the storm flap at the neck keeps the wind out at the top of a bridge.",
        "Then the unglamorous part: the Poop Bag Holder. It is the smallest thing in the collection and the one that gets the most compliments, because it is the only piece that solves a problem in front of other people."
      ]
    },
    {
      id: "weekend-getaways",
      title: "Weekend Getaways",
      kicker: "The SUREA Journal",
      excerpt: "More of what we love — one bag, one dog, two days.",
      image: "assets/img/journal-weekend.jpg",
      read: "5 min",
      body: [
        "A weekend is the real test of a carrier. It has to go under a seat, sit on a station platform for twenty minutes, and then look entirely normal in a hotel room.",
        "The Travel Carrier was drawn from a holdall rather than a pet product. Vegetable-tanned leather handles, a fleece liner that comes out and washes, and a mesh panel that rolls closed against weather but not against conversation.",
        "The blanket is the piece people leave behind. Take it. It is the size of a large towel and it makes a stone bench into somewhere acceptable."
      ]
    },
    {
      id: "garden-parties",
      title: "Garden Parties",
      kicker: "The SUREA Journal",
      excerpt: "Toile, lace and a bow that matches yours.",
      image: "assets/img/journal-garden.jpg",
      read: "3 min",
      body: [
        "The Garden Dress came out of a bolt of Toile de Jouy we found in a mill sample room — faded rose on cream, the kind of print that has been on English walls for two hundred years.",
        "It gathers into a double ruffle and closes with an oxblood velvet bow. Wear the Silk Scarf in the same palette and the photograph sorts itself out.",
        "One practical note: cotton toile breathes, velvet does not. If the afternoon is warm, the Garden Dress or the Ruffle Blouse; save the Lady Dress for the evening."
      ]
    },
    {
      id: "special-moments",
      title: "Special Moments",
      kicker: "The SUREA Journal",
      excerpt: "On dressing a dog for the occasions that deserve a photograph.",
      image: "assets/img/journal-special.jpg",
      read: "4 min",
      body: [
        "People write to us about weddings. A dog in the corner of a photograph at a ceremony in Oxfordshire, wearing The Velvet Dress because it was the only thing in the house the right colour.",
        "Heritage Evening exists for that. Burgundy velvet, ivory lace, three gold buttons at the chest, and a Festive Cape with a collar you can take off when the room gets warm.",
        "We would always suggest breaking the piece in twice before the day, and choosing the moment the dog is calm rather than the moment the photographer is ready."
      ]
    },
    {
      id: "happier-days",
      title: "Happier Days at Home",
      kicker: "The SUREA Journal",
      excerpt: "The little things mean everything — a bed that belongs in the room.",
      image: "assets/img/journal-home.jpg",
      read: "3 min",
      body: [
        "Most dog beds are designed to be hidden. Ours is designed to be looked at: a rolled-arm bed upholstered in the house tartan, with a deep chaise cushion and a cover that comes off and goes in the machine.",
        "The Cushion is the tapestry one, of a hunting dog among flowers, made for the sofa you would rather not let the dog on — and which the dog will be on within the week.",
        "Then the bowls. Stoneware, one cream and one forest green, a gold crown under the rim, heavy enough not to travel across a tiled floor."
      ]
    }
  ];

  var testimonials = [
    {
      text: "The most beautiful dog coat we've ever owned. Exceptional quality and so many compliments.",
      who: "Emily R.",
      rating: 5
    },
    {
      text: "SUREA makes everyday moments feel special. Timeless pieces that we'll treasure for years.",
      who: "James & Poppy",
      rating: 5
    },
    {
      text: "Beautifully made, thoughtfully designed, and perfect for our adventures together.",
      who: "Sophie M.",
      rating: 5
    }
  ];

  var values = [
    {
      icon: "crown",
      title: "British Heritage Fabrics",
      copy: "Classic tartans, rich textures and timeless materials."
    },
    {
      icon: "needle",
      title: "Thoughtful Details",
      copy: "Because the little things make a big difference."
    },
    {
      icon: "house",
      title: "For Dogs & Beautiful Homes",
      copy: "Designed to fit seamlessly into your world."
    },
    {
      icon: "tree",
      title: "Designed for Everyday Adventures",
      copy: "From city strolls to country escapes, a kinder world together."
    }
  ];

  /* ------------------------------------------------------------------ helpers */
  function byId(id) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id === id) return products[i];
    }
    return null;
  }

  function inCategory(cat) {
    if (!cat || cat === "all") return products.slice();
    return products.filter(function (p) { return p.category === cat; });
  }

  function inCollection(id) {
    return products.filter(function (p) { return p.collection === id; });
  }

  function featured(n) {
    var list = products.filter(function (p) { return p.featured; });
    return n ? list.slice(0, n) : list;
  }

  function related(product, n) {
    var pool = products.filter(function (p) {
      return p.id !== product.id && p.category === product.category;
    });
    if (pool.length < (n || 4)) {
      pool = pool.concat(products.filter(function (p) {
        return p.id !== product.id && pool.indexOf(p) === -1 && p.collection === product.collection;
      }));
    }
    return pool.slice(0, n || 4);
  }

  function search(term) {
    var q = (term || "").trim().toLowerCase();
    if (!q) return [];
    return products.filter(function (p) {
      return (p.name + " " + p.material + " " + p.category).toLowerCase().indexOf(q) !== -1;
    }).slice(0, 8);
  }

  function money(amount) {
    var n = Number(amount) || 0;
    return "$" + (n % 1 === 0 ? n.toFixed(0) : n.toFixed(2));
  }

  return {
    categories: categories,
    products: products,
    collections: collections,
    journal: journal,
    testimonials: testimonials,
    values: values,
    freeShipping: 100,
    byId: byId,
    inCategory: inCategory,
    inCollection: inCollection,
    featured: featured,
    related: related,
    search: search,
    money: money
  };
})();
