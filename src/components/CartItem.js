const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => delFromCart(id)}>Quitar un producto</button> <br />
      <button onClick={() => delFromCart(id, true)}>
        Quitar todos los productos
      </button>
      <br /> <br />
    </div>
  );
};

export default CartItem;
