import { create } from "zustand";
import { persist } from "zustand/middleware";
import product1 from "../assets/hero-section/micro-product.webp";
import coca from "../assets/products/coca.png";
import zpurple from "../assets/products/zpurple.png";
import zblack from "../assets/products/zblack.png";
import zgold from "../assets/products/zgold.png";
import zwine from "../assets/products/zwine.png";
import imgg from "../assets/products/MICCACAO.webp"
import zyellowblack from "../assets/products/zyellowblack.png";
const siteStore = (set, get) => ({
  cart: [],
  addToCart: (id) => {
    if (get().cart.find((item) => item.id === id)) {
      set({
        cart: get().cart.map((item) => {
          if (item.id == id) {
            console.log("item found", item);
            item.quantity = item.quantity + 1;
          }

          return item;
        }),
      });
    } else {
      set({
        cart: [
          ...get().cart,
          {
            id: id,
            quantity: 1,
          },
        ],
      });
    }
  },

  removeFromCart: (id) => {
    console.log("removing item");
    if (get().cart.find((item) => item.id === id)) {
      console.log("found");

      set({
        cart: get().cart.filter((item) => item.id !== id),
      });
    }
  },

  updateQuantity: (id, quantity) => {
    set({
      cart: get().cart.map((item) => {
        if (item.id === id) {
          item.quantity = quantity;
        }

        return item;
      }),
    });
  },
});

export const useSiteStore = create(
  persist(siteStore, {
    name: "site-store",
  })
);

// export const products = [
//   {
//     id: 1,
//     img: product1,
//     title: "CHAI VAINILA ",
//     detail: "Caja de 30 sobres con 0.33g (10g)",
//     btnText: "AÑADIR",
//     price: "1,250",
//     priceValue: 1250,
//   },

//   {
//     id: 2,
//     img: coca,
//     title: "CACAO DORADO (KETO)",
//     detail: "Caja de 30 sobres con 0.33g (10g) por sobre",
//     btnText: "AÑADIR",
//     price: "1,250",
//   },

//   {
//     id: 3,
//     img: zpurple,
//     title: "ROL DE CANELA",
//     detail:
//       "1.25g de Psilocibe Cubensis por sobre (1 sobre Macro = 4-6 horas con visuales)",
//     btnText: "AÑADIR",
//     price: "200",
//   },

//   {
//     id: 4,
//     img: zblack,
//     title: "CHOCOLATE BLANCO",
//     detail:
//       "1.25g de Psilocibe Cubensis por sobre (2 sobres Macro = 6-8 horas del mejor viaje de tu vida. ¡Prepárate!)",
//     btnText: "AÑADIR",
//     price: "200",
//   },

//   {
//     id: 5,
//     img: zwine,
//     title: "CARAMELO",
//     detail:
//       "1.25g de Psilocibe Cubensis por sobre (Vacía el polvo en un café o te tibio y tómalo de un trago)",
//     btnText: "AÑADIR",
//     price: "200",
//   },

//   {
//     id: 6,
//     img: zgold,
//     title: "PAY DE LIMÓN",
//     detail:
//       "1.25g de Psilocibe Cubensis por sobre (Texas Yellow Cap, Z-Strain y Storm Troopers en cada formulación)",
//     btnText: "AÑADIR",
//     price: "200",
//   },
//   {
//     id: 7,
//     img: zyellowblack,
//     title: "CACAO DORADO (KETO VEGANO) ",
//     detail:
//       "1.25g de Psilocibe Cubensis por sobre (Sin calorias. ¡Viaja sin afectar la dieta!)",
//     btnText: "AÑADIR",
//     price: "200",
//   },
//   {
//     id: 8,
//     img: zyellowblack,
//     title: "CACAO DORADO (KETO VEGANO)",
//     detail:
//       "1.25g de Psilocibe Cubensis por sobre (Sin calorias. ¡Viaja sin afectar la dieta!)",
//     btnText: "AÑADIR",
//     price: "200",
//   },
// ];

export const products = [
    {
      id: 1,
      img: product1,
      title: "CHAI VAINILA",
      detail: "Caja de 30 sobres con 0.33g (10g)",
      btnText: "AÑADIR",
      price: "1,250",
      priceValue: 1250,
    },

    {
      id: 2,
      img: imgg,
      title: "CACAO DORADO (KETO VEGANO)",
      detail: "Caja de 30 sobres con 0.33g (10g) por sobre",
      btnText: "AÑADIR",
      price: "1,250",
      priceValue: 1250,
    },

    {
      id: 3,
      img: zpurple,
      title: "ROL DE CANELA",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (1 sobre Macro = 4-6 horas con visuales)",
      btnText: "AÑADIR",
      price: "200",
      priceValue: 200,
    },

    {
      id: 4,
      img: zblack,
      title: "CHOCOLATE BLANCO",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (2 sobres Macro = 6-8 horas del mejor viaje de tu vida. ¡Prepárate!)",
      btnText: "AÑADIR",
      price: "200",
      priceValue: 200,
    },

    {
      id: 5,
      img: zwine,
      title: "CARAMELO ",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (Vacía el polvo en un café o te tibio y tómalo de un trago)",
      btnText: "AÑADIR",
      price: "200",
      priceValue: 200,
    },

    {
      id: 6,
      img: zgold,
      title: "PAY DE LIMÓN",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (Texas Yellow Cap, Z-Strain y Storm Troopers en cada formulación)",
      btnText: "AÑADIR",
      price: "200",
      priceValue: 200,
    },
    {
      id: 7,
      img: zyellowblack,
      title: "CACAO DORADO (KETO VEGANO)",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (Sin calorias. ¡Viaja sin afectar la dieta!)",
      btnText: "AÑADIR",
      price: "200",
      priceValue: 200,
    },
    {
      id: 8,
      img: zyellowblack,
      title: "CACAO DORADO (KETO VEGANO)",
      detail:
        "1.25g de Psilocibe Cubensis por sobre (Sin calorias. ¡Viaja sin afectar la dieta!)",
      btnText: "AÑADIR",
      price: "200",
      priceValue: 200,
    },
  ];