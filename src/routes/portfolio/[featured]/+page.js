import {
    items
} from '.././items.js';


export async function load({ params }) {
    let featuredItem;
    const featuredUrl = params.featured; // access [featured] param
    featuredItem = items.find(item => item.slug === featuredUrl); // find which item matches this item's slug
    return featuredItem; // return that item data
  }