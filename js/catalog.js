
  var img_string = './images/products/SJR';
const categories =   ["Sets", "Necklaces","Other Jewellery"];


const catalog = {
    "0001": {
        cat: "Sets",
        itemName: "Set",
        itemID: "0001",
        itemDesc: "This imitation gold set contains a choker, haaram, vaddanam, a decorative headpiece (tikka and set of 9 jadabillalu), and a pair of both earrings and bajuband with red, pink, and green imitation jewels and pearl accents.",
        price: 1500,
        sd: 4500,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0002": {
        cat: "Sets",
        itemName: "Set",
        itemID: "0002",
        itemDesc: "This imitation silver set contains a choker, haaram, a decorative headpiece (tikka), and a pair of earrings with white, red, and green imitation jewels and pearl accents.",
        price: 1000,
        sd: 3500,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0003": {
        cat: "Sets",
        itemName: "Set",
        itemID: "0003",
        itemDesc: "This imitation gold set contains a choker, haaram and mini haaram, a decorative headpiece (tikka), and a pair of earrings with red, pink, and green imitation jewels and pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0004": {
        cat: "Sets",
        itemName: "Set",
        itemID: "0004",
        itemDesc: "This imitation gold set contains a haaram, mini haaram, a decorative headpiece (tikka), and a pair of earrings with white, pink, and green imitation jewels and pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0005": {
        cat: "Sets",
        itemName: "Set",
        itemID: "0005",
        itemDesc: "This imitation gold set contains a haaram, mini haaram, and a pair of earrings with white, pink, red and green imitation jewels and small coin-shaped gold accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0006": {
        cat: "Sets",
        itemName: "Set",
        itemID: "0006",
        itemDesc: "This imitation set contains a haaram, mini haaram, and a pair of earrings with white, red, and green imitation jewels and both pearl and small coin-shaped gold accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1001": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "1001",
        itemDesc: "This imitation gold necklace set includes a mini haaram and a pair of earrings with white, green, and red imitation jewels with pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1002": {
        cat: "Necklaces",
        itemName: "Haaram",
        itemID: "1002",
        itemDesc: "This imitation gold necklace set includes a haaram and a pair of earrings with primarily white and red imitation jewels with green and small pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1003": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "1003",
        itemDesc: "This imitation gold necklace set includes a mini haaram and a pair of earrings with primarily white and red imitation jewels with pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1004": {
        cat: "Necklaces",
        itemName: "Haaram",
        itemID: "1004",
        itemDesc: "This more modest imitation gold necklace set includes an asymetically designed haaram and a pair of earrings with primarily white and pearl imitation jewels.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1005": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "1005",
        itemDesc: "This imitation gold necklace set includes a mini haaram and a pair of earrings with primarily white, green, and red imitation jewels with small pearl accents.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1006": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "1006",
        itemDesc: "This more modest imitation gold necklace set includes a pendant-styled mini haaram and a pair of bell earrings with white, green, and red imitation jewels.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1007": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "1007",
        itemDesc: "This imitation gold necklace set includes a mini haaram with red imitation jewels and white flowers, with a pair of bell earrings.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1008": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "1008",
        itemDesc: "This imitation gold necklace set includes a mini haaram with red imitation jewels and pearl accents and a pair of matching bell earrings.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1009": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "1009",
        itemDesc: "This imitation gold necklace set includes a mini haaram and a pair of earrings with primarily white and green imitation jewels.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1010": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "1010",
        itemDesc: "This imitation gold necklace set includes a peacock-inspired mini haaram and a pair of earrings with primarily white and green imitation jewels with pearl accents.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1011": {
        cat: "Necklaces",
        itemName: "Choker",
        itemID: "1011",
        itemDesc: "This imitation gold necklace set includes a choker and a pair of matching earrings with primarily pink, white, and green imitation jewels with pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1012": {
        cat: "Necklaces",
        itemName: "Choker",
        itemID: "1012",
        itemDesc: "This imitation gold necklace set includes a choker with a green centerpiece, and a pair of matching earrings with primarily white, green, and red imitation jewels with pearl accents.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1013": {
        cat: "Necklaces",
        itemName: "Choker",
        itemID: "1013",
        itemDesc: "This imitation gold necklace set includes an imitation gold choker with a red centerpiece and pearl accents, with a pair of matching earrings.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "1014": {
        cat: "Necklaces",
        itemName: "Choker",
        itemID: "1014",
        itemDesc: "This imitation gold necklace set includes an imitation gold choker with a gold centerpiece and pink and pearl accents, with a pair of matching bell earrings.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "2001": {
        cat: "Other Jewellery",
        itemName: "Vaddanam",
        itemID: "2001",
        itemDesc: "This imitation gold vaddanam includes reversible designs and imitation gold pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "2002": {
        cat: "Other Jewellery",
        itemName: "Vaddanam",
        itemID: "2002",
        itemDesc: "This imitation gold vaddanam includes white, red, and green imitation jewels with pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "2003": {
        cat: "Other Jewellery",
        itemName: "Vaddanam",
        itemID: "2003",
        itemDesc: "This imitation gold vaddanam is in a chain stlye with red and green imitation jewels accents.",
        price: 200,
        sd: 500,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "2004": {
        cat: "Other Jewellery",
        itemName: "Aravanki",
        itemID: "2004",
        itemDesc: "This imitation gold aravanki includes white, pink, and green imitation jewels with pearl accents. There are two available and the price listed is for the rental of one aravanki.",
        price: 200,
        sd: 500,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "2005": {
        cat: "Other Jewellery",
        itemName: "Bajuband",
        itemID: "2005",
        itemDesc: "This imitation gold bajuband includes white, green, and red imitation jewels with pearl accents. This is rented as a set.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "2006": {
        cat: "Other Jewellery",
        itemName: "Jada",
        itemID: "2006",
        itemDesc: "This is an imitation gold piece with red and green imitation jewels.",
        price: 200,
        sd: 500,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "2007": {
        cat: "Other Jewellery",
        itemName: "Jadagantalu",
        itemID: "2007",
        itemDesc: "This is an imitation gold piece hair extension piece with red and green imitation jewels.",
        price: 100,
        sd: 200,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
      "2008": {
        cat: "Other Jewellery",
        itemName: "Jadagantalu",
        itemID: "2008",
        itemDesc: "This is an imitation gold piece hair extension piece with white imitation jewels.",
        price: 100,
        sd: 200,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
      "2009": {
        cat: "Other Jewellery",
        itemName: "Jadagantalu",
        itemID: "2009",
        itemDesc: "This is an imitation gold piece hair extension piece with embossed features.",
        price: 100,
        sd: 200,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "2010": {
        cat: "Other Jewellery",
        itemName: "Tikka",
        itemID: "2010",
        itemDesc: "This is a decorative headpiece (tikka) in a drop shape with red and green imitation jewels.",
        price: 100,
        sd: 200,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
      "2011": {
        cat: "Other Jewellery",
        itemName: "Tikka",
        itemID: "2011",
        itemDesc: "This is a decorative headpiece (tikka) with white, green, and red imitation jewels and pearl accents.",
        price: 100,
        sd: 200,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
      "2012": {
        cat: "Other Jewellery",
        itemName: "Tikka",
        itemID: "2012",
        itemDesc: "This is a decorative headpiece (tikka) with white and red imitation jewels.",
        price: 100,
        sd: 200,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    }
}
