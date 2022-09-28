// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Café Molido Starbucks Pike Place X250g",
      price: 1175,
      image: "http://localhost:3000/img/3.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 1,
      title: "Café en granos Mamuschka 250grs",
      price: 1120,
      image: "http://localhost:3000/img/2.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 2,
      title: "Café Premiun Molido COLOMBIA",
      price: 2100,
      image: "http://localhost:3000/img/4.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 3,
      title: "Café Colombia Cumbia – Tostador Cuervo",
      price: 3113,
      image: "http://localhost:3000/img/5.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    {
      id: 4,
      title: "Café Santa Ana El Salvador – Tostador Cuervo",
      price: 2524,
      image: "http://localhost:3000/img/1.webp",
      description:
        "Give your desk nothing but the best and upgrade your coaster game with these all new environmentally-friendly bamboo Invertocat 2.0 Coasters. Includes four laser-etched coasters with coaster stand.",
    },
    {
      id: 5,
      title: "Café Martinez Molido Sin Azúcar Suave 250Grs",
      price: 1377,
      image: "http://localhost:3000/img/6.webp",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
    },
    // {
    //   id: 6,
    //   title: "",
    //   price: 10,
    //   image: "http://localhost:3000/img/",
    //   description:
    //     "We’re going on an adventure! Let your imagination wander with the new Adventure  Sticker Pack. With several never before printed Octocats and some old friends, this pack is here to celebrate the journey as much as the end.",
    // },
    // {
    //   id: 7,
    //   title: "",
    //   price: 10,
    //   image: "http://localhost:3000/img/",
    //   description:
    //     "While there’s nothing like an original black GitHub hoodie, these new pullover hoodies are an instant classic. Featuring tone-on-tone embroidered Invertocats on the chest and wrist, these understated hoodies will have you looking so fresh and so clean (and so warm!).",
    // },
  ]);
}
