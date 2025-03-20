
export function ProductCard(props, background = 'slategrey', ...restProps) {
  const produ = props.product;//product;
  function getProductTitle() {
    return produ.title;//props.product.title;
  }


  return (
    <article style={{ width: '100%', border: '3px solid white', borderRadius: '9px', padding: '16px', textAlign: 'center' }}>
      <h2>{produ.title}</h2>
      <img src={produ.imageSrc}
        alt={getProductTitle()}
        {...restProps}
        // width={width}
        // height={height}
      />

      <p>Specifications</p>
      <ul style={{ listStle: "none", padding: 0 }}>
        <li>{props.product.specification[0]}</li>
        <li>{props.product.specification[1]}</li>
        <li>{props.product.specification[2]}</li>
      </ul>
      <button>Buy (From ${props.product.price})</button>
    </article>
  );
}

