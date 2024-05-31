import { StaticImageData } from "next/image";

export interface HNavLink {
    label: string;
    url: string;
  }
  
  export const HNavLinks: HNavLink[] = [
    { label: 'Art', url: '/' },
    { label: 'Models', url: '/' },
    { label: 'Collectibles', url: '/' },
    { label: 'Antiques', url: '/' },
    { label: 'Electronics', url: '/' },
    { label: 'Apparel', url: '/' },
    { label: 'Jewelry', url: '/' },
    // Add more links as needed
  ];


  export interface Product {
    imgSrc: string;
    label: string;
    price: string;
  }


  export const products: Product[] = [
    {
      imgSrc: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
      label: 'Try our Product 1 Lorem ipusm Lorem',
      price: 'Only at $10.00',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
      label: 'Try our Product 2 Lorem ipusm Lorem',
      price: 'Only at $20.00',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
      label: 'Try our Product 3 Lorem ipusm Lorem',
      price: 'Only at $30.00',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
      label: 'Try our Product 4 Lorem ipusm',
      price: 'Only at $30.00'
    }
  ];
  