export const routes = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "All Cars",
    path: "#vehicles",
    child: [
      {
        name: "All New Xenia",
        path: "/vehicles/all-new-xenia",
      },
      {
        name: "Rocky",
        path: "/vehicles/rocky",
      },
      {
        name: "All New Terios",
        path: "/vehicles/all-new-terios",
      },
      {
        name: "New Ayla",
        path: "/vehicles/new-ayla",
      },
      {
        name: "New Sigra",
        path: "/vehicles/new-sigra",
      },
      {
        name: "New Sirion",
        path: "/vehicles/new-sirion",
      },
      {
        name: "Luxio",
        path: "/vehicles/luxio",
      },
      {
        name: "Granmax Minibus",
        path: "/vehicles/granmax-minibus",
      },
      {
        name: "Granmax Pickup",
        path: "/vehicles/granmax-pickup",
      },
    ],
  },
  //   {
  //     name: "about",
  //     path: "/about",
  //   },
  //   {
  //     name: "services",
  //     path: "/services",
  //   },
  //   {
  //     name: "contact",
  //     path: "/contact",
  //   },
];
