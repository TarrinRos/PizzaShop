class AddProducts < ActiveRecord::Migration[5.1]
  def change
    Product.create title: 'Havaiian',
                   description: 'This is hawaiian pizza',
                   price: 350,
                   size: 30,
                   is_spicy: false,
                   is_veg: false,
                   is_best_offer: false,
                   path_to_image: '/images/hawaiian.jpg'

    Product.create title: 'Pepperoni',
                   description: 'Nice pizza',
                   price: 400,
                   size: 50,
                   is_spicy: false,
                   is_veg: false,
                   is_best_offer: false,
                   path_to_image: '/images/pepperoni.jpg'

    Product.create title: 'Vegetarian',
                   description: 'This is vegetarian pizza',
                   price: 400,
                   size: 30,
                   is_spicy: false,
                   is_veg: true,
                   is_best_offer: false,
                   path_to_image: '/images/veg.jpg'
  end
end
