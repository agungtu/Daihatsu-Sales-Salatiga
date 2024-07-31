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
  {
    name: "Shoping Tool",
    path: "#ShopingTools",
    child: [
      {
        name: "Konsultasi Pembelian",
        path: "https://api.whatsapp.com/send?phone=6285642689355 target='_blank'",
      },
      {
        name: "Booking Service",
        path: "https://api.whatsapp.com/send?phone=6285642689355 target='_blank'",
      },
      {
        name: "Simulasi Kredit",
        path: "https://api.whatsapp.com/send?phone=6285642689355 target='_blank'",
      },
      {
        name: "Test Drive",
        path: "https://api.whatsapp.com/send?phone=6285642689355 target='_blank'",
      },
      {
        name: "Tukar Tambah",
        path: "https://api.whatsapp.com/send?phone=6285642689355 target='_blank'",
      },
      {
        name: "Spare Part",
        path: "https://api.whatsapp.com/send?phone=6285642689355 target='_blank'",
      },
    ],
  },
  {
    name: "Pricelist",
    path: "/pricelist",
  },
  {
    name: "Promo",
    path: "/promo",
  },
  {
    name: "News",
    path: "/berita",
  },
  //   {
  //     name: "services",
  //     path: "/services",
  //   },
  //   {
  //     name: "contact",
  //     path: "/contact",
  //   },
];
