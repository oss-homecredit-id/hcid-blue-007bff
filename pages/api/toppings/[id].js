export default (req, res) => {
  let response;
  if (req.query.id === "1") {
    response = {
      title: "Home Credit Indonesia Toppings",
      description: "This is a sample server for a pizza toppings.",
      size: 5,
      limit: 5,
      page: 1,
      items: {
        toppings: [
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Tomato",
            description: "A Tomato",
            price: 21999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Mozarella",
            description: "A Mozarella",
            price: 19299
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Bacon",
            description: "A Bacon",
            price: 31999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Pineapple",
            description: "A Pineapple",
            price: 15999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Cheese",
            description: "A Cheese",
            price: 16299
          }
        ]
      },
      version: "1.0.0"
    };
  } else if (req.query.id === "2") {
    response = {
      title: "Home Credit Indonesia Toppings",
      description: "This is a sample server for a pizza toppings.",
      size: 5,
      limit: 5,
      page: 2,
      items: {
        toppings: [
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Pepperoni",
            description: "A Pepperoni",
            price: 17899
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Sausage",
            description: "A Sausage",
            price: 15999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Mushroom",
            description: "A Mushroom",
            price: 12999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Corned Beef",
            description: "A Corned Beef",
            price: 13999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Corn",
            description: "A Corn",
            price: 8999
          }
        ]
      },
      version: "1.0.0"
    };
  } else if (req.query.id === "3") {
    response = {
      title: "Home Credit Indonesia Toppings",
      description: "This is a sample server for a pizza toppings.",
      size: 5,
      limit: 5,
      page: 3,
      items: {
        toppings: [
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Tuna",
            description: "A Tuna",
            price: 26999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Onion",
            description: "An onion",
            price: 10999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Black olive",
            description: "A black olive",
            price: 25999
          },

          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Green pepper",
            description: "A green pepper",
            price: 14999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Spinach",
            description: "A spinach",
            price: 11599
          }
        ]
      },
      version: "1.0.0"
    };
  } else if (req.query.id === "4") {
    response = {
      title: "Home Credit Indonesia Toppings",
      description: "This is a sample server for a pizza toppings.",
      size: 5,
      limit: 5,
      page: 4,
      items: {
        toppings: [
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Indomie",
            description: "Limited edition Indomie topping",
            price: 59999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Nugget",
            description: "A Nugget",
            price: 24999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Lobster",
            description: "A Lobster",
            price: 9999999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Durian",
            description: "a piece of chewy Durian",
            price: 899999
          },
          {
            thumbnails: "https://via.placeholder.com/240/0000FF/0000FF",
            name: "Meses",
            description: "Hefty ammount of chocs",
            price: 20999
          }
        ]
      },
      version: "1.0.0"
    };
  } else if (req.query.id === "5") {
    response = {
      title: "Home Credit Indonesia Toppings",
      description: "This is a sample server for a pizza toppings.",
      size: 5,
      limit: 5,
      page: 5,
      items: {
        toppings: [
          {
            thumbnails: "https://via.placeholder.com/240/5DBB63/5DBB63",
            name: "Scallion",
            description: "A Scallion",
            price: 12300
          },
          {
            thumbnails: "https://via.placeholder.com/240/03C04A/03C04A",
            name: "Avocado",
            description: "A Avocado",
            price: 15300
          },
          {
            thumbnails: "https://via.placeholder.com/240/028A0F/028A0F",
            name: "Broccoli",
            description: "A Broccoli",
            price: 16300
          },
          {
            thumbnails: "https://via.placeholder.com/240/996975/996975",
            name: "Shallots",
            description: "A Shallots",
            price: 16300
          },
          {
            thumbnails: "https://via.placeholder.com/240/3CB043/3CB043",
            name: "Watercress",
            description: "A Watercress",
            price: 16300
          }
        ]
      },
      version: "1.0.0"
    };
  } else {
    response = {
      title: "Home Credit Indonesia Toppings",
      description: "This is a sample server for a pizza toppings.",
      error: true,
      errorMessage: "out of bounds",
      version: "1.0.0"
    };
  }

  res.status(200).json(response);
};
