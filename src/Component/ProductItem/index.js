import React, { useEffect, useState } from "react";

function ProductItem({ item }) {
  const { id, name, type, img } = item;
  const [imageUrl, setImageUrl] = useState("");
  async function getImageUrl() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/${img}`);
    const cats = await response.json();
    setImageUrl(cats.url);
    return cats;
  }
  useEffect(() => {
    getImageUrl();
  }, [img]);
  return (
    <>
      <div className="col-xs-6 col-sm-4" key={id}>
        <div className="cat">
          <div className="fall-item fall-effect">
            <img src={imageUrl} alt="cats" />
            <div className="mask">
              <p>{type}</p>
            </div>
          </div>
          <h4 className="cat-name">{name}</h4>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
