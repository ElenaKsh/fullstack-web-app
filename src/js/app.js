import productsTemplate from '../template/template.handlebars';
import {
  getAllProducts, addProduct, deleteProduct, editProduct
} from './API';

import { calculationTotalAmount, calculationPriceProduct } from './products-methods';

window.onload = function load() {
  async function refresh() {
    let productElements;
    try {
      productElements = await getAllProducts();
    } catch (error) {
      alert(error);
      return;
    }
    calculationPriceProduct(productElements);
    const allPrice = calculationTotalAmount(productElements);
    const productsHTML = productsTemplate({ productElements, allPrice });
    document.querySelector('body').innerHTML = productsHTML;
    document.querySelector('.form-add-product').onsubmit = async (e) => {
      e.preventDefault();
      const id = productElements.length === 0 ? 1
        : productElements[productElements.length - 1].id + 1;
      const product = {
        id,
        product_name: document.querySelector('.add-product__name').value,
        product_amount: document.querySelector('.add-product__amount').value,
        product_price: document.querySelector('.add-product__price').value
      };
      let status;
      try {
        status = await addProduct(product);
      } catch (error) {
        alert(error);
        return;
      }
      if (status) {
        alert('Продукт добавлен');
      } else {
        alert('Продукт не добавлен');
      }
      refresh();
    };
    document.querySelectorAll('.button-delete').forEach((element) => {
      element.addEventListener('click', async (event) => {
        const id = +event.target.id.replace('product-delete-', '');
        let status;
        try {
          status = await deleteProduct(id);
        } catch (error) {
          alert(error);
          return;
        }
        if (status) {
          alert('Продукт удалён');
        } else {
          alert('Продукт не удалён');
        }
        refresh();
      });
    });
    document.querySelectorAll('.button-edit').forEach((element) => {
      element.addEventListener('click', (event) => {
        const id = +event.target.id.replace('product-edit-', '');
        const name = event.target.parentElement.parentElement.querySelector(
          '.table-products__element--name'
        ).innerHTML;
        const amount = event.target.parentElement.parentElement.querySelector(
          '.table-products__element--count'
        ).value;
        const price = event.target.parentElement.parentElement.querySelector(
          '.table-products__element--priceForOne'
        ).value;
        document.querySelector('.edit-product__name').value = name;
        document.querySelector('.edit-product__amount').value = amount;
        document.querySelector('.edit-product__id').value = id;
        document.querySelector('.edit-product__price').value = price;
        document.querySelector('.edit-product').style.display = 'block';
      });
    });
    document.querySelector('.form-edit-product').onsubmit = async (e) => {
      e.preventDefault();
      const id = Number(document.querySelector('.edit-product__id').value);
      const name = document.querySelector('.edit-product__name').value;
      const amount = document.querySelector('.edit-product__amount').value;
      const price = document.querySelector('.edit-product__price').value;
      const product = {
        id,
        product_name: name,
        product_amount: amount,
        product_price: price
      };
      let status;
      try {
        status = await editProduct(id, product);
      } catch (error) {
        alert(error);
        return;
      }
      if (status) {
        alert('Продукт изменён');
      } else {
        alert('Продукт не изменён');
      }
      refresh();
    };
  }
  refresh();
};
