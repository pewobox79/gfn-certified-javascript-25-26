'use strict';
const $ =(qs)=> document.querySelector(qs)

{
    const PRODUCTS = [
        { name: '3Doodler 3D Printing Pen', price: 29.99 },
        { name: 'Powerstation 5- E. Maximus Chargus', price: 44.95 },
        { name: '8-Bit Legendary Hero Heat-Change Mug', price: 6.99 },
    ];
    const init = () => {
        addExistingProducts();
        $('#add_product').addEventListener('click', addProductFromInput);
    };

    const addExistingProducts = () => PRODUCTS.forEach(addProduct);

    const addProductFromInput = () => {
        addProduct({
            name: $('#new_product .name').value,
            price: $('#new_product .price').value,
        });
    };

    const addProduct = (product) => {
        $('#products > tbody').appendChild(
            tr([td(product.name), td(product.price), tdWithActionButtons()])
        );
    };

    const tdWithActionButtons = () => {
        const td = document.createElement('td');
        td.appendChild(removeButton());
        td.appendChild(moveUpButton());
        td.appendChild(moveDownButton());
        return td;
    };

    const removeButton = () => buildButton('x', 'remove_product', removeProduct);
    const moveUpButton = () => buildButton('↑', 'move_product_up', moveProductUp);
    const moveDownButton = () =>
        buildButton('↓', 'move_product_down', moveProductDown);

    const removeProduct = (e) => productRowForAction(e.currentTarget).remove();
    const moveProductUp = (e) => moveProduct(e, up);
    const moveProductDown = (e) => moveProduct(e, down);

    const moveProduct = (e, direction) => {
        const currentProductRow = productRowForAction(e.currentTarget);
        const targetRow = direction(currentProductRow);
        if (targetRow) {
            currentProductRow.parentNode.insertBefore(currentProductRow, targetRow);
        }
    };

    const down = (el) => el.nextElementSibling?.nextElementSibling;
    const up = (el) => el.previousElementSibling;

    const productRowForAction = (button) => button.closest('tr');

    const buildButton = (symbol, cssClass, action) => {
        const button = document.createElement('button');
        button.textContent = symbol;
        button.classList.add(cssClass);
        button.addEventListener('click', action);
        return button;
    };

    const td = (text) => {
        const tdNode = document.createElement('td');
        tdNode.textContent = text;
        return tdNode;
    };

    const tr = (tds) => {
        const trNode = document.createElement('tr');
        tds.forEach((td) => trNode.appendChild(td));
        return trNode;
    };

    init();
}
