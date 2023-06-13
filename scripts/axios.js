export const instance = axios.create({
  baseURL: "https://tame-teal-coral-suit.cyclic.app/",
  headers: {
    "Content-Type": "application/json",
  },
});
