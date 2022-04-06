
  var img_string = './images/products/SJR';

const catalog = {
    "0001": {
        cat: "Sets",
        itemName: "Set",
        itemID: "0001",
        itemDesc: "This imitation gold set contains a choker, haaram, vaddanam, a decorative headpiece (tikka), and a pair of both earrings and bajuband with red, pink, and green imitation jewels and pearl accents.",
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
    "0007": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "0007",
        itemDesc: "This imitation gold necklace set includes a mini haaram and a pair of earrings with white, green, and red imitation jewels with pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0008": {
        cat: "Necklaces",
        itemName: "Haaram",
        itemID: "0008",
        itemDesc: "This imitation gold necklace set includes a haaram and a pair of earrings with primarily white and red imitation jewels with green and small pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0009": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "0009",
        itemDesc: "This imitation gold necklace set includes a mini haaram and a pair of earrings with primarily white and red imitation jewels with pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0010": {
        cat: "Necklaces",
        itemName: "Haaram",
        itemID: "0010",
        itemDesc: "This more modest imitation gold necklace set includes an asymetically designed haaram and a pair of earrings with primarily white and pearl imitation jewels with red, green, and pearl accents.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0011": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "0011",
        itemDesc: "This imitation gold necklace set includes a mini haaram and a pair of earrings with primarily white, green, and red imitation jewels with small pearl accents.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0012": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "0012",
        itemDesc: "This more modest imitation gold necklace set includes an pendant-styled mini haaram and a pair of bell earrings with white, green, red, and pearl imitation jewels.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0013": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "0013",
        itemDesc: "This imitation gold necklace set includes a mini haaram with red imitation jewels and white flowers, with a pair of bell earrings.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0014": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "0014",
        itemDesc: "This imitation silver necklace set includes a mini haaram with white and green imitation jewels and a pair of matching earrings.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0015": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "0015",
        itemDesc: "This imitation gold necklace set includes a mini haaram and a pair of earrings with primarily white and green imitation jewels with pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0016": {
        cat: "Necklaces",
        itemName: "Mini Haaram",
        itemID: "0016",
        itemDesc: "This imitation gold necklace set includes a peacock-inspired mini haaram and a pair of earrings with primarily white and green imitation jewels with pearl accents.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0017": {
        cat: "Necklaces",
        itemName: "Choker",
        itemID: "0017",
        itemDesc: "This imitation gold necklace set includes a choker and a pair of matching earrings with primarily pink, white, and green imitation jewels with pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0018": {
        cat: "Necklaces",
        itemName: "Choker",
        itemID: "0018",
        itemDesc: "This imitation gold necklace set includes a choker with a green centerpiece, and a pair of matching earrings with primarily white, green, and red imitation jewels with pearl accents.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0019": {
        cat: "Necklaces",
        itemName: "Choker",
        itemID: "0019",
        itemDesc: "This imitation gold necklace set includes an imitation gold choker with a red centerpiece and pearl accents, with a pair of matching earrings.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0020": {
        cat: "Necklaces",
        itemName: "Choker",
        itemID: "0020",
        itemDesc: "This imitation gold necklace set includes an imitation gold choker with a gold centerpiece and pink and pearl accents, with a pair of matching bell earrings.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0021": {
        cat: "Other Jewellery",
        itemName: "Vaddanam",
        itemID: "0021",
        itemDesc: "This imitation gold vaddanam includes reversible designs and imitation gold pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0022": {
        cat: "Other Jewellery",
        itemName: "Vaddanam",
        itemID: "0022",
        itemDesc: "This imitation gold vaddanam includes white, red, and green imitation jewels with pearl accents.",
        price: 500,
        sd: 2000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0023": {
        cat: "Other Jewellery",
        itemName: "Vaddanam",
        itemID: "0023",
        itemDesc: "This is a vaddanam.",
        price: 200,
        sd: 500,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0024": {
        cat: "Other Jewellery",
        itemName: "Aravanki",
        itemID: "0024",
        itemDesc: "This imitation gold aravanki includes white, pink, and green imitation jewels with pearl accents.",
        price: 200,
        sd: 500,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0025": {
        cat: "Other Jewellery",
        itemName: "Bajuband",
        itemID: "0025",
        itemDesc: "This imitation gold bajuband includes white, green, and red imitation jewels with pearl accents.",
        price: 250,
        sd: 1000,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0026": {
        cat: "Other Jewellery",
        itemName: "Jada",
        itemID: "0026",
        itemDesc: "This is a jada.",
        price: 200,
        sd: 500,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0027": {
        cat: "Other Jewellery",
        itemName: "Jadagantalu",
        itemID: "0027",
        itemDesc: "This is a jadagantalu.",
        price: 100,
        sd: 200,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    },
    "0028": {
        cat: "Other Jewellery",
        itemName: "Tikka",
        itemID: "0028",
        itemDesc: "This is a decorative headpiece (tikka).",
        price: 100,
        sd: 200,
        get image(){
          return [img_string + this.itemID + '_1.jpg' , img_string + this.itemID + '_2.jpg',img_string + this.itemID + '_3.jpg']
        }
    }
}
