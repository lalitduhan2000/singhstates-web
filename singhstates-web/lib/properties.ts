export type Property = {
  id: string;
  intent: "buy" | "rent";
  title: string;
  city: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  image: string;
};

export const properties: Property[] = [
  { id: "p1", intent: "buy", title: "Modern 3BHK Apartment", city: "Gurugram", address: "Sector 65", price: 12500000, beds: 3, baths: 3, area: 1650, image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop" },
  { id: "p2", intent: "rent", title: "Cozy Studio near Metro", city: "Delhi", address: "Dwarka Sector 12", price: 22000, beds: 1, baths: 1, area: 520, image: "https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1200&auto=format&fit=crop" },
  { id: "p3", intent: "buy", title: "Villa with Garden", city: "Pune", address: "Baner", price: 28500000, beds: 4, baths: 4, area: 3200, image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop" },
  { id: "p4", intent: "rent", title: "2BHK Family Apartment", city: "Jaipur", address: "Vaishali Nagar", price: 18000, beds: 2, baths: 2, area: 980, image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop" },
  { id: "p5", intent: "buy", title: "Penthouse with City View", city: "Mumbai", address: "Lower Parel", price: 52000000, beds: 3, baths: 3, area: 2100, image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop" },
  { id: "p6", intent: "rent", title: "1BHK Near IT Park", city: "Bengaluru", address: "Whitefield", price: 26000, beds: 1, baths: 1, area: 650, image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1200&auto=format&fit=crop" }
];
